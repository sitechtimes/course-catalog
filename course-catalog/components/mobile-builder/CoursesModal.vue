<script lang="ts">
import { xml } from "cheerio";
import { useCourseStore } from "~/store/store";
import course from "~~/interface/course";
import Requirements from "~/components/mobile-builder/Requirements.vue";
import CourseCatalog from "~/components/mobile-builder/CourseCatalog.vue"

export default {
  name: "CoursesModal",
  components: {
    Requirements,
    CourseCatalog,
  },
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


      this.filterCourses()

    },
    filterCourses() {

      let year:keyof course = this.year.toLowerCase()
      
      this.filteredCourses = this.courses.filter((course) => {

          
          
          return course.subject.includes(this.currentFilter.toUpperCase()) && course[year]
  
      })

    },
    updateTab(tab) {
      return this.openTab = tab
    },
    addCourses(course) {
      this.$emit('addCourse', course)
      this.$emit('close')
    }

  },
  props: ["year", "requirements"],
  watch: {
    search(val) {
      if (val.length == 0) {
        this.filterCourses()
      }

      this.filteredCourses = this.filteredCourses.filter((course) => {
        return course.name.toLowerCase().includes(val.toLowerCase())
      })
    }
  }
};
</script>

<template>
  <body>
  <div class="fixed inset-0 bg-gray-900 opacity-40 h-screen z-50"></div>
  <div class="fixed inset-0 flex items-center justify-center z-[51] rounded-lg">
    <div
      class="flex bg-white text-black rounded-t-lg justify-center absolute inset-x-0 bottom-0 h-[500px] overflow-scroll">
      <div class="p-4 w-full space-y-[16px]">
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-xl">Courses and Requirements</h2>
          <svg @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill-opacity="0.78039" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1"
              stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
              stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
              style="mix-blend-mode: normal">
              <g transform="scale(10.66667,10.66667)">
                <path
                  d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z">
                </path>
              </g>
            </g>
          </svg>
        </div>

        <Requirements :year="year" :requirements="requirements" @addCourse="addCourses"/>
        <CourseCatalog @addCourse="addCourses" :year="year"/>
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