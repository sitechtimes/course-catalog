import { defineStore } from 'pinia'
import course from '~~/interface/course'

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