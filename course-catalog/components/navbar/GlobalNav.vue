<script setup lang="ts">
import CloseMenu from "../icons/CloseMenu.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import MobileMenu from "./MobileMenu.vue";
import { ref } from "vue";

let menuOpen = ref(false);

const toggleMenu = () => {
  if (!menuOpen.value) {
    menuOpen.value = true;
  } else {
    menuOpen.value = false;
  }
};
</script>

<template>
  <nav
    class="fixed w-full h-20 top-0 flex justify-between items-center overflow-visible px-8 z-50 bg-white  md:px-10 lg:px-12"
  >
    <NuxtLink to="/landingpage" class="z-40"
      ><h1 class="text-3xl font-semibold">Course Catalog</h1></NuxtLink
    >
    <div
      class="hidden justify-center items-center space-x-10 lg:space-x-12 md:flex"
    >
      <NuxtLink to="/coursecatalog"><p class="text-base">Courses</p></NuxtLink>
      <NuxtLink to="/schedulebuilder"
        ><p class="text-base">Schedule Builder</p></NuxtLink
      >
    </div>

    <div
      id="menu-icon"
      class="flex justify-center items-center cursor-pointer z-40 md:hidden"
    >
      <CloseMenu @e="toggleMenu" v-if="menuOpen" />
      <MenuIcon @e="toggleMenu" v-else />
    </div>

    <MobileMenu v-if="menuOpen" @e="toggleMenu" />
  </nav>
</template>
