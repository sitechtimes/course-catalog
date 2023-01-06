<script setup lang="ts">
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
const seniorClasses = [
    {
        name: "mathAP",
        category: "math",
        AP: true
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
        AP: true
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
        category: "history"
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
function changeNeeded() {
    if (document.querySelector(".dropdown").value === "Senior") {
      seniorClasses.forEach((object) => document.querySelector(".top").insertAdjacentHTML( `beforeend`, `<button class="button">${object.name}</button>`))
      document.querySelectorAll(".button").forEach((button) => {
        button.addEventListener("click", function () {
          const chosenClass = seniorClasses.find((name) => name === this.textContent)
          console.log(chosenClass)
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
        <select name="dropdown" class="dropdown" @click="changeNeeded()">
          <option value=""></option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        Year
      </h1>
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
}
.top {
  margin-top: 2rem;
}
</style>
