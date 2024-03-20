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
    <div class="mx-4 lg:w-[50%] lg:border-black lg:rounded-lg lg:border-2 lg:p-3">
        <h1 class="text-lg font-bold">Schedule</h1>
        <div v-for="(n, index) in schedule.length" class="flex flex-col py-1">
        <div v-if="schedule[index].name == undefined"
            class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4">
            <p class="text-lg font-semibold">Period {{ index + 1 }}</p>
            <div class="flex bg-primary-g p-1 rounded-lg hover:scale-110 transition duration-150 ease-in-out" @click="this.$emit('showCoursesModal')">
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
            <svg class="bg-[#EFABAC] p-1 rounded-lg hover:scale-110 transition duration-150 ease-in-out" @click="this.$emit('removeCourse', schedule[index])" fill="#000000" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                    </path>
                </g>
            </svg>
        </div>
    </div>
    </div>

</template>