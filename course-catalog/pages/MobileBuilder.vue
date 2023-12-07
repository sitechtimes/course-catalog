<script lang="ts">
import YearPicked from '~/components/mobile-builder/YearPicker.vue'
import Schedule from '~/components/mobile-builder/Schedule.vue'
import CoursesModal from '~/components/mobile-builder/CoursesModal.vue'
import ErrorToast from '~/components/mobile-builder/ErrorToast.vue'
import CourseRequirements from '~/components/mobile-builder/CourseRequirements.vue'
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";



export default {
    components: {
        YearPicked,
        Schedule,
        CoursesModal,
        ErrorToast,
        CourseRequirements,
    },
    data() {
        return {
            yearPicked: "",
            showCourseModal: false,
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
    <div class="overflow-hidden">
        <YearPicked v-if="yearPicked.length == 0" @updateYear="updateYear($event)" />
        <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
            <div class="flex items-center w-full">
                <ErrorToast :errorMessage="errorMessage" @close="closeError" />

            </div>

            <div class="mx-4">
                <h1 class="text-4xl mb-[12px]">Schedule Builder</h1>
            <div class="flex w-full justify-between mb-[20px]">
                <p>{{ yearPicked }} Year Schedule</p>
            </div>
            </div>

            <CoursesModal :year="yearPicked" @close="showCoursesModal" @addCourse="addCourse" v-if="showCourseModal"/> 
            <CourseRequirements :yearPicked="yearPicked"/>
            <Schedule :schedule="schedule" @removeCourse="removeCourse" @showCoursesModal="showCoursesModal"/>
        </div>

    </div>
</template>