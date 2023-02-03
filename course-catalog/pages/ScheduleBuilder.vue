<script lang="ts">
import Courses from "../components/schedule builder/Courses.vue";
import Scheduler from "../components/schedule builder/Scheduler.vue";
export default {
  name: "ScheduleBuilder",
  components: {
    Scheduler,
    Courses,
  },
  data() {
    return {
      schedule: [
        {
          period: 1,
        },
        {
          period: 2,
        },
        {
          period: 3,
        },
        {
          period: 4,
        },
        {
          name: "Lunch",
          period: 5,
        },
        {
          period: 6,
        },
        {
          period: 7,
        },
        {
          period: 8,
        },
        {
          period: 9,
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
        lunch: 1,
        LANG: 0,
        ap: 0,
      },
    };
  },
  methods: {
    changeProps: function () {
      this.schedule = [
        {
          period: 1,
        },
        {
          period: 2,
        },
        {
          period: 3,
        },
        {
          period: 4,
        },
        {
          name: "Lunch",
          period: 5,
        },
        {
          period: 6,
        },
        {
          period: 7,
        },
        {
          period: 8,
        },
        {
          period: 9,
        },
      ];
      this.yearPicked = document.querySelector(".dropdown").value
      this.needed = {
        // use the other false/true stuff to check if duplicate classes (2 science 2 english etc). idk which classes can and cant have duplicates
        english: 0,
        math: 0,
        science: 0,
        history: 0,
        technology: 0,
        art: 0,
        gym: 0,
        lunch: 1,
        russian: 0,
        ap: 0,
        educationalPeriods: 0,
      };
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
      <Scheduler
        class=""
        :schedule="schedule" :needed="needed"
      ></Scheduler>
      <Courses :yearPicked="yearPicked" :schedule="schedule" :needed="needed"/>
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
