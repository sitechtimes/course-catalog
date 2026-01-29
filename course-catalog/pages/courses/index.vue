<script setup lang="ts">

import { useCourseStore } from "~~/store/store";
import SortComponent from "../../components/catalog-search/SortComponent.vue";
import SearchBar from "../../components/catalog-search/SearchBar.vue";
import CourseCard from "../../components/course-cards/CourseCard.vue";

const courses = ref(useCourseStore().courses);
const input = ref("");

const filteredList = computed(() => {
  return courses.value.filter((course) => {
    return course.name.toLowerCase().indexOf(input.value.toLowerCase()) != -1;
  });
});
</script>

<template>
  <div
    id="catalog"
    class="flex justify-center items-start h-screen w-full px-12"
  >
    <div
      id="content"
      class="flex flex-col justify-center items-center w-full mt-28 space-y-6"
    >
      <h2 class="text-center text-4xl font-semibold">Courses</h2>

      <div id="search" class="w-full flex flex-col justify-center items-center">
        <div id="search-section" class="flex justify-center items-center">
          <SortComponent />
          <SearchBar
            class="mb-4"
            type="text"
            v-model="input"
            placeholder="Search Courses..."
          />
        </div>
        <div
          id="courses"
          class="flex flex-wrap justify-center items-center max-w-screen-xl"
        >
          <CourseCard v-for="course in filteredList" :course="course" />
        </div>
        <div class="item error" v-if="input && !filteredList.length">
          <p>No results found!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 604px) {
  #search-section {
    flex-direction: column-reverse;
  }
}
</style>
