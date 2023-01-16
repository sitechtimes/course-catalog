<!-- <script lang="ts">
import SearchButton from '~/components/icons/SearchButton.vue';
import { defineComponent } from 'vue'
import { ref } from "vue";


export default defineComponent({
    props: {
        courses: String,
        search: String,
    },
    components: {
        SearchButton
    },
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
            ]
        }
    },
    methods: {
    filteredCourses() {
        let input = ref("");
        return this.courses.filter((course) => {
           console.log(course.name.toLowerCase().includes(input.value.toLowerCase()))
        })
    }
},
    mounted(){
        this.courses
        this.search
        this.filteredCourses
    }
})

</script>

<template>
    <body>
    <div id="search" class="w-full flex justify-start items-center space-x-4">
        <select name="sort" id="sort" class="w-40 h-10 p-1 border border-gray-300 bg-white text-gray-400 rounded">
                    <option>Sort by</option>
                    <option value="name">Course Name</option>
                    <option value="subject">Subject</option>
                    <option value="grade">Grade</option>
        </select>
        <div id="search-bar" class="flex justify-center items-center relative">
                    <input type="text" placeholder="Search" class="border border-gray-300 rounded w-112 h-10 p-2"/>
                    <SearchButton @click="filteredCourses()" class="absolute right-3 text-gray-400 cursor-pointer"/>
        </div>
    </div>
    <div v-for="(course) in filteredCourses()"
        :key="course.name"
            :name="course.name"
            :desc="course.desc">
            <div>
                <h2>{{ course.name }}</h2>
                <h3>{{ course.desc }}</h3>
            </div>
    </div>
    </body>
</template> -->

<template>
    <body>
    <input type="text" v-model="input" placeholder="Search fruits..." />
   <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
     <p>{{ fruit }}</p>
   </div>
   <div class="item error" v-if="input&&!filteredList().length">
      <p>No results found!</p>
   </div>
</body>
 </template>

<script setup lang="ts">
import { ref } from "vue";
let input = ref("");
const fruits =[
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
            ];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<!--  <template>
    <div>
    <div v-bind:class="id">
      <h2>{{ title }}</h2>
      <img v-bind:src="image" class="image" alt="" />
      <p>${{ price }}</p>
      <button @click="add(index)">Add to Cart!</button>
      <button @click="remove(index)">Remove from Cart!</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      title: String,
      price: Number,
      image: String,
      id: Number,
      input: String,
      index: Number,
      add: Function,
      remove: Function,
      filteredList: Function,
    },
  };
  </script>
   -->