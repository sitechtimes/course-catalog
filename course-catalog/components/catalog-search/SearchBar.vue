<template>
  <div id="search" class="w-full">
    <div id="search-bar" class="flex items-center relative">
      <input
        :value="modelValue"
        placeholder="Search"
        @input="$emit('update:modelValue', $event?.target?.value)"
        class="border border-zinc-300 rounded w-112 h-10 p-2 text-zinc-800"
        id="search-input"
      />
      <SearchButton
        class="absolute text-zinc-400 cursor-pointer"
        id="search-icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchButton from "~/components/icons/SearchButton.vue";

defineProps<{
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>
<style scoped>
#search-input {
  border-radius: 0.5rem;
  margin-left: 1.5rem;
}
#search-icon {
  right: 6.5rem;
}
@media only screen and (max-width: 1180px) {
  #search-input {
    width: 28rem;
  }
}
@media only screen and (max-width: 800px) {
  #search-input {
    width: 20rem;
    margin-left: 1rem;
  }
  #search-icon {
    right: 8.5rem;
  }
}
@media only screen and (max-width: 670px) {
  #search-input {
    width: 18rem;
  }
}
@media only screen and (max-width: 604px) {
  #search-input {
    margin-left: 0rem;
    width: 15rem;
  }
  #search-icon {
    right: 0.5rem;
  }
}
</style>
