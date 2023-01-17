<template>
        <div id="search" class="w-full flex justify-start items-center space-x-4">
        <select name="sort" id="sort" class="w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
                </select>
    <div id="search-bar" class="flex justify-center items-center relative">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="border border-gray-300 rounded w-112 h-10 p-2"/>
        <SearchButton class="absolute right-3 text-gray-400 cursor-pointer"/>
    </div>
    </div>
</template>

<script lang="ts">
import SearchButton from '../icons/SearchButton.vue';
export default {
    components: {
        SearchButton
    },
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>