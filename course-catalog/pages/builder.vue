<script lang="ts">
import Courses from "../components/schedule builder/Courses.vue";
import Scheduler from "../components/schedule builder/Scheduler.vue";
import { useCourseStore } from "~/store/store";
import { useMockSchedule } from "~/store/store";

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
        {},
        {},
        {},
        {},
        {
          name: "Lunch",
          subject: "LUNCH",
        },
        {},
        {},
        {},
        {},
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
        TECH: 0,
        ap: 0,
        educationalPeriods: 0,
      },
    };
  },
  methods: {
    checkStore() {
      const mockSchedule = useMockSchedule.schedule;
      const mockScheduleYear = useMockSchedule.year;
      const mockNeeded = useMockSchedule.needed
      if (mockSchedule === undefined) {
        console.log("happy in the hive");
      } else {
        console.log("sad in the drag");
        this.schedule = mockSchedule;
        this.yearPicked = mockScheduleYear;
        this.needed = mockNeeded
        console.log(this.needed);
      }
    },
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
        TECH: 0,
        ap: 0,
        educationalPeriods: 0,
      };
      this.yearPicked = document.querySelector(".dropdown").value;
      this.schedule = [
        {},
        {},
        {},
        {},
        {
          name: "Lunch",
          subject: "LUNCH",
        },
        {},
        {},
        {},
        {},
      ];
    },
  },
  created() {
    this.checkStore();
  },
};
</script>

<template>
  <div>
    <div id="builder" class="flex mt-40 h-screen px-12">
      <title>Schedule Builder</title>
      <h2 class="text-4xl font-semibold">Schedule Builder</h2>
      <div class="top">
        <h1 class="inline-flex">
          Make a Schedule for
          <section class="mx-2" v-if="this.yearPicked === null">
            <select name="dropdown" class="dropdown" @change="changeProps()">
              <option value=""></option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </section>
          <section class="mx-2" v-else>
            <select name="dropdown" class="dropdown" @change="changeProps()">
              <option value="">{{ yearPicked }}</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </section>
          Year
        </h1>
      </div>
      <div class="bottom">
        <Scheduler
          class=""
          :yearPicked="yearPicked"
          :schedule="schedule"
          :needed="needed"
        ></Scheduler>
        <Courses
          :yearPicked="yearPicked"
          :schedule="schedule"
          :needed="needed"
        />
      </div>
    </div>
    <div class="alert">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
        />
      </svg>
      <h3 class="font-bold">Sorry :(</h3>
      <h4 class="font-light">
        This feature is not avaliable on this device, you many access this on a
        computer or laptop.
      </h4>
    </div>
  </div>
</template>

<style scoped>
.alert {
  display: none;
}
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
  margin-top: 8rem;
}
.top {
  margin-top: 2rem;
  width: 30%;
}
.bottom {
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 1480px) {
  #builder {
    margin-top: 6rem;
  }
}
@media only screen and (max-width: 1180px) {
  .alert {
    overflow: visible;
    display: block;
    margin: auto;
    margin-top: 20%;
    color: #37394f;
    padding: 2rem;
    padding-top: 1.5rem;
    width: 40%;
    border-radius: 1rem;
    border: #37394f 2px solid;
  }
  h3 {
    font-size: 1.2rem;
  }
  h3,
  h4 {
    text-align: center;
  }
  .icon {
    margin: auto;
    margin-bottom: 1rem;
    width: 4rem;
    fill: #37394f;
  }
  #builder {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  .alert {
    margin-top: 40%;
    color: #37394f;
    width: 70%;
    padding: 1rem;
  }
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.8rem;
  }
  h3,
  h4 {
    text-align: center;
  }
  .icon {
    margin: auto;
    margin-bottom: 0.5rem;
    width: 3rem;
    fill: #37394f;
  }
}
@media only screen and (max-width: 300px) {
  .alert {
    padding: 1rem;
  }
}
</style>
