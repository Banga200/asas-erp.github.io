import { useSSRContext, mergeProps, createVNode, resolveDynamicComponent, mergeModels, useModel, ref, onUnmounted, resolveDirective, withCtx, withDirectives, vModelDynamic, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrGetDirectiveProps, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderDynamicModel, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { T as ToolTip, C as Close, I as Item, _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    fill: "none"
  }, _attrs))}><circle opacity="0.2" cx="7" cy="7" r="6.5" stroke="currentColor"></circle></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CircleClose.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CircleClose = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: ["text", "color", "rightIcon", "leftIcon", "size"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["badge", [__props.color, __props.size]]
      }, _attrs))}>`);
      if (__props.rightIcon) {
        _push(`<div class="icon">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.rightIcon), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="text">${ssrInterpolate(__props.text)}</span>`);
      if (__props.leftIcon) {
        _push(`<div class="icon">`);
        _push(ssrRenderComponent(CircleClose, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Badge = _sfc_main$1;
const _sfc_main = {
  __name: "TextBox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "label",
    "color",
    "type",
    "value",
    "index",
    "disabled",
    "menuLocation",
    "menu",
    "moveNext",
    "menuItems",
    "background",
    "placeholder",
    "clearable",
    "readOnly",
    "rightIcon",
    "leftIcon",
    "badgeText",
    "size",
    "fullWidth",
    "badgeColor",
    "tooltipNotVisible",
    "inputToolTipText",
    "inputToolTipPosition",
    "leftInnerIcon",
    "leftIconToolTip",
    "leftIconToolTipPosition",
    "leftInnerIconToolTip",
    "leftInnerIconToolTipPosition"
  ], {
    "input": {},
    "inputModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["setInput", "changeInput"], ["update:input"]),
  setup(__props, { emit: __emit }) {
    const input = useModel(__props, "input");
    const emit = __emit;
    const isOpen = ref(false);
    const selectedItem = ref(null);
    onUnmounted(() => {
      (void 0).removeEventListener("click", () => {
      });
    });
    const {
      label,
      color,
      type,
      value,
      index,
      background,
      disabled,
      menuLocation,
      menu,
      menuItems,
      placeholder,
      clearable,
      readOnly,
      rightIcon,
      leftIcon,
      badgeColor,
      badgeText,
      fullWidth,
      size,
      moveNext,
      tooltipNotVisible,
      inputToolTipText,
      inputToolTipPosition,
      leftInnerIcon,
      leftIconToolTip,
      leftIconToolTipPosition,
      leftInnerIconToolTip,
      leftInnerIconToolTipPosition
    } = __props;
    function setInput(value2, itemId) {
      input.value = value2;
      selectedItem.value = itemId;
      emit("setInput", value2, index);
    }
    function changeInput(value2) {
      emit("changeInput", value2, index);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_move_next_on_enter = resolveDirective("move-next-on-enter");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-group TextBox", [{ "full-width": __props.fullWidth }]]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[__props.size, __props.color, __props.background, { "disabled": __props.disabled }, { "readonly": __props.readOnly }], "input-container"])}">`);
      _push(ssrRenderComponent(ToolTip, mergeProps({
        text: __props.inputToolTipText,
        position: __props.inputToolTipPosition,
        textBox: Boolean(__props.inputToolTipText)
      }, ssrGetDirectiveProps(_ctx, _directive_move_next_on_enter)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttr("type", __props.type ? __props.type : "text")}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderDynamicModel(__props.type ? __props.type : "text", input.value, null)}${ssrIncludeBooleanAttr(__props.readOnly) ? " readonly" : ""}${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: __props.type ? __props.type : "text",
                disabled: __props.disabled,
                placeholder: __props.placeholder,
                "onUpdate:modelValue": ($event) => input.value = $event,
                readonly: __props.readOnly,
                onInput: ($event) => setInput($event.target.value, 0),
                onChange: ($event) => changeInput($event.target.value)
              }, null, 40, ["type", "disabled", "placeholder", "onUpdate:modelValue", "readonly", "onInput", "onChange"]), [
                [vModelDynamic, input.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.clearable) {
        _push(`<div class="icon">`);
        _push(ssrRenderComponent(Close, { class: "closeIcon" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.badgeText || __props.leftInnerIconToolTip || __props.leftIcon) {
        _push(`<div class="icons">`);
        if (__props.badgeText) {
          _push(ssrRenderComponent(Badge, {
            text: __props.badgeText,
            color: __props.badgeColor
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(ToolTip, {
          text: __props.leftInnerIconToolTip,
          position: __props.leftInnerIconToolTipPosition
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.leftInnerIcon), null, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(__props.leftInnerIcon)))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (__props.leftIcon && __props.leftIconToolTip) {
          _push(ssrRenderComponent(ToolTip, {
            text: __props.leftIconToolTip,
            position: __props.leftIconToolTipPosition
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.leftIcon), null, null), _parent2, _scopeId);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.leftIcon)))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.leftIcon && !__props.leftIconToolTip) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.leftIcon), {
            class: "blue-icon",
            onClick: ($event) => isOpen.value = true
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([[__props.menuLocation], "dropMenu button"])}" style="${ssrRenderStyle(__props.menuItems && isOpen.value && __props.menu ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(__props.menuItems, (item, i) => {
        _push(ssrRenderComponent(Item, {
          key: i,
          text: item.text,
          onClick: ($event) => setInput(item.value, item.id),
          selected: item.id === selectedItem.value,
          value: item.value,
          rightIcon: item.rightIcon || void 0,
          leftIcon: item.leftIcon || void 0,
          color: item.color || void 0
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/TextBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextBox = _sfc_main;

export { Badge as B, TextBox as T };
//# sourceMappingURL=TextBox-CQCy0lNb.mjs.map
