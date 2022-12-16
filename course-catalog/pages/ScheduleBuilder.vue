<template>
    <div id="builder" class="flex justify-center items-center h-screen px-12">
        <GlobalNav/>
        <h2 class="text-4xl font-semibold">Schedule Builder</h2>
    </div>
</template>

<script>
import GlobalNav from '~/components/navbar/GlobalNav.vue';

export default {
    name: "ScheduleBuilder",
    components: { GlobalNav }
}
</script>