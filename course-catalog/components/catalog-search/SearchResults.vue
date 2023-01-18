<script lang="ts">
import SearchComponent from './SearchComponent.vue';
import { defineComponent } from 'vue';
import { ref } from "vue";
import { thisTypeAnnotation } from '@babel/types';

export default defineComponent({
  components: { SearchComponent },
  data() {
    return {
        courses: [
                {
                    name: "Calculus BC",
                    desc: "math",
                    grade: 11
                },
                {
                    name: "Biology",
                    desc: "science",
                    grade: 11,
                },
                {
                    name: "AP Literature",
                    desc: "ela",
                    grade: 12,
                },
                {
                    name: "AP Government",
                    desc: "history",
                    grade: 12,
                },
                {
                    name: "College Russian",
                    desc: "russian",
                    grade: 10
                }
            ],
            input: ref(""),
            selected: ''
         }
        },
        computed: {
            filteredList() {
                return this.courses.filter((course) => {
                return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
                }
            )}
        },
        methods: {
            NameSort() {
                function compare(a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                        return 0;
                }
                return this.courses.sort(compare);
            },
            switchSelect(event) {
                this.selected = event.target.value;
            }
        },
        mounted() {
            this.filteredList
            this.NameSort
        }
})
</script>

<template>
<div>
    <div id="search" class="w-full flex justify-start items-center space-x-4">
    <select v-model="selected" name="sort" id="sort" class="w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
                    <option>Sort by</option>
                    <option @click="NameSort" value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
                </select>
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