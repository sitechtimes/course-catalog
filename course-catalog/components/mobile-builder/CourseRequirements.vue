<script lang="ts">
export default {
    name: "CourseRequirements",
    data() {
        return {
            showRequirements: false,
        };
    },
    props: ["requirements"],
    methods: {
        show() {
            this.showRequirements = !this.showRequirements;
        },
    },
};
</script>

<template>
    <div class="flex flex-col rounded-lg mb-5 mx-4 p-3 border-2 border-[#FAA059] bg-[#FDE9D0] lg:h-1/6 lg:w-[20%] lg:p-5">
        <div class="flex flex-col justify-start items-center">
            <div class="flex w-full justify-between items-center">
                <h1 class="text-lg font-bold">
                    Requirements
                </h1>
                <p class="text-md font-semibold">
                        {{  Object.keys(requirements).filter(key => requirements[key] === true).length }} /
                        {{ Object.keys(requirements).length }}
                </p>
            </div>

            <div class="flex gap-2 w-full" v-for="x in Object.keys(requirements)">
                <svg v-if="requirements[x]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
                    viewBox="0,0,256,256">
                    <g fill="#1abd18" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(10.66667,10.66667)">
                            <path
                                d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z">
                            </path>
                        </g>
                    </g>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24" fill="#f20707">
                    <path
                        d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z">
                    </path>
                </svg>
                <p class="font-regular">{{ x }}</p>
            </div>
        </div>


    </div>
 </template>
