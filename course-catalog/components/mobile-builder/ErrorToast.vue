<script lang="ts">
export default {
    name: 'ErrorToast',
    props: ['errorMessage']
}

</script>

<template>
    <div v-if="errorMessage" class="fixed top-10 z-50 bg-gray-300 w-8/12 rounded-lg p-8 flex justify-between">
        <h1>{{ errorMessage }}</h1>
        <button @click="this.$emit('close')">close</button>
    </div>
</template>