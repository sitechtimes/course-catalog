import axios from "axios";
import { useCourseStore } from "~~/store/store";
import course from "~~/interface/course";
import courseNode from "~/interface/course";
// const Course:any = []
export default async function () {

  const { data, pending, error, refresh } = await useAsyncData("course", () =>
    $fetch("https://b5ac-165-155-162-19.ngrok-free.app/course")
  );
  useCourseStore().courses = data;
  
  // await axios({
  //     url:`http://10.94.168.231:8000/course`,
  //     method: 'get',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  // }).then((res)=>{
  //     console.log(res.data)
  //         res.data.forEach((x:any) => {
  //             Course.push(x)
  //         });
  //     useCourseStore().courses=Course
  //     })
}
