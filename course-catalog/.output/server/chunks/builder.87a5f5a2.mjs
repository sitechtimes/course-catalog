import { _ as _export_sfc, u as useCourseStore } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$2 = {
  name: "Courses",
  props: {
    schedule: [Object],
    yearPicked: String,
    needed: Object
  },
  watch: {
    yearPicked: function() {
      this.showSubjects = {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true
      };
      if (this.yearPicked === "Freshman") {
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "Russian T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "AP World History T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "English T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "Chemistry T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.SCIENCE += 1;
        this.needed.educationalPeriods += 4;
      } else if (this.yearPicked === "Sophomore") {
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "AP World History T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === void 0),
          this.courses.find(
            (course) => course.name === "English T3" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.educationalPeriods += 2;
      }
    }
  },
  components: {
    useCourseStore
  },
  data() {
    return {
      hider: true,
      showr: false,
      showSubjects: {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true
      },
      courses: useCourseStore().courses
    };
  },
  methods: {
    switchTabs: function(subject) {
      if (this.yearPicked) {
        this.showSubjects.showrussian = false;
        this.showSubjects.showgym = false;
        this.showSubjects.showart = false;
        this.showSubjects.showtechnology = false;
        this.showSubjects.showenglish = false;
        this.showSubjects.showhistory = false;
        this.showSubjects.showscience = false;
        this.showSubjects.showmath = false;
        this.showSubjects.showlanding = false;
        if (subject === "russian") {
          this.showSubjects.showrussian = true;
        } else if (subject === "gym") {
          this.showSubjects.showgym = true;
        } else if (subject === "art") {
          this.showSubjects.showart = true;
        } else if (subject === "english") {
          this.showSubjects.showenglish = true;
        } else if (subject === "history") {
          this.showSubjects.showhistory = true;
        } else if (subject === "science") {
          this.showSubjects.showscience = true;
        } else if (subject === "math") {
          this.showSubjects.showmath = true;
        } else if (subject === "technology") {
          this.showSubjects.showtechnology = true;
        }
      } else {
        alert("Pick a year from the dropdown");
      }
    },
    addClass: function(chosenClass) {
      const schedule = this.schedule;
      const needed = this.needed;
      const yearPicked = this.yearPicked;
      function neededChange() {
        if (chosenClass.name !== `Comp Sci/Engineering T1`) {
          if (chosenClass.subject === "LANG" && needed.LANG === 0) {
            needed.LANG += 1;
            return true;
          } else if (chosenClass.subject === "ENGLISH" && needed.ENGLISH < 2) {
            needed.ENGLISH += 1;
            return true;
          } else if (chosenClass.subject === "ARTS" && needed.ARTS < 2) {
            needed.ARTS += 1;
            return true;
          } else if (chosenClass.subject === "SS" && needed.SS === 0) {
            needed.SS += 1;
            return true;
          } else if (chosenClass.subject === "TECH" && yearPicked === "Freshman" && needed.TECH < 1) {
            needed.TECH += 1;
            return true;
          } else if (chosenClass.subject === "TECH" && yearPicked !== "Freshman" && needed.TECH < 2) {
            needed.TECH += 1;
            return true;
          } else if (chosenClass.subject === "PE" && needed.PE === 0) {
            needed.PE += 1;
            return true;
          } else if (chosenClass.subject === "MATH" && needed.MATH === 0) {
            needed.MATH += 1;
            return true;
          } else if (chosenClass.subject === "SCIENCE" && needed.SCIENCE < 2) {
            needed.SCIENCE += 1;
            return true;
          } else {
            alert("You can not have any more of that subject");
          }
        } else if (needed.TECH < 1) {
          needed.TECH += 1;
          return true;
        } else {
          alert("You can not have any more of that subject");
        }
      }
      console.log(chosenClass);
      if (schedule.find((period) => period.name === chosenClass.name)) {
        alert("You can't have 2 of the same class");
      } else {
        if (chosenClass.ap) {
          if (needed.ap === 4) {
            alert("You have too many ap classes");
          } else if (chosenClass.double_period) {
            if (schedule.find(
              (period) => period.name === void 0 && schedule[schedule.indexOf(period) + 1].name === void 0
            )) {
              if (neededChange()) {
                needed.ap += 1;
                Object.assign(
                  schedule.find(
                    (period) => period.name === void 0 && schedule[schedule.indexOf(period) + 1].name === void 0
                  ),
                  chosenClass
                );
                Object.assign(
                  schedule[schedule.indexOf(
                    schedule.find(
                      (period) => period.name === chosenClass.name
                    )
                  ) + 1],
                  chosenClass
                );
                needed.educationalPeriods += 2;
              }
            } else {
              alert("You don't have 2 consecutive empty spaces");
            }
          } else if (schedule.find((period) => period.name === void 0)) {
            if (neededChange()) {
              needed.ap += 1;
              Object.assign(
                schedule.find((period) => period.name === void 0),
                chosenClass
              );
              needed.educationalPeriods += 1;
            }
          }
        } else if (schedule.find((period) => period.name === void 0)) {
          if (neededChange()) {
            Object.assign(
              schedule.find((period) => period.name === void 0),
              chosenClass
            );
            needed.educationalPeriods += 1;
            if (chosenClass.name === "PE T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Health Education"
              );
            } else if (chosenClass.name === "Health Education") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with PE "
              );
            }
            if (chosenClass.name === "Engineering Robotics") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with A/V Eng & TV Studio OR Comp Sci/Engineering"
              );
            } else if (chosenClass.name === "A/V Eng & TV Studio") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
            } else if (chosenClass.name === "Comp Sci/Engineering T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
              schedule.find(
                (period) => period.name === chosenClass.name
              ).subject = "TECH";
            }
          }
        } else {
          alert("You don't have enough space for another class");
        }
      }
      if (schedule[8].name) {
        this.showr = true;
        console.log(schedule[8]);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_bl = resolveComponent("bl");
  const _component_Xmark = resolveComponent("Xmark");
  const _component_Checkmark = resolveComponent("Checkmark");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "whole" }, _attrs))} data-v-481a4515><div class="requirements" data-v-481a4515><button class="note" data-v-481a4515><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-481a4515><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" data-v-481a4515></path></svg></button>`);
  if ($data.showr) {
    _push(`<div class="require" data-v-481a4515><div class="uncr" data-v-481a4515><h3 class="mt-0 font-bold" data-v-481a4515>Requirements</h3>`);
    _push(ssrRenderComponent(_component_bl, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (this.needed.ENGLISH === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>English</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.ENGLISH !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>English</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.MATH === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Math</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.MATH !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Math</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.SS === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>History</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.SS !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>History</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.PE === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Gym</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.PE !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Gym</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.SCIENCE === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Science</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.SCIENCE !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Science</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked === `Senior`) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Science</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LANG === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Russian</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LANG !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Russian</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LUNCH !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Lunch</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LUNCH === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Lunch</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked === `Freshman` && this.needed.TECH === 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Technology Elective</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked === `Freshman` && this.needed.TECH !== 0) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>Technology Elective</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.educationalPeriods < 7) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>7 educational periods</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.educationalPeriods >= 7) {
            _push2(`<li data-v-481a4515${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkmark, null, null, _parent2, _scopeId));
            _push2(`<h5 data-v-481a4515${_scopeId}>7 educational periods</h5></li>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            this.needed.ENGLISH === 0 ? (openBlock(), createBlock("li", { key: 0 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "English")
            ])) : createCommentVNode("", true),
            this.needed.ENGLISH !== 0 ? (openBlock(), createBlock("li", { key: 1 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "English")
            ])) : createCommentVNode("", true),
            this.needed.MATH === 0 ? (openBlock(), createBlock("li", { key: 2 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Math")
            ])) : createCommentVNode("", true),
            this.needed.MATH !== 0 ? (openBlock(), createBlock("li", { key: 3 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Math")
            ])) : createCommentVNode("", true),
            this.needed.SS === 0 ? (openBlock(), createBlock("li", { key: 4 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "History")
            ])) : createCommentVNode("", true),
            this.needed.SS !== 0 ? (openBlock(), createBlock("li", { key: 5 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "History")
            ])) : createCommentVNode("", true),
            this.needed.PE === 0 ? (openBlock(), createBlock("li", { key: 6 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Gym")
            ])) : createCommentVNode("", true),
            this.needed.PE !== 0 ? (openBlock(), createBlock("li", { key: 7 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Gym")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.SCIENCE === 0 ? (openBlock(), createBlock("li", { key: 8 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Science")
            ])) : createCommentVNode("", true),
            this.needed.SCIENCE !== 0 ? (openBlock(), createBlock("li", { key: 9 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Science")
            ])) : createCommentVNode("", true),
            this.yearPicked === `Senior` ? (openBlock(), createBlock("li", { key: 10 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Science")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LANG === 0 ? (openBlock(), createBlock("li", { key: 11 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Russian")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LANG !== 0 ? (openBlock(), createBlock("li", { key: 12 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Russian")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LUNCH !== 0 ? (openBlock(), createBlock("li", { key: 13 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Lunch")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LUNCH === 0 ? (openBlock(), createBlock("li", { key: 14 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Lunch")
            ])) : createCommentVNode("", true),
            this.yearPicked === `Freshman` && this.needed.TECH === 0 ? (openBlock(), createBlock("li", { key: 15 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "Technology Elective")
            ])) : createCommentVNode("", true),
            this.yearPicked === `Freshman` && this.needed.TECH !== 0 ? (openBlock(), createBlock("li", { key: 16 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "Technology Elective")
            ])) : createCommentVNode("", true),
            this.needed.educationalPeriods < 7 ? (openBlock(), createBlock("li", { key: 17 }, [
              createVNode(_component_Xmark),
              createVNode("h5", null, "7 educational periods")
            ])) : createCommentVNode("", true),
            this.needed.educationalPeriods >= 7 ? (openBlock(), createBlock("li", { key: 18 }, [
              createVNode(_component_Checkmark),
              createVNode("h5", null, "7 educational periods")
            ])) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="tabs" data-v-481a4515><button class="tab r" data-v-481a4515>Russian</button><button class="tab g" data-v-481a4515>Gym</button><button class="tab a" data-v-481a4515>Art</button><button class="tab t" data-v-481a4515> Technology </button><button class="tab h" data-v-481a4515>History</button><button class="tab en" data-v-481a4515>English</button><button class="tab s" data-v-481a4515>Science</button><button class="tab m" data-v-481a4515>Math</button></div><div class="folder" data-v-481a4515>`);
  if ($data.showSubjects.showrussian) {
    _push(`<div class="file LANG" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `LANG` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder LANG" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showgym) {
    _push(`<div class="file PE" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `PE` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder PE" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showart) {
    _push(`<div class="file a" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `ARTS` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder ARTS" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showtechnology) {
    _push(`<div class="file TECH" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `TECH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder TECH" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SCIENCE` && course[`${this.yearPicked.toLowerCase()}`] && course.name === `Comp Sci/Engineering T1`
    ), (course) => {
      _push(`<div class="placeholder TECH" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showhistory) {
    _push(`<div class="file SS" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SS` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder SS" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showenglish) {
    _push(`<div class="file ENGLISH" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `ENGLISH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder ENGLISH" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showscience) {
    _push(`<div class="file SCIENCE" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SCIENCE` && course[`${this.yearPicked.toLowerCase()}`] && course.name !== `Comp Sci/Engineering T1`
    ), (course) => {
      _push(`<div class="placeholder SCIENCE" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showmath) {
    _push(`<div class="file MATH" data-v-481a4515><div class="holders" data-v-481a4515><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `MATH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder MATH" data-v-481a4515><h4 data-v-481a4515>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showlanding) {
    _push(`<div class="file landing" data-v-481a4515><div class="content" data-v-481a4515><h2 data-v-481a4515>Instructions</h2><h3 data-v-481a4515> Click on subject tabs and drag desired courses to the schedule maker. Please keep in mind that this may not be your actual schedule that year. </h3></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/schedule builder/Courses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Courses = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-481a4515"]]);
const _sfc_main$1 = {
  name: "Scheduler",
  props: {
    schedule: [Object],
    needed: Object
  },
  methods: {
    removeClass(period) {
      const pickedClass = this.schedule[period];
      console.log(pickedClass);
      if (pickedClass.subject !== "LUNCH") {
        if (pickedClass.ap) {
          this.needed.ap = -1;
        }
        if (pickedClass.subject === "LANG") {
          this.needed.LANG -= 1;
        } else if (pickedClass.subject === "ENGLISH") {
          this.needed.ENGLISH -= 1;
        } else if (pickedClass.subject === "ARTS") {
          this.needed.ARTS -= 1;
        } else if (pickedClass.subject === "SS") {
          this.needed.SS -= 1;
        } else if (pickedClass.subject === "TECH" || pickedClass.name == `Comp Sci/Engineering T1
        +`) {
          this.needed.TECH -= 1;
        } else if (pickedClass.subject === "PE") {
          this.needed.PE -= 1;
        } else if (pickedClass.subject === "MATH") {
          this.needed.MATH -= 1;
        } else if (pickedClass.subject === "SCIENCE" && pickedClass.name !== `Comp Sci/Engineering T1`) {
          this.needed.SCIENCE -= 1;
        }
        if (pickedClass.double_period) {
          this.needed.educational -= 1;
          this.schedule.forEach((scheduledClass) => {
            if (scheduledClass.name === pickedClass.name) {
              this.schedule[this.schedule.indexOf(scheduledClass)] = {};
              console.log(scheduledClass);
            }
          });
        }
        this.needed.educationalPeriods -= 1;
        this.schedule[period] = {};
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<table${ssrRenderAttrs(mergeProps({ class: "whole" }, _attrs))} data-v-929a701e><tr class="" data-v-929a701e><th class="p-4 py-2" id="right" data-v-929a701e>Period</th><th class="px-20" data-v-929a701e>Class</th></tr><tr class="border-t-4" data-v-929a701e><td class="right" id="" data-v-929a701e>1</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[0].subject, "placeholder"])}" id="first" data-v-929a701e>${ssrInterpolate($props.schedule[0].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>2</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[1].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[1].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>3</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[2].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[2].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>4</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[3].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[3].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>5</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[4].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[4].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>6</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[5].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[5].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>7</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[6].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[6].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="" data-v-929a701e>8</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[7].subject, "placeholder"])}" data-v-929a701e>${ssrInterpolate($props.schedule[7].name)}</div></td></tr><tr class="" data-v-929a701e><td class="right" id="lastnum" data-v-929a701e>9</td><td data-v-929a701e><div class="${ssrRenderClass([$props.schedule[8].subject, "placeholder"])}" id="last" data-v-929a701e>${ssrInterpolate($props.schedule[8].name)}</div></td></tr></table>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/schedule builder/Scheduler.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Scheduler = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-929a701e"]]);
const _sfc_main = {
  name: "ScheduleBuilder",
  components: {
    Scheduler,
    Courses,
    useCourseStore
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
          subject: "LUNCH"
        },
        {},
        {},
        {},
        {}
      ],
      yearPicked: null,
      needed: {
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
        educationalPeriods: 0
      }
    };
  },
  methods: {
    changeProps: function() {
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
        educationalPeriods: 0
      };
      this.yearPicked = document.querySelector(".dropdown").value;
      this.schedule = [
        {},
        {},
        {},
        {},
        {
          name: "Lunch",
          subject: "LUNCH"
        },
        {},
        {},
        {},
        {}
      ];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Scheduler = resolveComponent("Scheduler");
  const _component_Courses = resolveComponent("Courses");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0c96163c><div id="builder" class="flex mt-40 h-screen px-12" data-v-0c96163c><title data-v-0c96163c>Schedule Builder</title><h2 class="text-4xl font-semibold" data-v-0c96163c>Schedule Builder</h2><div class="top" data-v-0c96163c><h1 data-v-0c96163c> Make a Schedule for <select name="dropdown" class="dropdown" data-v-0c96163c><option value="" data-v-0c96163c></option><option value="Freshman" data-v-0c96163c>Freshman</option><option value="Sophomore" data-v-0c96163c>Sophomore</option><option value="Junior" data-v-0c96163c>Junior</option><option value="Senior" data-v-0c96163c>Senior</option></select> Year </h1></div><div class="bottom" data-v-0c96163c>`);
  _push(ssrRenderComponent(_component_Scheduler, {
    class: "",
    schedule: $data.schedule,
    needed: $data.needed
  }, null, _parent));
  _push(ssrRenderComponent(_component_Courses, {
    yearPicked: $data.yearPicked,
    schedule: $data.schedule,
    needed: $data.needed
  }, null, _parent));
  _push(`</div></div><div class="alert" data-v-0c96163c><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-0c96163c><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" data-v-0c96163c></path></svg><h3 class="font-bold" data-v-0c96163c>Sorry :(</h3><h4 class="font-light" data-v-0c96163c> This feature is not avaliable on this device, you many access this on a computer or laptop. </h4></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/builder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const builder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0c96163c"]]);

export { builder as default };
//# sourceMappingURL=builder.87a5f5a2.mjs.map
