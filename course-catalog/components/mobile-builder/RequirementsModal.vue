<template>
    <h1> test </h1>
    <div>
      <h2>test</h2>
      <draggable v-model="arrary" item-key="id">
    <template #item="{element}">
      <div> {{element.name}} </div>
    </template>
  </draggable>
    </div>
  </template>
  
  <script>
  import draggable from 'vuedraggable'
  
  export default {
    name: "App",
    components: {
      draggable
    },
    data () {
      return {
        arrary: [
          {"name": "test"},
          {"name": "test2"},
          {"name": "test3"},
          {"name": "test4"},
          {"name": "test5"}
        ]
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  