<script lang="ts">
export default {
  name: "Schedule",
  props: ["schedule", "year"],
  data() {
    return {
      emojis: [
        {
          LANG: "https://em-content.zobj.net/source/apple/354/flag-russia_1f1f7-1f1fa.png",
          PE: "https://em-content.zobj.net/source/apple/354/person-lifting-weights_1f3cb-fe0f.png",
          ARTS: "https://em-content.zobj.net/source/apple/354/performing-arts_1f3ad.png",
          TECH: "https://em-content.zobj.net/source/apple/354/laptop_1f4bb.png",
          SS: "https://em-content.zobj.net/source/apple/354/scroll_1f4dc.png",
          ENGLISH:
            "https://em-content.zobj.net/source/apple/354/books_1f4da.png",
          SCIENCE:
            "https://em-content.zobj.net/source/apple/354/atom-symbol_269b-fe0f.png",
          MATH: "https://em-content.zobj.net/source/apple/354/abacus_1f9ee.png",
          LUNCH:
            "https://em-content.zobj.net/source/apple/354/fork-and-knife-with-plate_1f37d-fe0f.png",
        },
      ],
      draggingIndex: -1,
      dropIndex: -1,
      dragIndex: null,
      initialY: 0,
      translateY: 0,
    };
  },
  methods: {
    dragStart(index) {
      this.draggingIndex = index;
    },
    dragEnter(index) {
      this.dropIndex = index;
    },
    dragEnd() {
      this.draggingIndex = -1;
      this.dropIndex = -1;
    },
    touchStart(index) {
      this.dragIndex = index;
      this.initialY = event.touches[0].clientY;
    },
    touchMove(event) {
      if (this.dragIndex !== null) {
        const touchY = event.touches[0].clientY;
        const diffY = touchY - this.initialY;
        const moveUp = diffY < 0;
        const index = this.dragIndex;

        if (
          (moveUp && index > 0) ||
          (!moveUp && index < this.schedule.length - 1)
        ) {
          this.translateY = diffY;
          const newPosition = Math.round(diffY / 100);
          const newIndex = index + newPosition;

          if (newIndex !== index) {
            const draggedItem = this.schedule[this.dragIndex];
            this.schedule.splice(this.dragIndex, 1);
            this.schedule.splice(newIndex, 0, draggedItem);
            this.dragIndex = newIndex;
            this.initialY = touchY;
          }
        }
      }
    },
    touchEnd() {
      if (this.dragIndex !== null) {
        this.dragIndex = null;
        this.translateY = 0;
      }
    },
    handleDrop(index) {
      if (this.draggingIndex !== -1 && this.dropIndex !== -1) {
        const draggedItem = this.schedule[this.draggingIndex];
        this.schedule.splice(this.draggingIndex, 1);
        this.schedule.splice(index, 0, draggedItem);

        this.draggingIndex = -1;
        this.dropIndex = -1;
      }
    },
  },
  mounted() {
    document.addEventListener("touchmove", this.touchMove, {
      capture: true,
      passive: false,
    });
  },
  beforeDestroy() {
    document.removeEventListener("touchmove", this.touchMove, {
      capture: true,
    });
  },
};
</script>

<template>
  <div class="mx-4 md:w-3/5">
    <h1 class="text-xl font-bold mb-3 text-secondary-s">Schedule</h1>
    <div class="flex">
      <div class="flex flex-col mr-2">
        <div v-for="(n, index) in 9" class="py-1">
          <div class="period-number">
            {{ index + 1 }}
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          v-for="(course, index) in schedule"
          class="flex flex-col py-1"
          :draggable="true"
          @dragstart="dragStart(index)"
          @dragenter="dragEnter(index)"
          @dragover.prevent
          @drop="handleDrop(index)"
          @dragend="dragEnd"
          @touchstart="touchStart(index)"
          @touchend="touchEnd"
        >
          <div
            v-if="course.name"
            :class="{ dragged: dragIndex === index || draggingIndex === index }"
          >
            <div class="card-course" :class="{ 'h-24': course.doublePeriod }">
              <div class="flex items-center gap-x-2">
                <img
                  class="object-contain h-6 w-6"
                  :src="emojis[0][course.subject]"
                />
                <p class="text-base font-semibold text-gray-800">
                  {{ course.name }}
                </p>
              </div>
              <div
                class="cursor-pointer rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/50"
                @click="this.$emit('removeCourse', schedule[index])"
              >
                <img
                  src="/icons/close.svg"
                  alt="Remove"
                  class="w-7 h-7 p-1.5"
                  style="
                    filter: invert(34%) sepia(95%) saturate(3567%)
                      hue-rotate(344deg) brightness(97%) contrast(90%);
                  "
                />
              </div>
            </div>
          </div>
          <div
            v-else
            :class="{ dragged: dragIndex === index || draggingIndex === index }"
          >
            <div class="card-free">
              <p class="text-base font-semibold text-gray-500">Free Period</p>
              <button class="btn-add" @click="this.$emit('showCoursesModal')">
                <img
                  src="/icons/add.svg"
                  alt="Add"
                  class="w-4 h-4"
                  style="filter: brightness(0) invert(1)"
                />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#true {
  height: 108px;
}

.dragged {
  border-width: 3px;
  border-radius: 16px;
  border-color: #a3c2df;
  box-shadow: 0 4px 12px rgba(163, 194, 223, 0.4);
  transform: scale(1.02);
  transition: all 0.2s ease;
}
</style>
