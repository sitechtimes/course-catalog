<script lang="ts">
import { getCourses } from "~~/store/store"
import { ref } from "vue"
import SortComponent from "../../components/catalog-search/SortComponent.vue"
import SearchBar from "../../components/catalog-search/SearchBar.vue";
import CourseCard from "../../components/course-cards/CourseCard.vue";

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
    <div id="catalog" class="flex justify-center items-start h-screen w-full px-12">
        <div id="content" class="flex flex-col justify-center items-center w-full mt-28 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>

            <div id="search" class="w-full flex flex-col justify-center items-center">
                <div id="search-section" class="flex justify-center items-center">
                     <SortComponent />
                        <SearchBar class="mb-4" type="text" v-model="input" placeholder="Search Courses..." />
</div>
     <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
    <CourseCard v-for="course in filteredList" :course="course"/>
    </div>
   <div class="item error" v-if="input&&!filteredList.length">
      <p>No results found!</p>
   </div>
            </div>
        </div>
    </div>
</template>