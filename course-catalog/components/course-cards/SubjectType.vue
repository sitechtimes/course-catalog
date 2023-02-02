<script setup lang="ts">
defineProps({
    subject: String,
})
</script>

<template>
    <div id="type" class="mt-2">
        <div v-if="subject == 'MATH'" id="math" class="rounded-full w-28 h-6 flex justify-center items-center bg-red-200 text-sm">
            <p>Math</p>
        </div>
        <div v-if="subject == 'ENGLISH'" id="english" class="rounded-full w-28 h-6 flex justify-center items-center bg-blue-200 text-sm">
            <p>English</p>
        </div>
        <div v-if="subject == 'SCI'" id="science" class="rounded-full w-28 h-6 flex justify-center items-center bg-green-200 text-sm">
            <p>Science</p>
        </div>
        <div v-if="subject == 'SS'" id="history" class="rounded-full w-28 h-6 flex justify-center items-center bg-purple-200 text-sm">
            <p>Social Studies</p>
        </div>
        <div v-if="subject == 'LANG'" id="russian" class="rounded-full w-28 h-6 flex justify-center items-center bg-orange-200 text-sm">
            <p>Language</p>
        </div>
        <div v-if="subject == 'PE'" id="pe" class="rounded-full w-28 h-6 flex justify-center items-center bg-yellow-200 text-sm">
            <p>Gym</p>
        </div>
        <div v-if="subject == 'TECH'" id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-teal-200 text-black text-sm">
            <p>Technology</p>
        </div>
        <div v-if="subject == 'ARTS'" id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-pink-200 text-black text-sm">
            <p>Arts</p>
        </div>
        <div v-if="subject == 'OTHER'" id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-zinc-200 text-black text-sm">
            <p>Other</p>
        </div>
    </div>
</template>