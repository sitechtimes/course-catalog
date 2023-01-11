<template>
  <div class="folder">
    <div class="tabs">
      <div class="tab r">Russian</div>
      <div class="tab g">Gym</div>
      <div class="tab e">Electives</div>
      <div class="tab h">History</div>
      <div class="tab en">English</div>
      <div class="tab s">Science</div>
      <div class="tab m">Math</div>
    </div>
    <div class="file">
      <div class="landing">
        <h2>Instructions</h2>
        <h3>
          Click on subject tabs and drag desired courses to the schedule maker.
          Please keep in mind that this may not be your actual schedule that
          year.
        </h3>
      </div>
    </div>
  </div>
</template>
<style scoped>
.r {
  background-color: #fedcb5;
}
.g {
  background-color: #ffadcb;
}
.e {
  background-color: #fffbd6;
}
.h {
  background-color: #e0d6ff;
}
.en {
  background-color: #d6eeff;
}
.s {
  background-color: #cbf2d4;
}
.m {
  background-color: #ffdfdf;
}
.folder {
  display: flex;
  flex-direction: column;
}
.tabs {
  margin-left: 35%;
  display: flex;
  flex-direction: row;
}
.tab {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  width: 5rem;
  font-size: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media only screen and (min-width: 1440px) {
  .file {
    line-height: 4;
    width: 75%;
    margin-left: 40%;
    background-color: #fff2e2;
    border-radius: 0.8rem;
    padding: 3rem;
    height: 35rem;
  }
  .landing {
    display: block;
  }
  h2 {
    font-weight: bold;
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 976px) {
  .file {
    line-height: 4;
    width: 70%;
    margin-left: 35%;
    background-color: #fff2e2;
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
    width: 85%;
    margin-top: 1rem;
  }
}
@media only screen and (min-width: 1440px) {
  .file {
    margin-left: 30%;
  }
}
</style>
