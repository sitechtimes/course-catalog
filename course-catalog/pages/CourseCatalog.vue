<template>
    <div id="courses" class="flex justify-center items-start h-screen px-12">
        <GlobalNav/>
        <div id="content" class="w-full mt-24 space-y-6">
            <h2 class="text-center text-4xl font-semibold">Courses</h2>
            <div id="search" class="w-full flex justify-start items-center space-x-6">
                <select name="sort" id="sort" class="w-40 h-8 p-2 border border-black rounded">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
                </select>
                <input type="text" class="border border-black rounded w-96 h-8 ">
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