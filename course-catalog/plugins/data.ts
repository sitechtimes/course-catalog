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
    const query = `{allCourses{
        edges{
            node{
                name
                id
                freshman
                sophomore
                junior
                senior
                ap
                catalog
                subject
            }
        }
    }}`

    axios({
        url:`http://127.0.0.1:8000/course/?query=${query}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
            res.data.data.allCourses.edges.forEach((x:courseNode) => {
                Courses.push(x.node)
            });
            
            getCourses().courses = Courses
            console.log(getCourses().courses)
        })
    

}