<template>
  <div class="px-4">
    <h2 class="font-bold text-xl">General Requirements</h2>
    <div class="px-4">
      <ul v-if="requirements" class="w-full">
        <li v-for="index in requirements" :key="index.id" class="w-full mb-1 border-b">
          <div class="flex items-center py-1 px-3 cursor-pointer justify-between" @click="contentVisible === Object.keys(requirements).find(key =>requirements[key] === index) ? contentVisible = false : contentVisible = Object.keys(requirements).find(key =>requirements[key] === index)" >
            <div class="flex items-center gap-x-2">
            <svg v-if="index.status" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0,0,256,256"
              style="fill:#000000;">
              <g fill="#38cb63" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M25,2c-12.682,0 -23,10.318 -23,23c0,12.683 10.318,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.682 -10.317,-23 -23,-23zM35.827,16.562l-11.511,16.963l-8.997,-8.349c-0.405,-0.375 -0.429,-1.008 -0.053,-1.413c0.375,-0.406 1.009,-0.428 1.413,-0.053l7.29,6.764l10.203,-15.036c0.311,-0.457 0.933,-0.575 1.389,-0.266c0.458,0.31 0.577,0.932 0.266,1.39z">
                  </path>
                </g>
              </g>
            </svg>
            <img v-else width="20" height="20" src="https://img.icons8.com/ios-filled/50/0-degrees.png" alt="0-degrees"/>
            <p class="font-medium text-lg">{{ Object.keys(requirements).find(key =>requirements[key] === index) }}</p>
            </div>
            <img v-if="contentVisible === Object.keys(requirements).find(key =>requirements[key] === index)" width="20" height="20" src="https://img.icons8.com/ios-filled/50/collapse-arrow.png" alt="collapse-arrow"/>
            <img v-else width="20" height="20" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
          </div>
          <div v-if='contentVisible === Object.keys(requirements).find(key =>requirements[key] === index)' class="w-full mb-2">

            <div class="flex flex-col gap-y-2 px-4">
              <div v-for="course in index.courses" class="flex justify-between items-center">
                <div class="flex">
                  <p class="text-lg font-medium">{{ course }}</p>
                </div>
                <button class="bg-sky-500 text-white py-2 px-3" @click="$emit('addCourse', courses.find((x) => x.name == course))">Add</button>
              </div>
            </div>
          </div>

        </li>
      </ul>
    </div>

  </div>
</template>
  
<script>
import { useCourseStore } from "~/store/store";

export default {
  name: 'CollapsableCard',
  components: {},
  props: ["year","requirements"],
  data() {
    return {
      contentVisible: "",
      courses: useCourseStore().courses,
    }
  },
}
</script>
  
<style scoped>
.collapsible {
  color: black;
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
}

.content {
  padding: 0 18px;
  overflow: hidden;
}</style>