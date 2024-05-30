<script lang="ts">

export default {
    name: 'YearPicker',
    props: ["window"],
    data () {
        return {
            years: ["Freshman", "Sophomore", "Junior", "Senior"]
        }
    },
    methods: {
        handleYearSelection(year:String) {
            this.$emit('updateYear', year)
        }
    }
}

</script>

<template>
    <div v-if="window.width <= 1200" class="flex flex-col mt-20 gap-y-6 items-center justify-center h-5/6">
        <h1 class="text-4xl mb-[12px] text-center">Which year do you want to build a schedule for?</h1>
        <div class="flex flex-col gap-y-2 w-full items-center">
            <button class="bg-sky-500 py-2 w-3/4 px-4 text-white" v-for="year in years" @click="handleYearSelection(year)">{{ year }}</button>
        </div>
    </div>    
    <div v-else class="flex flex-wrap mt-20 gap-x-6 items-center justify-center h-5/6">
        <h1 class="text-5xl mb-[12px] w-1/4 text-start">Which year do you want to build a schedule for?</h1>
        <div class="flex flex-col w-1/6 gap-y-2">
            <button class="bg-sky-500 py-2 px-4 text-white" v-for="year in years" @click="handleYearSelection(year)">{{ year }}</button>
        </div>
    </div>        
</template>