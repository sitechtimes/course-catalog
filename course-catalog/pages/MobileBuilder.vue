<script lang="ts">
import YearPicked from '~/components/mobile-builder/YearPicker.vue'
import Schedule from '~/components/mobile-builder/Schedule.vue'
import CoursesModal from '~/components/mobile-builder/CoursesModal.vue'
import RequirementsModal from '~/components/mobile-builder/RequirementsModal.vue'
import ErrorToast from '~/components/mobile-builder/ErrorToast.vue'
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";



export default {
    components: {
        YearPicked,
        Schedule,
        CoursesModal,
        ErrorToast,
        RequirementsModal,
    },
    data() {
        return {
            yearPicked: "",
            showCourseModal: false,
            showRequirementsModal: false,
            schedule: [
                {},
                {},
                {},
                {},
                {},
                {
                    "name": "Lunch",
                    "subject": "LUNCH"
                },
                {},
                {},
                {}
            ],
            errorMessage: "",
            courses: useCourseStore().courses,
        }
    },
    methods: {
        updateYear(year: any) {
            this.yearPicked = year
            if (year == "Freshman") {
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "Russian T1"))
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "AP World History T1"))
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "English T1"))
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "Chemistry T1"))
            } else if (year == "Sophomore") {
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "English T3"))
                Object.assign(this.schedule.find((period) => period.name == undefined), this.courses.find((course) => course.name == "AP World History T3"))
            }
            
        },
        showCoursesModal() {
            this.showCourseModal = !this.showCourseModal
        },
        showRequirementModal() {
            this.showRequirementsModal = !this.showRequirementsModal
        },
        addCourse(x) {
            this.showCourseModal = !this.showCourseModal
            if (!this.schedule.find((period) => period.name == undefined)) {
                return this.errorMessage = "No More Space"
            } else if (this.schedule.find((period) => period.name == x.name)){
                return this.errorMessage = "Class is already in the schedule"
            } else if (x.double_period) {
                Object.assign(this.schedule.find((period) => period.name == undefined), x)
            }

            Object.assign(this.schedule.find((period) => period.name == undefined), x)
        },
        removeCourse(x) {
            if (x.name == "Lunch") {
                return this.errorMessage = "Can't remove lunch"
            }

            if (this.yearPicked == "Freshman" && ["Russian T1", "AP World History T1", "English T1", "Chemistry T1"].includes(x.name)) {
                return this.errorMessage = "Can't remove mandatory classes"
            } else if (this.yearPicked == "Sophomore" && ["AP World History T3", "English T3"].includes(x.name)) {
                return this.errorMessage = "Can't remove mandatory classes"
            }

            Object.assign(this.schedule.find((period) => period.name == x.name), {"name": undefined})
        },
        closeError() {
            this.errorMessage = ""
        }
    },
}
</script>

<template>
    <div>
        <YearPicked v-if="yearPicked.length == 0" @updateYear="updateYear($event)" />
        <div v-else class="flex flex-col mt-20 h-4/5 px-4 justify-center place-content-center">
            <h1 class="text-4xl mb-[12px]">Schedule Builder</h1>
            <div class="flex w-full justify-between mb-[20px]">
                <p>{{ yearPicked }} Year Schedule</p>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="19.44" height="18" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_21_1049" transform="matrix(0.00497512 0 0 0.00537313 0 -0.0373134)" />
                        </pattern>
                        <image id="image0_21_1049" width="201" height="200"
                            xlink:href="data:image/png;base64,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" />
                    </defs>
                </svg>
            </div>
            <div class="flex w-full justify-between mb-[20px]">
                <button class="flex justify-center items-center text-white bg-[#37394F] w-[164px] h-[37px] rounded-[15px] font-medium" @click="showCoursesModal">
                    Add Courses
                </button>
                <button class="flex justify-center items-center text-white bg-[#37394F] w-[164px] h-[37px] rounded-[15px] font-medium">
                    Save Schedule
                </button>
            </div>
            <ErrorToast :errorMessage="errorMessage" @close="closeError" />
            <CoursesModal :year="yearPicked" @close="showCoursesModal" @addCourse="addCourse" v-if="showCourseModal"/> 
            <Schedule :schedule="schedule" @removeCourse="removeCourse"/>
        </div>

    </div>
</template>

<style>
#LANG, #Russian {
  background-color: #fedcb5;
}
#PE {
  background-color: #bebfdf;
}
#ARTS, #Arts {
  background-color: #ffdfdf;
}
#TECH, #Technology {
  background-color: #fffbd6;
}
#SS, #History {
  background-color: #e0d6ff;
}
#ENGLISH, #English {
  background-color: #d6eeff;
}
#SCIENCE, #Science {
  background-color: #cbf2d4;
}
#MATH, #Math {
  background-color: #ffadb2;
}
#LUNCH {
  background-color: #d2fcff;
}
</style>