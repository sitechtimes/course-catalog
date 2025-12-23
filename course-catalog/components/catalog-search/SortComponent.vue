<template>
  <div
    class="w-72 h-10 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded cursor-pointer"
    id="sort"
    @click="isOpen = !isOpen"
  >
    <DownArrow
      class="absolute fill-zinc-400 right-2 top-[0.6rem] text-zinc-400 z-0 cursor-pointer"
    />
    <div class="w-40">
      <a class="flex justify-left mt-2 ml-3">
        <p class="font-bold" id="sortshow">{{ selected }}</p>
      </a>
    </div>
    <div class="sub-menu" v-if="isOpen">
      <div
        @click="SubjectSort()"
        class="flex justify-left h-10 p-1 border border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">
          {{ subject }}
        </button>
      </div>
      <div
        @click="IncNameSort()"
        class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">{{ atoz }}</button>
      </div>
      <div
        @click="DecNameSort()"
        class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400"
      >
        <button class="ml-2">{{ ztoa }}</button>
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
  <!-- <div
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
  </div> -->
</template>

<script setup lang="ts">
const name = ref("courseSort");
const input = ref("");
const props = ["title"];
const courses = ref(useCourseStore().courses);
const selected = ref("Sort By");
const isOpen = ref(false);
const subject = ref("Subject");
const atoz = ref("Course Name (A-Z)");
const ztoa = ref("Course Name (Z-A)");
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

const SubjectSort = computed(() => {
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
  return courses.value.sort(compare);
});

const IncNameSort = computed(() => {
  function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }
  let sortshow = document.getElementById("sortshow");
  sortshow.innerHTML = "Course Name (A-Z)";
  return courses.value.sort(compare);
});
const DecNameSort = computed(() => {
  function compare(a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }
  let sortshow = document.getElementById("sortshow");
  sortshow.innerHTML = "Course Name (Z-A)";
  return courses.value.sort(compare);
});
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
.color {
  fill: grey;
}
/* select::-ms-expand {
    display: none;
} */
.sub-menu {
  margin-top: 0.6rem;
}
#sort {
  border-radius: 0.5rem;
  margin-left: 5rem;
}
@media only screen and (max-width: 1180px) {
  #sort {
    margin-left: 6rem;
  }
}
@media only screen and (max-width: 800px) {
  #sort {
    width: 20rem;
    margin-left: 8rem;
  }
}
@media only screen and (max-width: 604px) {
  #sort {
    width: 15rem;
    margin-left: 0;
  }
}
</style>
