<script setup lang="ts">
import { useCourseStore } from "~/store/store";
const courseStore = useCourseStore();
function doStuff() {
  console.log(courseStore.courses);
}
</script>

<template>
  <div id="landing" class="flex justify-center items-center h-screen px-12">
    <div
      id="info"
      class="w-5/6 flex flex-col justify-center items-center space-y-4 max-w-2xl lg:w-2/3 lg:pl-4"
    >
      <h2 class="text-center lg:text-left text-3xl sm:text-4xl font-semibold">
        Learn about the courses offered at Staten Island Technical High School.
      </h2>
      <p class="text-center lg:text-left text-lg sm:text-xl font-medium">
        Learn more about available courses and plan ahead by creating mock
        schedules.
      </p>
      <div
        id="btns"
        class="w-full flex justify-center lg:justify-start items-center space-x-8"
      >
        <NuxtLink to="/courses"
          ><button
            class="bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded"
          >
            View Courses
          </button></NuxtLink
        >
        <NuxtLink to="/builder"><button class="bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded">Build Schedule</button></NuxtLink>
      </div>
    </div>
    <div
      id="circles"
      class="-z-10 absolute h-112 w-112 sm:h-128 sm:w-128 flex justify-center items-center lg:relative"
    >
      <div
        id="big"
        class="h-80 w-80 sm:h-96 sm:w-96 bg-tertiary-s rounded-full right-32"
      ></div>
      <div
        id="small"
        class="h-32 w-32 sm:h-40 sm:w-40 absolute bottom-4 left-12 bg-primary-s rounded-full"
      ></div>
    </div>
  </div>
</template>
<style scoped>
button {
  border-radius: 5px;
}
.circle {
  border-radius: 50rem;
}
</style>