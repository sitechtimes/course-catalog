import { _ as _export_sfc, u as useCourseStore, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCourseStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "landing",
        class: "flex justify-center items-center h-screen px-12"
      }, _attrs))} data-v-9f96c0be><div id="info" class="w-5/6 flex flex-col justify-center items-center space-y-4 max-w-2xl lg:w-2/3 lg:pl-4" data-v-9f96c0be><h2 class="text-center lg:text-left text-3xl sm:text-4xl font-semibold" data-v-9f96c0be> Learn about the courses offered at Staten Island Technical High School. </h2><p class="text-center lg:text-left text-lg sm:text-xl font-medium" data-v-9f96c0be> Learn more about available courses and plan ahead by creating mock schedules. </p><div id="btns" class="w-full flex justify-center lg:justify-start items-center space-x-8" data-v-9f96c0be>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded" data-v-9f96c0be${_scopeId}> View Courses </button>`);
          } else {
            return [
              createVNode("button", { class: "bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded" }, " View Courses ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/builder" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded" data-v-9f96c0be${_scopeId}> Build Schedule </button>`);
          } else {
            return [
              createVNode("button", { class: "bg-secondary-s text-white text-sm sm:text-base w-32 h-10 sm:w-40 sm:h-12 rounded" }, " Build Schedule ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div id="circles" class="-z-10 absolute h-112 w-112 sm:h-128 sm:w-128 flex justify-center items-center lg:relative" data-v-9f96c0be><div id="big" class="h-80 w-80 sm:h-96 sm:w-96 bg-tertiary-s rounded-full right-32" data-v-9f96c0be></div><div id="small" class="h-32 w-32 sm:h-40 sm:w-40 absolute bottom-4 left-12 bg-primary-s rounded-full" data-v-9f96c0be></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f96c0be"]]);

export { index as default };
//# sourceMappingURL=index.e54e309e.mjs.map
