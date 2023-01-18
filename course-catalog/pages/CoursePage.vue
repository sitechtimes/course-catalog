<script setup lang="ts">
import BackArrow from '~~/components/icons/BackArrow.vue';
import CourseType from '~~/components/course-cards/CourseType.vue';
import SubjectType from '~~/components/course-cards/SubjectType.vue';
const type = true
</script>

<template>
    <div id="course" class="h-full w-full flex justify-center items-center">
        <div id="content" class="bg-white w-11/12 max-w-4xl h-auto mt-28 mb-8 pb-6 px-8 flex flex-col justify-start items-center space-y-4 shadow-md">
            <div id="back" class="w-full h-12 flex justify-end items-center z-20 border-b border-solid border-zinc-200">
                <NuxtLink to="/coursecatalog">
                <div class="flex justify-center items-center space-x-0.5 mr-3">
                    <BackArrow />
                    <p class="text-sm font-medium">Back to Courses</p>
                </div>
                </NuxtLink>
            </div>
            <div id="title" class="w-full h-auto flex flex-col justify-start items-start pb-6 px-4 border-b border-solid border-zinc-200 relative">
                <h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl">Course Name</h2>
                <div id="grade" class="flex justify-start items-start space-x-1 text-base font-light">
                    <p class="text-zinc-500">Grade:</p>
                    <p class="text-zinc-500">9 / 10 / 11</p>
                </div>
                <div class="flex justify-start items-start space-x-2 px-1">
                    <SubjectType />
                    <CourseType/>
                </div>
            </div>
            <div id="description" class="w-full flex flex-col justify-start items-start space-y-4">
                <div class="w-full h-auto flex flex-col justify-start items-start px-4 space-y-1 pb-2">
                    <h5 class="text-xl font-semibold">Description</h5>
                    <p class="text-base text-zinc-600 whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo accusantium tenetur sequi quas quis. Ipsum dignissimos corporis, similique beatae ad quaerat neque accusantium dicta eos ex maiores porro nesciunt qui perferendis minima facilis animi dolore quia quis consequatur nulla exercitationem. Porro minima totam dolore aperiam deleniti perferendis, dicta blanditiis.</p>
                </div>
            </div>
        </div>
    </div>
</template>