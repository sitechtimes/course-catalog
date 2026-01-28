<script lang="ts">
import YearPicked from "~/components/mobile-builder/YearPicker.vue";
import Schedule from "~/components/mobile-builder/Schedule.vue";
import CoursesModal from "~/components/mobile-builder/CoursesModal.vue";
import ErrorToast from "~/components/mobile-builder/ErrorToast.vue";
import CourseRequirements from "~/components/mobile-builder/CourseRequirements.vue";
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";
import draggable from "vuedraggable";

export default {
  components: {
    YearPicked,
    Schedule,
    CoursesModal,
    ErrorToast,
    CourseRequirements,
  },
  data() {
    return {
      yearPicked: "",
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
      ],
      requirements: {},
      errorMessage: "",
      courses: useCourseStore().courses,
    };
  },
  methods: {
    updateYear(year: any) {
      this.yearPicked = year;
      if (year == "Freshman") {
        ["Russian", "AP World History", "English", "Chemistry"].forEach((x) => {
          Object.assign(
            this.schedule.find((period) => period.name == undefined),
            this.courses.find((course) => course.name == x),
          );
        });
      } else if (year == "Sophomore") {
        ["English", "AP World History"].forEach((x) => {
          Object.assign(
            this.schedule.find((period) => period.name == undefined),
            this.courses.find((course) => course.name == x),
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
    addCourse(x) {
      this.showCourseModal = !this.showCourseModal;
      if (this.schedule.find((period) => period.name == x.name)) {
        return (this.errorMessage = "Class is already in the schedule.");
      }

      Object.assign(
        this.schedule.find((period) => period.name == undefined),
        x,
      );

      if (x.double_period) {
        let empty = this.schedule.findIndex((obj) => obj.name === undefined);
        this.schedule.splice(empty, 1);
      }

      this.updateRequirements(x, "add");
    },
    removeCourse(x) {
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
        { name: undefined },
      );

      if (x.double_period) {
        this.schedule.splice(index, 0, {});
      }

      this.updateRequirements(x, "remove");
    },
    closeError() {
      this.errorMessage = "";
    },
    updateRequirements(x, func) {
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
      ];
    },
  },
  mounted() {
    const storedIsYearPicked = localStorage.getItem("isYearPicked");
    const storedYearPicked = localStorage.getItem("yearPicked");
    const storedSchedule = localStorage.getItem("schedule");

    if (storedIsYearPicked) {
      this.isYearPicked = JSON.parse(storedIsYearPicked);
    }
    if (storedYearPicked) {
      this.yearPicked = JSON.parse(storedYearPicked);
    }
    if (storedSchedule) {
      this.schedule = JSON.parse(storedSchedule);
    }
    console.log(this.schedule);
  },
  beforeMount() {
    const storedIsYearPicked = localStorage.getItem("isYearPicked");
    const storedYearPicked = localStorage.getItem("yearPicked");

    if (storedIsYearPicked && storedYearPicked) {
      this.updateYear(JSON.parse(storedYearPicked));
    }

    const storedSchedule = localStorage.getItem("schedule");
    if (!storedSchedule) {
      localStorage.setItem("schedule", JSON.stringify(this.schedule));
    } else {
      this.schedule = JSON.parse(storedSchedule);
    }
  },
  watch: {
    isYearPicked() {
      localStorage.setItem("isYearPicked", JSON.stringify(this.isYearPicked));
    },
    yearPicked() {
      localStorage.setItem("yearPicked", JSON.stringify(this.yearPicked));
    },
    schedule: {
      handler: function () {
        localStorage.setItem("schedule", JSON.stringify(this.schedule));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="overflow-hidden min-h-screen bg-tertiary-s">
    <YearPicked v-if="!isYearPicked" @updateYear="updateYear($event)" />
    <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
      <div class="flex items-center w-full">
        <ErrorToast :errorMessage="errorMessage" @close="closeError" />
      </div>

      <div class="mx-4">
        <h1 class="text-4xl mb-3 font-bold text-secondary-s">
          Schedule Builder
        </h1>
        <div class="flex flex-col w-full justify-start mb-2">
          <h1 class="text-2xl font-bold text-secondary-s">
            {{ yearPicked }} Year Schedule
          </h1>
          <button @click="switchYear" class="btn-primary mt-2 w-fit">
            Switch Year
          </button>
        </div>
      </div>
      <div class="md:flex md:flex-row md:gap-6 md:justify-center">
        <CoursesModal
          :year="yearPicked"
          @close="showCoursesModal"
          @addCourse="addCourse"
          v-if="showCourseModal"
        />
        <CourseRequirements
          class="md:mt-8"
          :yearPicked="yearPicked"
          :requirements="requirements"
        />

        <Schedule
          class="md:mt-8"
          :schedule="schedule"
          :year="yearPicked"
          @removeCourse="removeCourse"
          @showCoursesModal="showCoursesModal"
        />
      </div>
    </div>
  </div>
</template>
