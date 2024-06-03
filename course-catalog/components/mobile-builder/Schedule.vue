<script lang="ts">
export default {
  name: "Schedule",
  props: ["schedule", "year", "window"],
  data() {
    return {
      emojis: [
        {
          LANG: "https://img.icons8.com/color/48/russian-federation.png",
          PE: "https://img.icons8.com/color/48/dumbbell.png",
          ARTS: "https://img.icons8.com/color/48/paint-palette-with-brush.png",
          TECH: "https://img.icons8.com/color/48/laptop--v1.png",
          SS: "https://img.icons8.com/color/48/history-book.png",
          ENGLISH: "https://img.icons8.com/color/48/courses.png",
          SCIENCE: "https://img.icons8.com/color/48/physics.png",
          MATH: "https://img.icons8.com/color/48/formula-fx.png",
          LUNCH: "https://img.icons8.com/color/48/hamburger.png",
          OTHER: "https://img.icons8.com/color/48/support.png",
        },
      ],
      touchStartX: 0 as number,
      touchStartY: 0 as number,
      dragElement: null as HTMLElement | null,
    };
  },
  methods: {
    handleDragStart(e: DragEvent, index: number) {
      e.dataTransfer?.setData("index", index.toString());
    },
    handleDrop(e: DragEvent, index: number) {
      const draggedIndex = parseInt(e.dataTransfer?.getData("index") || "");
      const draggedItem = this.schedule[draggedIndex];

      this.$emit('updateSchedule', index, draggedIndex, draggedItem)
    },
    handleTouchStart(e: TouchEvent, index: number) {

      const element = e.target as HTMLElement
  
      if (['svg'].includes(element.nodeName)) {
        this.$emit('removeCourse', this.schedule[index])
      } else if (element.nodeName == 'BUTTON') {
        this.$emit('showCoursesModal')
      }

      const touch = e.touches[0]
      if (touch) {
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;

        this.dragElement = e.target as HTMLElement;
        this.dragElement.setAttribute("index", index.toString())
      }
    },
    handleTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - this.touchStartX;
      const deltaY = touch.clientY - this.touchStartY;

      if (this.dragElement) {
        this.dragElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      }
    },
    handleTouchEnd(e: TouchEvent) {
      if (this.dragElement) {
        this.dragElement.style.transform = "";
      }

      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);

      if (target) {
        const targetedCourse = target.closest(".course");
        if (targetedCourse && this.dragElement) {
          const index = parseInt(targetedCourse.getAttribute("index") ?? "");
          const draggedIndex = parseInt(this.dragElement.getAttribute("index") ?? "");
          const draggedItem = this.schedule[draggedIndex]

          this.$emit('updateSchedule', index, draggedIndex, draggedItem)
        }
      }
      this.touchStartX = 0
      this.touchStartY = 0
    }
  }
};
</script>

<template>
  <div class="w-full">
    <h2 class="font-bold text-xl mb-4">Schedule</h2>
    <div class="flex">
      <div class="flex flex-col mr-2">
        <div v-for="(n, index) in 9" class="py-1">
          <div class="flex justify-between items-center px-3 py-2 rounded-[16px] font-bold gap-x-4 h-[50px]">
            {{ index + 1 }}
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full course">
        <div v-for="(course, index) in schedule" class="flex flex-col py-1 course" :index="index" draggable="true" 
          @dragover.prevent @dragstart="(e: DragEvent) => handleDragStart(e, index)"
          @drop.prevent="(e: DragEvent) => handleDrop(e, index)"
          @touchstart.prevent="(e: TouchEvent) => handleTouchStart(e, index)"
          @touchmove.prevent="(e: TouchEvent) => handleTouchMove(e)"
          @touchend.prevent="(e: TouchEvent) => handleTouchEnd(e)">
          <div v-if="course.name" >
            <div class="flex justify-between items-center px-3 py-2 gap-x-4 h-[50px] border" :class="{ double: course.double_period }">
              <div class="flex items-center gap-x-2" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">
                <img height="28" width="28" :src="emojis[0][course.subject]" />
                <p class="text-lg font-semibold">{{ course.name }}</p>
              </div>
              <svg class="cursor-pointer" @click="$emit('removeCourse', schedule[index])" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style="fill:#000000;"> <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g> </svg>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-between items-center px-3 py-2 gap-x-4 h-[50px] border">
              <p class="text-lg font-semibold" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">Free Period</p>
              <button v-if="window.width <= 1200" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.double {
  height: 108px;
}

.dragged {
  border-width: 2px;
  border-radius: 16px;
  border-color: black;
}
</style>
