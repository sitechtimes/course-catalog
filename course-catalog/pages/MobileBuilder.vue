<script lang="ts">
import YearPicked from "~/components/mobile-builder/YearPicker.vue";
import Schedule from "~/components/mobile-builder/Schedule.vue";
import CoursesModal from "~/components/mobile-builder/CoursesModal.vue";
import ErrorToast from "~/components/mobile-builder/ErrorToast.vue";
import CourseRequirements from "~/components/mobile-builder/CourseRequirements.vue";
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";

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
        {name: "Lunch",subject: "LUNCH"},
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
        [
          "Russian T1",
          "AP World History T1",
          "English T1",
          "Chemistry T1",
        ].forEach((x) => {
          Object.assign(
            this.schedule.find((period) => period.name == undefined),
            this.courses.find((course) => course.name == x)
          );
        });
      } else if (year == "Sophomore") {
        ["English T3", "AP World History T3"].forEach((x) => {
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
          Lunch: false,
        };
      }

      this.isYearPicked = true
      sessionStorage.setItem('schedule', JSON.stringify(this.schedule))

    },
    showCoursesModal() {
      this.showCourseModal = !this.showCourseModal;
    },
    addCourse(x) {
      this.showCourseModal = !this.showCourseModal;
      if (this.schedule.find((period) => period.name == x.name)) {
        return (this.errorMessage = "Class is already in the schedule.");
      } else if (x.double_period) {
        Object.assign(
          this.schedule.find((period) => period.name == undefined),
          x
        );
      }

      Object.assign(
        this.schedule.find((period) => period.name == undefined),
        x
      );

      this.updateRequirements(x, "add");
      sessionStorage.setItem("schedule", JSON.stringify(this.schedule))
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

      Object.assign(
        this.schedule.find((period) => period.name == x.name),
        { name: undefined }
      );

      this.updateRequirements(x, "remove");
      sessionStorage.setItem("schedule", JSON.stringify(this.schedule))
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
  },
  mounted() { 
            
        this.isYearPicked = JSON.parse(sessionStorage.getItem('isYearPicked')); 
        this.yearPicked = JSON.parse(sessionStorage.getItem('yearPicked'))
        
    },
    beforeMount() {
        if (JSON.parse(sessionStorage.getItem('isYearPicked')) && JSON.parse(sessionStorage.getItem('yearPicked'))) {
            this.updateYear(JSON.parse(sessionStorage.getItem('yearPicked')))
        }

        this.schedule = JSON.parse(sessionStorage.getItem('schedule'))

        
    },
  watch: {
    isYearPicked() {
        sessionStorage.setItem("isYearPicked", JSON.stringify(this.isYearPicked));
    },
    yearPicked() {
        sessionStorage.setItem("yearPicked", JSON.stringify(this.yearPicked))
    },
  },
};
</script>

<template>
  <div class="overflow-hidden">
    <YearPicked
      v-if="!isYearPicked"
      @updateYear="updateYear($event)"
    />
    <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
      <div class="flex items-center w-full">
        <ErrorToast :errorMessage="errorMessage" @close="closeError" />
      </div>

      <div class="mx-4">
        <h1 class="text-4xl mb-[12px]">Schedule Builder</h1>
        <div class="flex w-full justify-between mb-[20px]">
          <p>{{ yearPicked }} Year Schedule</p>
        </div>
      </div>

      <CoursesModal
        :year="yearPicked"
        @close="showCoursesModal"
        @addCourse="addCourse"
        v-if="showCourseModal"
      />
      <CourseRequirements
        :yearPicked="yearPicked"
        :requirements="requirements"
      />
      <Schedule
        :schedule="schedule"
        @removeCourse="removeCourse"
        @showCoursesModal="showCoursesModal"
      />
    </div>
  </div>
</template>
