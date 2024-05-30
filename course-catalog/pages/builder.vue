<script lang="ts">
import YearPicked from "~/components/mobile-builder/YearPicker.vue";
import Schedule from "~/components/mobile-builder/Schedule.vue";
import CoursesModal from "~/components/mobile-builder/CoursesModal.vue";
import ErrorToast from "~/components/mobile-builder/ErrorToast.vue";
import CourseRequirements from "~/components/mobile-builder/CourseRequirements.vue";
import Requirements from "~/components/mobile-builder/Requirements.vue";
import CourseCatalog from "~/components/mobile-builder/CourseCatalog.vue"
import course from "~~/interface/course";
import { useCourseStore } from "~/store/store";
import * as requirements from '../components/mobile-builder/requirements.json'


export default {
    components: {
        YearPicked,
        Schedule,
        CoursesModal,
        ErrorToast,
        CourseRequirements,
        Requirements,
        CourseCatalog,
    },
    data() {
        return {
            yearPicked: "",
            isYearPicked: false,
            showCourseModal: false,
            schedule: [
                {},
                {},
                {},
                {},
                {},
                {},
                { name: "Lunch", subject: "LUNCH" },
                {},
                {},
            ],
            requirements: requirements,
            userRequirement: null,
            errorMessage: "",
            courses: useCourseStore().courses,
            index: 0,
            window: {
                width: 0,
                height: 0,
            }
        };
    },
    methods: {
        updateYear(year: any) {
            this.yearPicked = year;
            this.userRequirement = this.requirements[year.toLowerCase()]
            this.isYearPicked = true;
        },
        showCoursesModal() {
            this.showCourseModal = !this.showCourseModal;
        },
        addCourse(x) {
            if (this.schedule.find((period) => period.name == x.name)) {
                return (this.errorMessage = "Class is already in the schedule.");
            }

            Object.assign(
                this.schedule.find((course) => course.name == undefined),
                x
            );

            if (x.double_period) {
                let empty = this.schedule.findIndex(obj => obj.name === undefined)
                this.schedule.splice(empty, 1)
            }

            for (const requirement in this.userRequirement) {
                if (this.userRequirement[requirement].courses.includes(x.name)) {
                    this.userRequirement[requirement].status = true
                }
            }
        },
        removeCourse(x) {
            for (const requirement in this.userRequirement) {
                if (this.userRequirement[requirement].courses.includes(x.name)) {
                    this.userRequirement[requirement].status = false
                }
            }
            if (x.name == "Lunch" && this.yearPicked != "Senior") {
                return (this.errorMessage = "Lunch is a required period.");
            }

            let index = this.schedule.indexOf(x)

            Object.assign(
                this.schedule.find((period) => period.name == x.name),
                { name: undefined }
            );

            if (x.double_period) {
                this.schedule.splice(index, 0, {})
            }
        },
        closeError() {
            this.errorMessage = "";
        },
        switchYear() {
            this.isYearPicked = false;
            this.schedule = [
                {},
                {},
                {},
                {},
                {},
                {},
                { name: "Lunch", subject: "LUNCH" },
                {},
                {},
            ];
        },
        updateSchedule(index, draggedIndex, draggedItem) {
            this.schedule.splice(draggedIndex, 1);
            this.schedule.splice(index, 0, draggedItem);
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }

    },
    mounted() {
        this.isYearPicked = JSON.parse(sessionStorage.getItem("isYearPicked"));
        this.yearPicked = JSON.parse(sessionStorage.getItem("yearPicked"));
        this.schedule = JSON.parse(sessionStorage.getItem("schedule"));
        this.userRequirement = JSON.parse(sessionStorage.getItem("userRequirement"))
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    beforeMount() {
        if (
            JSON.parse(sessionStorage.getItem("isYearPicked")) &&
            JSON.parse(sessionStorage.getItem("yearPicked"))
        ) {
            this.updateYear(JSON.parse(sessionStorage.getItem("yearPicked")));
        }

        if (JSON.parse(sessionStorage.getItem("schedule")) === null) {
            sessionStorage.setItem("schedule", JSON.stringify(this.schedule));
        } else if (JSON.parse(sessionStorage.getItem("schedule")) !== null) {
            this.schedule = JSON.parse(sessionStorage.getItem("schedule"));
        }
    },
    watch: {
        isYearPicked() {
            sessionStorage.setItem("isYearPicked", JSON.stringify(this.isYearPicked));
        },
        yearPicked() {
            sessionStorage.setItem("yearPicked", JSON.stringify(this.yearPicked));
        },
        schedule: {
            handler: function () {
                sessionStorage.setItem("schedule", JSON.stringify(this.schedule));
            },
            deep: true,
        },
        userRequirement: {
            handler: function () {
                sessionStorage.setItem("userRequirement", JSON.stringify(this.userRequirement))
            },
            deep: true,
        }
    },
};
</script>

<template>
    <div class="h-screen w-full px-8" :class="[showCourseModal ? 'overflow-hidden' : '']">
        <YearPicked v-if="!isYearPicked" :window="window" @updateYear="updateYear($event)" />
        <div v-else class="flex flex-col mt-20 h-4/5 justify-start">
            <div class="flex items-center w-full">
                <ErrorToast :errorMessage="errorMessage" @close="closeError" />
            </div>

            <div >
                <h1 class="text-4xl mb-[12px]">Schedule Builder</h1>
                <div class="flex flex-row justify-between mb-[8px]">
                    <h1 class="text-2xl font-semibold">{{ yearPicked }} Year Schedule</h1>
                    <button class="flex justify-center bg-sky-500 px-4 py-2 text-white font-medium" @click="switchYear">Go Back</button>
                </div>
            </div>
            <div v-if="userRequirement" class="md:flex md:flex-row">
                <CoursesModal :year="yearPicked" :requirements="userRequirement" @close="showCoursesModal" @addCourse="addCourse" v-if="showCourseModal" />

                <div v-if="window.width <= 1100" class="w-full flex flex-col gap-y-4 mb-4">
                    <Schedule :schedule="schedule" :year="yearPicked" :window="window"
                    @removeCourse="removeCourse" @showCoursesModal="showCoursesModal" @updateSchedule="updateSchedule" />
                </div>
                <div v-else class="w-full flex">
                    <Requirements :year="yearPicked" :requirements="userRequirement" class="w-[25%]" @addCourse="addCourse"/>

                    <Schedule class="w-[35%] mx-4" :schedule="schedule" :year="yearPicked" :window="window"
                    @removeCourse="removeCourse" @showCoursesModal="showCoursesModal" @updateSchedule="updateSchedule" />
                    
                    <CourseCatalog @addCourse="addCourse" class="w-[40%]" :year="yearPicked"/>
                </div>
                
            </div>
        </div>
    </div>
</template>
