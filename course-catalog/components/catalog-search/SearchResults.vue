<script lang="ts">
import SearchComponent from './SearchComponent.vue';
import Sort from './Sort.vue';
import { defineComponent } from 'vue';
import courses from '../catalog-search/data';
import { ref } from "vue";
import { thisTypeAnnotation } from '@babel/types';

export default defineComponent({
  components: { SearchComponent,
Sort },
  data() {
    return {
        courses: courses,
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
})
</script>

<template>
<div>
    <div id="search" class="w-full flex justify-start items-center space-x-4">
        <Sort title="Sort By"/>
    <SearchComponent class="mb-4" type="text" v-model="input" placeholder="Search Courses..." />
            </div>
    <div class="item fruit" v-for="course in filteredList" :key="course">
     <p>{{ course }}</p>
   </div>
   <div class="item error" v-if="input&&!filteredList.length">
      <p>No results found!</p>
   </div>
</div>
</template>