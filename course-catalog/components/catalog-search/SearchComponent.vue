<script lang="ts">
import SearchBar from './SearchBar.vue';
import SortComponent from './SortComponent.vue';
import CourseCard from '../course-cards/CourseCard.vue'
import { getCourses } from '~~/store/store';
import { ref } from "vue";

export default {
    components: {
        SearchBar,
        SortComponent,
        CourseCard
    },
  data() {
    return {
            courses: getCourses().courses,
            input: ref(""),
         }
        },
        computed: {
            filteredList() {
                return this.courses.filter((course) => {
                return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
                }
            )}
        },
        mounted() {
            this.filteredList
        }
}
</script>

<template>
<div>
    <SearchBar class="mb-4" type="text" v-model="input" placeholder="Search Courses..." />
    <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
    <CourseCard v-for="courses in this.filteredList" :course="courses"/>
    </div>
   <div class="item error" v-if="input&&!filteredList.length">
      <p>No results found!</p>
   </div>
</div>
</template>