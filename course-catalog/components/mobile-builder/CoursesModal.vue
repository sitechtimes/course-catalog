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
            <div class="p-8 h-[544px] w-[335px] space-y-[16px]">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-semibold">Pick A Subject</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" @click="this.$emit('close')">
<path d="M 12 2 C 6.4666667 2 2 6.4666667 2 12 C 2 17.533333 6.4666667 22 12 22 C 17.533333 22 22 17.533333 22 12 C 22 6.4666667 17.533333 2 12 2 z M 12 4 C 16.466667 4 20 7.5333333 20 12 C 20 16.466667 16.466667 20 12 20 C 7.5333333 20 4 16.466667 4 12 C 4 7.5333333 7.5333333 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
</svg>

                </div>
                
                <div class="flex flex-col space-y-[12px] justify-center items-center">
                    <div v-for="subject in subjects" @click="updateSubject(subject)" class="flex w-[287px] h-[44px] rounded-[15px] font-bold border-1 border-black justify-center items-center" :id="subject">
                        {{ subject }}
                    </div>
                </div>

            </div>
            

        </div>
    </div>
    <div v-else class="fixed inset-0 flex items-center justify-center z-[51]">
        <div class="bg-white text-black rounded-[12px]">
            <div class="p-4 h-[544px] w-[335px] overflow-scroll">
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">{{ pickedSubject }}</h2>
                    <button @click="goBack">Go Back</button>
                </div>
                <div class="flex flex-col justify-center space-y-[12px]">
                    <div v-for="course in subjectCourses" @click="this.$emit('addCourse',course)" class="flex h-[44px] w-[287px] align-middle rounded-[15px] font-bold  border-1 border-black justify-center items-center" :id="course.subject">{{course.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>