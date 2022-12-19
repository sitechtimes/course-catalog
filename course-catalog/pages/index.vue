<template>
  <div id="landing" class="flex justify-center items-center h-screen px-12">
    <GlobalNav/>
    <div id="info" class="w-11/12 flex flex-col justify-center items-center space-y-4 max-w-2xl lg:w-2/3">
      <h2 class="text-4xl font-semibold">Learn about the courses offered at Staten Island Technical High School.</h2>
      <p class="text-xl font-medium">Learn more about available courses and plan ahead by creating mock schedules.</p>
      <div id="btns" class="w-full flex justify-start items-start space-x-8">
        <NuxtLink to="/coursecatalog"><button class="bg-secondary-s text-white w-40 h-12 rounded">View Courses</button></NuxtLink>
        <NuxtLink to="/schedulebuilder"><button class="bg-secondary-s text-white w-40 h-12 rounded">Build Schedule</button></NuxtLink>
      </div>
    </div>
    <div id="circles" class="-z-10 absolute h-128 w-128  flex justify-center items-center lg:relative">
      <div id="big" class=" h-96 w-96 bg-tertiary-s rounded-full right-32"></div>
      <div id="small" class=" h-40 w-40 absolute bottom-4 left-12 bg-primary-s rounded-full"
      ></div>
    </div>
  </div>
</template>

<script>
import GlobalNav from '~/components/navbar/GlobalNav.vue';
export default {
    name: "LandingPage",
    components: { GlobalNav }
}
</script>
