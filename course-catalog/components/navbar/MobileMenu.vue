<template>
    <div id="menu" class="fixed inset-0 h-screen w-full  ease-in duration-200 md:hidden">
        <div id="overlay" class="absolute inset-0 w-full h-full bg-white opacity-100 -z-10"></div>
        <div class="h-full absolute left-16 pb-24 flex flex-col justify-center items-start space-y-8 z-10">
            <NuxtLink @click="$emit('e')" id="link" to="/courses"><p class="text-4xl">Courses</p></NuxtLink>
            <NuxtLink @click="$emit('e')" id="link" to="/builder"><p class="text-4xl">Schedule Builder</p></NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    return {
    }
  },
  mounted() {
    // const tl = gsap.timeline({
    //     defaults: {
    //         duration: 1,
    //         ease: 'power2.out'
    //         }
    //     })

    //     tl.from('#link', {
    //         x: -100, 
    //         opacity: 0,
    //         stagger: 0.2,
    //     }, '-=0.2')
  },
  methods: {
  },
}
</script>