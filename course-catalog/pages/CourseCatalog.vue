<script setup lang="ts">
import SearchComponent from '~/components/catalog-search/SearchComponent.vue';
import CourseCard from '~/components/course-cards/CourseCard.vue'
</script>

<template>
    <div id="courses" class="flex justify-center items-start h-screen px-12">
        <div id="content" class="w-full mt-24 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <SearchComponent />
            <div id="courses" class="flex flex-wrap justify-center items-center">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    </div>
</template>
