<script lang="ts">
import { xml } from "cheerio";
import { useCourseStore } from "~/store/store";
import course from "~~/interface/course";

export default {
  name: "CoursesModal",
  data() {
    return {
      subjects: [
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
      ],
      courses: useCourseStore().courses,
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
      search: "",
      currentFilter: "",
      filteredCourses: useCourseStore().courses,
      openTab: 0,
    };
  },
  methods: {
    updateFilter(filter: String) {
      if (filter == "Russian") {
        this.currentFilter = "LANG";
      } else if (filter == "Technology") {
        this.currentFilter = "TECH";
      } else if (filter == "History") {
        this.currentFilter = "SS";
      } else {
        this.currentFilter = filter;
      }

      this.filterCourses();
    },
    filterCourses() {
      let year: keyof course = this.year.toLowerCase();

      this.filteredCourses = this.courses.filter((course) => {
        return (
          course.subject.includes(this.currentFilter.toUpperCase()) &&
          course[year]
        );
      });
    },
    updateTab(tab) {
      return (this.openTab = tab);
    },
  },
  props: ["year"],
  watch: {
    search(val) {
      if (val.length == 0) {
        this.filterCourses();
      }

      this.filteredCourses = this.filteredCourses.filter((course) => {
        return course.name.toLowerCase().includes(val.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <body>
    <div class="fixed inset-0 bg-gray-900 opacity-40 h-screen z-50"></div>
    <div
      class="fixed inset-0 flex items-center justify-center z-[51] rounded-lg"
    >
      <div
        class="flex bg-white text-black rounded-t-lg justify-center absolute inset-x-0 bottom-0 h-[500px] overflow-scroll"
      >
        <div class="p-4 w-full space-y-[16px]">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Course Catalog</h2>
            <svg
              @click="$emit('close')"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g
                fill-opacity="0.78039"
                fill="#000000"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path
                    d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <div class="flex flex-col w-full items-center">
            <input
              class="border w-full px-4 py-2 rounded-lg"
              type="text"
              v-model="search"
              placeholder="Search for a course name"
            />
            <ul
              class="flex mt-2 w-full gap-4 flex-nowrap justify-between overflow-x-auto no-scrollbar"
            >
              <li
                class="active"
                @click="
                  updateFilter('');
                  updateTab(0);
                "
                v-bind:class="{
                  'font-normal': openTab !== 0,
                  'font-bold underline': openTab === 0,
                }"
              >
                All
              </li>
              <li
                v-for="subject in subjects"
                @click="
                  updateFilter(subject);
                  updateTab(subjects.indexOf(subject) + 1);
                "
                v-bind:class="{
                  'font-normal': openTab !== subjects.indexOf(subject) + 1,
                  'font-bold underline':
                    openTab === subjects.indexOf(subject) + 1,
                }"
              >
                {{ subject }}
              </li>
            </ul>
          </div>

          <div
            class="flex flex-col w-full justify-center items-center overflow-y-scroll"
          >
            <div
              v-if="filteredCourses.length"
              v-for="course in filteredCourses"
              @click="$emit('addCourse', course)"
              class="flex flex-col w-full my-1 rounded-[15px] border-1 border-black justify-start items-start"
            >
              <h2 class="font-bold text-lg">{{ course.name }}</h2>
              <NuxtLink :to="`courses/${course.id}`" class="text-sm"
                >More Info</NuxtLink
              >
            </div>
            <div v-else>No Courses Found</div>
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
