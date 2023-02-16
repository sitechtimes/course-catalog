<template>
    <!-- <div class="w-60 h-10 mb-4 relative border border-gray-300 bg-white text-gray-400 rounded" id="sort" @click="isOpen = !isOpen" >
                    <div>
        <a class="ml-2 mt-1">
            <p id="sortshow">Sort By</p>
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
    </div> -->
    <div id="sortComponent" class="flex justify-center items-center w-48 h-10 mr-4">
        <select class="w-60 h-10 mb-4 px-2 relative border border-gray-300 bg-white text-gray-400 rounded" name="sort" id="sort">
            <option value="" disabled selected>Sort By</option>
            <option @click="SubjectSort()" value="subject">Subject</option>
            <option @click="IncNameSort()" value="az">Course Name (A-Z)</option>
            <option @click="DecNameSort()" value="za">Course Name (Z-A)</option>
        </select>
        <DownArrow class="absolute right-2 text-gray-400"/>
    </div>
</template>

<script lang="ts">
import DownArrow from '../icons/DownArrow.vue'
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

<style scoped>
select {
	appearance: none;
}

/* select::-ms-expand {
    display: none;
} */

</style>