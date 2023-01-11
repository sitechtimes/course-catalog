<script setup lang="ts">
import Scheduler from "../components/schedule builder/Scheduler.vue";
import Courses from "../components/schedule builder/Courses.vue";
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
  const schedule = [
    {
      period: 1
    },
    {
      period: 2
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
  schedule.forEach((object) => {
    if (object.name === undefined || object.name === null) {
      document.querySelector(".top").insertAdjacentHTML( `beforeend`, `<button class="scheduleButton">empty</button>`)
    } else {
      document.querySelector(".top").insertAdjacentHTML( `beforeend`, `<button class="scheduleButton">${object.name}</button>`)
    }
  })
  document.querySelectorAll(".button").forEach((button) => {
    button.remove();
  });
  if (document.querySelector(".dropdown").value === "Senior") {
    seniorClasses.forEach((object) =>
      document
        .querySelector(".top")
        .insertAdjacentHTML(
          `beforeend`,
          `<button class="button">${object.name}</button>`
        )
    );
    document.querySelectorAll(".button").forEach((button) => {
        button.addEventListener("click", function () {
          const chosenClass = seniorClasses.find((name) => name.name === this.textContent)
          console.log(chosenClass)
          if (chosenClass.AP) {
            if (needed.AP === 4) {
              console.log("you have too many ap classes")
              console.log(needed.AP)
            }
            else{
              needed.AP += 1
              button.remove()
            }
          } else {
            button.remove()
          }
        })
    })
  }

}
</script>

<template>
  <div id="builder" class="flex mt-40 h-screen px-12">
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
    <div class="page">
      <div class="bottoml"><Scheduler class=""></Scheduler></div>
      <div class="bottomr"><Courses></Courses></div>
    </div>
  </div>
</template>
<style scoped>
.page {
  display: flex;
  flex-direction: row;
}
.dropdown {
  border: solid 1px grey;
  border-radius: 0.25em;
  margin-bottom: 1rem;
}
h2 {
  margin-top: 0;
}
h1 {
  width: 30%;
  margin: 0;
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
}
</style>
