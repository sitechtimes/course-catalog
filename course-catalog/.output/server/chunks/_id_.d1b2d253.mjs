import { u as useCourseStore, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './CourseType.abc53bf9.mjs';
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  components: {
    SubjectType: _sfc_main$1,
    CourseType: _sfc_main$2
  },
  data() {
    return {
      courses: useCourseStore().courses,
      course: Object
    };
  },
  computed: {
    getCourse() {
      return this.courses.find((course2) => {
        return course2.id == this.$route.params.id;
      });
    }
  },
  mounted() {
    this.course = this.getCourse;
    console.log(course);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_SubjectType = resolveComponent("SubjectType");
  const _component_CourseType = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "course",
    class: "h-full w-full flex justify-center items-center"
  }, _attrs))} data-v-95aa313b><div id="content" class="w-11/12 max-w-4xl h-auto mt-28 mb-8 pb-6 px-8 flex flex-col justify-start space-y-4 shadow-md test" data-v-95aa313b><div class="mt-3" id="button" data-v-95aa313b>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-v-95aa313b${_scopeId}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-v-95aa313b${_scopeId}></path></svg><h3 data-v-95aa313b${_scopeId}>Back to Courses</h3>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 512"
          }, [
            createVNode("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })
          ])),
          createVNode("h3", null, "Back to Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div id="back" class="w-full h-5 flex justify-end items-center z-20 border-b border-solid border-zinc-200" data-v-95aa313b></div><div id="title" class="w-full h-auto flex flex-col justify-start items-start pb-6 px-4 border-b border-solid border-zinc-200 relative" data-v-95aa313b><h2 id="name" class="text-3xl font-semibold pb-2 sm:text-4xl" data-v-95aa313b>${ssrInterpolate($data.course.name)}</h2><div id="grade" class="flex justify-start items-start space-x-1 text-base font-light" data-v-95aa313b><p class="text-zinc-500 font-bold" data-v-95aa313b>Grade :</p><p class="text-zinc-500 font-bold space-x-1" data-v-95aa313b>`);
  if (((_a = $data.course) == null ? void 0 : _a.freshman) == true) {
    _push(`<span data-v-95aa313b>9 </span>`);
  } else {
    _push(`<!---->`);
  }
  if (((_b = $data.course) == null ? void 0 : _b.sophomore) == true) {
    _push(`<span data-v-95aa313b>10 </span>`);
  } else {
    _push(`<!---->`);
  }
  if (((_c = $data.course) == null ? void 0 : _c.junior) == true) {
    _push(`<span data-v-95aa313b>11 </span>`);
  } else {
    _push(`<!---->`);
  }
  if (((_d = $data.course) == null ? void 0 : _d.senior) == true) {
    _push(`<span data-v-95aa313b>12 </span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p></div><div class="flex mt-2 justify-start items-start" data-v-95aa313b>`);
  _push(ssrRenderComponent(_component_SubjectType, {
    subject: (_e = $data.course) == null ? void 0 : _e.subject
  }, null, _parent));
  _push(ssrRenderComponent(_component_CourseType, {
    class: "ml-4",
    ap: (_f = $data.course) == null ? void 0 : _f.ap
  }, null, _parent));
  _push(`</div></div><div id="description" class="w-full flex flex-col justify-start items-start space-y-4" data-v-95aa313b><div class="w-full h-auto flex flex-col justify-start items-start px-4 space-y-1 pb-2" data-v-95aa313b><h5 class="text-xl font-semibold" data-v-95aa313b>Description</h5><p class="text-base text-zinc-600 whitespace-pre-wrap" data-v-95aa313b>${$data.course.course_description}</p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-95aa313b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.d1b2d253.mjs.map
