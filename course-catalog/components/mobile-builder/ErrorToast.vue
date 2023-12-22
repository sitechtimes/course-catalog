<script lang="ts">
export default {
    name: 'ErrorToast',
    props: ['errorMessage']
}

</script>

<template>
    <div data-te-animation-init data-te-animation="[fade-in-down_1s_ease-in-out]" v-if="errorMessage" class="fixed top-20 inset-x-0 z-50 w-full flex justify-center">
        <div class="flex justify-between items-center bg-[#EF4444] w-11/12 rounded-lg py-4 px-6 text-white drop-shadow-lg">
            <div class="w-8/12">
                <p class="text-sm opacity-90">{{ errorMessage }}</p>
            </div>

            <button class="w-fit px-4 border-slate-50 border rounded-lg h-8 text-sm" @click="this.$emit('close')">Close</button>
        </div>
    </div>
</template>