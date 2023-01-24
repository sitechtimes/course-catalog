import { defineStore } from 'pinia'

interface course{
    name: String
}
export const getCourses = defineStore('courseData', {
  state: () =>{
    return{
        courses: [] as course[]
    }
  }
})