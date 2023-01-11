<template>
  <table class="">
    <tr class="">
      <th>Period</th>
      <th>Class</th>
    </tr>
    <tr class="">
      <td class="">1</td>
      <td><slot name="p1"></slot></td>
    </tr>
    <tr class="">
      <td class="">2</td>
      <td><slot name="p2"></slot></td>
    </tr>
    <tr class="">
      <td class="">3</td>
      <td><slot name="p3"></slot></td>
    </tr>
    <tr class="">
      <td class="">4</td>
      <td><slot name="p4"></slot></td>
    </tr>
    <tr class="">
      <td class="">5</td>
      <td><slot name="p5"></slot></td>
    </tr>
    <tr class="">
      <td class="">6</td>
      <td><slot name="p6"></slot></td>
    </tr>
    <tr class="">
      <td class="">7</td>
      <td><slot name="p7"></slot></td>
    </tr>
    <tr class="">
      <td class="">8</td>
      <td><slot name="p8"></slot></td>
    </tr>
    <tr class="">
      <td class="">9</td>
      <td><slot name="p9"></slot></td>
    </tr>
  </table>
</template>
<style scoped>
table,
th,
td {
  border: 4px solid lightgrey;
  border-radius: 0.5rem;
  text-align: center;
}
table {
  margin-top: 1rem;
}
</style>
