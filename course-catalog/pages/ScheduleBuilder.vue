<script lang="ts">
import Scheduler from "../components/schedule builder/Scheduler.vue";
export default {
  name: "ScheduleBuilder",
  components: {
    Scheduler,
  },
  data(){
    return{
      schedule: [
    {
      period: 1  
    },
    {
      period: 2 , 
      name: "a"
    },
    {
      period: 3  
    },
    {
      period: 4  
    },
    {
      name: "Lunch",
      period: 5  
    },
    {
      period: 6  
    },
    {
      period: 7  
    },
    {
      period: 8  
    },
    {
      period: 9  
    },
      ],
    }
  },
  methods: {
    changeNeeded: function () { // finally got props and stuff to work, likely super unoptomized but fuck it it's good enough
      this.schedule =[
      {
        period: 1  
      },
      {
        period: 2 , 
        name: "a"
      },
      {
        period: 3  
      },
      {
        period: 4  
      },
      {
        name: "Lunch",
        period: 5  
      },
      {
        period: 6  
      },
      {
        period: 7  
      },
      {
        period: 8  
      },
      {
        period: 9  
      },
      ]
      const schedule = this.schedule
      document.querySelectorAll(".button").forEach((button) => {
        button.remove();
      });
      if (document.querySelector(".dropdown").value === "Senior") {
        const seniorClasses = [
        {
          name: "mathAP",
          category: "math",
          AP: true,
          periods: 2
        },
        {
          name: "englishAP",
          category: "english",
          AP: true
        },
        {
          name: "english1",
          category: "english"
        },
        {
          name: "math1",
          category: "math",
        },
        {
          name: "scienceAP",
          category: "science",
          AP: true,
          periods: 2
        },
        {
          name: "science1",
          category: "science"
        },
        {
          name: "historyAP",
          category: "history",
          AP: true
        },
        {
          name: "history1",
          category: "history",
          periods: 2
        },
        {
          name:"class5AP",
          category:"class5",
        AP: true
        },
        {
          name:"class5",
          category:"class5"
        },
        ]
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
        }
        seniorClasses.forEach((object) => document.querySelector(".top").insertAdjacentHTML(`beforeend`,
          `<button class="button">${object.name}</button>`
        ));
        document.querySelectorAll(".button").forEach((button) => {
          button.addEventListener("click", function () {
            const chosenClass = seniorClasses.find((course) => course.name === this.textContent)
            console.log(chosenClass)
            if (chosenClass.AP) {
              if (needed.AP === 4) {
                console.log("you have too many ap classes")
                console.log(this.needed.AP)
              }
              else if (chosenClass.periods === 2) {
                if (schedule.find((period  => period.name === undefined && schedule[period.period].name === undefined))) {
                  needed.AP += 1
                  button.remove()
                  schedule.find((period  => period.name === undefined && schedule[period.period].name === undefined)).name = chosenClass.name
                  schedule[schedule.find((period  => period.name === chosenClass.name)).period].name = chosenClass.name
                  console.log(schedule)
                }
                else {
                  console.log("fucked up")
                }
              }
              else {
                console.log(chosenClass.periods)
                needed.AP += 1
                button.remove()
                schedule.find((period  => period.name === undefined)).name = chosenClass.name
                console.log(schedule)
              }
            } else {          
              button.remove()
              console.log(chosenClass.periods)
              schedule.find((period  => period.name === undefined)).name = chosenClass.name
              console.log(schedule)
            }
          })
        })
      }
    }
  }
}
</script>

<template>
  <div id="builder" class="flex mt-40 h-screen px-12">
    <title>Schedule Builder</title>
    <h2 class="text-4xl font-semibold">Schedule Builder</h2>
    <div class="top">
      <h1>
        Make a Schedule for
        <select name="dropdown" class="dropdown" @change="changeNeeded()">
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
      <Scheduler class="" :schedule="schedule" :period="schedule.period" :name="schedule.name"></Scheduler></div>
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
@media only screen and (min-width: 976px) {
  #builder {
    padding-top: 0;
    margin-top: 8rem;
  }
}
</style>
