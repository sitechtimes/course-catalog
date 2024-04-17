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
      this.$emit('scrolling-disabled', true)
    },
    touchEnd() {
      if (this.dragIndex !== null) {
        this.dragIndex = null;
        this.translateY = 0;
        this.$emit('scrolling-disabled', false)
      }
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
    handleDrop(index) {
      if (this.draggingIndex !== -1 && this.dropIndex !== -1) {
        const draggedItem = this.schedule[this.draggingIndex];
        this.schedule.splice(this.draggingIndex, 1);
        this.schedule.splice(index, 0, draggedItem);

        this.draggingIndex = -1;
        this.dropIndex = -1;
      }
    },
    preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.returnValue = false;
    }
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
  }
};
</script>

<template>
  <div class="mx-4 md:w-[50%]">
    <h1 class="text-lg font-bold">Schedule</h1>
    <div class="flex">
      <div class="flex flex-col mr-2">
        <div v-for="(n, index) in 9" class="py-1">
          <div
            class="flex justify-between items-center px-3 py-2 rounded-[16px] font-bold gap-x-4 h-[50px]"
          >
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
            <div
              class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4 h-[50px] border"
              :id="course.double_period"
            >
              <div class="flex items-center gap-x-2">
                <img
                  class="object-contain h-5 w-5"
                  :src="emojis[0][course.subject]"
                />
                <p class="text-lg font-semibold">{{ course.name }}</p>
              </div>
              <svg
                @click="this.$emit('removeCourse', schedule[index])"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            v-else
            :class="{ dragged: dragIndex === index || draggingIndex === index }"
          >
            <div
              class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4 h-[50px] border"
            >
              <p class="text-lg font-semibold">Free Period</p>
              <div class="flex" @click="this.$emit('showCoursesModal')">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z" />
                </svg>
                <p>Add</p>
              </div>
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
  border-width: 2px;
  border-radius: 16px;
  border-color: black;
}
</style>
