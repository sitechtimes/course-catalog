<script lang="ts">
import SearchButton from '~/components/icons/SearchButton.vue';
import { defineComponent } from 'vue'
import { describe } from 'node:test';

export default defineComponent({
    props: {
        courses: String,
        search: String,
    },
    components: {
        SearchButton
    },
    data() {
        return {
            courses: [
                {
                    name: "Calculus BC",
                    desc: "math"
                },
                {
                    name: "Biology",
                    desc: "science"
                },
                {
                    name: "AP Literature",
                    desc: "ela"
                },
                {
                    name: "AP Government",
                    desc: "history"
                },
                {
                    name: "College Russian",
                    desc: "russian"
                }
            ]
        }
    },
    mounted(){
        this.courses
        this.search
    }
})

computed: {
    function filteredCourses() {
        return this.courses.filter(c => {
/*             return c.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1; */
console.log(c.name);
        })
    }
}
</script>

<template>
    <body>
    <div id="search" class="w-full flex justify-start items-center space-x-4">
        <select name="sort" id="sort" class="w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
        </select>
        <div id="search-bar" class="flex justify-center items-center relative">
                    <input type="text" placeholder="Search" class="border border-gray-300 rounded w-112 h-10 p-2"/>
                    <SearchButton @click="filteredCourses()" class="absolute right-3 text-gray-400 cursor-pointer"/>
        </div>
    </div>
    <div v-for="(course) in courses"
        :key="course.name"
            :name="course.name"
            :desc="course.desc">
            <div>
                <h2>{{ course.name }}</h2>
                <h3>{{ course.desc }}</h3>
            </div>
    </div>
    </body>
</template>