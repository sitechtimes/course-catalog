<script lang="ts">
import Placeholder from "../schedule builder/Placeholder.vue";
export default {
  name: "Scheduler",
  props: {
    schedule: [{
      period: Number,
      name: String,
    }]
  }
}
</script>
<template>
  <table class="">
    <tr class="">
      <th class="p-4 py-2" id="right">Period</th>
      <th class="px-20">Class</th>
    </tr>
    <tr class="border-t-4">
      <td class="">1</td>
      <td><div class="placeholder" id="first">{{ schedule[0].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">2</td>
      <td><div class="placeholder">{{ schedule[1].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">3</td>
      <td><div class="placeholder">{{ schedule[2].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">4</td>
      <td><div class="placeholder">{{ schedule[3].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">5</td>
      <td><div class="placeholder">{{ schedule[4].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">6</td>
      <td><div class="placeholder">{{ schedule[5].name }}</div></td>
    </tr>
    <tr class="">
      <td class="">7</td>
      <td><div class="placeholder">{{schedule[6].name}}</div></td>
    </tr>
    <tr class="">
      <td class="">8</td>
      <td><div class="placeholder">{{schedule[7].name}}</div></td>
    </tr>
    <tr class="">
      <td class="">9</td>
      <td><div class="placeholder" id="last">{{schedule[8].name}}</div></td>
    </tr>
  </table>
</template>
<style scoped>
table {
  border: 4px solid lightgrey;
  text-align: center;
  /* border-collapse: separate;
  border-spacing: 5rem; */
}
table,
td {
  border-radius: 5px;
  -moz-border-radius: 5px;
}
#right {
  border-right: 4px solid lightgrey;
}
td {
  margin-top: 2rem;
}
table {
  margin-top: 1rem;
}
p {
  margin-top: 1rem;
}
.placeholder {
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 1rem 2rem 0.2rem 2rem;
}
/* #first {
  margin-top: 1.2rem;
}*/
#lastnum {
  margin-top: 0rem;
}
#last {
  margin-bottom: 1.5rem;
}
@media only screen and (min-width: 1440px) {
}
</style>
