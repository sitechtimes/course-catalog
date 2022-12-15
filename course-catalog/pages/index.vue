<template>
  <div id="landing" class="flex justify-center items-center h-screen">
    <GlobalNav/>
    <h2 class="text-4xl font-semibold">Learn more about the courses offered at Staten Island Technical High School.</h2>
  </div>
</template>

<script>
import GlobalNav from '~/components/navbar/GlobalNav.vue';
export default {
    name: "LandingPage",
    components: { GlobalNav }
}
</script>
