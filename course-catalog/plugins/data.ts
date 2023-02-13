import axios from "axios"
import { getCourses } from "~~/store/store"


let Courses: course[] = []


interface course{
    name:string
}
interface courseNode{
    node:course
}




export default function (){


    axios({
        url:`http://127.0.0.1:8000/course/`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
            res.data.forEach((x:any) => {
                Courses.push(x)
            });
            
            getCourses().courses = Courses
            console.log(getCourses().courses)
        })
    

}