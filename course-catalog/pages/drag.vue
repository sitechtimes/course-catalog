<script setup lang="ts">
import draggable from 'vuedraggable'
  
let myArray = ref([
        {id: 0, name: 'test1'},
        {id: 1, name: 'test2'},
        {id: 2, name: 'test3'},
        {id: 3, name: 'test4'},
        {id: 4, name: 'test5'}
      ])

</script>

<template>
<draggable v-model="myArray" handle=".handle">
 <template #item="{element: item}">
  <div class="item">
    <div class="title">{{item.name}}</div>
    <div class="handle">Sort</div>
  </div>
 </template>
</draggable>
</template>
