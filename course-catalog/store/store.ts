import { defineStore } from 'pinia'

interface course{
    name: String
}
export const useCourseStore = defineStore('courseData', {
  state: () =>{
    return{
        courses: [] as course[]
    }
  }
})