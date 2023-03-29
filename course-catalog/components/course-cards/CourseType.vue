<script setup lang="ts">
defineProps({
  ap: Boolean,
});
</script>

<template>
  <div id="type" class="mt-2">
    <div
      v-if="ap == true"
      id="ap"
      class="tag rounded-full w-28 h-6 flex justify-center items-center bg-cyan-200 text-sm"
    >
      <p>AP Course</p>
    </div>
    <!-- <div v-if="type == 'collegeCred'" id="cred" class="rounded-full w-28 h-6 flex justify-center items-center bg-rose-200 text-sm">
            <p>College Credit</p>
        </div>
        <div v-if="type == 'collegeNow'" id="now" class="rounded-full w-28 h-6 flex justify-center items-center bg-rose-200 text-sm">
            <p>College Credit</p>
        </div> -->
  </div>
</template>
<style scoped>
@media only screen and (max-width: 800px) {
  .tag {
    width: 5.5rem;
    font-size: 0.7rem;
  }
}
</style>
