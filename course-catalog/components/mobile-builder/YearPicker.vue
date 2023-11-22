<script lang="ts">

export default {
    name: 'YearPicker',
    data () {
        return {
            years: ["Freshman", "Sophomore", "Junior", "Senior"]
        }
    },
    methods: {
        yearPicked(year:String) {
            this.$emit('updateYear', year)
        }
    }
}

</script>

<template>
    <div class="flex flex-col mt-20 h-4/5 px-8 justify-center place-content-center">
        <h1 class="text-3xl align-middle">Pick your Year</h1>
        <div class="flex flex-col gap-2">
            <button v-for="year in years" type="button" @click="yearPicked(year)" class="flex bg-indigo-200 rounded-[15px] my-1.5 font-bold justify-center items-center h-[44px]">
                {{year}}
            </button>
        </div>
    </div>
</template>