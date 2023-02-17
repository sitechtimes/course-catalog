<script lang="ts">
import { getCourses } from '~~/store/store'
import SubjectType from '../../components/course-cards/SubjectType.vue';
import CourseType from '../../components/course-cards/CourseType.vue';

const id = $route.params.id
const course = getCourses().courses

</script>

<template>
    <div id="course" class="h-full w-full flex justify-center items-center">
        <div id="content" class="bg-white w-11/12 max-w-4xl h-auto mt-28 mb-8 pb-6 px-8 flex flex-col justify-start items-center space-y-4 shadow-md">
            <div id="back" class="w-full h-12 flex justify-end items-center z-20 border-b border-solid border-zinc-200">
                <NuxtLink to="/courses">
                <div class="flex justify-center items-center space-x-0.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-sm font-medium">Back to Courses</p>
                </div>
                </NuxtLink>
            </div>
            <div id="title" class="w-full h-auto flex flex-col justify-start items-start pb-6 px-4 border-b border-solid border-zinc-200 relative">
                <h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl">{{ id }}</h2>
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