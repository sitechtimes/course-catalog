<template>
    <div class="w-40 h-10 mb-4 mr-4 relative border border-gray-300 bg-white text-gray-400 rounded" id="sort" @click="isOpen = !isOpen" >
                    <div>
        <a class="ml-2 mt-1">
            <p id="sortshow">Sort By</p>
            <svg class="mt-2 inline" id="arrow" viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="rgb(156 163 175)"></path>
        </svg>
        </a>
        </div>
         <div class="sub-menu" v-if="isOpen">
           <div @click="SubjectSort()" class="mt-2 w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
              <button>Subject</button>
            </div>
            <div @click="IncNameSort()" class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
             <button>Course Name (A-Z)</button>
            </div>
            <div @click="DecNameSort()" class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
             <button>Course Name (Z-A)</button>
            </div>
            <div  @click="IncGradeSort()" class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
              <button>Grade (Increasing)</button>
            </div>
            <div @click="DecGradeSort()" class="w-40 h-10 p-1 border border-t-transparent border-gray-300 bg-white text-gray-400 rounded">
              <button>Grade (Decreasing)</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from "vue";
import { getCourses } from '~~/store/store';
export default defineComponent({
    name: 'courseSort',
  props: ['title'],
    data() {
        return {
        courses: getCourses().courses,
            selected: 'Sort By',
            isOpen: false,
            input: ref(""),
         }
    },
    methods: {
        SubjectSort() {
                function compare(a, b) {
                    if (a.desc < b.desc)
                        return -1;
                    if (a.desc > b.desc)
                        return 1;
                        return 0;
                }
                let sortshow = document.getElementById("sortshow");
                sortshow.innerHTML = 'Subject'
                console.log(this.courses.sort(compare));
                return this.courses.sort(compare);
            },
            IncNameSort() {
                function compare(a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                        return 0;
                }
                let sortshow = document.getElementById("sortshow");
                sortshow.innerHTML = 'Course Name (A-Z)'
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
                let sortshow = document.getElementById("sortshow");
                sortshow.innerHTML = 'Course Name (Z-A)'
                return this.courses.sort(compare);
            },
            IncGradeSort() {
                function compare(a, b) {
                    if (a.freshman === false)
                        return -1;
                    if (b.sophomore === true)
                        return 1;
                        return 0;
                }
                let sortshow = document.getElementById("sortshow");
                sortshow.innerHTML = 'Grade (Increasing)'
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
                let sortshow = document.getElementById("sortshow");
                sortshow.innerHTML = 'Grade (Decreasing)'
                return this.courses.sort(compare);
            },
        }
        })
</script>