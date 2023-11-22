<script lang="ts">
export default {
    name: 'ErrorToast',
    props: ['errorMessage']
}

</script>

<template>
    <div v-if="errorMessage" class="bg-red-600">
        <h1>{{ errorMessage }}</h1>
        <button @click="this.$emit('closeError')">close</button>
    </div>
</template>