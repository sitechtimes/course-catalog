<template>
  <button @click="logCourses()">console log</button>
  <div>
    <div class="tabs">
      <button @click="switchTabs(`Russian`)" class="tab r">Russian</button>
      <button @click="showSubjects.showgym = !showSubjects.showgym" class="tab g">Gym</button>
      <button @click="showSubjects.showelectives = !showSubjects.showelectives" class="tab e">
        Electives
      </button>
      <button @click="showSubjects.showhistory = !showSubjects.showhistory" class="tab h">History</button>
      <button @click="showSubjects.showenglish = !showSubjects.showenglish" class="tab en">
        English
      </button>
      <button @click="showSubjects.showscience = !showSubjects.showscience" class="tab s">Science</button>
      <button @click="showSubjects.showmath = !showSubjects.showmath" class="tab m">Math</button>
    </div>
    <div class="folder">
      <div v-if="showSubjects.showrussian" class="file russian">
        <div class="holders">
          <div class="placeholder russian"><h4>Russian</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showgym" class="file gym">
        <div class="holders">
          <div class="placeholder gym"><h4>Volleyball</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showelectives" class="file electives">
        <div class="holders">
          <div class="placeholder electives"><h4>APCSP JS</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showhistory" class="file history">
        <div class="holders">
          <div class="placeholder history"><h4>APUSH</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showenglish" class="file english">
        <div class="holders">
          <div class="placeholder english"><h4>AP Lang</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showscience" class="file science">
        <div class="holders">
          <div class="placeholder science"><h4>AP Psychology</h4></div>
        </div>
      </div>
      <div v-if="showSubjects.showmath" class="file math">
        <div class="holders">
          <div class="placeholder math"><h4>AP Calculus BC</h4></div>
        </div>
      </div>
      <!--  <div class="file landing">
        <div @load="showlanding = !showlanding" class="content">
          <h2>Instructions</h2>
          <h3>
            Click on subject tabs and drag desired courses to the schedule
            maker. Please keep in mind that this may not be your actual schedule
            that year.
          </h3>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { useCourseStore } from "~/store/store";

export default {
  name: "Courses",
  components: {
    useCourseStore,
  },
  data() {
    return {
      /*    showlanding: true, */
      showSubjects: {
      showrussian: false,
      showgym: false,
      showelectives: false,
      showenglish: false,
      showhistory: false,
      showscience: false,
      showmath: false,
      }
    };
  }, methods: {
    logCourses: function () {
      console.log(useCourseStore().courses)
    },
    switchTabs: function (subject) {
      this.showSubjects.showrussian = false
      this.showSubjects.showgym = false
      this.showSubjects.showelectives = false
      this.showSubjects.showenglish = false
      this.showSubjects.showhistory = false
      this.showSubjects.showscience = false
      const whatChanged = `show${subject}`
      this.showSubjectswhatChanged = true
      console.log(this.showSubjects)
    }
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
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  display: grid;
  grid-column-gap: 10px;
  justify-content: center;
  margin: auto;
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
  width: 5.5rem;
}
.tab:hover {
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
}

@media only screen and (min-width: 976px) {
  .file {
    line-height: 4;
    width: 95%;
    margin-left: 15%;
    border-radius: 0.8rem;
    padding: 2rem;
    height: 28rem;
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
    margin-left: 25%;
  }
  .file {
    line-height: 4;
    width: 58%;
    margin-left: 5%;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    padding: 2rem;
    height: 33rem;
  }
  .landing {
    display: block;
    background-color: #fff2e2;
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
@media only screen and (min-width: 1700px) {
  .file {
    width: 55%;
  }
  .tabs {
    margin-left: 35%;
  }
}
</style>
