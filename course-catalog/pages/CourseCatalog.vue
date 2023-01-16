<script setup lang="ts">
import SearchComponent from '~/components/catalog-search/SearchComponent.vue';
import SearchResults from '~/components/catalog-search/SearchResults.vue';
</script>

<template>
    <div id="courses" class="flex justify-center items-start h-screen px-12">
        <div id="content" class="w-full mt-24 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <SearchComponent/>
            <SearchResults/>
        </div>
    </div>
</template>
