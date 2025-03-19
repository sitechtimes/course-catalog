<script lang="ts">
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";

export default {
  data() {
    return {
      yearPicked: null as string | null,
      isYearPicked: false,
      showCourseModal: false,
      schedule: [
        {},
        {},
        {},
        {},
        {},
        {},
        { name: "Lunch", subject: "LUNCH" },
        {},
        {},
      ] as (course | { name: string; subject: string })[],
      requirements: {},
      errorMessage: null as string | null,
      courses: useCourseStore().courses,
    };
  },
  methods: {
    updateYear(year: string) {
      this.yearPicked = year;
      if (year == "Freshman") {
        ["Russian", "AP World History", "English", "Chemistry"].forEach((x) => {
          Object.assign(
            this.schedule.find((period) => period.name == undefined),
            this.courses.find((course) => course.name == x)
          );
        });
      } else if (year == "Sophomore") {
        ["English", "AP World History"].forEach((x) => {
          Object.assign(
            this.schedule.find((period) => period.name == undefined),
            this.courses.find((course) => course.name == x)
          );

          this.requirements = {
            "7 Academic Periods": false,
            English: true,
            "AP Global": true,
            Math: false,
            Physics: false,
            Russian: false,
            CAD: false,
            "Physical Education": false,
            Lunch: true,
          };
        });
      } else if (year == "Junior") {
        this.requirements = {
          "7 Academic Periods": false,
          English: false,
          "AP US History": false,
          Science: false,
          Math: false,
          Russian: false,
          "Physical Education": false,
          Lunch: true,
        };
      } else {
        this.requirements = {
          "7 Academic Periods:": false,
          English: false,
          "Social Studies": false,
          Math: false,
          "Physical Education": false,
        };
      }

      this.isYearPicked = true;
    },
    showCoursesModal() {
      this.showCourseModal = !this.showCourseModal;
    },
    addCourse(x: course) {
      this.showCourseModal = !this.showCourseModal;
      if (this.schedule.find((period) => period.name == x.name)) {
        return (this.errorMessage = "Class is already in the schedule.");
      }

      Object.assign(
        this.schedule.find((period) => period.name == undefined),
        x
      );

      if (x.doublePeriod) {
        let empty = this.schedule.findIndex((obj) => obj.name === undefined);
        this.schedule.splice(empty, 1);
      }

      this.updateRequirements(x, "add");
    },
    removeCourse(x: course) {
      if (x.name == "Lunch" && this.yearPicked != "Senior") {
        return (this.errorMessage = "Lunch is a required period.");
      }

      if (
        this.yearPicked == "Freshman" &&
        [
          "Russian T1",
          "AP World History T1",
          "English T1",
          "Chemistry T1",
        ].includes(x.name)
      ) {
        return (this.errorMessage = x.name + " is a mandatory class.");
      } else if (
        this.yearPicked == "Sophomore" &&
        ["AP World History T3", "English T3"].includes(x.name)
      ) {
        return (this.errorMessage = x.name + " is a mandatory class.");
      }

      let index = this.schedule.indexOf(x);

      Object.assign(
        this.schedule.find((period) => period.name == x.name),
        { name: undefined }
      );

      if (x.doublePeriod) {
        this.schedule.splice(index, 0, {});
      }

      this.updateRequirements(x, "remove");
    },
    closeError() {
      this.errorMessage = "";
    },
    updateRequirements(x: course, func: string) {
      let status = true;
      let subject =
        x.subject.toLowerCase().charAt(0).toUpperCase() +
        x.subject.toLowerCase().slice(1);

      if (x.subject == "LANG") {
        subject = "Russian";
      } else if (x.subject == "SS") {
        subject = "History";
      } else if (x.subject == "PE") {
        subject = "Physical Education";
      }

      if (x.subject == "TECH" || x.subject == "ARTS") {
        return;
      }

      if (func == "remove") {
        status = false;
      }

      console.log(this.schedule.find((period) => period.name == undefined));

      this.requirements[subject] = status;
    },
    switchYear() {
      this.isYearPicked = false;
      this.schedule = [
        {},
        {},
        {},
        {},
        {},
        {},
        { name: "Lunch", subject: "LUNCH" },
        {},
        {},
      ] as (course | { name: string; subject: string })[];
    },
  },
  beforeMount() {
    if (
      JSON.parse(sessionStorage.getItem("isYearPicked")) &&
      JSON.parse(sessionStorage.getItem("yearPicked"))
    ) {
      this.updateYear(JSON.parse(sessionStorage.getItem("yearPicked")));
    }

    if (JSON.parse(sessionStorage.getItem("schedule")) === null) {
      sessionStorage.setItem("schedule", JSON.stringify(this.schedule));
    } else if (JSON.parse(sessionStorage.getItem("schedule")) !== null) {
      this.schedule = JSON.parse(sessionStorage.getItem("schedule"));
    }
  },
  mounted() {
    this.isYearPicked = JSON.parse(sessionStorage.getItem("isYearPicked"));
    this.yearPicked = JSON.parse(sessionStorage.getItem("yearPicked"));
    this.schedule = JSON.parse(sessionStorage.getItem("schedule"));
  },
  watch: {
    isYearPicked() {
      sessionStorage.setItem("isYearPicked", JSON.stringify(this.isYearPicked));
    },
    yearPicked() {
      sessionStorage.setItem("yearPicked", JSON.stringify(this.yearPicked));
    },
    schedule: {
      handler: function () {
        sessionStorage.setItem("schedule", JSON.stringify(this.schedule));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="overflow-hidden">
    <MobileBuilderYearPicker
      v-if="!isYearPicked"
      @update-year="updateYear($event)"
    />
    <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
      <div class="flex items-center w-full">
        <MobileBuilderErrorToast
          :errorMessage="errorMessage"
          @close="closeError"
        />
      </div>

      <div class="mx-4">
        <h1 class="text-4xl mb-[12px]">Schedule Builder</h1>
        <div class="flex flex-col w-full justify-start mb-[8px]">
          <h1 class="text-2xl font-bold">{{ yearPicked }} Year Schedule</h1>
          <p @click="switchYear">Switch Year</p>
        </div>
      </div>
      <div class="md:flex md:flex-row">
        <MobileBuilderCoursesModal
          :year="yearPicked"
          @close="showCoursesModal"
          @addCourse="addCourse"
          v-if="showCourseModal"
        />
        <MobileBuilderCourseRequirements
          class="md:mr-[10%] md:ml-[10%] md:mt-[2rem]"
          :yearPicked="yearPicked"
          :requirements="requirements"
        />

        <MobileBuilderSchedule
          class="md:mr-[10%] md:mt-[2rem]"
          :schedule="schedule"
          :year="yearPicked"
          @removeCourse="removeCourse"
          @showCoursesModal="showCoursesModal"
        />
      </div>
    </div>
  </div>
</template>
