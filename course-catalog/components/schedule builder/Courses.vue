<template>
  <div class="folder">
    <div class="tabs">
      <Button class="tab r">Russian</Button>
      <Button class="tab g">Gym</Button>
      <Button class="tab e">Electives</Button>
      <Button class="tab h">History</Button>
      <Button class="tab en">English</Button>
      <Button class="tab s">Science</Button>
      <Button class="tab m">Math</Button>
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
  margin-left: 25%;
  display: flex;
  flex-direction: row;
}
.tab {
  padding: 0.5rem;
  width: 5.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  transition: 0.4s;
}
.tab:hover {
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
}
@media only screen and (min-width: 1440px) {
  .file {
    line-height: 4;
    width: 80%;
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
    width: 85%;
    margin-left: 15%;
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
    width: 88%;
    margin-top: 1rem;
  }
}
@media only screen and (min-width: 1440px) {
  .file {
    margin-left: 15%;
    height: 30rem;
  }
  .tabs {
    margin-left: 25%;
  }
}
@media only screen and (min-width: 1700px) {
  .file {
    width: 80%;
  }
  .tabs {
    margin-left: 35%;
  }
}
</style>
