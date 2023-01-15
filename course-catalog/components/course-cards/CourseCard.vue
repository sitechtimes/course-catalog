<script setup lang="ts">
import CourseType from './CourseType.vue';
import SubjectType from './SubjectType.vue';
const type = true

interface course{
    name: string
    freshman: boolean
    sophomore: boolean
    junior: boolean
    senior: boolean
    ap: boolean
}

defineProps<{
    course:course
    }>()

</script>

<template>
    <div id="card" class="bg-zinc-50 w-80 h-28 m-4 px-4 py-3 rounded-lg shadow-sm">
        <h2 id="name" class="text-2xl font-semibold">{{course?.name}}</h2>
        <div id="grade" class="flex justify-start items-start space-x-1 text-sm font-light text-zinc-500">
            <p>Grade:</p>
            <p>9 / 10 / 11</p>
        </div>
        <div class="flex justify-start items-start space-x-2">
            <SubjectType />
            <CourseType v-if="type"/>
        </div>
    </div>
</template>