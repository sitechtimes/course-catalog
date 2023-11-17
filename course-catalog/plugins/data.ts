import axios from "axios"
import { useCourseStore } from "~~/store/store"
import course from '~~/interface/course'
import courseNode from '~/interface/course'




const Course:any = []
export default async function (){


    await axios({
        url:`http://127.0.0.1:8000/course/`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
            res.data.forEach((x:any) => {
                Course.push(x)
            });
        useCourseStore().courses=Course
        })
    

}