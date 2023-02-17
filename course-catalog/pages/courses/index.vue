<script setup lang="ts">
import { getCourses } from "~~/store/store"
import { ref } from "vue"
import SortComponent from "../../components/catalog-search/SortComponent.vue"
import SearchBar from "../../components/catalog-search/SearchBar.vue";
import CourseCard from "../../components/course-cards/CourseCard.vue";
import SearchButton from '../../components/icons/SearchButton.vue';

let input = ref("")
const AllCourses = getCourses().courses
let display = AllCourses

/* function filteredList() {
  return display.filter((course) =>
    course.toLowerCase().includes(input.value.toLowerCase())
  );
} */
if (typeof document !== 'undefined') {
    let searchForm = document.getElementById('search-bar');
    let searchResultList = document.querySelectorAll('.course-cards');
    let result = document.getElementById('courses');
    let searchValue = result.getElementsByTagName("h2");


    searchForm.addEventListener("keyup", function () {
        for (var i = 0; i < searchValue.length; i++) {

            console.log(searchForm.value);

            let value = searchResultList[i].getElementsByTagName("h2")[0];

            let filterValue = value.textContent || value.innerHTML;

            if (filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1) {
                searchResultList[i].style.display = "";
            }
            else {
                searchResultList[i].style.display = "none";
            }
        }
    })
}

/* function filteredList() {
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
} */


/* export default {
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
} */
</script>

<template>
    <div id="catalog" class="flex justify-center items-start h-screen w-full px-12">
        <div id="content" class="flex flex-col justify-center items-center w-full mt-28 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>

            <div id="search" class="w-full flex flex-col justify-center items-center">
                <div id="search-section" class="flex justify-center items-center">
                    <!-- <SortComponent /> -->
                    <div class="flex justify-center items-center relative">
                    <input id="search-bar" class="border border-zinc-300 rounded w-112 h-10 p-2 text-zinc-800 mb-4" type="text" v-model="input" placeholder="Search Courses..." />
                    <SearchButton class="mb-4 absolute right-3 text-zinc-400 cursor-pointer"/>
                    </div>
                </div>
                <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
                    <CourseCard class="course-cards" v-for="courses in getCourses().courses" :course="courses" />
                </div>
            </div>
        </div>
    </div>
</template>