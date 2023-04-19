import { _ as _export_sfc, u as useCourseStore, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, ref, computed, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { S as SubjectType, C as CourseType } from './CourseType.a440786d.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    course: Object,
    freshman: Boolean,
    sophomore: Boolean,
    junior: Boolean,
    senior: Boolean,
    catalog: Boolean,
    subject: String,
    ap: String,
    id: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      if (((_a = __props.course) == null ? void 0 : _a.catalog) == true) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-15abe09b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/courses/${(_b = __props.course) == null ? void 0 : _b.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
            if (_push2) {
              _push2(`<div id="card" class="bg-white w-80 h-36 m-4 px-4 py-[0.6rem] rounded-lg shadow cursor-pointer" data-v-15abe09b${_scopeId}><h2 id="name" class="course-name text-2xl font-semibold h-[4.4rem]" data-v-15abe09b${_scopeId}>${ssrInterpolate((_a2 = __props.course) == null ? void 0 : _a2.name)}</h2><div id="grade" class="flex justify-start items-start space-x-1 text-sm text-zinc-500" data-v-15abe09b${_scopeId}><p class="font-medium pr-1" data-v-15abe09b${_scopeId}>Grade</p><p class="font-bold space-x-1" data-v-15abe09b${_scopeId}>`);
              if (((_b2 = __props.course) == null ? void 0 : _b2.freshman) == true) {
                _push2(`<span data-v-15abe09b${_scopeId}>9 </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_c = __props.course) == null ? void 0 : _c.sophomore) == true) {
                _push2(`<span data-v-15abe09b${_scopeId}>10 </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_d = __props.course) == null ? void 0 : _d.junior) == true) {
                _push2(`<span data-v-15abe09b${_scopeId}>11 </span>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_e = __props.course) == null ? void 0 : _e.senior) == true) {
                _push2(`<span data-v-15abe09b${_scopeId}>12 </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p></div><div class="flex justify-start items-start space-x-2" data-v-15abe09b${_scopeId}>`);
              _push2(ssrRenderComponent(SubjectType, {
                subject: (_f = __props.course) == null ? void 0 : _f.subject
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(CourseType, {
                ap: (_g = __props.course) == null ? void 0 : _g.ap
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", {
                  id: "card",
                  class: "bg-white w-80 h-36 m-4 px-4 py-[0.6rem] rounded-lg shadow cursor-pointer"
                }, [
                  createVNode("h2", {
                    id: "name",
                    class: "course-name text-2xl font-semibold h-[4.4rem]"
                  }, toDisplayString((_h = __props.course) == null ? void 0 : _h.name), 1),
                  createVNode("div", {
                    id: "grade",
                    class: "flex justify-start items-start space-x-1 text-sm text-zinc-500"
                  }, [
                    createVNode("p", { class: "font-medium pr-1" }, "Grade"),
                    createVNode("p", { class: "font-bold space-x-1" }, [
                      ((_i = __props.course) == null ? void 0 : _i.freshman) == true ? (openBlock(), createBlock("span", { key: 0 }, "9 ")) : createCommentVNode("", true),
                      ((_j = __props.course) == null ? void 0 : _j.sophomore) == true ? (openBlock(), createBlock("span", { key: 1 }, "10 ")) : createCommentVNode("", true),
                      ((_k = __props.course) == null ? void 0 : _k.junior) == true ? (openBlock(), createBlock("span", { key: 2 }, "11 ")) : createCommentVNode("", true),
                      ((_l = __props.course) == null ? void 0 : _l.senior) == true ? (openBlock(), createBlock("span", { key: 3 }, "12 ")) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-start items-start space-x-2" }, [
                    createVNode(SubjectType, {
                      subject: (_m = __props.course) == null ? void 0 : _m.subject
                    }, null, 8, ["subject"]),
                    createVNode(CourseType, {
                      ap: (_n = __props.course) == null ? void 0 : _n.ap
                    }, null, 8, ["ap"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/course-cards/CourseCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-15abe09b"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "w-5 h-5"
  }, _attrs))}><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/DownArrow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DownArrow = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SortComponent",
  __ssrInlineRender: true,
  setup(__props) {
    ref("courseSort");
    ref("");
    const courses = ref(useCourseStore().courses);
    const selected = ref("Sort By");
    const isOpen = ref(false);
    const subject = ref("Subject");
    const atoz = ref("Course Name (A-Z)");
    const ztoa = ref("Course Name (Z-A)");
    computed(() => {
      function compare(a, b) {
        if (a.subject < b.subject)
          return -1;
        if (a.subject > b.subject)
          return 1;
        return 0;
      }
      let sortshow = document.getElementById("sortshow");
      sortshow.innerHTML = "Subject";
      return courses.value.sort(compare);
    });
    computed(() => {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      let sortshow = document.getElementById("sortshow");
      sortshow.innerHTML = "Course Name (A-Z)";
      return courses.value.sort(compare);
    });
    computed(() => {
      function compare(a, b) {
        if (a.name > b.name)
          return -1;
        if (a.name < b.name)
          return 1;
        return 0;
      }
      let sortshow = document.getElementById("sortshow");
      sortshow.innerHTML = "Course Name (Z-A)";
      return courses.value.sort(compare);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-72 h-10 mb-4 relative border border-zinc-300 bg-white text-zinc-400 rounded cursor-pointer",
        id: "sort"
      }, _attrs))} data-v-dbfe1506>`);
      _push(ssrRenderComponent(DownArrow, { class: "absolute fill-zinc-400 right-2 top-[0.6rem] text-zinc-400 z-0 cursor-pointer" }, null, _parent));
      _push(`<div class="w-40" data-v-dbfe1506><a class="flex justify-left mt-2 ml-3" data-v-dbfe1506><p class="font-bold" id="sortshow" data-v-dbfe1506>${ssrInterpolate(selected.value)}</p></a></div>`);
      if (isOpen.value) {
        _push(`<div class="sub-menu" data-v-dbfe1506><div class="flex justify-left h-10 p-1 border border-zinc-300 bg-white text-zinc-400" data-v-dbfe1506><button class="ml-2" data-v-dbfe1506>${ssrInterpolate(subject.value)}</button></div><div class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400" data-v-dbfe1506><button class="ml-2" data-v-dbfe1506>${ssrInterpolate(atoz.value)}</button></div><div class="flex justify-left h-10 p-1 border border-t-transparent border-zinc-300 bg-white text-zinc-400" data-v-dbfe1506><button class="ml-2" data-v-dbfe1506>${ssrInterpolate(ztoa.value)}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/catalog-search/SortComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SortComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dbfe1506"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))} data-v-7b793b68><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" data-v-7b793b68></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SearchButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SearchButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7b793b68"]]);
const _sfc_main$1 = {
  components: {
    SearchButton
  },
  props: ["modelValue"],
  emits: ["update:modelValue"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchButton = resolveComponent("SearchButton");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "search",
    class: "w-full"
  }, _attrs))} data-v-63f12c51><div id="search-bar" class="flex items-center relative" data-v-63f12c51><input${ssrRenderAttr("value", $props.modelValue)} placeholder="Search" class="border border-zinc-300 rounded w-112 h-10 p-2 text-zinc-800" id="search-input" data-v-63f12c51>`);
  _push(ssrRenderComponent(_component_SearchButton, {
    class: "absolute text-zinc-400 cursor-pointer",
    id: "search-icon"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/catalog-search/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-63f12c51"]]);
const _sfc_main = {
  components: {
    SearchBar,
    SortComponent,
    CourseCard: __nuxt_component_0
  },
  data() {
    return {
      courses: useCourseStore().courses,
      input: ref("")
    };
  },
  computed: {
    filteredList() {
      return this.courses.filter((course) => {
        return course.name.toLowerCase().indexOf(this.input.toLowerCase()) != -1;
      });
    }
  },
  mounted() {
    this.filteredList;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SortComponent = resolveComponent("SortComponent");
  const _component_SearchBar = resolveComponent("SearchBar");
  const _component_CourseCard = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "catalog",
    class: "flex justify-center items-start h-screen w-full px-12"
  }, _attrs))} data-v-59c34c34><div id="content" class="flex flex-col justify-center items-center w-full mt-28 space-y-6" data-v-59c34c34><h2 class="text-center text-4xl font-semibold" data-v-59c34c34>Courses</h2><div id="search" class="w-full flex flex-col justify-center items-center" data-v-59c34c34><div id="search-section" class="flex justify-center items-center" data-v-59c34c34>`);
  _push(ssrRenderComponent(_component_SortComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchBar, {
    class: "mb-4",
    type: "text",
    modelValue: $data.input,
    "onUpdate:modelValue": ($event) => $data.input = $event,
    placeholder: "Search Courses..."
  }, null, _parent));
  _push(`</div><div id="courses" class="flex flex-wrap justify-center items-center max-w-[80rem]" data-v-59c34c34><!--[-->`);
  ssrRenderList($options.filteredList, (course) => {
    _push(ssrRenderComponent(_component_CourseCard, { course }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($data.input && !$options.filteredList.length) {
    _push(`<div class="item error" data-v-59c34c34><p data-v-59c34c34>No results found!</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-59c34c34"]]);

export { index as default };
//# sourceMappingURL=index.7b8027d1.mjs.map
