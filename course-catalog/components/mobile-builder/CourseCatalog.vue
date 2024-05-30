<template>
    <div class="px-4">
        <h1 class="font-bold text-xl">Course Catalog</h1>
        <div class="flex flex-col gap-y-3 my-3">
            <input class="border w-full p-2 font-medium" placeholder="Search for a Course" type="text" v-model="search" />

            <div class="flex flex-col gap-y-2 h-[65vh] overflow-y-auto catalog">
                <div v-for="course in filteredCourses" class="flex justify-between items-center">
                    <div class="flex flex-col">
                            <p class="text-lg font-semibold">{{ course.name }}</p>
                            <div class="flex gap-x-1">
                                <div v-if="course.subject == 'MATH'" id="math"
                                    class="tag items-center justify-center text-sm bg-red-400 px-2 text-white font-medium">
                                    <p>Math</p>
                                </div>
                                <div v-if="course.subject == 'ENGLISH'" id="english"
                                    class="tag items-center justify-center text-sm bg-blue-400 px-2 text-white font-medium">
                                    <p>English</p>
                                </div>
                                <div v-if="course.subject == 'SCIENCE'" id="science"
                                    class="tag items-center justify-center text-sm bg-green-400 px-2 text-white font-medium">
                                    <p>Science</p>
                                </div>
                                <div v-if="course.subject == 'SS'" id="history"
                                    class="tag items-center justify-center text-sm bg-purple-400 px-2 text-white font-medium">
                                    <p>Social Studies</p>
                                </div>
                                <div v-if="course.subject == 'LANG'" id="russian"
                                    class="tag items-center justify-center text-sm bg-orange-400 px-2 text-white font-medium">
                                    <p>Language</p>
                                </div>
                                <div v-if="course.subject == 'PE'" id="pe"
                                    class="tag items-center justify-center text-sm bg-yellow-400 px-2 text-white font-medium">
                                    <p>Gym</p>
                                </div>
                                <div v-if="course.subject == 'TECH'" id="elective"
                                    class="tag items-center justify-center text-sm bg-teal-400 px-2 text-white font-medium">
                                    <p>Technology</p>
                                </div>
                                <div v-if="course.subject == 'ARTS'" id="elective"
                                    class="tag items-center justify-center text-sm bg-pink-400 px-2 text-white font-medium">
                                    <p>Arts</p>
                                </div>
                                <div v-if="course.subject == 'OTHER'" id="elective"
                                    class="tag items-center justify-center text-sm bg-zinc-400 px-2 text-white font-medium">
                                    <p>Other</p>
                                </div>
                                <span v-if="course.ap"
                                    class="tag items-center justify-center text-sm bg-cyan-400 px-2 text-white font-medium">AP
                                    Course</span>
                            </div>
                        </div>
                    <button class="bg-sky-500 text-white py-2 px-3"
                    @click="$emit('addCourse', course)">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

import { useCourseStore } from "~/store/store";

export default {
    name: 'CollapsableCard',
    components: {},
    props: ["year"],
    data() {
        return {
            courses: useCourseStore().courses,
            filteredCourses: useCourseStore().courses,
            search: "",
        }
    },
    methods: {
        filterCourse() {
            let year = this.year.toLowerCase()

            this.filteredCourses = this.courses.filter((course) => {
                return course[year]
            })
        }
    },
    watch: {
    search(val) {
      if (val.length == 0) {
        this.filterCourse()
      }

      this.filteredCourses = this.filteredCourses.filter((course) => {
        return course.name.toLowerCase().includes(val.toLowerCase())
      })
    }
  },
  mounted() {
    this.filterCourse()
  }
}
</script>

<style scoped>
.catalog::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.catalog {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>