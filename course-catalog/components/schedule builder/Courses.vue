<template>
  <button @click="logCourses">console log</button>
  <h1>{{ yearPicked }}</h1>
  <div>
    <div class="tabs">
      <button @click="switchTabs(`russian`)" class="tab r">Russian</button>
      <button @click="switchTabs(`gym`)" class="tab g">Gym</button>
      <button @click="switchTabs(`electives`)" class="tab e">Electives</button>
      <button @click="switchTabs(`history`)" class="tab h">History</button>
      <button @click="switchTabs(`english`)" class="tab en">English</button>
      <button @click="switchTabs(`science`)" class="tab s">Science</button>
      <button @click="switchTabs(`math`)" class="tab m">Math</button>
    </div>
    <div class="folder">
      <div v-if="showSubjects.showrussian" class="file russian">
        <div class="holders">
          <!-- <div @click="addCourse" class="placeholder russian">
            <h4 v-for="(course, i) in courses" :key="i" :name="name">
              {{ course?.name }}
            </h4>
          </div> -->
          <div @click="addCourse" class="placeholder russian">
            <h4>Russian</h4>
          </div>
          <div class="placeholder russian">
            <h4>Adv Russian</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showgym" class="file gym">
        <div class="holders">
          <div class="placeholder gym"><h4>Badminton</h4></div>
          <div class="placeholder gym"><h4>Volleyball</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showelectives" class="file electives">
        <div class="holders">
          <div class="placeholder electives"><h4>APCSP JS</h4></div>
          <div class="placeholder electives"><h4>APCSP Python</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showhistory" class="file history">
        <div class="holders">
          <div class="placeholder history"><h4>APUSH</h4></div>
          <div class="placeholder history"><h4>APUSH Film Art Music</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showenglish" class="file english">
        <div class="holders">
          <div class="placeholder english"><h4>AP Lang</h4></div>
          <div class="placeholder english"><h4>English</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showscience" class="file science">
        <div class="holders">
          <div class="placeholder science"><h4>AP Psychology</h4></div>
          <div class="placeholder science"><h4>AP Biology</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showmath" class="file math">
        <div class="holders">
          <div class="placeholder math"><h4>AP Calculus AB</h4></div>
          <div class="placeholder math"><h4>AP Calculus BC</h4></div>
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
    yearPicked: String
  },
  components: {
    useCourseStore,
  },
  data() {
    return {
      showSubjects: {
        showrussian: false,
        showgym: false,
        showelectives: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true,
      },
    };
  },
  methods: {
    // logAdded: function () {
    //   console.log(this.course?.name);
    // },
    logCourses: function () {
      if (this.yearPicked === "Senior") {
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.senior))
      } else if (this.yearPicked === "Freshman") {
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.freshman))
      } else if (this.yearPicked === "Sophomore") {
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.sophomore))
      } else if (this.yearPicked === "Junior") {
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.junior))
      }
    },
    switchTabs: function (subject) {
      let yearThing = `course.${this.yearPicked.toLowerCase()}`
      this.showSubjects.showrussian = false;
      this.showSubjects.showgym = false;
      this.showSubjects.showelectives = false;
      this.showSubjects.showenglish = false;
      this.showSubjects.showhistory = false;
      this.showSubjects.showscience = false;
      this.showSubjects.showmath = false;
      this.showSubjects.showlanding = false;
      if (subject === "russian") {
        this.showSubjects.showrussian = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "LANG" && yearThing ))
      } else if (subject === "gym") {
        this.showSubjects.showgym = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "PE" && yearThing ))
      } else if (subject === "electives") {
        this.showSubjects.showelectives = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "LANG" && yearThing )) // idk what electives is
      } else if (subject === "english") {
        this.showSubjects.showenglish = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "ENGLISH" && yearThing ))
      } else if (subject === "history") {
        this.showSubjects.showhistory = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "SS" && yearThing ))
      } else if (subject === "science") {
        this.showSubjects.showscience = true;
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "SCIENCE" && yearThing ))
      } else if (subject === "math") {
        this.showSubjects.showmath = true
        this.changeNeeded(useCourseStore().courses.filter(course => course.catalog && course.subject === "MATH" && yearThing ))
      } 
    },
    changeNeeded: function (shownCourses) { // will be part of switchTabs later
      const schedule = this.schedule;
      document.querySelectorAll(".button").forEach((button) => {
        button.remove();
      }); // it's both here and in scheduleBuilder because if it's only here then might cause problems if switch to different year and if only schedule builder it makes copies of existing things
        const needed = {
          // use the other false/true stuff to check if duplicate classes (2 science 2 english etc). idk which classes can and cant have duplicates
          english: false,
          math: false,
          science: false,
          history: false,
          gym: false,
          lunch: false,
          russian: false,
          AP: 0,
          educationalPeriods: 0,
        };
        shownCourses.forEach((object) =>
          document.querySelector(".folder").insertAdjacentHTML(`afterend`, `<button class="button">${object.name}</button>`)
        );
        document.querySelectorAll(".button").forEach((button) => {
          button.addEventListener("click", function () {
            const chosenClass = shownCourses.find((course) => course.name === this.textContent);
            console.log(chosenClass);
            if (chosenClass.ap) {
              if (needed.AP === 4) {
                console.log("you have too many ap classes");
                console.log(needed.AP);
              } else if (chosenClass.doublePeriod) {
                if (schedule.find((period) => period.name === undefined && schedule[period.period].name === undefined)) {
                  needed.AP += 1;
                  button.remove();
                  schedule.find((period) => period.name === undefined && schedule[period.period].name === undefined).name = chosenClass.name;
                  schedule[schedule.find((period) => period.name === chosenClass.name).period].name = chosenClass.name;
                  console.log(schedule);
                }
              } else if (schedule.find((period) => period.name === undefined)) {
                console.log(chosenClass.periods);
                needed.AP += 1;
                button.remove();
                schedule.find((period) => period.name === undefined).name = chosenClass.name;
                console.log(schedule);
              }
            } else if (schedule.find((period) => period.name === undefined)){
              button.remove();
              console.log(chosenClass.periods);
              schedule.find((period) => period.name === undefined).name = chosenClass.name;
              console.log(schedule);
            } //might need something else if there are non-ap classes that are 2 periods
          });
        });
    },
  }
};
</script>
<style scoped>  
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
.russian {
  background-color: #fedcb5;
}
.g {
  background-color: #ffadcb;
}
.gym {
  background-color: #ffadcb;
}
.e {
  background-color: #fffbd6;
}
.electives {
  background-color: #fffbd6;
}
.h {
  background-color: #e0d6ff;
}
.history {
  background-color: #e0d6ff;
}
.en {
  background-color: #d6eeff;
}
.english {
  background-color: #d6eeff;
}
.s {
  background-color: #cbf2d4;
}
.science {
  background-color: #cbf2d4;
}
.m {
  background-color: #ffdfdf;
}
.math {
  background-color: #ffdfdf;
}
.folder {
  display: flex;
  flex-direction: column;
}
.tabs {
  margin-left: 25%;
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
  width: 6.5rem;
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
