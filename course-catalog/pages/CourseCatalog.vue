<script setup lang="ts">
import { useCourseStore } from "~~/store/store"
import SearchComponent from "../components/catalog-search/SearchBar.vue";
import CourseCard from "../components/course-cards/CourseCard.vue";
</script>

<template>
    <div id="catalog" class="flex justify-center items-start h-screen w-full px-12">
        <div id="content" class="flex flex-col justify-center items-center w-full mt-28 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <SearchComponent />
            <div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]">
                <CourseCard v-for="courses in useCourseStore().courses" :course="courses" />
            </div>
        </div>
    </div>
</template>
