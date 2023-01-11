<script setup lang="ts">
const math = false
const english = false
const science = true
</script>

<template>
    <div id="type" class="mt-2">
        <div v-if="math" id="math" class="rounded-full w-28 h-6 flex justify-center items-center bg-red-400 text-sm">
            <p>Math</p>
        </div>
        <div v-if="english" id="english" class="rounded-full w-28 h-6 flex justify-center items-center bg-blue-400 text-sm">
            <p>English</p>
        </div>
        <div v-if="science" id="science" class="rounded-full w-28 h-6 flex justify-center items-center bg-green-400 text-sm">
            <p>Science</p>
        </div>
    </div>
</template>