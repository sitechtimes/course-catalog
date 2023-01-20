<script setup lang="ts">
const type = true;
interface course {
  name: string;
  freshman: boolean;
  sophomore: boolean;
  junior: boolean;
  senior: boolean;
  ap: boolean;
}
defineProps<{
  course: course;
}>();
</script>
z
<template>
  <div class="placeholder">
    <h4>{{ course?.name }}</h4>
  </div>
</template>
<style scoped>
h4 {
  margin-top: 3px;
  font-weight: bold;
}
.placeholder {
  text-align: center;
  font-size: 1.2rem;
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 1rem 2rem 0.2rem 2rem;
  transition: 0.3s;
}
.placeholder:hover {
  opacity: 0.5;
  cursor: pointer;
}
.placeholder:active {
  background-color: #ededed;
}
</style>
