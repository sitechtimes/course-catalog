<template>
  <div class="whole">
    <div class="requirements">
      <button class="note" @click="showr = !showr">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
          />
        </svg>
      </button>
      <div v-if="showr" class="require">
        <div class="uncr">
          <h3 class="mt-0 font-bold">Underclassmen Requirements</h3>
          <bl>
            <li>English</li>
            <li>Math</li>
            <li>Science</li>
            <li>History</li>
            <li>Gym</li>
            <li>Lunch</li>
            <li>Russian</li>
            <li>7 educational periods (not including lunch)</li>
          </bl>
        </div>
        <div class="seniorr">
          <h3 class="mt-1 font-bold">Senior Requirements</h3>
          <bl>
            <li>English</li>
            <li>Math</li>
            <li>Gym</li>
            <li>7 educational periods (not including lunch)</li>
          </bl>
        </div>
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
      <div v-if="showSubjects.showart" class="file a">
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
      this.showSubjects = {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true,
      };
      if (this.yearPicked === "Freshman") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Russian T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP World History T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "PE T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Chemistry T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Geometry T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.MATH += 1;
        this.needed.SCIENCE += 1;
        this.needed.PE += 1;
      } else if (this.yearPicked === "Sophomore") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Russian T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP World History T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "PE T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Physics T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Algebra II T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.MATH += 1;
        this.needed.SCIENCE += 1;
        this.needed.PE += 1;
      } else if (this.yearPicked === "Junior") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Russian T5" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP US History T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "PE T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T5" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Applied Physics T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Pre-Calculus T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.MATH += 1;
        this.needed.SCIENCE += 1;
        this.needed.PE += 1;
      } else if (this.yearPicked === "Senior") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Economics" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "PE T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "E7 Creative Writing" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) =>
              course.name === "Multivariable Calculus T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.MATH += 1;
        this.needed.PE += 1;
      }
    },
  },
  components: {
    useCourseStore,
  },
  data() {
    return {
      hider: true,
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
      function neededChange() {
        if (chosenClass.subject === "LANG" && needed.LANG === 0) {
          needed.LANG += 1;
          return true;
        } else if (chosenClass.subject === "ENGLISH" && needed.ENGLISH < 2) {
          needed.ENGLISH += 1;
          return true;
        } else if (chosenClass.subject === "ARTS" && needed.ARTS < 2) {
          needed.ARTS += 1;
          return true;
        } else if (chosenClass.subject === "SS" && needed.SS === 0) {
          needed.SS += 1;
          return true;
        } else if (chosenClass.subject === "TECH" && needed.TECH < 2) {
          needed.TECH += 1;
          return true;
        } else if (chosenClass.subject === "PE" && needed.PE === 0) {
          needed.PE += 1;
          return true;
        } else if (chosenClass.subject === "MATH" && needed.MATH === 0) {
          needed.MATH += 1;
          return true;
        } else if (chosenClass.subject === "SCIENCE" && needed.SCIENCE < 2) {
          needed.SCIENCE += 1;
          return true;
        } else {
          alert("You can not have more of that subject");
        }
      }
      console.log(chosenClass);
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
              if (neededChange()) {
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
                    schedule.find(
                      (period) => period.name === chosenClass.name
                    ) + 1
                  ],
                  chosenClass
                );
              }
            } else {
              alert("You don't have enough space for another double period");
            }
          } else if (schedule.find((period) => period.name === undefined)) {
            if (neededChange()) {
              needed.ap += 1;
              Object.assign(
                schedule.find((period) => period.name === undefined),
                chosenClass
              );
            }
          }
        } else if (schedule.find((period) => period.name === undefined)) {
          if (neededChange()) {
            Object.assign(
              schedule.find((period) => period.name === undefined),
              chosenClass
            );
          }
        } else {
          alert("You don't have enough space for another class");
        } //might need something else if there are non-ap classes that are 2 periods
      }
    },
  },
};
</script>
<style>
.requirements {
  margin-top: -3rem;
  margin-bottom: 3.5rem;
}
.require {
  position: absolute;
  z-index: 2;
  background-color: white;
  padding: 1rem;
  padding-bottom: 2rem;
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
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-column-gap: 10px;
  justify-content: center;
  margin: auto;
  box-shadow: 2px 0px 2px 0px rgba(0.3, 0.5, 0.3, 0.2);
  padding-bottom: 1.5rem;
}
h4 {
  margin-top: 3px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
  padding-right: 1rem;
}
.placeholder {
  text-align: center;
  font-size: 1.2rem;
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 2rem 2rem 0.2rem 2rem;
  transition: 0.3s;
  color: #37394f;
  overflow: hidden;
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

@media only screen and (max-width: 1180px) {
  .whole {
    display: none;
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
    margin-left: 20%;
  }
  .tab {
    width: 7.5rem;
  }
  .file {
    line-height: 4;
    width: 55%;
    margin-left: 3%;
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
    width: 1.5rem;
    margin-left: 5rem;
    margin-bottom: 6rem;
  }
  .file {
    width: 53%;
    height: 69.5%;
    margin-left: 8rem;
  }
  .tabs {
    margin-left: 23%;
  }
  .tab {
    width: 8rem;
  }
}
</style>
