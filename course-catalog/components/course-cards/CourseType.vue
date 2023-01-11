<script setup lang="ts">
const ap = false
const elective = false
const college = true
</script>

<template>
    <div id="type" class="mt-2">
        <div v-if="ap" id="ap" class="rounded-full w-28 h-6 flex justify-center items-center bg-sky-300 text-sm">
            <p>AP Course</p>
        </div>
        <div v-if="elective" id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-emerald-300 text-sm">
            <p>Elective</p>
        </div>
        <div v-if="college" id="college" class="rounded-full w-28 h-6 flex justify-center items-center bg-rose-300 text-sm">
            <p>College Credit</p>
        </div>
    </div>
</template>