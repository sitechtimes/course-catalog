<script lang="ts">
import Courses from "../components/schedule builder/Courses.vue";
import Scheduler from "../components/schedule builder/Scheduler.vue";
import { useCourseStore } from "~/store/store";
import data from "~~/plugins/data";
export default {
  name: "ScheduleBuilder",
  components: {
    Scheduler,
    Courses,
    useCourseStore,
  },
  data() {
    return {
      schedule: [
        {
        },
        {
        },
        {
        },
        {
        },
        {
          name: "Lunch",
          subject: "LUNCH"
        },
        {
        },
        {
        },
        {
        },
        {
        },
      ],
      yearPicked: null,
      needed: {
        // use the other false/true stuff to check if duplicate classes (2 science 2 english etc). idk which classes can and cant have duplicates
        ENGLISH: 0,
        MATH: 0,
        SCIENCE: 0,
        SS: 0,
        ARTS: 0,
        PE: 0,
        LUNCH: 1,
        LANG: 0,
        ap: 0,
        educationalPeriods: 0,
      },
    };
  },
  methods: {
    changeProps: function () {
      this.needed = {
        ENGLISH: 0,
        MATH: 0,
        SCIENCE: 0,
        SS: 0,
        ARTS: 0,
        PE: 0,
        LUNCH: 1,
        LANG: 0,
        ap: 0,
        educationalPeriods: 0,
      };
      this.yearPicked = document.querySelector(".dropdown").value
      this.schedule = [
        {
        },
        {
        },
        {
        },
        {
        },
        {
          name: "Lunch",
          subject: "LUNCH"
        },
        {
        },
        {
        },
        {
        },
        {
        },
      ]
    },
  },
};
</script>

<template>
  <div id="builder" class="flex mt-40 h-screen px-12">
    <title>Schedule Builder</title>
    <h2 class="text-4xl font-semibold">Schedule Builder</h2>
    <div class="top">
      <h1>
        Make a Schedule for
        <select name="dropdown" class="dropdown" @change="changeProps()">
          <option value=""></option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        Year
      </h1>
    </div>
    <div class="bottom">
      <Scheduler class="" :schedule="schedule" :needed="needed"></Scheduler>
      <Courses :yearPicked="yearPicked" :schedule="schedule" :needed="needed" />
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  border: solid 1px grey;
  border-radius: 0.25em;
}
h2 {
  margin-top: 0;
}
#builder {
  display: flex;
  flex-direction: column;
  padding-top: 0;
  margin-top: 10rem;
}
.top {
  margin-top: 2rem;
  width: 30%;
}
.bottom {
  display: flex;
  flex-direction: row;
}
@media only screen and (min-width: 976px) {
  #builder {
    padding-top: 0;
    margin-top: 6rem;
  }
}
</style>
