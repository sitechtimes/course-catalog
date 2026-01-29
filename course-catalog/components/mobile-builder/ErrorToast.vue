<script setup lang="ts">
defineProps<{
  errorMessage: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
    <div v-if="errorMessage" class="fixed top-20 inset-x-0 h-screen z-50 w-full flex justify-center">
        <div class="flex justify-between items-center bg-[#EF4444] h-16 w-11/12 rounded-lg py-4 px-6 text-white drop-shadow-lg">
            <div class="w-8/12">
                <p class="text-sm opacity-90">{{ errorMessage }}</p>
            </div>

            <button class="w-fit px-4 border-slate-50 border rounded-lg h-8 text-sm" @click="emit('close')">Close</button>
        </div>
    </div>
</template>