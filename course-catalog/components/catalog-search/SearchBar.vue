<template>
    <div id="search" class="w-full flex justify-center items-center">
        <div id="search-bar" class="flex justify-center items-center relative">
        <input :value="modelValue" @input="$emit('update:modelValue', $event?.target?.value)" class="border border-gray-300 rounded w-112 h-10 p-2"/>
        <SearchButton class="absolute right-3 text-gray-400 cursor-pointer"/>
    </div>
</div>
</template>

<script lang="ts">
import SearchButton from '~/components/icons/SearchButton.vue';
export default {
    components: {
        SearchButton
    },
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>