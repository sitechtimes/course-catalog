<script lang="ts">
import Placeholder from "../schedule builder/Placeholder.vue";
</script>
<template>
  <table class="">
    <tr class="">
      <th class="p-4 py-2">Period</th>
      <th class="px-20">Class</th>
    </tr>
    <tr class="border-t-4">
      <td class="">1</td>
      <td><div class="placeholder" id="first"></div></td>
    </tr>
    <tr class="">
      <td class="">2</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">3</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">4</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">5</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">6</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">7</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">8</td>
      <td><div class="placeholder"></div></td>
    </tr>
    <tr class="">
      <td class="">9</td>
      <td><div class="placeholder" id="last"></div></td>
    </tr>
  </table>
</template>
<style scoped>
table {
  border: 4px solid lightgrey;
  text-align: center;
}
th,
td {
  border-right: 4px solid lightgrey;
}
table {
  margin-top: 1rem;
}
.placeholder {
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 1rem 2rem 0.2rem 2rem;
}
#first {
  margin-top: 1.2rem;
}
#last {
  margin-bottom: 1.5rem;
}
</style>
