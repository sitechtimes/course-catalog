<script setup lang="ts">

import { useCourseStore } from "~~/store/store";
import SubjectType from "../../components/course-cards/SubjectType.vue";
import CourseType from "../../components/course-cards/CourseType.vue";

const route = useRoute();
const courses = ref(useCourseStore().courses);
const course = ref<any>({});

const getCourse = computed(() => {
  return courses.value.find((c) => {
    return c.id == route.params.id;
  });
});

onMounted(() => {
  course.value = getCourse.value;
});
</script>

<template>
  <div id="course" class="h-full w-full flex justify-center items-center">
    <div
      id="content"
      class="w-11/12 max-w-4xl h-auto mt-28 mb-8 pb-6 px-8 flex flex-col justify-start space-y-4 shadow-md test"
    >
      <div class="mt-3" id="button">
        <NuxtLink to="/courses">
          <img
            src="/icons/back-arrow.svg"
            alt="Back"
            class="w-4 h-4 inline-block"
          />
          <h3>Back to Courses</h3>
        </NuxtLink>
      </div>

      <div
        id="back"
        class="w-full h-5 flex justify-end items-center z-20 border-b border-solid border-zinc-200"
      ></div>
      <div
        id="title"
        class="w-full h-auto flex flex-col justify-start items-start pb-6 px-4 border-b border-solid border-zinc-200 relative"
      >
        <h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl">
          {{ course.name }}
        </h2>
        <div
          id="grade"
          class="flex justify-start items-start space-x-1 text-base font-light"
        >
          <p class="text-zinc-500 font-bold">Grade :</p>
          <p class="text-zinc-500 font-bold space-x-1">
            <span v-if="course?.freshman == true">9 </span>
            <span v-if="course?.sophomore == true">10 </span>
            <span v-if="course?.junior == true">11 </span>
            <span v-if="course?.senior == true">12 </span>
          </p>
        </div>
        <div class="flex mt-2 justify-start items-start">
          <SubjectType :subject="course?.subject" />
          <CourseType class="ml-4" :ap="course?.ap" />
        </div>
      </div>
      <div
        id="description"
        class="w-full flex flex-col justify-start items-start space-y-4"
      >
        <div
          class="w-full h-auto flex flex-col justify-start items-start px-4 space-y-1 pb-2"
        >
          <h5 class="text-xl font-semibold">Description</h5>
          <p
            class="text-base text-zinc-600 whitespace-pre-wrap"
            v-html="course.description"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.test {
  border: solid 1px rgba(20, 20, 20, 0.034);
  border-radius: 5px;
  background: white;
  box-shadow: 2px 2px 2px 2px rgba(20, 20, 20, 0.132);
}
#button {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}
#button:hover {
  opacity: 0.4;
}
svg {
  position: absolute;
  margin-top: 1rem;
  margin: 0;
  margin-left: 5px;
  align-self: left;
  display: flex;
  z-index: 100;
  width: 10px;
  fill: #37394f;
}
h3 {
  font-weight: bold;
  position: absolute;
  margin-left: 1.5rem;
  color: #37394f;
  font-size: 1rem;
}
</style>
