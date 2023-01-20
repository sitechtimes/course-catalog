<script lang="ts">
import SearchBar from './SearchBar.vue';
import SortComponent from './SortComponent.vue';
import { useCourseStore } from '~~/store/store'
import { ref } from "vue";

export default {
  
  data() {
    return {
            courses: useCourseStore().courses,
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
    <div id="search" class="w-full flex justify-center items-center">
        <SortComponent title="Sort By"/>
    <SearchBar class="mb-4" type="text" v-model="input" placeholder="Search Courses..." />
            </div>
    <div class="item fruit" v-for="course in filteredList" :key="course">
     <p>{{ course }}</p>
   </div>'
   rtuy'
   <div class="item error" v-if="input&&!filteredList.length">
      <p>No results found!</p>
   </div>
</div>
</template>