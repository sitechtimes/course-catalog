<script setup lang="ts">
const subject = 'elective'
</script>

<template>
    <div id="type" class="mt-2">
        <div v-if="subject == 'math'" id="math" class="rounded-full w-28 h-6 flex justify-center items-center bg-red-200 text-sm">
            <p>Math</p>
        </div>
        <div v-if="subject == 'english'" id="english" class="rounded-full w-28 h-6 flex justify-center items-center bg-blue-200 text-sm">
            <p>English</p>
        </div>
        <div v-if="subject == 'science'" id="science" class="rounded-full w-28 h-6 flex justify-center items-center bg-green-200 text-sm">
            <p>Science</p>
        </div>
        <div v-if="subject == 'history'" id="history" class="rounded-full w-28 h-6 flex justify-center items-center bg-purple-200 text-sm">
            <p>History</p>
        </div>
        <div v-if="subject == 'russian'" id="russian" class="rounded-full w-28 h-6 flex justify-center items-center bg-orange-200 text-sm">
            <p>Russian</p>
        </div>
        <div v-if="subject == 'pe'" id="pe" class="rounded-full w-28 h-6 flex justify-center items-center bg-amber-200 text-sm">
            <p>Phys Ed</p>
        </div>
        <div v-if="subject == 'elective'" id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-teal-200 text-black text-sm">
            <p>Elective</p>
        </div>
    </div>
</template>