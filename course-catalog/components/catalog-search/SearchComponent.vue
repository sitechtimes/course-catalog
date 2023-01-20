<template>
    <div id="search" class="w-full flex justify-center items-center">
    <select name="sort" id="sort" class=" hidden w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 mr-4 rounded md:block">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
                </select>
    <div id="search-bar" class="flex justify-center items-center relative">
        <input :value="modelValue" @input="$emit('update:modelValue', $event?.target?.value)" class="border border-gray-300 rounded w-112 h-10 p-2"/>
        <SearchButton class="absolute right-3 text-gray-400 cursor-pointer"/>
    </div>
</div>
</template>

<script lang="ts">
import SearchButton from '~/components/icons/SearchButton.vue';
import Sort from '../catalog-search/Sort.vue';
export default {
    components: {
        SearchButton,
        Sort
    },
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>
