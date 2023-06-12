<template>
  <div class="whole">
    <div class="requirements">
      <button class="note" @click="showr = !showr">
        <svg
          v-if="
            (this.yearpicked === 'Senior' &&
              this.needed.ENGLISH !== 0 &&
              this.needed.MATH !== 0 &&
              this.needed.SS !== 0 &&
              this.needed.PE !== 0 &&
              this.needed.SCIENCE !== 0 &&
              this.needed.educationalPeriods >= 0) ||
            (this.yearPicked !== `Senior` &&
              this.needed.ENGLISH !== 0 &&
              this.needed.MATH !== 0 &&
              this.needed.SS !== 0 &&
              this.needed.PE !== 0 &&
              this.needed.SCIENCE !== 0 &&
              this.needed.LANG !== 0 &&
              this.needed.LUNCH !== 0 &&
              this.needed.educationalPeriods >= 7) ||
            (this.yearPicked !== 'Freshman' &&
              this.needed.ENGLISH !== 0 &&
              this.needed.MATH !== 0 &&
              this.needed.SS !== 0 &&
              this.needed.PE !== 0 &&
              this.needed.SCIENCE !== 0 &&
              this.needed.LANG !== 0 &&
              this.needed.LUNCH !== 0 &&
              this.needed.this.yearPicked === `Freshman` &&
              this.needed.TECH !== 0)
          "
          class="green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
          />
        </svg>
        <svg
          v-else
          class="red"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
          />
        </svg>
      </button>
      <div v-if="showr" class="require">
        <div class="uncr">
          <h3 class="mt-0 mb-3 font-bold">Requirements</h3>
          <bl class="">
            <li v-if="this.needed.ENGLISH === 0">
              <Xmark />
              <h5>English</h5>
            </li>
            <li v-if="this.needed.ENGLISH !== 0">
              <Checkmark />
              <h5>English</h5>
            </li>
            <li v-if="this.needed.MATH === 0">
              <Xmark />
              <h5>Math</h5>
            </li>
            <li v-if="this.needed.MATH !== 0">
              <Checkmark />
              <h5>Math</h5>
            </li>
            <li v-if="this.needed.SS === 0">
              <Xmark />
              <h5>History</h5>
            </li>
            <li v-if="this.needed.SS !== 0">
              <Checkmark />
              <h5>History</h5>
            </li>
            <li v-if="this.needed.PE === 0">
              <Xmark />
              <h5>Physical Education</h5>
            </li>
            <li v-if="this.needed.PE !== 0">
              <Checkmark />
              <h5>Physical Education</h5>
            </li>
            <li
              v-if="this.needed.SCIENCE === 0 && this.yearPicked !== 'Senior'"
            >
              <Xmark />
              <h5>Science</h5>
            </li>
            <li
              v-if="this.needed.SCIENCE !== 0 || this.yearPicked === `Senior`"
            >
              <Checkmark />
              <h5>Science</h5>
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LANG === 0">
              <Xmark />
              <h5>Russian</h5>
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LANG !== 0">
              <Checkmark />
              <h5>Russian</h5>
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LUNCH !== 0">
              <Checkmark />
              <h5>Lunch</h5>
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LUNCH === 0">
              <Xmark />
              <h5>Lunch</h5>
            </li>
            <li v-if="this.yearPicked === `Freshman` && this.needed.TECH === 0">
              <Xmark />
              <h5>Technology Elective</h5>
            </li>
            <li v-if="this.yearPicked === `Freshman` && this.needed.TECH !== 0">
              <Checkmark />
              <h5>Technology Elective</h5>
            </li>
            <li v-if="this.needed.educationalPeriods < 7">
              <Xmark />
              <h5>7 educational periods</h5>
            </li>
            <li v-if="this.needed.educationalPeriods >= 7">
              <Checkmark />
              <h5>7 educational periods</h5>
            </li>
          </bl>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button @click="switchTabs(`russian`)" class="tab r">Russian</button>
      <button @click="switchTabs(`gym`)" class="tab g">PE</button>
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
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showgym" class="file PE">
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showart" class="file a">
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showtechnology" class="file TECH">
        <div class="holdersBg">
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
            <div
              class="placeholder TECH"
              v-for="course in courses.filter(
                (course) =>
                  course.catalog &&
                  course.subject === `SCIENCE` &&
                  course[`${this.yearPicked.toLowerCase()}`] &&
                  course.name === `Comp Sci/Engineering T1`
              )"
              v-on:click="addClass(course)"
            >
              <h4>{{ course.name }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showhistory" class="file SS">
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showenglish" class="file ENGLISH">
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showscience" class="file SCIENCE">
        <div class="holdersBg">
          <div class="holders">
            <div
              class="placeholder SCIENCE"
              v-for="course in courses.filter(
                (course) =>
                  course.catalog &&
                  course.subject === `SCIENCE` &&
                  course[`${this.yearPicked.toLowerCase()}`] &&
                  course.name !== `Comp Sci/Engineering T1`
              )"
              v-on:click="addClass(course)"
            >
              <h4>{{ course.name }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showmath" class="file MATH">
        <div class="holdersBg">
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
      </div>
      <div v-if="showSubjects.showlanding" class="file landing">
        <div class="content">
          <h2 class="font-bold text-lg">Instructions</h2>
          <div class="mt-2">
            <h3 class="mt-4">
              ○ Click on subject tabs and drag desired courses to the schedule
              maker. Please keep in mind that this may not be your actual
              schedule that year.
            </h3>
            <h3 class="mt-4">
              ○ Period 5 Lunch is default for this scheduler, not your actual
              schedule. For Seniors, press + to add your lunch back.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCourseStore } from "~/store/store";
import Xmark from "~/components/icons/Xmark.vue";
import Checkmark from "~/components/icons/Checkmark.vue";
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
            (course) => course.name === "English T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Chemistry T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.SCIENCE += 1;
        this.needed.educationalPeriods += 4;
      } else if (this.yearPicked === "Sophomore") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP World History T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T3" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.educationalPeriods += 2;
      }
    },
  },
  components: {
    useCourseStore,
    Xmark,
    Checkmark,
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
  created() {
    this.removeMathTeam();
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
    removeMathTeam() {
      this.courses.splice(49, 2);
    },
    addClass: function (chosenClass) {
      const schedule = this.schedule;
      const needed = this.needed;
      const yearPicked = this.yearPicked;
      function neededChange() {
        if (chosenClass.name !== `Comp Sci/Engineering T1`) {
          // to treat comp sci like a science
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
          } else if (
            chosenClass.subject === "TECH" &&
            yearPicked === "Freshman" &&
            needed.TECH < 1
          ) {
            // av, stem, comp sci should not be together (they are currently they only choice for freshmen)
            needed.TECH += 1;
            return true;
          } else if (
            chosenClass.subject === "TECH" &&
            yearPicked !== "Freshman" &&
            needed.TECH < 2
          ) {
            needed.TECH += 1;
            return true;
          } else if (
            chosenClass.name === "Adv Sci Eng Res T3" ||
            chosenClass.name === "Adv Sci Eng Res T5" ||
            chosenClass.name === "Forensic Sci Seminar" ||
            chosenClass.name === "Modern Physics Seminar"
          ) {
            alert("This class will take the place of your lunch class");
          } else if (chosenClass.subject === "PE" && needed.PE === 0) {
            needed.PE += 1;
            return true;
          } else if (chosenClass.subject === "MATH" && needed.MATH === 0) {
            needed.MATH += 1;
            return true;
          } else if (
            (chosenClass.subject === "SCIENCE" && needed.SCIENCE < 1) ||
            (chosenClass.subject === "SCIENCE" &&
              yearPicked !== "Freshman" &&
              yearPicked !== "Sophomore" &&
              needed.SCIENCE < 2)
          ) {
            needed.SCIENCE += 1;
            return true;
          } else {
            alert("You can not have any more of that subject");
          }
        } else if (needed.TECH < 1) {
          // it's a freshman class, and av, stem, comp sci should not be together (they are currently they only choice)
          needed.TECH += 1;
          return true;
        } else {
          alert("You can not have any more of that subject");
        }
      }
      console.log(chosenClass);
      if (schedule.find((period) => period.name === chosenClass.name)) {
        alert("You can't have 2 of the same class");
      } else {
        if (chosenClass.ap) {
          if (needed.ap === 4) {
            alert("You have too many ap classes");
          } else if (chosenClass.double_period) {
            if (
              schedule.find(
                (period) =>
                  period.name === undefined &&
                  schedule[schedule.indexOf(period) + 1].name === undefined
              )
            ) {
              if (neededChange()) {
                needed.ap += 1;
                Object.assign(
                  schedule.find(
                    (period) =>
                      period.name === undefined &&
                      schedule[schedule.indexOf(period) + 1].name === undefined
                  ),
                  chosenClass
                );
                Object.assign(
                  schedule[
                    schedule.indexOf(
                      schedule.find(
                        (period) => period.name === chosenClass.name
                      )
                    ) + 1
                  ],
                  chosenClass
                );
                needed.educationalPeriods += 2;
              }
            } else {
              alert("You don't have 2 consecutive empty spaces");
            }
          } else if (schedule.find((period) => period.name === undefined)) {
            if (neededChange()) {
              needed.ap += 1;
              Object.assign(
                schedule.find((period) => period.name === undefined),
                chosenClass
              );
              needed.educationalPeriods += 1;
            }
          }
        } else if (schedule.find((period) => period.name === undefined)) {
          if (neededChange()) {
            Object.assign(
              schedule.find((period) => period.name === undefined),
              chosenClass
            );
            needed.educationalPeriods += 1;
            if (chosenClass.name === "PE T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Health Education"
              );
            } else if (chosenClass.name === "Health Education") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with PE "
              );
            }
            if (chosenClass.name === "Engineering Robotics") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with A/V Eng & TV Studio OR Comp Sci/Engineering"
              );
            } else if (chosenClass.name === "A/V Eng & TV Studio") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
            } else if (chosenClass.name === "Comp Sci/Engineering T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
              schedule.find(
                (period) => period.name === chosenClass.name
              ).subject = "TECH";
            }
          }
        } else {
          alert("You don't have enough space for another class");
        } //might need something else if there are non-ap classes that are 2 periods
      }
      if (schedule[8].name) {
        this.showr = true;
        console.log(schedule[8]);
      }
    },
  },
};
</script>
<style scoped>
.whole {
  overflow: hidden;
  margin-left: 5rem;
}
.requirements {
  margin-top: -3rem;
  margin-bottom: 3.5rem;
}
.require {
  position: absolute;
  z-index: 5;
  background-color: white;
  padding: 1rem;
  padding-bottom: 1.5rem;
  border: 2px solid #37394f;
  border-radius: 1rem;
  color: #37394f;
  width: 30%;
  margin-left: 30%;
  margin-top: -1rem;
}
.note {
  position: absolute;
  z-index: 6;
  width: 1.5rem;
  margin-left: 57%;
}
svg {
  fill: #f20707;
  transition: 0.3s;
}
svg:hover {
  opacity: 0.8;
}
.file {
  position: absolute;
  line-height: 4;
  width: 50%;
  margin-left: 5%;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  padding: 2rem;
  height: 34rem;
}
.holdersBg {
  background-color: white;
  border-radius: 0.8rem;
  height: 100%;
}
.holders {
  position: relative;
  z-index: 3;
  border-radius: 0.8rem;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-column-gap: 10px;
  justify-content: center;
  margin: auto;
  padding-bottom: 1.5rem;
}
h4 {
  margin-top: 4px;
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
  border: 2px solid #7d7d7d;
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
.content {
  margin-left: 5rem;
  margin-right: 5rem;
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
.LUNCH {
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
  width: 7rem;
  color: #37394f;
}
.tab:hover {
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
}
.x {
  fill: #f20707;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0;
  width: 1rem;
}
.check {
  fill: #1abd18;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0;
  width: 1rem;
}
li {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 1660px) {
  .tabs {
    margin-left: 10%;
  }
  .tab {
    width: 6.5rem;
  }
  .file {
    margin-left: 1.8%;
    width: 53%;
  }
}
@media screen and (max-width: 1560px) {
  .require {
    margin-left: 26%;
  }
  .note {
    margin-left: 52%;
  }
  .tabs {
    margin-left: 8%;
  }
  .tab {
    width: 6rem;
  }
}

@media screen and (max-width: 1420px) {
  .placeholder {
    font-size: 1rem;
    width: 16rem;
    margin: 2rem 1rem 0.2rem 1rem;
  }
  h4 {
    margin-top: 0.4rem;
  }
  .tabs {
    margin-left: 3.5%;
  }
  .tab {
    font-size: 0.8rem;
    width: 5.2rem;
  }
  .require {
    margin-left: 24%;
  }
  .note {
    margin-left: 50%;
  }
  .file {
    margin-left: 0%;
    width: 53%;
  }
  .content {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
