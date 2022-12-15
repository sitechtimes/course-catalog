<template>
  <nav
    class="fixed w-full h-24 top-0 flex justify-between items-center overflow-visible px-8 md:px-10 lg:px-12"
  >
    <NuxtLink to="/" @click="toggleMenu" class="z-40"
      ><h1 class="text-3xl font-semibold">Course Catalog</h1></NuxtLink
    >
    <div
      class="hidden justify-center items-center space-x-10 lg:space-x-12 md:flex"
    >
      <NuxtLink to="/courses"><p class="text-base">Courses</p></NuxtLink>
      <NuxtLink to="/builder"><p class="text-base">Schedule Builder</p></NuxtLink>
    </div>

    <div
      id="menu-icon"
      class="flex justify-center items-center cursor-pointer z-40 md:hidden"
    >
      <CloseMenu @click="toggleMenu" v-if="menuOpen" />
      <MenuIcon @click="toggleMenu" v-else />
    </div>

    <MobileMenu v-if="menuOpen" @e="toggleMenu" />
  </nav>
</template>

<script>
import CloseMenu from '../icons/CloseMenu.vue';
import MenuIcon from '../icons/MenuIcon.vue'
import MobileMenu from './MobileMenu.vue';


export default {
    name: "GlobalNavbar",
    data() {
        return {
            menuOpen: true,
        };
    },
    created() {
      this.menuOpen = false
    },
    methods: {
        toggleMenu() {
            if (!this.menuOpen) {
                this.menuOpen = true;
            }
            else {
                this.menuOpen = false;
            }
        }
    },
    components: { MenuIcon, CloseMenu, MobileMenu }
}
</script>