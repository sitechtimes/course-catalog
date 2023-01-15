<script setup lang="ts">
const type = 'ap'
</script>

<template>
    <div id="type" class="mt-2">
        <div v-if="type == 'ap'" id="ap" class="rounded-full w-28 h-6 flex justify-center items-center bg-cyan-200 text-sm">
            <p>AP Course</p>
        </div>
        <div v-if="type == 'collegeCred'" id="cred" class="rounded-full w-28 h-6 flex justify-center items-center bg-rose-200 text-sm">
            <p>College Credit</p>
        </div>
        <div v-if="type == 'collegeNow'" id="now" class="rounded-full w-28 h-6 flex justify-center items-center bg-rose-200 text-sm">
            <p>College Credit</p>
        </div>
    </div>
</template>