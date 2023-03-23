<template>
  <!-- <div class="w-60 h-10 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded" id="sort" @click="isOpen = !isOpen" >
                    <div>
        <a class="ml-2 mt-1">
            <p id="sortshow">Sort By</p>
        </a>
        </div>
         <div class="sub-menu" v-if="isOpen">
           <div @click="SubjectSort()" class="mt-2 w-40 h-10 p-1 border border-zinc-300 bg-white text-zinc-400 rounded">
              <button>Subject</button>
            </div>
            <div @click="IncNameSort()" class="w-40 h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400 rounded">
             <button>Course Name (A-Z)</button>
            </div>
            <div @click="DecNameSort()" class="w-40 h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400 rounded">
             <button>Course Name (Z-A)</button>
            </div>
        </div>
    </div> -->
  <div
    id="sortComponent"
    class="mr-4 justify-center items-center relative hidden lg:flex"
  >
    <select
      class="px-2 h-10 w-48 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded cursor-pointer font-semibold"
      name="sort"
      id="sort"
    >
      <option value="" disabled selected>Sort By</option>
      <option @click="SubjectSort()" value="subject">Subject</option>
      <option @click="IncNameSort()" value="az">Course Name (A-Z)</option>
      <option @click="DecNameSort()" value="za">Course Name (Z-A)</option>
    </select>
    <DownArrow class="color absolute right-2 top-[0.6rem] text-zinc-400 z-0" />
  </div>
</template>

<script lang="ts">
import DownArrow from "../icons/DownArrow.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { useCourseStore } from "~~/store/store";
export default defineComponent({
  name: "courseSort",
  components: {
    DownArrow,
  },
  props: ["title"],
  data() {
    return {
      courses: useCourseStore().courses,
      selected: "Sort By",
      isOpen: false,
      input: ref(""),
    };
  },
  methods: {
    SubjectSort() {
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
    },
    IncNameSort() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      let sortshow = document.getElementById("sortshow");
      sortshow.innerHTML = "Course Name (A-Z)";
      return this.courses.sort(compare);
    },
    DecNameSort() {
      function compare(a, b) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
      let sortshow = document.getElementById("sortshow");
      sortshow.innerHTML = "Course Name (Z-A)";
      return this.courses.sort(compare);
    },
  },
});
</script>

<style scoped>
select {
  appearance: none;
}
.color {
  fill: grey;
}
/* select::-ms-expand {
    display: none;
} */
</style>
