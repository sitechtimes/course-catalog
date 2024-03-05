<script lang="ts">

export default {
    name: 'Schedule',
    props: ['schedule', 'year'],
    data () {
        return {
            emojis: [{
            "LANG": "https://em-content.zobj.net/source/apple/354/flag-russia_1f1f7-1f1fa.png",
            "PE": "https://em-content.zobj.net/source/apple/354/person-lifting-weights_1f3cb-fe0f.png",
            "ARTS": "https://em-content.zobj.net/source/apple/354/performing-arts_1f3ad.png",
            "TECH": "https://em-content.zobj.net/source/apple/354/laptop_1f4bb.png",
            "SS": "https://em-content.zobj.net/source/apple/354/scroll_1f4dc.png",
            "ENGLISH": "https://em-content.zobj.net/source/apple/354/books_1f4da.png",
            "SCIENCE": "https://em-content.zobj.net/source/apple/354/atom-symbol_269b-fe0f.png",
            "MATH": "https://em-content.zobj.net/source/apple/354/abacus_1f9ee.png",
            "LUNCH": "https://em-content.zobj.net/source/apple/354/fork-and-knife-with-plate_1f37d-fe0f.png"
        }]
        }

    },
}

</script>

<template>
    <div class="mx-4 md:w-[50%]">
        <h1 class="text-lg font-bold">Schedule</h1>
        <div v-for="(n, index) in schedule.length" class="flex flex-col py-1">
        <div v-if="schedule[index].name == undefined"
            class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4">
            <p class="text-lg font-semibold">Period {{ index + 1 }}</p>
            <div class="flex" @click="this.$emit('showCoursesModal')">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20">
                    <path d="M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z" />
                </svg>
                <p>Add</p>
            </div>
        </div>

        <div v-else class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4">
            <img class="w-12 h-9" :src="emojis[0][schedule[index].subject]">
            <div class="flex flex-col items-start w-full">
                <p class="text-lg font-bold">{{ schedule[index].name }}</p>
                <p class="text-sm">Period {{ index + 1 }}</p>
            </div>
            <svg @click="this.$emit('removeCourse', schedule[index])" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24">
                <path
                    d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z">
                </path>
            </svg>
        </div>
    </div>
    </div>

</template>