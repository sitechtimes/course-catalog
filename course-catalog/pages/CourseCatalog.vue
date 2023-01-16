<script setup lang="ts">
import SearchComponent from '~/components/catalog-search/SearchComponent.vue';
import CourseCard from '~/components/course-cards/CourseCard.vue'
import { useCourseStore } from "~~/store/store"



</script>

<template>
    <div id="courses" class="flex justify-center items-start h-screen w-full px-12 bg-green-100">
        <div id="content" class="flex flex-col justify-center items-start w-full mt-24 space-y-6 bg-blue-100">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <SearchComponent />
            <div id="courses" class="flex flex-wrap justify-center items-center bg-red-100 w-full max-w-[100rem]">
                <div v-for="x in useCourseStore().courses">
                    <CourseCard :course="x" />
                </div>
                        

            </div>
        </div>
      </div>
    </div>
  </div>
</template>
