<script lang="ts">
import { useCourseStore } from "~/store/store";
import course from "~~/interface/course";

export default {
    name: 'CoursesModal',
    data() {
        return {
            subjects: ["Russian", "PE", "Arts", "Technology", "History", "English", "Science", "Math"],
            showSubjects: true,
            showSpecificSubject: false,
            pickedSubject: "",
            courses: useCourseStore().courses,
            subjectCourses: []
        }
    },
    methods: {
        updateSubject(subject:any) {
            this.pickedSubject = subject
            let year:keyof course = this.year.toLowerCase()
            let pickedSubject = ""

            if (subject == "Russian") {
                pickedSubject = "LANG"
            } else if (subject == "Technology") {   
                pickedSubject = "TECH"
            } else if (subject == "History") {
                pickedSubject = "SS"
            } else {    
                pickedSubject = subject.toUpperCase()
            }
            this.courses.filter((course:course) => course.subject == pickedSubject && course[year]).forEach((course:course) => {
                this.subjectCourses.push(course)
            })
        },
        goBack() {
            this.pickedSubject = ""
            this.subjectCourses = []
        }
    },
    props: ['year']
}

</script>

<template>
    <div class="fixed inset-0 bg-gray-900 opacity-40 h-screen z-50"></div>

    <div v-if="pickedSubject.length == 0" class="fixed inset-0 flex items-center justify-center z-[51]">
        <div class="bg-white text-black">
            <div class="p-4 h-[544px] w-[335px] rounded-full space-y-[16px]">
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">Pick A Subject</h2>
                <button @click="this.$emit('close')" type="button">close</button>

                </div>
                
                <div class="flex flex-col justify-content space-y-[12px]">
                <button v-for="subject in subjects" @click="updateSubject(subject)" type="button" class="w-[287px] h-[44px] rounded-[15px] bg-[#FFDEB9] font-bold">
                    {{ subject }}
                </button>
            </div>

            </div>
            

        </div>
    </div>
    <div v-else class="fixed inset-0 flex items-center justify-center z-[51]">
        <div class="bg-white text-black ">
            <div class="p-4 h-[544px] w-[335px] rounded-[12px] overflow-scroll">
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">{{ pickedSubject }}</h2>
                    <button @click="goBack">Go Back</button>
                </div>
                <div class="flex flex-col justify-content space-y-[12px]">
                    <button v-for="course in subjectCourses" @click="this.$emit('addCourse',course)" type="button" class="flex h-[44px] w-[287px] align-middle rounded-[15px] bg-[#FFDEB9] font-bold">{{course.name}}</button>
                </div>
            </div>
        </div>
    </div>
</template>