<script setup lang="ts">
import YearPicked from "~/components/mobile-builder/YearPicker.vue";
import Schedule from "~/components/mobile-builder/Schedule.vue";
import CoursesModal from "~/components/mobile-builder/CoursesModal.vue";
import ErrorToast from "~/components/mobile-builder/ErrorToast.vue";
import CourseRequirements from "~/components/mobile-builder/CourseRequirements.vue";
import type course from "~~/interface/course";
import { useCourseStore } from "~/store/store";

interface Course {
  name?: string;
  subject?: string;
  doublePeriod?: boolean;
  [key: string]: any;
}

const yearPicked = ref("");
const isYearPicked = ref(false);
const showCourseModal = ref(false);
const schedule = ref<Course[]>([
  {},
  {},
  {},
  {},
  {},
  {},
  { name: "Lunch", subject: "LUNCH" },
  {},
  {},
]);
const requirements = ref<Record<string, boolean>>({});
const errorMessage = ref("");
const courses = ref(useCourseStore().courses);

const updateYear = (year: string) => {
  yearPicked.value = year;
  if (year == "Freshman") {
    ["Russian", "AP World History", "English", "Chemistry"].forEach((x) => {
      Object.assign(
        schedule.value.find((period) => period.name == undefined),
        courses.value.find((course) => course.name == x),
      );
    });
  } else if (year == "Sophomore") {
    ["English", "AP World History"].forEach((x) => {
      Object.assign(
        schedule.value.find((period) => period.name == undefined),
        courses.value.find((course) => course.name == x),
      );

      requirements.value = {
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
    requirements.value = {
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
    requirements.value = {
      "7 Academic Periods:": false,
      English: false,
      "Social Studies": false,
      Math: false,
      "Physical Education": false,
    };
  }

  isYearPicked.value = true;
};

const showCoursesModal = () => {
  showCourseModal.value = !showCourseModal.value;
};

const addCourse = (x: Course) => {
  showCourseModal.value = !showCourseModal.value;
  if (schedule.value.find((period) => period.name == x.name)) {
    return (errorMessage.value = "Class is already in the schedule.");
  }

  // Count current academic periods, counting double period courses as 2
  let academicPeriods = 0;
  schedule.value.forEach((period) => {
    if (period.name && period.subject !== "LUNCH") {
      academicPeriods += period.doublePeriod ? 2 : 1;
    }
  });

  const periodsToAdd = x.doublePeriod ? 2 : 1;
  if (academicPeriods + periodsToAdd > 8) {
    return (errorMessage.value = "Cannot exceed 8 academic periods.");
  }

  const emptyIndex = schedule.value.findIndex(
    (period) => period.name == undefined,
  );

  if (emptyIndex === -1) {
    return (errorMessage.value = "No free periods available.");
  }

  if (x.doublePeriod) {
    if (emptyIndex >= schedule.value.length - 1) {
      return (errorMessage.value =
        "Not enough consecutive periods for this double-period class.");
    }

    if (schedule.value[emptyIndex + 1].name !== undefined) {
      return (errorMessage.value =
        "The next period is already taken. Cannot add double-period class.");
    }
  }

  Object.assign(schedule.value[emptyIndex], x);

  if (x.doublePeriod) {
    schedule.value.splice(emptyIndex + 1, 1);
  }

  updateRequirements(x, "add");
  checkAcademicPeriods();
};

const removeCourse = (x: Course) => {
  if (x.name == "Lunch" && yearPicked.value != "Senior") {
    return (errorMessage.value = "Lunch is a required period.");
  }

  if (
    yearPicked.value == "Freshman" &&
    [
      "Russian T1",
      "AP World History T1",
      "English T1",
      "Chemistry T1",
    ].includes(x.name!)
  ) {
    return (errorMessage.value = x.name + " is a mandatory class.");
  } else if (
    yearPicked.value == "Sophomore" &&
    ["AP World History T3", "English T3"].includes(x.name!)
  ) {
    return (errorMessage.value = x.name + " is a mandatory class.");
  }

  // If it's a double period course, add back the empty slot we removed
  if (x.doublePeriod) {
    const index = schedule.value.indexOf(x);
    if (index !== -1) {
      Object.assign(schedule.value[index], {
        name: undefined,
        subject: undefined,
      });
      schedule.value.splice(index + 1, 0, {});
    }
  } else {
    const index = schedule.value.indexOf(x);
    if (index !== -1) {
      Object.assign(schedule.value[index], {
        name: undefined,
        subject: undefined,
      });
    }
  }

  updateRequirements(x, "remove");
  checkAcademicPeriods();
};

const closeError = () => {
  errorMessage.value = "";
};

const updateRequirements = (x: Course, func: string) => {
  let status = true;
  let subject =
    x.subject!.toLowerCase().charAt(0).toUpperCase() +
    x.subject!.toLowerCase().slice(1);

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

  requirements.value[subject] = status;
};

const checkAcademicPeriods = () => {
  let academicPeriods = 0;
  schedule.value.forEach((period) => {
    if (period.name && period.subject !== "LUNCH") {
      academicPeriods += period.doublePeriod ? 2 : 1;
    }
  });

  if (requirements.value["7 Academic Periods"] !== undefined) {
    requirements.value["7 Academic Periods"] =
      academicPeriods >= 7 && academicPeriods <= 8;
  }
  if (requirements.value["7 Academic Periods:"] !== undefined) {
    requirements.value["7 Academic Periods:"] =
      academicPeriods >= 7 && academicPeriods <= 8;
  }
};

const switchYear = () => {
  isYearPicked.value = false;
  schedule.value = [
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
};
</script>

<template>
  <div class="overflow-hidden min-h-screen pb-20">
    <YearPicked v-if="!isYearPicked" @updateYear="updateYear($event)" />
    <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
      <div class="flex items-center w-full">
        <ErrorToast :errorMessage="errorMessage" @close="closeError" />
      </div>

      <div class="mx-4 flex flex-col w-full items-center justify-center">
        <h1 class="text-4xl mb-3 font-bold text-secondary-s">
          Schedule Builder
        </h1>
        <div class="flex flex-col w-full items-center justify-center mb-2">
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
