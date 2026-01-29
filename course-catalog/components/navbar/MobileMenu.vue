<script setup lang="ts">
const emit = defineEmits<{
  (e: "e"): void;
}>();
</script>

<template>
  <div
    id="menu"
    class="fixed inset-0 h-screen w-full ease-in duration-200 md:hidden"
  >
    <div
      id="overlay"
      class="absolute inset-0 w-full h-full bg-white opacity-100 -z-10"
    ></div>
    <div
      class="h-full absolute left-16 right-16 pb-24 flex flex-col justify-center items-start space-y-8 z-10"
    >
      <NuxtLink id="link" to="/"
        ><p @click="emit('e')" class="text-4xl">Home</p></NuxtLink
      >
      <NuxtLink id="link" to="/courses"
        ><p @click="emit('e')" class="text-4xl">Courses</p></NuxtLink
      >
      <NuxtLink id="link" to="/builder"
        ><p @click="emit('e')" class="text-4xl">Schedule Builder</p></NuxtLink
      >
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 565px) {
  #link {
    font-size: 1.5rem;
  }
}
</style>
