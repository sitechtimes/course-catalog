<template>
  <div
    class="w-64 h-10 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded cursor-pointer"
    id="sort"
    @click="isOpen = !isOpen"
  >
    <DownArrow
      class="absolute fill-zinc-400 right-2 top-[0.6rem] text-zinc-400 z-0 cursor-pointer"
    />
    <div class="w-40">
      <a class="flex justify-left mt-2 ml-3">
        <p class="font-bold" id="sortshow">Sort By</p>
      </a>
    </div>
    <div class="sub-menu" v-if="isOpen">
      <div
        @click="SubjectSort()"
        class="flex justify-left h-10 p-1 border border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">Subject</button>
      </div>
      <div
        @click="IncNameSort()"
        class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">Course Name (A-Z)</button>
      </div>
      <div
        @click="DecNameSort()"
        class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">Course Name (Z-A)</button>
      </div>
    </div>
  </div>
  <!-- <div id="sortComponent" class="mr-4 justify-center items-center relative hidden lg:flex">
        <select class="px-2 h-10 w-48 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded cursor-pointer font-semibold" name="sort" id="sort">
            <option value="" disabled selected>Sort By</option>
            <option @click="SubjectSort()" value="subject">Subject</option>
            <option @click="IncNameSort()" value="az">Course Name (A-Z)</option>
            <option @click="DecNameSort()" value="za">Course Name (Z-A)</option>
        </select>
        <DownArrow class="absolute right-2 top-[0.6rem] text-zinc-400 z-0"/>
    </div> -->
</template>

<script setup lang="ts">
import DownArrow from "../icons/DownArrow.vue";
import { ref, onMounted } from "vue";
import { useCourseStore } from "~~/store/store";
const name = ref("courseSort");
const input = ref("");
const props = ["title"];
const state = ref({
  courses: useCourseStore().courses,
  selected: "Sort By",
});
const isOpen = ref(false);
// state.value.isOpen = false;
// components: {
//   DownArrow,
// },
// props: ["title"],
// data() {
//   return {
//     // name: "courseSort",
//     courses: useCourseStore().courses,
//     selected: "Sort By",
//     isOpen: false,
//     input: ref(""),
//   };
// },

function SubjectSort() {
  function compare(a, b) {
    if (a.subject < b.subject) return -1;
    if (a.subject > b.subject) return 1;
    return 0;
  }
  /*                      if (a.subject != "OTHER") {
                        if (a.subject < b.subject)
                        return -1;
                     }
                    if (a.subject === "OTHER")
                        return 1;
                        return 0; */
  let sortshow = document.getElementById("sortshow");
  sortshow.innerHTML = "Subject";
  return this.courses.sort(compare);
}

function IncNameSort() {
  function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }
  let sortshow = document.getElementById("sortshow");
  sortshow.innerHTML = "Course Name (A-Z)";
  return this.courses.sort(compare);
}
function DecNameSort() {
  function compare(a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }
  let sortshow = document.getElementById("sortshow");
  sortshow.innerHTML = "Course Name (Z-A)";
  return this.courses.sort(compare);
}
function show() {
  onMounted(() => {
    return {
      name,
      input,
      props,
      isOpen,
    };
  });
}
</script>

<style scoped>
select {
  appearance: none;
}
.sub-menu {
  margin-top: 0.6rem;
}
#sort {
  border-radius: 0.5rem;
}
/* select::-ms-expand {
    display: none;
} */
</style>
