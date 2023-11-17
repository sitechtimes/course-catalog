<script lang="ts">

export default {
    name: 'Schedule',
    data() {
        return {
            classes: [
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
                {
                    name: ""
                },
            ],
        }
    },
}

</script>

<template>
    <div class="flex">
        <div>
            <div v-for="x in classes" class="flex align-middle">
                <h2>{{ classes.indexOf(x) + 1 }}</h2>
                <div class="flex p-5">
                    {{ x.name }}
                </div>
            </div>
        </div>
    </div>
</template>