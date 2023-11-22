<script lang="ts">

export default {
    name: 'Schedule',
    props: ['schedule']
}

</script>

<template>
    <div class="flex justify-center">
        <div>
            <div v-for="(n,index) in schedule.length" class="flex align-middle w-full justify-between">
                <div class="flex my-1.5 font-bold justify-start w-[45px] h-[45px] items-center">{{ n }}</div>
                <div v-if="schedule[index].name == undefined" class="flex border-2 border-black w-[288px] h-[44px] rounded-[15px] my-1.5 font-bold justify-center items-center" @click="this.$emit('removeCourse', schedule[index])">
                    {{ schedule[index].name }}
                </div>
                <div v-else class="flex border-2 border-black w-[288px] h-[44px] rounded-[15px] my-1.5 font-bold justify-center items-center" :id="schedule[index].subject" @click="this.$emit('removeCourse', schedule[index])">
                    {{ schedule[index].name }}
                </div>
            </div>
        </div>
    </div>
</template>