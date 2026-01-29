<script setup lang="ts">
interface Course {
  name?: string;
  subject?: string;
  doublePeriod?: boolean;
}

const props = defineProps<{
  schedule: Course[];
  year: string;
}>();

const emit = defineEmits<{
  (e: "removeCourse", course: Course): void;
  (e: "showCoursesModal"): void;
}>();

const emojis = ref([
  {
    LANG: "https://em-content.zobj.net/source/apple/354/flag-russia_1f1f7-1f1fa.png",
    PE: "https://em-content.zobj.net/source/apple/354/person-lifting-weights_1f3cb-fe0f.png",
    ARTS: "https://em-content.zobj.net/source/apple/354/performing-arts_1f3ad.png",
    TECH: "https://em-content.zobj.net/source/apple/354/laptop_1f4bb.png",
    SS: "https://em-content.zobj.net/source/apple/354/scroll_1f4dc.png",
    ENGLISH: "https://em-content.zobj.net/source/apple/354/books_1f4da.png",
    SCIENCE:
      "https://em-content.zobj.net/source/apple/354/atom-symbol_269b-fe0f.png",
    MATH: "https://em-content.zobj.net/source/apple/354/abacus_1f9ee.png",
    LUNCH:
      "https://em-content.zobj.net/source/apple/354/fork-and-knife-with-plate_1f37d-fe0f.png",
  },
]);

const draggingIndex = ref(-1);
const dropIndex = ref(-1);
const dragIndex = ref<number | null>(null);
const initialY = ref(0);
const translateY = ref(0);

const dragStart = (index: number) => {
  draggingIndex.value = index;
};

const dragEnter = (index: number) => {
  dropIndex.value = index;
};

const dragEnd = () => {
  draggingIndex.value = -1;
  dropIndex.value = -1;
};

const touchStart = (index: number, event: TouchEvent) => {
  dragIndex.value = index;
  initialY.value = event.touches[0].clientY;
};

const touchMove = (event: TouchEvent) => {
  if (dragIndex.value !== null) {
    const touchY = event.touches[0].clientY;
    const diffY = touchY - initialY.value;
    const moveUp = diffY < 0;
    const index = dragIndex.value;

    if (
      (moveUp && index > 0) ||
      (!moveUp && index < props.schedule.length - 1)
    ) {
      translateY.value = diffY;
      const newPosition = Math.round(diffY / 100);
      const newIndex = index + newPosition;

      if (newIndex !== index) {
        const draggedItem = props.schedule[dragIndex.value];
        props.schedule.splice(dragIndex.value, 1);
        props.schedule.splice(newIndex, 0, draggedItem);
        dragIndex.value = newIndex;
        initialY.value = touchY;
      }
    }
  }
};

const touchEnd = () => {
  if (dragIndex.value !== null) {
    dragIndex.value = null;
    translateY.value = 0;
  }
};

const handleDrop = (index: number) => {
  if (draggingIndex.value !== -1 && dropIndex.value !== -1) {
    const draggedItem = props.schedule[draggingIndex.value];
    props.schedule.splice(draggingIndex.value, 1);
    props.schedule.splice(index, 0, draggedItem);

    draggingIndex.value = -1;
    dropIndex.value = -1;
  }
};

onMounted(() => {
  document.addEventListener("touchmove", touchMove, {
    capture: true,
    passive: false,
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("touchmove", touchMove, {
    capture: true,
  });
});
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
          @touchstart="touchStart(index, $event)"
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
                @click="emit('removeCourse', schedule[index])"
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
              <button class="btn-add" @click="emit('showCoursesModal')">
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
