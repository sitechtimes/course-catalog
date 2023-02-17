
<script setup lang="ts">
import CourseType from './CourseType.vue';
import SubjectType from './SubjectType.vue';

defineProps({
    course: Object,
    freshman: Boolean,
    sophomore: Boolean,
    junior: Boolean,
    senior: Boolean,
    catalog: Boolean,
    subject: String,
    ap: String,
    id: String,
})
</script>

<template>
    <div v-if="course?.catalog == true">
        <NuxtLink :to="`/courses/${course?.id}`">
            <div id="card" class="bg-white w-80 h-36 m-4 px-4 py-[0.6rem] rounded-lg shadow cursor-pointer">
                <h2 id="name" class="course-name text-2xl font-semibold h-[4.4rem]">{{course?.name}}</h2>
                <div id="grade" class="flex justify-start items-start space-x-1 text-sm text-zinc-500">
                    <p class="font-medium pr-1">Grade</p>
                    <p class="font-bold space-x-1">
                        <span v-if="course?.freshman == true">9 </span> 
                        <span v-if="course?.sophomore == true">10 </span> 
                        <span v-if="course?.junior == true">11 </span> 
                        <span v-if="course?.senior == true">12 </span> 

                    </p>
                </div>
                <div class="flex justify-start items-start space-x-2">
                    <SubjectType :subject="course?.subject"/>
                    <CourseType :ap="course?.ap" />
                </div>
            </div>
        </NuxtLink>
    </div>
</template>