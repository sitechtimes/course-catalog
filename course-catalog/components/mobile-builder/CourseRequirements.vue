<script lang="ts">
export default {
  name: "CourseRequirements",
  data() {
    return {
      showRequirements: false,
    };
  },
  props: ["requirements"],
  methods: {
    show() {
      this.showRequirements = !this.showRequirements;
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col rounded-lg mb-5 mx-4 md:w-1/5 bg-white border-2 border-gray-200 p-5"
  >
    <div class="flex flex-col justify-start items-center">
      <div class="flex w-full justify-between items-center mb-4">
        <h1 class="text-xl font-bold text-secondary-s">Requirements</h1>
        <span
          class="px-3 py-1 bg-secondary-s text-white rounded-full text-sm font-bold"
        >
          {{
            Object.keys(requirements).filter(
              (key) => requirements[key] === true,
            ).length
          }}
          /
          {{ Object.keys(requirements).length }}
        </span>
      </div>

      <div
        class="flex gap-3 w-full items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        v-for="x in Object.keys(requirements)"
      >
        <img
          v-if="requirements[x]"
          src="/icons/checkmark.svg"
          alt="Complete"
          class="w-6 h-6 flex-shrink-0"
          style="
            filter: invert(62%) sepia(85%) saturate(430%) hue-rotate(88deg)
              brightness(97%) contrast(91%);
          "
        />
        <img
          v-else
          src="/icons/x-circle.svg"
          alt="Incomplete"
          class="w-6 h-6 flex-shrink-0"
          style="
            filter: invert(30%) sepia(95%) saturate(5458%) hue-rotate(348deg)
              brightness(95%) contrast(95%);
          "
        />
        <p
          class="font-medium text-gray-700"
          :class="{ 'text-secondary-s font-semibold': requirements[x] }"
        >
          {{ x }}
        </p>
      </div>
    </div>
  </div>
</template>
