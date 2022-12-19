<template>
    <div id="courses" class="flex justify-center items-start h-screen px-12">
        <GlobalNav/>
        <div id="content" class="w-full mt-24 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <div id="search" class="w-full flex justify-start items-center space-x-4">
                <select name="sort" id="sort" class="w-40 h-10 p-1 border border-gray-300 text-gray-400 rounded">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
                </select>
                <input type="text" placeholder="Search" class="border border-gray-300 rounded w-112 h-10 p-2">
            </div>
        </div>
    </div>
</template>

<script>
import GlobalNav from '~/components/navbar/GlobalNav.vue';

export default {
    name: "CourseCatalog",
    components: { GlobalNav }
}
</script>