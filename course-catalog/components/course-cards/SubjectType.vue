<script setup lang="ts">
defineProps({
  subject: String,
});
</script>

<template>
  <div id="type" class="mt-2">
    <div
      v-if="subject == 'MATH'"
      id="math"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-red-200 text-sm"
    >
      <p>Math</p>
    </div>
    <div
      v-if="subject == 'ENGLISH'"
      id="english"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-blue-200 text-sm"
    >
      <p>English</p>
    </div>
    <div
      v-if="subject == 'SCIENCE'"
      id="science"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-green-200 text-sm"
    >
      <p>Science</p>
    </div>
    <div
      v-if="subject == 'SS'"
      id="history"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-purple-200 text-sm"
    >
      <p>Social Studies</p>
    </div>
    <div
      v-if="subject == 'LANG'"
      id="russian"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-orange-200 text-sm"
    >
      <p>Language</p>
    </div>
    <div
      v-if="subject == 'PE'"
      id="pe"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-yellow-200 text-sm"
    >
      <p>Phys. Ed</p>
    </div>
    <div
      v-if="subject == 'TECH'"
      id="elective"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-teal-200 text-black text-sm"
    >
      <p>Technology</p>
    </div>
    <div
      v-if="subject == 'ARTS'"
      id="elective"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-pink-200 text-black text-sm"
    >
      <p>Arts</p>
    </div>
    <div
      v-if="subject == 'OTHER'"
      id="elective"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-zinc-200 text-black text-sm"
    >
      <p>Other</p>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 800px) {
  .tag {
    width: 5.5rem;
    font-size: 0.7rem;
  }
}
</style>
