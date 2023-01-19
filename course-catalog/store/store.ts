import { defineStore } from 'pinia'
import course from '~~/interface/course'

export const useCourseStore = defineStore('courseData', {
  state: () =>{
    return{
        courses: [] as course[]
    }
  }
})