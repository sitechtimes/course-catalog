<script setup lang="ts">
const emit = defineEmits<{
  (e: "e"): void;
}>();
</script>

<template>
  <img
    @click="emit('e')"
    src="/icons/search.svg"
    alt="Search"
    class="w-6 h-6"
  />
</template>
<style scoped>
img {
  filter: brightness(0) invert(1);
}
</style>
