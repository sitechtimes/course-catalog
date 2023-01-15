import axios from "axios"
import { useCourseStore } from "~~/store/store"
import course from '~~/interface/course'
import courseNode from '~/interface/course'





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
                useCourseStore().courses.push(x.node)
            });
            console.log(useCourseStore().courses)
        })
    

}