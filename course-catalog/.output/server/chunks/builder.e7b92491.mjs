import { _ as _export_sfc, u as useCourseStore } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, createCommentVNode } from 'vue';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "whole" }, _attrs))} data-v-c97944f3><div class="requirements" data-v-c97944f3><button class="note" data-v-c97944f3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" data-v-c97944f3></path></svg></button>`);
  if ($data.showr) {
    _push(`<div class="require" data-v-c97944f3><div class="uncr" data-v-c97944f3><h3 class="mt-0 font-bold" data-v-c97944f3>Requirements (different for seniors)</h3>`);
    _push(ssrRenderComponent(_component_bl, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (this.needed.ENGLISH === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> English </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.ENGLISH !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> English </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.MATH === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Math </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.MATH !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Math </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.SS === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg>History </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.SS !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> History </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.PE === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Gym </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.PE !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg>Gym </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.SCIENCE === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Science </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.SCIENCE !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Science </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LANG === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Russian </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LANG !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Russian </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LUNCH !== 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Lunch </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.yearPicked !== `Senior` && this.needed.LUNCH === 0) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> Lunch </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.educationalPeriods < 7) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg>7 educational periods (not including lunch) </li>`);
          } else {
            _push2(`<!---->`);
          }
          if (this.needed.educationalPeriods >= 7) {
            _push2(`<li data-v-c97944f3${_scopeId}><svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-c97944f3${_scopeId}><path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-c97944f3${_scopeId}></path></svg> 7 educational periods (not including lunch) </li>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            this.needed.ENGLISH === 0 ? (openBlock(), createBlock("li", { key: 0 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" English ")
            ])) : createCommentVNode("", true),
            this.needed.ENGLISH !== 0 ? (openBlock(), createBlock("li", { key: 1 }, [
              (openBlock(), createBlock("svg", {
                class: "check",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" English ")
            ])) : createCommentVNode("", true),
            this.needed.MATH === 0 ? (openBlock(), createBlock("li", { key: 2 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Math ")
            ])) : createCommentVNode("", true),
            this.needed.MATH !== 0 ? (openBlock(), createBlock("li", { key: 3 }, [
              (openBlock(), createBlock("svg", {
                class: "check",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Math ")
            ])) : createCommentVNode("", true),
            this.needed.SS === 0 ? (openBlock(), createBlock("li", { key: 4 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode("History ")
            ])) : createCommentVNode("", true),
            this.needed.SS !== 0 ? (openBlock(), createBlock("li", { key: 5 }, [
              (openBlock(), createBlock("svg", {
                class: "check",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" History ")
            ])) : createCommentVNode("", true),
            this.needed.PE === 0 ? (openBlock(), createBlock("li", { key: 6 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Gym ")
            ])) : createCommentVNode("", true),
            this.needed.PE !== 0 ? (openBlock(), createBlock("li", { key: 7 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode("Gym ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.SCIENCE === 0 ? (openBlock(), createBlock("li", { key: 8 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Science ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.SCIENCE !== 0 ? (openBlock(), createBlock("li", { key: 9 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Science ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LANG === 0 ? (openBlock(), createBlock("li", { key: 10 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Russian ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LANG !== 0 ? (openBlock(), createBlock("li", { key: 11 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Russian ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LUNCH !== 0 ? (openBlock(), createBlock("li", { key: 12 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Lunch ")
            ])) : createCommentVNode("", true),
            this.yearPicked !== `Senior` && this.needed.LUNCH === 0 ? (openBlock(), createBlock("li", { key: 13 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" Lunch ")
            ])) : createCommentVNode("", true),
            this.needed.educationalPeriods < 7 ? (openBlock(), createBlock("li", { key: 14 }, [
              (openBlock(), createBlock("svg", {
                class: "x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode("7 educational periods (not including lunch) ")
            ])) : createCommentVNode("", true),
            this.needed.educationalPeriods >= 7 ? (openBlock(), createBlock("li", { key: 15 }, [
              (openBlock(), createBlock("svg", {
                class: "check",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
              }, [
                createVNode("path", { d: "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" })
              ])),
              createTextVNode(" 7 educational periods (not including lunch) ")
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
  _push(`</div><div class="tabs" data-v-c97944f3><button class="tab r" data-v-c97944f3>Russian</button><button class="tab g" data-v-c97944f3>Gym</button><button class="tab a" data-v-c97944f3>Art</button><button class="tab t" data-v-c97944f3> Technology </button><button class="tab h" data-v-c97944f3>History</button><button class="tab en" data-v-c97944f3>English</button><button class="tab s" data-v-c97944f3>Science</button><button class="tab m" data-v-c97944f3>Math</button></div><div class="folder" data-v-c97944f3>`);
  if ($data.showSubjects.showrussian) {
    _push(`<div class="file LANG" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `LANG` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder LANG" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showgym) {
    _push(`<div class="file PE" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `PE` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder PE" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showart) {
    _push(`<div class="file a" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `ARTS` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder ARTS" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showtechnology) {
    _push(`<div class="file TECH" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `TECH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder TECH" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SCIENCE` && course[`${this.yearPicked.toLowerCase()}`] && course.name === `Comp Sci/Engineering T1`
    ), (course) => {
      _push(`<div class="placeholder TECH" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showhistory) {
    _push(`<div class="file SS" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SS` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder SS" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showenglish) {
    _push(`<div class="file ENGLISH" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `ENGLISH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder ENGLISH" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showscience) {
    _push(`<div class="file SCIENCE" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `SCIENCE` && course[`${this.yearPicked.toLowerCase()}`] && course.name !== `Comp Sci/Engineering T1`
    ), (course) => {
      _push(`<div class="placeholder SCIENCE" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showmath) {
    _push(`<div class="file MATH" data-v-c97944f3><div class="holders" data-v-c97944f3><!--[-->`);
    ssrRenderList($data.courses.filter(
      (course) => course.catalog && course.subject === `MATH` && course[`${this.yearPicked.toLowerCase()}`]
    ), (course) => {
      _push(`<div class="placeholder MATH" data-v-c97944f3><h4 data-v-c97944f3>${ssrInterpolate(course.name)}</h4></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSubjects.showlanding) {
    _push(`<div class="file landing" data-v-c97944f3><div class="content" data-v-c97944f3><h2 data-v-c97944f3>Instructions</h2><h3 data-v-c97944f3> Click on subject tabs and drag desired courses to the schedule maker. Please keep in mind that this may not be your actual schedule that year. </h3></div></div>`);
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
const Courses = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c97944f3"]]);
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
//# sourceMappingURL=builder.e7b92491.mjs.map
