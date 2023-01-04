<script setup lang="ts">
const needed = { // use the other false/true stuff to check if duplicate classes (2 science 2 english etc). idk which classes can and cant have duplicates
    english: false,
    math: false,
    science: false,
    history: false,
    gym: false,
    lunch: false,
    russian: false,
    AP: 0,
    educationalPeriods: 0,
}
function changeNeeded() {
    if (document.querySelector(".dropdown").value === "Senior") {
        console.log(needed)
    }
}
</script>

<template>
    <div id="builder" class="flex justify-center items-center h-screen px-12">
        <h2 class="text-4xl font-semibold">Schedule Builder</h2>
        <h1> Make a Schedule for
            <select name="dropdown" class="dropdown" @click="changeNeeded()">
                <option value=""></option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
        Year </h1>
    </div>
</template>