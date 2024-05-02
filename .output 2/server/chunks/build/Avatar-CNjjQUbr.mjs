import { useSSRContext, mergeProps, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Avatar",
  __ssrInlineRender: true,
  props: ["size", "src", "icon", "text", "background", "outline", "dark", "borderColor"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["avatar", [{ "dark": __props.dark }, __props.borderColor, { "outline": __props.outline }, __props.size]],
        style: { backgroundColor: __props.background }
      }, _attrs))}>`);
      if (__props.src) {
        _push(`<img${ssrRenderAttr("src", __props.src)}>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.icon) {
        _push(`<div class="icon">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.text) {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Avatar = _sfc_main;

export { Avatar as A };
//# sourceMappingURL=Avatar-CNjjQUbr.mjs.map
