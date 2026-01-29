<script setup lang="ts">
const years = ["Freshman", "Sophomore", "Junior", "Senior"];

const emit = defineEmits<{
  (e: "updateYear", year: string): void;
}>();

const yearPicked = (year: string) => {
  emit("updateYear", year);
};
</script>

<template>
  <div
    class="flex flex-col mt-20 h-4/5 px-8 justify-center place-content-center min-h-screen"
  >
    <h1 class="text-4xl font-bold mb-2 text-secondary-s">Pick your Year</h1>
    <p class="text-gray-600 mb-8">
      Select your current academic year to start building your schedule
    </p>
    <div class="flex flex-col gap-4 my-6">
      <button
        v-for="year in years"
        type="button"
        @click="yearPicked(year)"
        class="btn-year"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>
