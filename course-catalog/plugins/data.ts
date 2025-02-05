import { useCourseStore } from "~~/store/store"
import coursesData from '~~/static/data/courses.json'

const courses: any = coursesData

export default function () {
    useCourseStore().courses = courses
}