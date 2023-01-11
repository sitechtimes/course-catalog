<script setup lang="ts">
import CourseType from './CourseType.vue';
const type = true
</script>

<template>
    <div id="card" class="bg-zinc-50 w-80 h-28 m-4 px-4 py-3 rounded-lg shadow-sm">
        <h2 id="name" class="text-xl font-semibold">Course Name</h2>
        <div id="grade" class="flex justify-start items-start space-x-1 text-base font-light text-zinc-500">
            <p>Grade:</p>
            <p>9 / 10 / 11</p>
        </div>
        <CourseType v-if="type"/>
    </div>
</template>