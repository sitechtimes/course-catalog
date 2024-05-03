<script lang="ts">
export default {
  name: "Schedule",
  props: ["schedule", "year"],
  data() {
    return {
      emojis: [
        {
          LANG: "https://img.icons8.com/3d-fluency/28/language.png",
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
  
      if (['P', 'svg'].includes(element.nodeName)) {
        if (element.innerHTML === "Add" || element.classList.contains('add-course')) {
          this.$emit('showCoursesModal', index)
          console.log('yes')
        } else if(element.classList.contains('remove-course')) {
          this.$emit('removeCourse', this.schedule[index])
        }
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
  <div class="mx-4 md:w-[50%]">
    <h1 class="text-lg font-bold">Schedule</h1>
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
            <div class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4 h-[50px] border" :class="{ double: course.double_period }">
              <div class="flex items-center gap-x-2" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">
                <img height="28" width="28" :src="emojis[0][course.subject]" />
                <p class="text-lg font-semibold">{{ course.name }}</p>
              </div>
              <svg class="cursor-pointer remove-course" @click="this.$emit('removeCourse', schedule[index])" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }"
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24">
                <path
                  d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z">
                </path>
              </svg>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-between items-center px-3 py-2 rounded-[16px] gap-x-4 h-[50px] border">
              <p class="text-lg font-semibold" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">Free Period</p>
              <div class="flex cursor-pointer" @touchmove.prevent="(e: TouchEvent) => { e.preventDefault(); e.stopPropagation() }">
                <svg class="add-course" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20">
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
.double {
  height: 108px;
}

.dragged {
  border-width: 2px;
  border-radius: 16px;
  border-color: black;
}
</style>
