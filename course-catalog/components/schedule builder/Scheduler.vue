<script lang="ts">
import { storeToRefs } from "pinia";
import { useMockSchedule } from "~~/store/store";

export default {
  name: "Scheduler",
  props: {
    schedule: [Object],
    needed: Object,
    yearPicked: String,
  },
  data() {
    return {
      mockSchedule: useMockSchedule,
      disabled: false,
    };
  },
  methods: {
    save() {
      this.mockSchedule.schedule = this.schedule;
      this.mockSchedule.year = this.yearPicked;
    },
    saveDisabled() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
    returnLunch() {
      this.removeClass(4);
      this.schedule[4] = { name: "Lunch", subject: "LUNCH" };
    },
    removeClass(period) {
      const pickedClass = this.schedule[period];
      console.log(pickedClass);
      if (this.yearPicked === "Senior" && pickedClass.name === "Lunch") {
        if (pickedClass.ap) {
          this.needed.ap = -1;
        }
        if (pickedClass.subject === "LANG") {
          this.needed.LANG -= 1;
        } else if (pickedClass.subject === "ENGLISH") {
          this.needed.ENGLISH -= 1;
        } else if (pickedClass.subject === "ARTS") {
          this.needed.ARTS -= 1;
        } else if (pickedClass.subject === "SS") {
          this.needed.SS -= 1;
        } else if (
          pickedClass.subject === "TECH" ||
          pickedClass.name ==
            `Comp Sci/Engineering T1
        +`
        ) {
          this.needed.TECH -= 1;
        } else if (pickedClass.subject === "PE") {
          this.needed.PE -= 1;
        } else if (pickedClass.subject === "MATH") {
          this.needed.MATH -= 1;
        } else if (
          pickedClass.subject === "SCIENCE" &&
          pickedClass.name !== `Comp Sci/Engineering T1`
        ) {
          this.needed.SCIENCE -= 1;
        }
        /*         } else if (pickedClass.subject === "LUNCH") {
          this.needed.LUNCH -= 1 Unsure if lunch should be deleted
        } */
        if (pickedClass.double_period) {
          this.needed.educational -= 1;
          this.schedule.forEach((scheduledClass) => {
            if (scheduledClass.name === pickedClass.name) {
              this.schedule[this.schedule.indexOf(scheduledClass)] = {};
              console.log(scheduledClass);
            }
          });
        }
        this.needed.educationalPeriods -= 1;
        this.schedule[period] = {};
      } else if (this.yearPicked !== "Senior" && pickedClass.name === "Lunch") {
        alert("You are not allowed to remove Lunch");
      } else {
        if (pickedClass.ap) {
          this.needed.ap = -1;
        }
        if (pickedClass.subject === "LANG") {
          this.needed.LANG -= 1;
        } else if (pickedClass.subject === "ENGLISH") {
          this.needed.ENGLISH -= 1;
        } else if (pickedClass.subject === "ARTS") {
          this.needed.ARTS -= 1;
        } else if (pickedClass.subject === "SS") {
          this.needed.SS -= 1;
        } else if (
          pickedClass.subject === "TECH" ||
          pickedClass.name ==
            `Comp Sci/Engineering T1
        +`
        ) {
          this.needed.TECH -= 1;
        } else if (pickedClass.subject === "PE") {
          this.needed.PE -= 1;
        } else if (pickedClass.subject === "MATH") {
          this.needed.MATH -= 1;
        } else if (
          pickedClass.subject === "SCIENCE" &&
          pickedClass.name !== `Comp Sci/Engineering T1`
        ) {
          this.needed.SCIENCE -= 1;
        }
        /*         } else if (pickedClass.subject === "LUNCH") {
          this.needed.LUNCH -= 1 Unsure if lunch should be deleted
        } */
        if (pickedClass.double_period) {
          this.needed.educational -= 1;
          this.schedule.forEach((scheduledClass) => {
            if (scheduledClass.name === pickedClass.name) {
              this.schedule[this.schedule.indexOf(scheduledClass)] = {};
              console.log(scheduledClass);
            }
          });
        }
        this.needed.educationalPeriods -= 1;
        this.schedule[period] = {};
      }
    },
  },
};
</script>
<template>
  <div>
    <table class="table" v-if="this.mockSchedule.schedule === undefined">
      <tr class="">
        <th class="p-4 py-2" id="right">Period</th>
        <th class="px-20">Class</th>
      </tr>
      <!-- <div v-if="this.mockSchedule.schedule === undefined"> -->
      <tr class="border-t-4">
        <td class="right" id="">1</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[0].subject"
            id="first"
            v-on:click="removeClass(0)"
          >
            {{ schedule[0].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">2</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[1].subject"
            v-on:click="removeClass(1)"
          >
            {{ schedule[1].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">3</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[2].subject"
            v-on:click="removeClass(2)"
          >
            {{ schedule[2].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">4</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[3].subject"
            v-on:click="removeClass(3)"
          >
            {{ schedule[3].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">5</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[4].subject"
            v-on:click="removeClass(4)"
          >
            {{ schedule[4].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">6</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[5].subject"
            v-on:click="removeClass(5)"
          >
            {{ schedule[5].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">7</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[6].subject"
            v-on:click="removeClass(6)"
          >
            {{ schedule[6].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">8</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[7].subject"
            v-on:click="removeClass(7)"
          >
            {{ schedule[7].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="lastnum">9</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[8].subject"
            id="last"
            v-on:click="removeClass(8)"
          >
            {{ schedule[8].name }}
          </div>
        </td>
      </tr>
    </table>
    <!-- </div> -->
    <!-- <div v-else> -->
    <table class="table" v-else>
      <tr class="">
        <th class="p-4 py-2" id="right">Period</th>
        <th class="px-20">Class</th>
      </tr>
      <tr class="border-t-4">
        <td class="right" id="">1</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[0].subject"
            id="first"
            v-on:click="removeClass(0)"
          >
            {{ schedule[0].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">2</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[1].subject"
            v-on:click="removeClass(1)"
          >
            {{ schedule[1].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">3</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[2].subject"
            v-on:click="removeClass(2)"
          >
            {{ schedule[2].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">4</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[3].subject"
            v-on:click="removeClass(3)"
          >
            {{ schedule[3].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">5</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[4].subject"
            v-on:click="removeClass(4)"
          >
            {{ schedule[4].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">6</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[5].subject"
            v-on:click="removeClass(5)"
          >
            {{ schedule[5].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">7</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[6].subject"
            v-on:click="removeClass(6)"
          >
            {{ schedule[6].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="">8</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[7].subject"
            v-on:click="removeClass(7)"
          >
            {{ schedule[7].name }}
          </div>
        </td>
      </tr>
      <tr class="">
        <td class="right" id="lastnum">9</td>
        <td>
          <div
            class="placeholder"
            :class="schedule[8].subject"
            id="last"
            v-on:click="removeClass(8)"
          >
            {{ schedule[8].name }}
          </div>
        </td>
      </tr>
    </table>
    <button
      class="mt-4"
      id="save"
      @click="
        save();
        saveDisabled();
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        id="saveIcon"
        class="fill-white mr-2"
        :class="{ bounce: disabled }"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
        />
      </svg>
      <span v-if="disabled">Schedule Saved!</span
      ><span v-else>Save Schedule</span>
    </button>
  </div>
  <!-- Put if lunch removed, then show button and note when select senior -->
  <button
    class="addLunch absolute"
    v-show="this.yearPicked === 'Senior'"
    @click="returnLunch()"
  >
    +
  </button>
</template>
<style scoped>
table,
td {
  border-radius: 5px;
  -moz-border-radius: 5px;
}
table {
  border: 4px solid lightgrey;
  text-align: center;
  margin-top: 1rem;
  margin-right: 2rem;
  /* border-collapse: separate;
  border-spacing: 5rem; */
}
.right {
  padding-top: 0.7rem;
  color: #606060;
}
td {
  margin-top: 2rem;
  border-right: 4px solid lightgrey;
  font-weight: bold;
  color: #37394f;
}
p {
  margin-top: 1rem;
}
.placeholder {
  width: 18rem;
  height: 2.3rem;
  border: 2px solid #7d7d7d;
  border-radius: 15px;
  margin: 1rem 2rem 0.2rem 2rem;
  padding-top: 4px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #37394f;
}
.addLunch {
  top: 32.35rem;
  left: 26rem;
  font-size: 2rem;
}
.r {
  background-color: #fedcb5;
}
.LANG {
  background-color: #fedcb5;
}
.g {
  background-color: #bebfdf;
}
.PE {
  background-color: #bebfdf;
}
.a {
  background-color: #ffdfdf;
}
.ARTS {
  background-color: #ffdfdf;
}
.t {
  background-color: #fffbd6;
}
.TECH {
  background-color: #fffbd6;
}
.h {
  background-color: #e0d6ff;
}
.SS {
  background-color: #e0d6ff;
}
.en {
  background-color: #d6eeff;
}
.ENGLISH {
  background-color: #d6eeff;
}
.s {
  background-color: #cbf2d4;
}
.SCIENCE {
  background-color: #cbf2d4;
}
.m {
  background-color: #ffadb2;
}
.MATH {
  background-color: #ffadb2;
}
.LUNCH {
  background-color: #d2fcff;
}
#lastnum {
  padding-top: 0rem;
  padding-bottom: 0.6rem;
}
#last {
  margin-bottom: 1.5rem;
}
#save {
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  background-color: #37394f;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  height: 50px;
  line-height: 1.5;
  padding: 14px 22px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
}

#save:hover {
  background-color: #4d506e;
  opacity: 1;
  transform: translateY(0);
  transition-duration: 0.35s;
}
#saveIcon {
  margin-top: 0.2rem;
}
.bounce {
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%,
  30%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 176px;
  }
}

@media only screen and (max-width: 1180px) {
  .table {
    display: none;
  }
}
@media screen and (max-width: 1420px) {
  table {
    margin-right: 1rem;
  }
  .placeholder {
    width: 16rem;
    font-size: 1rem;
    padding-top: 6px;
  }
  .addLunch {
    left: 24rem;
  }
}
@media screen and (max-width: 1480px) {
  .addLunch {
    top: 30.4rem;
  }
}
</style>
