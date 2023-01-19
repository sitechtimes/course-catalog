<template>
                <div  class="w-40 h-10 mb-4 relative border border-gray-300 bg-white text-gray-400 rounded" id="sort" @click="isOpen = !isOpen" >
                    <div>
        <a class="text-lg ml-2 mt-1" href ='#'>
            {{ title }}
            <svg class="ml-16 mt-2 inline" id="arrow" viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="rgb(156 163 175)"></path>
        </svg>
        </a>
        </div>
         <div class="sub-menu" v-if="isOpen">
            <div class="mt-2 w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
              <button @click="SubjectSort()">Subject</button>
            </div>
            <div class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
             <button @click="IncNameSort()">Course Name (A-Z)</button>
            </div>
            <div class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
             <button @click="DecNameSort()">Course Name (Z-A)</button>
            </div>
            <div class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
              <button @click="IncGradeSort()">Grade (Increasing)</button>
            </div>
            <div class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
              <button @click="DecGradeSort()">Grade (Decreasing)</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from "vue";
import courses from '../catalog-search/data';
export default defineComponent({
    name: 'courseSort',
  props: ['title'],
    data() {
        return {
        courses: courses,
            selected: '',
            isOpen: false,
            input: ref(""),
         }
    },
    methods: {
        SubjectSort() {
                return this.courses.filter((course) => {
                return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
                }
            )},
            IncNameSort() {
                function compare(a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                        return 0;
                }
                return this.courses.sort(compare);
            },
            DecNameSort() {
                function compare(a, b) {
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                        return 0;
                }
                return this.courses.sort(compare);
            },
            IncGradeSort() {
                function compare(a, b) {
                    if (a.grade < b.grade)
                        return -1;
                    if (a.grade > b.grade)
                        return 1;
                        return 0;
                }
                return this.courses.sort(compare);
            },
            DecGradeSort() {
                function compare(a, b) {
                    if (a.grade > b.grade)
                        return -1;
                    if (a.grade < b.grade)
                        return 1;
                        return 0;
                }
                return this.courses.sort(compare);
            },
        }
        })
</script>