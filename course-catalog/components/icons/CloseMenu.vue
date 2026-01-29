<script setup lang="ts">
const emit = defineEmits<{
  (e: "e"): void;
}>();
</script>

<template>
  <img
    @click="emit('e')"
    src="/icons/close-menu.svg"
    alt="Close"
    class="w-7 h-7"
  />
</template>
