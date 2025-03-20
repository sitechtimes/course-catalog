<script lang="ts">
import { useCourseStore } from "~~/store/store";
import { ref } from "vue";
export default {
  data() {
    return {
      courses: useCourseStore().courses,
      input: ref(""),
    };
  },
  computed: {
    filteredList() {
      return this.courses.filter((course) => {
        return (
          course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1
        );
      });
    },
  },
  mounted() {
    this.filteredList;
  },
};
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
          <CatalogSearchSortComponent />
          <LazyCatalogSearchBar
            class="mb-4"
            type="text"
            v-model="input"
            placeholder="Search Courses..."
          />
        </div>
        <div
          id="courses"
          class="flex flex-wrap justify-center items-center max-w-[80rem]"
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
