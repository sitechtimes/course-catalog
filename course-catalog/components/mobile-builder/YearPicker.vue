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
        <h1 class="text-3xl align-start fw-bold">Pick your Year</h1>
        <div class="flex flex-col gap-2 my-10">
            <button v-for="year in years" type="button" @click="yearPicked(year)" class="flex rounded-[15px] my-1.5 h-[44px]  justify-center items-center text-white bg-[#37394F] font-medium">
                {{year}}
            </button>
        </div>
    </div>
</template>