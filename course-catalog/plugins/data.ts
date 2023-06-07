import axios from "axios"
import { useCourseStore } from "~~/store/store"
import course from '~~/interface/course'
import courseNode from '~/interface/course'




const Course:any = []
export default async function (){


    await axios({
        url:`http://10.94.168.231:8000/course`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
        console.log(res.data)
            res.data.forEach((x:any) => {
                Course.push(x)
            });
        useCourseStore().courses=Course
        })
    

}