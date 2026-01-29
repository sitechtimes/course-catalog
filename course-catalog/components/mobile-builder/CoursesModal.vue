<script setup lang="ts">
import { useCourseStore } from "~/store/store";
import type course from "~~/interface/course";

interface Course {
  name: string;
  subject: string;
  doublePeriod: boolean;
  freshman?: boolean;
  sophomore?: boolean;
  junior?: boolean;
  senior?: boolean;
  id?: number;
}

const props = defineProps<{
  year: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "addCourse", course: Course): void;
}>();

const subjects = ref([
  "History",
  "English",
  "Science",
  "Math",
  "Russian",
  "PE",
  "Arts",
  "Technology",
  "Career",
  "Other",
]);

const courses = ref(useCourseStore().courses);

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

const search = ref("");
const currentFilter = ref("");
const filteredCourses = ref(useCourseStore().courses);
const openTab = ref(0);

const updateFilter = (filter: string) => {
  if (filter == "Russian") {
    currentFilter.value = "LANG";
  } else if (filter == "Technology") {
    currentFilter.value = "TECH";
  } else if (filter == "History") {
    currentFilter.value = "SS";
  } else {
    currentFilter.value = filter;
  }

  filterCourses();
};

const filterCourses = () => {
  const year: keyof course = props.year.toLowerCase() as keyof course;

  filteredCourses.value = courses.value.filter((course) => {
    return (
      course.subject.includes(currentFilter.value.toUpperCase()) && course[year]
    );
  });
};

const updateTab = (tab: number) => {
  openTab.value = tab;
};

watch(search, (val) => {
  if (val.length == 0) {
    filterCourses();
    return;
  }

  const year: keyof course = props.year.toLowerCase() as keyof course;

  filteredCourses.value = courses.value.filter((course) => {
    return (
      course.subject.includes(currentFilter.value.toUpperCase()) &&
      course[year] &&
      course.name.toLowerCase().includes(val.toLowerCase())
    );
  });
});
</script>

<template>
  <body>
    <div
      class="fixed inset-0 bg-gray-900 opacity-40 h-screen z-50 cursor-pointer"
      @click="emit('close')"
    ></div>
    <div
      class="fixed inset-0 flex items-center justify-center z-[51] rounded-lg pointer-events-none"
    >
      <div
        class="flex flex-col bg-white text-black rounded-t-lg justify-center absolute inset-x-0 bottom-0 h-128 overflow-hidden pointer-events-auto"
      >
        <div
          class="sticky top-0 bg-white z-10 p-4 pb-2 border-b border-gray-200 space-y-4"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Course Catalog</h2>
            <img
              src="/icons/close.svg"
              alt="Close"
              class="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100"
              @click="emit('close')"
            />
          </div>

          <div class="flex flex-col w-full items-center">
            <input
              class="border-2 border-gray-300 focus:border-primary-s focus:ring-2 focus:ring-primary-lighter w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 shadow-sm"
              type="text"
              v-model="search"
              placeholder="Search for a course name"
            />
            <ul
              class="flex mt-4 w-full gap-3 flex-nowrap justify-between overflow-x-auto no-scrollbar pb-2"
            >
              <li
                class="active cursor-pointer px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap"
                @click="
                  updateFilter('');
                  updateTab(0);
                "
                v-bind:class="{
                  'text-gray-600 hover:bg-gray-100': openTab !== 0,
                  'bg-secondary-s text-white font-bold shadow-md':
                    openTab === 0,
                }"
              >
                All
              </li>
              <li
                class="cursor-pointer px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap"
                v-for="subject in subjects"
                @click="
                  updateFilter(subject);
                  updateTab(subjects.indexOf(subject) + 1);
                "
                v-bind:class="{
                  'text-gray-600 hover:bg-gray-100':
                    openTab !== subjects.indexOf(subject) + 1,
                  'bg-secondary-s text-white font-bold shadow-md':
                    openTab === subjects.indexOf(subject) + 1,
                }"
              >
                {{ subject }}
              </li>
            </ul>
          </div>
        </div>

        <div class="overflow-y-auto p-4 pt-2">
          <div class="flex flex-col w-full justify-center items-center">
            <!-- Lunch Option -->
            <div
              @click="
                emit('addCourse', {
                  name: 'Lunch',
                  subject: 'LUNCH',
                  doublePeriod: false,
                })
              "
              class="flex items-center w-full mb-3 p-4 rounded-xl border-2 border-yellow-300 bg-yellow-50 justify-between cursor-pointer hover:border-yellow-400 hover:shadow-md transition-all duration-200 transform hover:scale-[1.005]"
            >
              <div class="flex items-center gap-3">
                <img
                  class="object-contain h-8 w-8"
                  :src="emojis[0]['LUNCH']"
                  alt="Lunch"
                />
                <div>
                  <h2 class="font-bold text-lg text-gray-800">Lunch</h2>
                  <p class="text-sm text-gray-600">Add lunch period</p>
                </div>
              </div>
            </div>

            <!-- Course List -->
            <div
              v-if="filteredCourses.length"
              v-for="course in filteredCourses"
              @click="emit('addCourse', course)"
              class="flex flex-col w-full my-2 p-4 rounded-xl border-2 border-gray-200 bg-white justify-start items-start cursor-pointer hover:border-primary-s hover:shadow-md transition-all duration-200 transform hover:scale-[1.005]"
            >
              <h2 class="font-bold text-lg text-gray-800">{{ course.name }}</h2>
              <NuxtLink
                :to="`courses/${course.id}`"
                class="text-sm text-secondary-s hover:text-secondary-light font-medium mt-1"
                >More Info →</NuxtLink
              >
            </div>
            <div v-else class="text-gray-500 text-center py-8">
              No Courses Found
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
#Russian {
  background-color: #2980b9;
}

#PE {
  background-color: #d35400;
}

#Arts {
  background-color: #c0392b;
}

#Technology {
  background-color: #2c3e50;
}

#History {
  background-color: #f39c12;
}

#English {
  background-color: #16a085;
}

#Science {
  background-color: #27ae60;
}

#Math {
  background-color: #8e44ad;
}
</style>
