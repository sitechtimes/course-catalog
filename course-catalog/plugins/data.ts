import axios from "axios"
import { useCourseStore } from "~~/store/store"
import course from '~~/interface/course'
import courseNode from '~/interface/course'





export default async function (){


    await axios({
        url:`http://127.0.0.1:8000/course/`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
        console.log(res.data)
            res.data.forEach((x:any) => {
                useCourseStore().courses.push(x)
            });
        })
    

}