<script setup lang="ts">
import { getCourses } from "~~/store/store"
import { ref } from "vue"
import SortComponent from "../../components/catalog-search/SortComponent.vue"
import SearchBar from "../../components/catalog-search/SearchBar.vue";
import CourseCard from "../../components/course-cards/CourseCard.vue";

let input = ref("")
function filteredList() {
    if (typeof document !== 'undefined') {
    let input = document.getElementById('search-bar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('course-name');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
}

/* function filteredList() {
    return getCourses().courses.filter((course) => {
        return course.name.toLowerCase().indexOf(input.toLowerCase()) != -1
    })
} */

/* if (typeof document !== 'undefined') {
   let element = document.querySelector('#hi')
   element.innerHTML = "hi";
} */

// export default {
//     components: {
//         SearchBar,
//         SortComponent,
//         CourseCard
//     },
//   data() {
//     return {
//             courses: getCourses().courses,
//             input: ref(""),
//          }
//         },
//         computed: {
//             filteredList() {
//                 return this.courses.filter((course) => {
//                     return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
//                 })
//             }
//         },
//         mounted() {
//             this.filteredList
//         }
// }
</script>

<template>
    <div id="catalog" class="flex justify-center items-start h-screen w-full px-12">
        <div id="content" class="flex flex-col justify-center items-center w-full mt-28 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            
            <div id="search" class="w-full flex flex-col justify-center items-center">
                <div id="search-bar" class="flex justify-center items-center">
                    <SortComponent/>
                    <SearchBar onkeyup="filteredList()" class="mb-4" type="text"  placeholder="Search Courses..." />
                </div>
                <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
                    <CourseCard class="course-cards" v-for="course in getCourses().courses" :course="course"/>
                </div>
                <div id="error-msg" v-if="input&&!filteredList.length">
                    <p>No results found!</p>
                </div>
            </div>
            <!-- <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
                <CourseCard v-for="courses in getCourses().courses" :course="courses"/>
            </div> -->
        </div>
    </div>
</template>
