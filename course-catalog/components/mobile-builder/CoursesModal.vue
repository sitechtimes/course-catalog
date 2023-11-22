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

    <div v-if="pickedSubject.length == 0" class="fixed inset-0 flex items-center justify-center z-[51] rounded-lg">
        <div class="flex bg-white text-black rounded-[12px] justify-center">
            <div class="p-4 h-[544px] w-[335px] space-y-[16px]">
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">Pick A Subject</h2>
                <button @click="this.$emit('close')" type="button">close</button>

                </div>
                
                <div class="flex flex-col space-y-[12px] justify-center">
                    <div v-for="subject in subjects" @click="updateSubject(subject)" class="flex w-[287px] h-[44px] rounded-[15px] font-bold border-1 border-black justify-center items-center" :id="subject">
                        {{ subject }}
                    </div>
                </div>

            </div>
            

        </div>
    </div>
    <div v-else class="fixed inset-0 flex items-center justify-center z-[51]">
        <div class="bg-white text-black rounded-[12px] ">
            <div class="p-4 h-[544px] w-[335px] overflow-scroll">
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">{{ pickedSubject }}</h2>
                    <button @click="goBack">Go Back</button>
                </div>
                <div class="flex flex-col justify-content space-y-[12px]">
                    <div v-for="course in subjectCourses" @click="this.$emit('addCourse',course)" class="flex h-[44px] w-[287px] align-middle rounded-[15px] font-bold  border-1 border-black justify-center items-center" :id="course.subject">{{course.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>