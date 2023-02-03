<template>
  <div>
    <div class="requirements">
      <button class="note" @click="showr">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
          />
        </svg>
      </button>
      <div class="require">
        <h3 class="mt-0 font-bold">Requirements</h3>
        <ul>
          <li>English</li>
          <li>Math</li>
          <li>Science</li>
          <li>History</li>
          <li>Gym</li>
          <li>Lunch</li>
          <li>Russian</li>
          <li>7 educational periods (not including lunch)</li>
        </ul>
        <button @click="" class="font-bold ml-80 mt-3">HIDE</button>
      </div>
    </div>

    <div class="tabs">
      <button @click="switchTabs(`russian`)" class="tab r">Russian</button>
      <button @click="switchTabs(`gym`)" class="tab g">Gym</button>
      <button @click="switchTabs(`art`)" class="tab a">Art</button>
      <button @click="switchTabs(`technology`)" class="tab t">
        Technology
      </button>
      <button @click="switchTabs(`history`)" class="tab h">History</button>
      <button @click="switchTabs(`english`)" class="tab en">English</button>
      <button @click="switchTabs(`science`)" class="tab s">Science</button>
      <button @click="switchTabs(`math`)" class="tab m">Math</button>
    </div>
    <div class="folder">
      <div v-if="showSubjects.showrussian" class="file LANG">
        <div class="holders">
          <div
            class="placeholder LANG"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `LANG` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showgym" class="file PE">
        <div class="holders">
          <div
            class="placeholder PE"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `PE` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showart" class="file ARTS">
        <div class="holders">
          <div
            class="placeholder ARTS"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `ARTS` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showtechnology" class="file TECH">
        <div class="holders">
          <div
            class="placeholder TECH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `TECH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showhistory" class="file SS">
        <div class="holders">
          <div
            class="placeholder SS"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `SS` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showenglish" class="file ENGLISH">
        <div class="holders">
          <div
            class="placeholder ENGLISH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `ENGLISH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showscience" class="file SCIENCE">
        <div class="holders">
          <div
            class="placeholder SCIENCE"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `SCIENCE` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showmath" class="file MATH">
        <div class="holders">
          <div
            class="placeholder MATH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `MATH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showlanding" class="file landing">
        <div class="content">
          <h2>Instructions</h2>
          <h3>
            Click on subject tabs and drag desired courses to the schedule
            maker. Please keep in mind that this may not be your actual schedule
            that year.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCourseStore } from "~/store/store";
import SubjectType from "../course-cards/SubjectType.vue";
export default {
  name: "Courses",
  props: {
    schedule: [Object],
    yearPicked: String,
    needed: Object,
  },
  watch: {
    yearPicked: function () {
      this.showSubjects.showrussian = false;
      this.showSubjects.showgym = false;
      this.showSubjects.showart = false;
      this.showSubjects.showtechnology = false;
      this.showSubjects.showenglish = false;
      this.showSubjects.showhistory = false;
      this.showSubjects.showscience = false;
      this.showSubjects.showmath = false;
      this.showSubjects.showlanding = true;
    },
  },
  components: {
    useCourseStore,
  },
  data() {
    return {
      showr: false,
      showSubjects: {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true,
      },

      courses: useCourseStore().courses,
    };
  },
  methods: {
    switchTabs: function (subject) {
      if (this.yearPicked) {
        this.showSubjects.showrussian = false;
        this.showSubjects.showgym = false;
        this.showSubjects.showart = false;
        this.showSubjects.showtechnology = false;
        this.showSubjects.showenglish = false;
        this.showSubjects.showhistory = false;
        this.showSubjects.showscience = false;
        this.showSubjects.showmath = false;
        this.showSubjects.showlanding = false;
        if (subject === "russian") {
          this.showSubjects.showrussian = true;
        } else if (subject === "gym") {
          this.showSubjects.showgym = true;
        } else if (subject === "art") {
          this.showSubjects.showart = true;
        } else if (subject === "english") {
          this.showSubjects.showenglish = true;
        } else if (subject === "history") {
          this.showSubjects.showhistory = true;
        } else if (subject === "science") {
          this.showSubjects.showscience = true;
        } else if (subject === "math") {
          this.showSubjects.showmath = true;
        } else if (subject === "technology") {
          this.showSubjects.showtechnology = true;
        }
      } else {
        alert("Pick a year from the dropdown");
      }
    },
    addClass: function (chosenClass) {
      const schedule = this.schedule;
      const needed = this.needed;
      console.log(schedule);
      if (schedule.find((period) => period.name === chosenClass.name)) {
        alert("You can't have 2 of the same class");
      } else {
        if (chosenClass.ap) {
          if (needed.ap === 4) {
            alert("You have too many ap classes");
          } else if (chosenClass.doublePeriod) {
            if (
              schedule.find(
                (period) => period.name === undefined && schedule[period.period]
              )
            ) {
              needed.ap += 1;
              Object.assign(
                schedule.find(
                  (period) =>
                    period.name === undefined &&
                    schedule[period.period].name === undefined
                ),
                chosenClass
              );
              Object.assign(
                schedule[
                  schedule.find((period) => period.name === chosenClass.name)
                    .period
                ],
                chosenClass
              );
            } else {
              alert("You don't have enough space for another double period");
            }
          } else if (schedule.find((period) => period.name === undefined)) {
            needed.ap += 1;
            Object.assign(
              schedule.find((period) => period.name === undefined),
              chosenClass
            );
          }
        } else if (schedule.find((period) => period.name === undefined)) {
          Object.assign(
            schedule.find((period) => period.name === undefined),
            chosenClass
          );
        } else {
          alert("You don't have enough space for another class");
        } //might need something else if there are non-ap classes that are 2 periods
      }
    },
  },
};
</script>
<style>
.require {
  position: absolute;
  z-index: 2;
  background-color: white;
  padding: 1rem;
  border: 2px solid #37394f;
  border-radius: 1rem;
  color: #37394f;
  width: 30%;
  margin-left: 30%;
  margin-bottom: 1rem;
}
svg {
  fill: #37394f;
  transition: 0.3s;
}
svg:hover {
  opacity: 0.8;
}
.file {
  position: absolute;
}
.test {
  background-color: #d6eeff;
}
.holders {
  border-radius: 0.8rem;
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  overflow: overflow;
  display: grid;
  grid-column-gap: 10px;
  justify-content: center;
  margin: auto;
  padding-top: 1.5rem;
}
h4 {
  margin-top: 3px;
  font-weight: bold;
}
.placeholder {
  text-align: center;
  font-size: 1.2rem;
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 1rem 2rem 0.2rem 2rem;
  transition: 0.3s;
  color: #37394f;
}
.landing {
  display: block;
  background-color: #fff2e2;
  color: #37394f;
}
.placeholder:hover {
  opacity: 0.5;
  cursor: pointer;
}
.placeholder:active {
  background-color: #ededed;
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
.ART {
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
.lunch {
  background-color: #d2fcff;
}
.folder {
  display: flex;
  flex-direction: column;
}
.tabs {
  margin-left: 15%;
  display: flex;
  flex-direction: row;
}
.tab {
  text-align: left;
  font-weight: bold;
  font-size: 1rem;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  transition: 0.4s;
  padding: 0.5rem;
  width: 6.2rem;
  color: #37394f;
}
.tab:hover {
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
}

@media only screen and (min-width: 976px) {
  .file {
    line-height: 4;
    width: 55%;
    margin-left: 2%;
    border-radius: 0.8rem;
    padding: 2rem;
    height: 30rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    line-height: 2;
    font-size: 1rem;
    width: 88%;
    margin-top: 1rem;
  }
}
@media only screen and (min-width: 1440px) {
  .note {
    margin-left: 55%;
    position: absolute;
    z-index: 6;
    margin-top: 1rem;
  }
  svg {
    width: 1.5rem;
    margin-left: 105%;
  }
  .tabs {
    margin-left: 15%;
  }
  .file {
    line-height: 4;
    width: 55%;
    margin-left: 4%;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    padding: 2rem;
    height: 34rem;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  .holders {
    border-radius: 0.8rem;
    height: 100%;
    justify-content: center;
    margin: auto;
  }
}
@media only screen and (min-width: 1740px) {
  svg {
    width: 1rem;
  }
  .file {
    width: 53%;
    height: 69.5%;
    margin-left: 8rem;
  }
  .tabs {
    margin-left: 35%;
  }
  .tab {
    width: 9rem;
  }
}
</style>
