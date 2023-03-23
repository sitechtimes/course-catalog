<script lang="ts">
import { useCourseStore } from '~~/store/store'
import SubjectType from '../../components/course-cards/SubjectType.vue';
import CourseType from '../../components/course-cards/CourseType.vue';
</script>

<template>
<<<<<<< HEAD
  <div id="course" class="h-full w-full flex justify-center items-center">
    <div
      id="content"
      class="w-11/12 max-w-4xl h-auto mt-28 mb-8 pb-6 px-8 flex flex-col justify-start space-y-4 shadow-md test"
    >
      <div class="mt-3" id="button">
        <NuxtLink to="/courses">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
          <h3>Back to Courses</h3>
        </NuxtLink>
      </div>

      <div
        id="back"
        class="w-full h-5 flex justify-end items-center z-20 border-b border-solid border-zinc-200"
      ></div>
      <div
        id="title"
        class="w-full h-auto flex flex-col justify-start items-start pb-6 px-4 border-b border-solid border-zinc-200 relative"
      >
        <h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl">
          {{ course.name }}
        </h2>
        <div
          id="grade"
          class="flex justify-start items-start space-x-1 text-base font-light"
        >
          <p class="text-zinc-500 font-bold">Grade :</p>
          <p class="text-zinc-500 font-bold space-x-1">
            <span v-if="course?.freshman == true">9 </span>
            <span v-if="course?.sophomore == true">10 </span>
            <span v-if="course?.junior == true">11 </span>
            <span v-if="course?.senior == true">12 </span>
          </p>
        </div>
        <div class="flex mt-2 justify-start items-start">
          <SubjectType :subject="course?.subject" />
          <CourseType class="ml-4" :ap="course?.ap" />
        </div>
      </div>
      <div
        id="description"
        class="w-full flex flex-col justify-start items-start space-y-4"
      >
        <div
          class="w-full h-auto flex flex-col justify-start items-start px-4 space-y-1 pb-2"
        >
          <h5 class="text-xl font-semibold">Description</h5>
          <p class="text-base text-zinc-600 whitespace-pre-wrap" v-html="course.course_description"></p>
=======
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
                <h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl">{{ $route.params.id }}</h2>
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
>>>>>>> parent of 39dc9a23... Merge pull request #25 from sitechtimes/17-course-catalog-dynamic-routes
        </div>
    </div>
</template>