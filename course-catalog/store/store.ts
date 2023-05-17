import { defineStore } from "pinia";
import course from "~~/interface/course";

export const useCourseStore = defineStore("courseData", {
  state: () => {
    return {
      courses: [] as course[],
    };
  },
});

export const useMockSchedule = defineStore("schedule", {
  state: () => {
    return {
      schedule: [] as schedule[],
    };
  },
});
