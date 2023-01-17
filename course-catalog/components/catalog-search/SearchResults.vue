<script lang="ts">
import SearchComponent from './SearchComponent.vue';
import { defineComponent } from 'vue';
import { ref } from "vue";

export default defineComponent({
  components: { SearchComponent },
  data() {
    return {
        courses: [
                {
                    name: "Calculus BC",
                    desc: "math"
                },
                {
                    name: "Biology",
                    desc: "science"
                },
                {
                    name: "AP Literature",
                    desc: "ela"
                },
                {
                    name: "AP Government",
                    desc: "history"
                },
                {
                    name: "College Russian",
                    desc: "russian"
                }
            ],
            input: ref("")
         }
        },
        computed: {
            filteredList() {
                return this.courses.filter((course) => {
                return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
                }
            )}
        },
        mounted() {
            this.filteredList
            }
})
</script>

<template>
<div>
    <SearchComponent type="text" v-model="input" placeholder="Search Courses..." />
    <div class="item fruit" v-for="course in filteredList" :key="course">
     <p>{{ course }}</p>
   </div>
   <div class="item error" v-if="input&&!filteredList.length">
      <p>No results found!</p>
   </div>
</div>
</template>