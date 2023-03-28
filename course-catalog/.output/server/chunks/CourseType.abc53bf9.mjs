import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubjectType",
  __ssrInlineRender: true,
  props: {
    subject: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "type",
        class: "mt-2"
      }, _attrs))}>`);
      if (__props.subject == "MATH") {
        _push(`<div id="math" class="rounded-full w-28 h-6 flex justify-center items-center bg-red-200 text-sm"><p>Math</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "ENGLISH") {
        _push(`<div id="english" class="rounded-full w-28 h-6 flex justify-center items-center bg-blue-200 text-sm"><p>English</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "SCIENCE") {
        _push(`<div id="science" class="rounded-full w-28 h-6 flex justify-center items-center bg-green-200 text-sm"><p>Science</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "SS") {
        _push(`<div id="history" class="rounded-full w-28 h-6 flex justify-center items-center bg-purple-200 text-sm"><p>Social Studies</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "LANG") {
        _push(`<div id="russian" class="rounded-full w-28 h-6 flex justify-center items-center bg-orange-200 text-sm"><p>Language</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "PE") {
        _push(`<div id="pe" class="rounded-full w-28 h-6 flex justify-center items-center bg-yellow-200 text-sm"><p>Gym</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "TECH") {
        _push(`<div id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-teal-200 text-black text-sm"><p>Technology</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "ARTS") {
        _push(`<div id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-pink-200 text-black text-sm"><p>Arts</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subject == "OTHER") {
        _push(`<div id="elective" class="rounded-full w-28 h-6 flex justify-center items-center bg-zinc-200 text-black text-sm"><p>Other</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/course-cards/SubjectType.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CourseType",
  __ssrInlineRender: true,
  props: {
    ap: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "type",
        class: "mt-2"
      }, _attrs))}>`);
      if (__props.ap == true) {
        _push(`<div id="ap" class="rounded-full w-28 h-6 flex justify-center items-center bg-cyan-200 text-sm"><p>AP Course</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/course-cards/CourseType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=CourseType.abc53bf9.mjs.map