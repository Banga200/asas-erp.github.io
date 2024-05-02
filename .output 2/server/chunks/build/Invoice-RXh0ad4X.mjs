import { d as defineStore, s as storeToRefs, u as useUserStore, B as Button, C as Close, b as CheckBox, D as Dialog, S as Snackbar, _ as _export_sfc, T as ToolTip, I as Item, e as useNotify } from './server.mjs';
import { useSSRContext, ref, withAsyncContext, shallowRef, watch, mergeProps, unref, isRef, createVNode, resolveDynamicComponent, withCtx, mergeModels, useModel, openBlock, createBlock, onUnmounted, createCommentVNode } from 'vue';
import { u as useCommonStore, a as useOfferPriceStore, I as InvoicesTree, A as Add, E as Edit, D as Delete, R as Refresh, M as MoreDotsVertical, U as User, b as ArrowDown, S as Save, C as ComboBox, T as Tab, c as Search$1, d as useHandleTax } from './Tab-DoXFcaJE.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { T as TextBox } from './TextBox-CQCy0lNb.mjs';
import { A as Avatar } from './Avatar-CNjjQUbr.mjs';
import { useRoute } from 'vue-router';

const _sfc_main$q = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.40002 5.31999V3.91999C1.40002 2.52559 2.52562 1.39999 3.92002 1.39999H5.32002M8.68002 1.39999H10.08C11.4744 1.39999 12.6 2.52559 12.6 3.91999V5.31999M12.6 9.23999V10.08C12.6 11.4744 11.4744 12.6 10.08 12.6H9.24002M5.32002 12.6H3.92002C2.52562 12.6 1.40002 11.4744 1.40002 10.08V8.67999M6.16002 4.19999V5.31999C6.16002 5.87999 5.88002 6.15999 5.32002 6.15999H4.20002C3.64002 6.15999 3.36002 5.87999 3.36002 5.31999V4.19999C3.36002 3.63999 3.64002 3.35999 4.20002 3.35999H5.32002C5.88002 3.35999 6.16002 3.63999 6.16002 4.19999ZM10.64 4.19999V5.31999C10.64 5.87999 10.36 6.15999 9.80002 6.15999H8.68002C8.12002 6.15999 7.84002 5.87999 7.84002 5.31999V4.19999C7.84002 3.63999 8.12002 3.35999 8.68002 3.35999H9.80002C10.36 3.35999 10.64 3.63999 10.64 4.19999ZM6.16002 8.67999V9.79999C6.16002 10.36 5.88002 10.64 5.32002 10.64H4.20002C3.64002 10.64 3.36002 10.36 3.36002 9.79999V8.67999C3.36002 8.11999 3.64002 7.83999 4.20002 7.83999H5.32002C5.88002 7.83999 6.16002 8.11999 6.16002 8.67999ZM10.64 8.67999V9.79999C10.64 10.36 10.36 10.64 9.80002 10.64H8.68002C8.12002 10.64 7.84002 10.36 7.84002 9.79999V8.67999C7.84002 8.11999 8.12002 7.83999 8.68002 7.83999H9.80002C10.36 7.83999 10.64 8.11999 10.64 8.67999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Barcode.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Barcode = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$p = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.83337 4.66668H11.1667V3.33334C11.1667 2.00001 10.6667 1.33334 9.16671 1.33334H6.83337C5.33337 1.33334 4.83337 2.00001 4.83337 3.33334V4.66668ZM10.6667 10V12.6667C10.6667 14 10 14.6667 8.66671 14.6667H7.33337C6.00004 14.6667 5.33337 14 5.33337 12.6667V10H10.6667Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3333 9.99999H4.66667M4.66667 7.33332H6.66667M14 6.66666V9.99999C14 11.3333 13.3333 12 12 12H10.6667V9.99999H5.33333V12H4C2.66667 12 2 11.3333 2 9.99999V6.66666C2 5.33332 2.66667 4.66666 4 4.66666H12C13.3333 4.66666 14 5.33332 14 6.66666Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Printer.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Printer = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$o = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.61111 1V3.1M10.3889 1V3.1M1.36111 5.963H13.6389M14 5.55V11.5C14 13.6 12.9167 15 10.3889 15H4.61111C2.08333 15 1 13.6 1 11.5V5.55C1 3.45 2.08333 2.05 4.61111 2.05H10.3889C12.9167 2.05 14 3.45 14 5.55Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.99514 10H10M9.99514 12H10M7.99784 10H8.00324M7.99784 12H8.00324M6 10H6.0054M6 12H6.0054" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Calendar.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$7]]);
const useSalesStore = defineStore("sales", () => {
  const Sales = ref([]);
  ref([]);
  async function GetItems(page, search) {
  }
  return {
    Sales,
    GetItems
  };
});
const useHandleDiscount = (discount, quantity, total, price) => {
  if (discount > 0) {
    let result = discount / total * price;
    return result * quantity;
  }
};
const _sfc_main$n = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_5518_108009)"><path d="M7.99999 5.33333V8.66666M7.99999 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8C14.6667 4.33333 11.6667 1.33333 7.99999 1.33333C4.33333 1.33333 1.33333 4.33333 1.33333 8C1.33333 11.6667 4.33333 14.6667 7.99999 14.6667Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99667 10.6667H8.00267" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5518_108009"><rect width="16" height="16" fill="currentColor"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Info.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Info = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$m = {
  __name: "Switch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "label",
    "trueText",
    "falseText",
    "labelIcon"
  ], {
    "input": {},
    "inputModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["changeSwitch"], ["update:input"]),
  setup(__props, { emit: __emit }) {
    const input = useModel(__props, "input");
    const trueSide = ref(true);
    const falseSide = ref(false);
    clearStatus();
    input.value ? trueSide.value = true : falseSide.value = true;
    function clearStatus() {
      trueSide.value = false;
      falseSide.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "switch-container" }, _attrs))}><label class="row"><span>${ssrInterpolate(__props.label)}</span><div class="icon">`);
      _push(ssrRenderComponent(ToolTip, {
        position: "bottom",
        text: "0 = \u0646\u0642\u062F\u064A \n 1 = \u0627\u062C\u0644"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.labelIcon), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.labelIcon)))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></label><div class="switch"><span class="${ssrRenderClass([[{ active: trueSide.value }], "trueSide"])}">${ssrInterpolate(__props.trueText)}</span><span class="${ssrRenderClass([[{ active: falseSide.value }], "falseSide"])}">${ssrInterpolate(__props.falseText)}</span></div></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/Switch.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Switch = _sfc_main$m;
const _sfc_main$l = {
  __name: "TextArea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "label",
    "color",
    "disabled",
    "background",
    "placeholder",
    "clearable",
    "readOnly",
    "rightIcon",
    "leftIcon",
    "fullWidth",
    "value"
  ], {
    "input": {},
    "inputModifiers": {}
  }),
  emits: ["update:input"],
  setup(__props) {
    const input = useModel(__props, "input");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-group", { "full-width": __props.fullWidth }]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[__props.color, __props.background, { "disabled": __props.disabled }, { "readonly": __props.readOnly }], "textarea"])}"><textarea type="text"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.readOnly) ? " readonly" : ""}>${ssrInterpolate(input.value)}</textarea>`);
      if (__props.clearable) {
        _push(`<div class="icon"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/TextArea.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const TextArea = _sfc_main$l;
const _sfc_main$k = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_971_5883)"><path d="M14.9902 8C14.9902 11.864 11.8542 15 7.99023 15C4.12623 15 0.990234 11.864 0.990234 8C0.990234 4.136 4.12623 1 7.99023 1C11.8542 1 14.9902 4.136 14.9902 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.99023 10L8.47063 9.0352C8.20592 8.86832 7.99023 8.46675 7.99023 8.1382V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_971_5883"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Time.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Time = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$j = {
  __name: "Post",
  __ssrInlineRender: true,
  props: ["text", "color", "noIcon", "menu", "menuItems"],
  setup(__props) {
    const isOpen = ref(false);
    onUnmounted(() => {
      (void 0).removeEventListener("click", () => {
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-container" }, _attrs))}><div class="${ssrRenderClass([[__props.color], "post"])}">`);
      if (__props.text) {
        _push(`<span class="text">${ssrInterpolate(__props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.noIcon) {
        _push(`<div class="icon">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(ArrowDown), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.menu && isOpen.value) {
        _push(`<div class="dropMenu button center"><!--[-->`);
        ssrRenderList(__props.menuItems, (item, i) => {
          _push(ssrRenderComponent(Item, {
            key: i,
            text: item
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Post.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Post = _sfc_main$j;
const _sfc_main$i = {
  __name: "Model",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels(["headerText", "headerIcon", "title", "content", "confirmText", "cancelText", "confirmColor", "component", "iconToolTip", "iconToolTipPosition"], {
    "show": {},
    "showModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["confirm", "cancle"], ["update:show"]),
  setup(__props, { emit: __emit }) {
    const show = useModel(__props, "show");
    const emit = __emit;
    function confirm() {
      emit("confirm");
    }
    function closeDialog() {
      show.value = false;
      emit("cancle");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["overlay", [{ "show": show.value }]]
      }, _attrs))}><div class="model"><div class="header"><div class="row gap-10 align-center"><span class="text">${ssrInterpolate(__props.headerText)}</span>`);
      if (__props.headerIcon) {
        _push(ssrRenderComponent(ToolTip, {
          text: __props.iconToolTip,
          position: __props.iconToolTipPosition
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.headerIcon), null, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "icon" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.headerIcon)))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="icon">`);
      _push(ssrRenderComponent(Close, null, null, _parent));
      _push(`</div></div><div class="content"><h3 class="title">${ssrInterpolate(__props.title)}</h3><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="actions row">`);
      _push(ssrRenderComponent(Button, {
        text: __props.cancelText ? __props.cancelText : "\u0625\u0644\u063A\u0627\u0621",
        outline: true,
        onClick: closeDialog
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        text: __props.confirmText ? __props.confirmText : "\u0646\u0639\u0645",
        color: __props.confirmColor,
        onClick: confirm,
        class: "confirmButton"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Model.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Model = _sfc_main$i;
const _sfc_main$h = {
  __name: "AlternativeItems",
  __ssrInlineRender: true,
  emits: ["insertAlternative"],
  setup(__props, { emit: __emit }) {
    const commonStore = useCommonStore();
    const { AlternativesItems, SelectedAlternative } = storeToRefs(commonStore);
    const selectedItem = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column normal-table model-table mb-8 gap-16" }, _attrs))}>`);
      _push(ssrRenderComponent(TextBox, {
        leftIcon: Search$1,
        placeholder: "\u0631\u0642\u0645 ,\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641"
      }, null, _parent));
      _push(`<table><thead><tr><th>\u0627\u0644\u0631\u0642\u0645</th><th>\u0627\u0644\u0635\u0646\u0641</th></tr></thead><tbody><!--[-->`);
      ssrRenderList((_a = unref(AlternativesItems)) == null ? void 0 : _a.data, (item, i) => {
        _push(`<tr class="${ssrRenderClass({ "selected": unref(selectedItem) === item.gun })}"><td class="text-center">${ssrInterpolate(i + 1)}</td><td class="item-column">${ssrInterpolate(item.name)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Models/AlternativeItems.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const AlternativeItems = _sfc_main$h;
const _sfc_main$g = {
  __name: "CostCenter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u0643\u0644\u0641\u0629" }, null, _parent));
      _push(`<div class="grid-2 gap-6"><div>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0625\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u0636\u0631\u064A\u0628\u0629 " }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642",
        leftIcon: Calendar
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/CostCenter.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const CostCenter = _sfc_main$g;
const _sfc_main$f = {
  __name: "Saleman",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { GeneralFields, SalesMen } = storeToRefs(commonStore);
    useOfferPriceStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(ComboBox, {
        label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062F\u0648\u0628",
        items: unref(SalesMen) || [],
        displayTitle: "name",
        returnValue: "gun",
        valueReturn: unref(GeneralFields).salesmanGUN,
        "onUpdate:valueReturn": ($event) => unref(GeneralFields).salesmanGUN = $event
      }, null, _parent));
      _push(`<div class="grid-2 gap-4"><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0631\u0642\u0645 \u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u062F\u0648\u0628" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642",
        leftIcon: Calendar
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Saleman.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Saleman = _sfc_main$f;
const _sfc_main$e = {
  __name: "Notes",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0647\u0648 \u0645\u062B\u0627\u0644 \u0644\u0646\u0635 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0633\u062A\u0628\u062F\u0644 \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u0645\u0633\u0627\u062D\u0629\u060C \u0644\u0642\u062F \u062A\u0645 \u062A\u0648\u0644\u064A\u062F \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0645\u0648\u0644\u062F \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u0649\u060C");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(TextArea, {
        input: unref(text),
        "onUpdate:input": ($event) => isRef(text) ? text.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Notes.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Notes = _sfc_main$e;
const _sfc_main$d = {
  __name: "BuyORBook",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-2 gap-4" }, _attrs))}><div>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F",
        leftIcon: Calendar
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/BuyORBook.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const BuyORBook = _sfc_main$d;
const _sfc_main$c = {
  __name: "CustomerDetails",
  __ssrInlineRender: true,
  props: ["customerValidation"],
  emits: ["customerHasDiscount"],
  setup(__props, { emit: __emit }) {
    const commonStore = useCommonStore();
    useOfferPriceStore();
    const { Customers, Customer, CustomerDiscount } = storeToRefs(commonStore);
    const customerId = ref("");
    const emit = __emit;
    function checkNameChange(inputValue) {
    }
    function hasDiscount(customerID, index) {
      Customer.value.gun = customerID;
      emit("customerHasDiscount", customerID, index);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column pr-8 pl-8 gap-6" }, _attrs))}><div class="row flex-column-end gap-6">`);
      _push(ssrRenderComponent(ComboBox, {
        valueReturn: unref(customerId),
        "onUpdate:valueReturn": ($event) => isRef(customerId) ? customerId.value = $event : null,
        label: "\u0627\u0644\u0639\u0645\u064A\u0644",
        clearable: true,
        color: unref(Customer).isSuspend || __props.customerValidation ? "danger" : void 0,
        leftInnerIconItem: "isSuspend",
        leftInnerIcon: unref(Customer).isSuspend ? Info : "",
        leftInnerIconToolTip: "\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0648\u0642\u0641",
        leftInnerIconToolTipPosition: "bottom",
        class: "flex-grow",
        items: unref(Customers) || [],
        displayTitle: "name",
        returnValue: "gun",
        input: unref(Customer).name,
        "onUpdate:input": ($event) => unref(Customer).name = $event,
        onSetInput: checkNameChange,
        onSetItem: hasDiscount
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        color: "neutral",
        icon: MoreDotsVertical
      }, null, _parent));
      _push(`</div><div class="grid-2 gap-6"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064A\u0628\u064A",
        input: unref(Customer).tin,
        "onUpdate:input": ($event) => unref(Customer).tin = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ",
        input: unref(Customer).mobile,
        "onUpdate:input": ($event) => unref(Customer).mobile = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div><div class="grid-2 gap-6"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u062D\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629",
        readOnly: true,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062F\u064A\u0646 ",
        readOnly: true,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/CustomerDetails.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CustomerDetails = _sfc_main$c;
const _sfc_main$b = {
  __name: "CustomerAddresses",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { Customer } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-column gap-6 pl-8 pr-8" }, _attrs))}><div class="grid-4 gap-4"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0628\u0644\u062F",
        input: unref(Customer).country,
        "onUpdate:input": ($event) => unref(Customer).country = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629",
        input: unref(Customer).area,
        "onUpdate:input": ($event) => unref(Customer).area = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
        input: unref(Customer).city,
        "onUpdate:input": ($event) => unref(Customer).city = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u062D\u064A",
        input: unref(Customer).neighborhood,
        "onUpdate:input": ($event) => unref(Customer).neighborhood = $event
      }, null, _parent));
      _push(`</div></div><div class="grid-3 gap-4"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",
        input: unref(Customer).street,
        "onUpdate:input": ($event) => unref(Customer).street = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0628\u0646\u0649",
        input: unref(Customer).buildingNo,
        "onUpdate:input": ($event) => unref(Customer).buildingNo = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A",
        input: unref(Customer).postelCode,
        "onUpdate:input": ($event) => unref(Customer).postelCode = $event
      }, null, _parent));
      _push(`</div></div><div class="grid-3 gap-4"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0627\u0636\u0627\u0641\u064A",
        input: unref(Customer).additionalCode,
        "onUpdate:input": ($event) => unref(Customer).additionalCode = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0635.\u0628",
        input: unref(Customer).fax,
        "onUpdate:input": ($event) => unref(Customer).fax = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062B\u0627\u0628\u062A",
        input: unref(Customer).phone,
        "onUpdate:input": ($event) => unref(Customer).phone = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0641\u0627\u0643\u0633",
        input: unref(Customer).fax,
        "onUpdate:input": ($event) => unref(Customer).fax = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/CustomerAddresses.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CustomerAddresses = _sfc_main$b;
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "14",
    viewBox: "0 0 15 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.91219 4.43333L5.10185 2.625M5.10185 2.625L3.2915 4.43333M5.10185 2.625V11.375M8.42081 9.56667L10.2312 11.375M10.2312 11.375L12.0415 9.56667M10.2312 11.375V2.625" stroke="#51ADFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Sort.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Sort = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "14",
    viewBox: "0 0 15 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.07106 8.86555L9.46217 5.13449M6.28365 6.07011C6.4528 6.07011 6.61502 5.99618 6.73463 5.86458C6.85424 5.73299 6.92143 5.5545 6.92143 5.3684C6.92143 5.18229 6.85424 5.00381 6.73463 4.87221C6.61502 4.74062 6.4528 4.66669 6.28365 4.66669C6.1145 4.66669 5.95228 4.74062 5.83268 4.87221C5.71307 5.00381 5.64587 5.18229 5.64587 5.3684C5.64587 5.5545 5.71307 5.73299 5.83268 5.86458C5.95228 5.99618 6.1145 6.07011 6.28365 6.07011ZM9.67476 9.33335C9.84391 9.33335 10.0061 9.25942 10.1257 9.12783C10.2453 8.99623 10.3125 8.81775 10.3125 8.63164C10.3125 8.44554 10.2453 8.26705 10.1257 8.13546C10.0061 8.00386 9.84391 7.92993 9.67476 7.92993C9.50561 7.92993 9.34339 8.00386 9.22379 8.13546C9.10418 8.26705 9.03699 8.44554 9.03699 8.63164C9.03699 8.81775 9.10418 8.99623 9.22379 9.12783C9.34339 9.25942 9.50561 9.33335 9.67476 9.33335Z" stroke="#51ADFC" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.83337 12.25C10.7329 12.25 13.0834 9.89957 13.0834 7C13.0834 4.10043 10.7329 1.75 7.83337 1.75C4.9338 1.75 2.58337 4.10043 2.58337 7C2.58337 9.89957 4.9338 12.25 7.83337 12.25Z" stroke="#51ADFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Percent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Percent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1416_16451)"><path d="M10.5 6.00004H5.49998M10.5 10H5.49998M5.99998 14.6667H9.99998C13.3333 14.6667 14.6666 13.3334 14.6666 10V6.00004C14.6666 2.66671 13.3333 1.33337 9.99998 1.33337H5.99998C2.66665 1.33337 1.33331 2.66671 1.33331 6.00004V10C1.33331 13.3334 2.66665 14.6667 5.99998 14.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_1416_16451"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Statment.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Statment = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M5.06667 8.86207L3 10.931M3 10.931L5.06667 13M3 10.931L13 10.931M10.9333 7.13793L13 5.06897M13 5.06897L10.9333 3M13 5.06897L3 5.06896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Convert.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Convert = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10.6667 8H2M10.6667 4H2M6.66667 12H2M14 4V10.6667C14 11.0203 13.8595 11.3594 13.6095 11.6095C13.3594 11.8595 13.0203 12 12.6667 12H9.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6666 10.6666L9.33331 12L10.6666 13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Insert.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Insert = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Popover",
  __ssrInlineRender: true,
  props: ["text", "position", "textBox", "show", "disableOnclick"],
  setup(__props) {
    const props = __props;
    const isTooltipVisible = ref(false);
    watch(() => props.show, (value) => {
      if (value) {
        isTooltipVisible.value = true;
      } else {
        isTooltipVisible.value = false;
      }
    });
    onUnmounted(() => {
      (void 0).removeEventListener("click", () => {
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tooltip-container" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div style="${ssrRenderStyle(unref(isTooltipVisible) ? null : { display: "none" })}" class="${ssrRenderClass([[props.position, { "show": unref(isTooltipVisible) }], "tooltip-content top"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Popover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Popover = _sfc_main$5;
const _sfc_main$4 = {
  __name: "SalesInvoiceTabel",
  __ssrInlineRender: true,
  props: ["recalculate", "itemValidation"],
  emits: [
    "setInvoiceFooter",
    "restRecalculate",
    "recalculateTotalDiscount",
    "clearValidation",
    "showAlternativeItems"
  ],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const dialog = ref(false);
    const props = __props;
    const emit = __emit;
    const salesStore = useSalesStore();
    const commonStore = useCommonStore();
    const priceTitle = ref("");
    const {
      NewItems,
      Units,
      Items,
      Warehouses,
      ItemDetails,
      GeneralFields,
      PriceType
    } = storeToRefs(commonStore);
    let timeout = null;
    const page = ref(1);
    const input = ref("");
    ref(false);
    watch(
      () => props.recalculate,
      (newValue) => {
        if (newValue) {
          setTotal(null);
        }
      }
    );
    function getItems() {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        salesStore.GetItems(page.value++, input.value);
      }, 400);
    }
    function getItemsBySearch() {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        salesStore.GetItems(1, input.value);
      }, 800);
    }
    watch(input, (newValue, oldValue) => {
      if (newValue === "") {
        page.value = 1;
        salesStore.Sales = [];
      }
    });
    async function getItemDetails(itemID, index) {
      await commonStore.GetItemDetails(itemID, index);
      NewItems.value[index].quantity = 1;
    }
    function removeItem(index) {
      commonStore.RemoveItem(index);
    }
    async function handleUnit(unitID, index) {
      var _a, _b, _c, _d;
      let unitIndex = (_b = (_a = ItemDetails.value[index]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.units.findIndex(
        (unit) => {
          return unit.gun === unitID;
        }
      );
      if (unitIndex >= 0) {
        emit("clearValidation");
        Items.value.find((item2) => {
          return item2.gun === NewItems.value[index].itemGUN;
        });
        let unit = await ((_d = (_c = ItemDetails.value[index]) == null ? void 0 : _c.nonServiceData) == null ? void 0 : _d.units[unitIndex]);
        await commonStore.GetItemQuantityByWarehouse(
          NewItems.value[index].itemGUN,
          NewItems.value[index].warehouseGUN,
          index
        );
        commonStore.setPriceList(unit, index);
        NewItems.value[index].price = NewItems.value[index].unitPriceList[GeneralFields.value.priceType - 1].price;
        NewItems.value[index].discount = 0;
        NewItems.value[index].taxValue = useHandleTax(
          NewItems.value[index].taxValue,
          NewItems.value[index].price * 1
        );
        handleQuantity(null, index);
        setTotal(index);
        emit("recalculateTotalDiscount", GeneralFields.value.totalDiscount);
      }
    }
    async function handleWarehouse(warehouseID, index) {
      await commonStore.GetItemQuantityByWarehouse(
        NewItems.value[index].itemGUN,
        warehouseID,
        index
      );
      handleQuantity(null, index);
    }
    async function handleQuantity(quantity, index) {
      var _a, _b, _c, _d;
      NewItems.value[index].quantity;
      let unitIndex = (_b = (_a = ItemDetails.value[index]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.units.findIndex(
        (unit) => {
          return unit.gun === NewItems.value[index].unitGUN;
        }
      );
      if (unitIndex >= 0) {
        let unit = await ((_d = (_c = ItemDetails.value[index]) == null ? void 0 : _c.nonServiceData) == null ? void 0 : _d.units[unitIndex]);
        NewItems.value[index].warehouseQuantity = NewItems.value[index].warehouseQuantity / unit.equivalent;
      }
      setTotal(index);
    }
    function handlePrice(price, index) {
      setTotal(index);
    }
    function handleDiscount(discount, index) {
      if (typeof discount === "string" && discount) {
        if (discount.includes("%")) {
          discount = discount.split("%")[0];
          discount = parseFloat(discount) / 100 * NewItems.value[index].total;
          NewItems.value[index].discount = useHandleDiscount(
            discount,
            NewItems.value[index].quantity,
            NewItems.value[index].total,
            NewItems.value[index].price
          );
          setNet(index);
        } else {
          const isNumber = isNaN(parseInt(discount)) ? false : true;
          if (isNumber) {
            NewItems.value[index].discount = useHandleDiscount(
              parseInt(discount),
              NewItems.value[index].quantity,
              NewItems.value[index].total,
              NewItems.value[index].price
            );
            setNet(index);
          } else {
            NewItems.value[index].discount = "";
            setNet(index);
          }
        }
      }
    }
    function setTotal(index) {
      if (props.recalculate) {
        for (let i = 0; i < NewItems.value.length - 1; i++) {
          let item = NewItems.value[i];
          item.total = item.price * item.quantity;
          handleDiscount(item.discount, i);
          handleTax(i);
          item.net = item.total - item.discount + item.taxValue;
        }
        emit("restRecalculate");
      } else {
        NewItems.value[index].total = NewItems.value[index].price * NewItems.value[index].quantity;
        handleDiscount(NewItems.value[index].discount, index);
        handleTax(index);
        setNet(index);
      }
    }
    function handleTax(index) {
      var _a;
      NewItems.value[index].taxValue = useHandleTax(
        (_a = ItemDetails.value[index]) == null ? void 0 : _a.currentTaxValue,
        NewItems.value[index].total
      );
      NewItems.value[index].net = NewItems.value[index].total + NewItems.value[index].taxValue;
      setNet(index);
    }
    function setNet(index) {
      NewItems.value[index].net = NewItems.value[index].total - NewItems.value[index].discount + NewItems.value[index].taxValue;
    }
    function getSelectedWarehouseIndex(warehouseID, index) {
      var _a, _b;
      let warhouseIndex = (_b = (_a = ItemDetails.value[index]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.warehouses.findIndex((item) => {
        return item.gun === warehouseID;
      });
      return warhouseIndex;
    }
    let priceList = [];
    const priceItemIndex = ref(null);
    function handlePriceChange(price, index) {
      priceList = [];
      let prices = NewItems.value[index].unitPriceList;
      for (let index2 = 0; index2 < prices.length; index2++) {
        const element = prices[index2];
        if (GeneralFields.value.priceType === index2 + 1) {
          if (price < element.price) {
            if (price < prices[3].price) {
              priceTitle.value = `\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0647\u0627 \u0644\u0635\u0646\u0641 \u0627\u0642\u0644 \u0645\u0646`;
              priceList.push("\u0633\u0639\u0631\u0627\u0644\u062A\u0643\u0644\u0641\u0629");
              priceList.push(PriceType.value[index2].name);
              dialog.value = true;
            } else {
              priceTitle.value = `\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0647\u0627 \u0644\u0635\u0646\u0641 \u0627\u0642\u0644 \u0645\u0646 \u0627\u0644\u0633\u0639\u0631 ${PriceType.value[index2].name}`;
              dialog.value = true;
            }
          }
        }
      }
      priceItemIndex.value = index;
    }
    function setPrice() {
      dialog.value = false;
      let row = (void 0).querySelectorAll(`.table-container-invoice table tr`)[priceItemIndex.value + 2];
      let discountInput = row.ownerDocument.querySelector(".discount input");
      discountInput.focus();
      discountInput.select();
    }
    function canclePrice() {
      NewItems.value[priceItemIndex.value].price = NewItems.value[priceItemIndex.value].unitPriceList[GeneralFields.value.priceType - 1].price;
      handlePrice(null, priceItemIndex.value);
      let row = (void 0).querySelectorAll(`.table-container-invoice table tr`)[priceItemIndex.value];
      let priceInput = row.ownerDocument.querySelector(".price input");
      priceInput.focus();
      priceInput.select();
    }
    async function handleKeyPressF6(i) {
      var _a, _b;
      let item = Items.value.find((item2) => {
        return item2.gun === NewItems.value[i].itemGUN;
      });
      if (NewItems.value[i].itemGUN) {
        if (item && item.type === 1 && ((_b = (_a = ItemDetails.value[i]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.isHasAvailableAccessories)) {
          await commonStore.GetInsertAccessoriesItems(
            NewItems.value[i].itemGUN,
            route.meta.DocOrder
          );
        }
      }
    }
    async function handleKeyPressF5(i) {
      var _a, _b;
      let item = Items.value.find((item2) => {
        return item2.gun === NewItems.value[i].itemGUN;
      });
      if (NewItems.value[i].itemGUN) {
        if (item && item.type === 1 && ((_b = (_a = ItemDetails.value[i]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.isHasAvailableAlternatives)) {
          emit("showAlternativeItems");
          await commonStore.GetAlternativesItems(
            NewItems.value[i].itemGUN,
            route.meta.DocOrder
          );
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><table><thead><tr><th>\u0627\u0644\u0631\u0642\u0645</th><th>\u0627\u0644\u0635\u0646\u0641</th><th>\u0627\u0644\u0648\u062D\u062F\u0629</th><th>\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639</th><th>\u0627\u0644\u0643\u0645\u064A\u0629</th><th>\u0627\u0644\u0633\u0639\u0631</th><th>\u0627\u0644\u0645\u062C\u0645\u0648\u0639</th><th>\u0627\u0644\u062D\u0633\u0645</th><th>\u0627\u0644\u0636\u0631\u064A\u0628\u0629</th><th>\u0627\u0644\u0627\u062C\u0645\u0627\u0644\u064A</th><th>\u062D\u0630\u0641</th></tr></thead>`);
      if (unref(NewItems).length > 0) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(unref(NewItems), (item, i) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
          _push(`<tr><td class="text-center align-center gap-4 justify-center">${ssrInterpolate(i + 1)} `);
          if (item.forSale === false) {
            _push(`<span class="circle"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="item-column">`);
          _push(ssrRenderComponent(Popover, {
            disableOnclick: true,
            position: "bottom-left",
            show: ((_b = (_a = unref(ItemDetails)[i]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.isHasAvailableAccessories) || ((_d = (_c = unref(ItemDetails)[i]) == null ? void 0 : _c.nonServiceData) == null ? void 0 : _d.isHasAvailableAlternatives)
          }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
              if (_push2) {
                if ((_b2 = (_a2 = unref(ItemDetails)[i]) == null ? void 0 : _a2.nonServiceData) == null ? void 0 : _b2.isHasAvailableAccessories) {
                  _push2(`<p${_scopeId}> \u0623\u0635\u0646\u0627\u0641 \u0645\u0644\u062D\u0642\u0629 \u0623\u0636\u063A\u0637 (F6) </p>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_d2 = (_c2 = unref(ItemDetails)[i]) == null ? void 0 : _c2.nonServiceData) == null ? void 0 : _d2.isHasAvailableAlternatives) {
                  _push2(`<p${_scopeId}> \u0623\u0635\u0646\u0627\u0641 \u0628\u062F\u064A\u0644\u0629 \u0623\u0636\u063A\u0637 (F5) </p>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  ((_f2 = (_e2 = unref(ItemDetails)[i]) == null ? void 0 : _e2.nonServiceData) == null ? void 0 : _f2.isHasAvailableAccessories) ? (openBlock(), createBlock("p", { key: 0 }, " \u0623\u0635\u0646\u0627\u0641 \u0645\u0644\u062D\u0642\u0629 \u0623\u0636\u063A\u0637 (F6) ")) : createCommentVNode("", true),
                  ((_h2 = (_g2 = unref(ItemDetails)[i]) == null ? void 0 : _g2.nonServiceData) == null ? void 0 : _h2.isHasAvailableAlternatives) ? (openBlock(), createBlock("p", { key: 1 }, " \u0623\u0635\u0646\u0627\u0641 \u0628\u062F\u064A\u0644\u0629 \u0623\u0636\u063A\u0637 (F5) ")) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
              if (_push2) {
                _push2(ssrRenderComponent(Button, {
                  onlyIcon: true,
                  color: "neutral",
                  menuLocation: "left",
                  icon: MoreDotsVertical,
                  size: "md",
                  menu: true,
                  menuItems: [
                    {
                      id: 1,
                      text: "\u0643\u0631\u062A \u0627\u0644\u0635\u0646\u0641",
                      rightIcon: Statment,
                      value: "(F1)",
                      disable: false
                    },
                    {
                      id: 2,
                      text: "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0644\u062D\u0642\u0629",
                      rightIcon: Insert,
                      value: "(F6)",
                      disabled: !((_b2 = (_a2 = unref(ItemDetails)[i]) == null ? void 0 : _a2.nonServiceData) == null ? void 0 : _b2.isHasAvailableAccessories)
                    },
                    {
                      id: 3,
                      text: "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0628\u062F\u064A\u0644\u0629",
                      rightIcon: Convert,
                      value: "(F5)",
                      disabled: !((_d2 = (_c2 = unref(ItemDetails)[i]) == null ? void 0 : _c2.nonServiceData) == null ? void 0 : _d2.isHasAvailableAlternatives)
                    },
                    {
                      id: 4,
                      text: "\u0628\u062D\u062B \u0645\u062A\u0642\u062F\u0645",
                      rightIcon: Search$1,
                      value: "(Enter)",
                      disabled: false
                    },
                    {
                      id: 5,
                      text: "\u062D\u0630\u0641",
                      rightIcon: Delete,
                      color: "danger",
                      value: "(Delete)",
                      disabled: false
                    }
                  ]
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(Button, {
                    onlyIcon: true,
                    color: "neutral",
                    menuLocation: "left",
                    icon: MoreDotsVertical,
                    size: "md",
                    menu: true,
                    menuItems: [
                      {
                        id: 1,
                        text: "\u0643\u0631\u062A \u0627\u0644\u0635\u0646\u0641",
                        rightIcon: Statment,
                        value: "(F1)",
                        disable: false
                      },
                      {
                        id: 2,
                        text: "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0644\u062D\u0642\u0629",
                        rightIcon: Insert,
                        value: "(F6)",
                        disabled: !((_f2 = (_e2 = unref(ItemDetails)[i]) == null ? void 0 : _e2.nonServiceData) == null ? void 0 : _f2.isHasAvailableAccessories)
                      },
                      {
                        id: 3,
                        text: "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0628\u062F\u064A\u0644\u0629",
                        rightIcon: Convert,
                        value: "(F5)",
                        disabled: !((_h2 = (_g2 = unref(ItemDetails)[i]) == null ? void 0 : _g2.nonServiceData) == null ? void 0 : _h2.isHasAvailableAlternatives)
                      },
                      {
                        id: 4,
                        text: "\u0628\u062D\u062B \u0645\u062A\u0642\u062F\u0645",
                        rightIcon: Search$1,
                        value: "(Enter)",
                        disabled: false
                      },
                      {
                        id: 5,
                        text: "\u062D\u0630\u0641",
                        rightIcon: Delete,
                        color: "danger",
                        value: "(Delete)",
                        disabled: false
                      }
                    ]
                  }, null, 8, ["menuItems"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(ComboBox, {
            onKeyup: ($event) => removeItem(i),
            onKeydown: [($event) => handleKeyPressF5(i), ($event) => handleKeyPressF6(i)],
            size: "sm",
            color: props.itemValidation ? "danger" : void 0,
            class: { firstItem: i === 0 },
            valueReturn: item.itemGUN,
            "onUpdate:valueReturn": ($event) => item.itemGUN = $event,
            input: item.name,
            "onUpdate:input": ($event) => item.name = $event,
            index: i,
            clearable: true,
            bigData: true,
            items: unref(Items) || [],
            displayTitle: "name",
            returnValue: "gun",
            onSetItem: getItemDetails,
            onGetMoreItems: getItems,
            placeholder: "\u0631\u0642\u0645 / \u0628\u0627\u0631\u0643\u0648\u062F \u0627\u0644\u0635\u0646\u0641",
            onGetItemBySearch: getItemsBySearch
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(ComboBox, {
            size: "sm",
            input: item.unitName,
            "onUpdate:input": ($event) => item.unitName = $event,
            valueReturn: item.unitGUN,
            "onUpdate:valueReturn": ($event) => item.unitGUN = $event,
            index: i,
            items: ((_f = (_e = unref(ItemDetails)[i]) == null ? void 0 : _e.nonServiceData) == null ? void 0 : _f.units) || [],
            selectFirstItem: true,
            displayTitle: "name",
            returnValue: "gun",
            onSetItem: handleUnit,
            placeholder: "\u0627\u0644\u0648\u062D\u062F\u0629",
            disabled: ((_g = unref(ItemDetails)[i]) == null ? void 0 : _g.type) === 2
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(ComboBox, {
            size: "sm",
            input: item.warehouseName,
            "onUpdate:input": ($event) => item.warehouseName = $event,
            valueReturn: item.warehouseGUN,
            "onUpdate:valueReturn": ($event) => item.warehouseGUN = $event,
            index: i,
            items: ((_i = (_h = unref(ItemDetails)[i]) == null ? void 0 : _h.nonServiceData) == null ? void 0 : _i.warehouses) || [],
            onSetItem: handleWarehouse,
            selectFirstItem: true,
            displayTitle: "name",
            returnValue: "gun",
            placeholder: "\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639",
            disabled: ((_j = unref(ItemDetails)[i]) == null ? void 0 : _j.type) === 2,
            leftInnerIcon: ((_m = (_l = (_k = unref(ItemDetails)[i]) == null ? void 0 : _k.nonServiceData) == null ? void 0 : _l.warehouses[getSelectedWarehouseIndex(item.warehouseGUN, i)]) == null ? void 0 : _m.isSuspend) ? Info : void 0,
            leftInnerIconToolTip: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639 \u0645\u0648\u0642\u0641",
            leftInnerIconToolTipPosition: "bottom",
            color: ((_p = (_o = (_n = unref(ItemDetails)[i]) == null ? void 0 : _n.nonServiceData) == null ? void 0 : _o.warehouses[getSelectedWarehouseIndex(item.warehouseGUN, i)]) == null ? void 0 : _p.isSuspend) ? "danger" : void 0
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            size: "sm",
            input: item.quantity,
            "onUpdate:input": ($event) => item.quantity = $event,
            onSetInput: handleQuantity,
            color: item.itemGUN ? item.quantity === 0 ? "danger" : void 0 : 1,
            index: i,
            inputToolTipText: item.itemGUN ? `\u0627\u0644\u0643\u0645\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639: ${item.warehouseQuantity ? item.warehouseQuantity : 0}` : void 0,
            inputToolTipPosition: "bottom"
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            class: "price",
            leftIcon: Sort,
            size: "sm",
            input: item.price,
            "onUpdate:input": ($event) => item.price = $event,
            onSetInput: handlePrice,
            onChangeInput: handlePriceChange,
            index: i,
            inputToolTipText: (_q = item.unitPriceList[0]) == null ? void 0 : _q.price,
            inputToolTipPosition: "bottom",
            menu: true,
            menuItems: [
              {
                id: 1,
                text: "\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639",
                value: (item == null ? void 0 : item.unitPriceList) ? (_r = item.unitPriceList[0]) == null ? void 0 : _r.price : 0
              },
              {
                id: 2,
                text: "\u0627\u062F\u0646\u0649 \u0633\u0639\u0631 \u0628\u064A\u0639",
                value: (item == null ? void 0 : item.unitPriceList) ? (_s = item.unitPriceList[1]) == null ? void 0 : _s.price : 0
              },
              {
                id: 3,
                text: "\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629",
                value: (item == null ? void 0 : item.unitPriceList) ? (_t = item.unitPriceList[2]) == null ? void 0 : _t.price : 0
              },
              {
                id: 4,
                text: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0643\u0644\u0641\u0629",
                value: (item == null ? void 0 : item.unitPriceList) ? (_u = item.unitPriceList[3]) == null ? void 0 : _u.price : 0
              }
            ]
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            size: "sm",
            type: "number",
            readOnly: true,
            input: item.total,
            "onUpdate:input": ($event) => item.total = $event
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            class: "discount",
            leftIcon: Percent,
            size: "sm",
            input: item.discount,
            "onUpdate:input": ($event) => item.discount = $event,
            onSetInput: handleDiscount,
            index: i
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            size: "sm",
            type: "number",
            readOnly: true,
            input: item.taxValue,
            "onUpdate:input": ($event) => item.taxValue = $event
          }, null, _parent));
          _push(`</td><td>`);
          _push(ssrRenderComponent(TextBox, {
            size: "sm",
            type: "number",
            readOnly: true,
            input: item.net,
            "onUpdate:input": ($event) => item.net = $event
          }, null, _parent));
          _push(`</td><td><div class="icon delete">`);
          _push(ssrRenderComponent(Delete, {
            onClick: ($event) => removeItem(i)
          }, null, _parent));
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table>`);
      if (unref(dialog)) {
        _push(ssrRenderComponent(Dialog, {
          confirmColor: "neutral",
          confirmText: "\u062A\u0623\u0643\u064A\u062F",
          show: unref(dialog),
          "onUpdate:show": ($event) => isRef(dialog) ? dialog.value = $event : null,
          onConfirm: setPrice,
          onCancle: canclePrice,
          list: unref(priceList) || void 0,
          title: unref(priceTitle),
          headerText: "\u062A\u0646\u0628\u064A\u0629"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabels/SalesInvoiceTabel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SalesInvoiceTabel = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Details",
  __ssrInlineRender: true,
  props: ["isSalesInvoice", "isReturnInvoice", "isOfferPrice", "isBooked", "Details"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.isSalesInvoice) {
        _push(`<div class="grid-3 gap-4"><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0639\u062F\u062F \u0627\u0644\u0627\u0635\u0646\u0627\u0641",
          readOnly: true
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0639\u062F\u062F \u0627\u0644\u0643\u0645\u064A\u0627\u062A",
          readOnly: true
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0627\u0644\u0648\u0632\u0646",
          readOnly: true
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
          readOnly: true,
          input: __props.Details.deliveryDate,
          "onUpdate:input": ($event) => __props.Details.deliveryDate = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0627\u0644\u0648\u0642\u062A",
          readOnly: true,
          input: __props.Details.time,
          "onUpdate:input": ($event) => __props.Details.time = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0627\u0644\u064A\u0648\u0645",
          readOnly: true,
          input: __props.Details.today,
          "onUpdate:input": ($event) => __props.Details.today = $event
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isReturnInvoice || __props.isOfferPrice) {
        _push(`<div class="grid-3 gap-4"><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0639\u062F\u062F \u0627\u0644\u0627\u0635\u0646\u0627\u0641",
          readOnly: true,
          input: __props.Details.itemsCount,
          "onUpdate:input": ($event) => __props.Details.itemsCount = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0639\u062F\u062F \u0627\u0644\u0643\u0645\u064A\u0627\u062A",
          readOnly: true,
          input: __props.Details.quantityCount,
          "onUpdate:input": ($event) => __props.Details.quantityCount = $event
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0627\u0644\u0648\u0632\u0646",
          readOnly: true,
          input: __props.Details.weight,
          "onUpdate:input": ($event) => __props.Details.weight = $event
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isReturnInvoice) {
        _push(`<div class="col-12 mt-8">`);
        _push(ssrRenderComponent(TextBox, {
          label: "\u0633\u0628\u0628 \u0627\u0644\u0627\u0631\u062A\u062C\u0627\u0639",
          readOnly: true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Details.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Details = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Profit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-3 gap-4" }, _attrs))}><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u062A\u0643\u0644\u0641\u0629",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0631\u0628\u062D",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0631\u0628\u062D",
        readOnly: true
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Profit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Profit = _sfc_main$2;
const _sfc_main$1 = {
  __name: "PayWays",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ id: "pay-way-table" }, _attrs))}><tbody><tr><td>1</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(TextBox, { size: "sm" }, null, _parent));
      _push(`</td><td><div class="icon delete">`);
      _push(ssrRenderComponent(Delete, null, null, _parent));
      _push(`</div></td></tr><tr><td>1</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(TextBox, { size: "sm" }, null, _parent));
      _push(`</td><td><div class="icon delete">`);
      _push(ssrRenderComponent(Delete, null, null, _parent));
      _push(`</div></td></tr><tr><td>1</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(ComboBox, { size: "sm" }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(TextBox, { size: "sm" }, null, _parent));
      _push(`</td><td><div class="icon delete">`);
      _push(ssrRenderComponent(Delete, null, null, _parent));
      _push(`</div></td></tr></tbody></table>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/PayWays.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PayWays = _sfc_main$1;
const _sfc_main = {
  __name: "Invoice",
  __ssrInlineRender: true,
  props: [
    "SalesInvoice",
    "ReturnInvoice",
    "OfferPrice",
    "Booked"
  ],
  emits: ["recalculatePrice"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const route = useRoute();
    const { errorHandle, warningHandle } = useNotify();
    const customerDialog = ref(false);
    const chooseenCustomerDialog = ref(false);
    const priceDialog = ref(false);
    const priceTypeDialog = ref(false);
    const notForSale = ref(false);
    const salemanField = ref("");
    const recalculate = ref(false);
    const defaultPrice = ref(null);
    const showModel = ref(false);
    const isCustomerPriceCheck = ref(false);
    const isCustomerDiscountCheck = ref(false);
    const taxAppliedDialog = ref(false);
    const alternativeDialog = ref(false);
    const validation = ref({
      customer: false,
      item: false,
      quantity: false,
      warehouse: false
    });
    const salesStore = useSalesStore();
    storeToRefs(salesStore);
    const commonStore = useCommonStore();
    const {
      GeneralFields,
      SelectedAlternative,
      ItemId,
      NewItems,
      ItemDetails,
      GetBranchDataForOfferPrice,
      Customer,
      Customers,
      CustomerDiscount,
      SalesMen,
      Items,
      Branches,
      PriceType,
      TaxApplied
    } = storeToRefs(commonStore);
    const userStore = useUserStore();
    [__temp, __restore] = withAsyncContext(() => userStore.CheckPermissions(route.meta.moduleId)), await __temp, __restore();
    const { Permissions } = storeToRefs(userStore);
    const OfferPriceStore = useOfferPriceStore();
    let customerDiscountTitle = "";
    const { SalesInvoice, ReturnInvoice, OfferPrice, Booked } = __props;
    ref({
      branchId: "",
      isCash: true
    });
    const customerTabSelected = ref("CustomerDetails");
    const customerTabs = shallowRef({
      CustomerDetails,
      CustomerAddresses
    });
    const detailsTabSelected = ref("CostCenter");
    const detailsTabs = shallowRef({
      CostCenter,
      Saleman,
      Notes,
      BuyORBook
    });
    const footerTabSelected = ref("Details");
    const footerTabs = shallowRef({
      Details,
      Profit,
      PayWays
    });
    const isNew = ref(true);
    async function AddNewInvoice() {
      var _a, _b;
      await userStore.CheckPermissions(route.meta.moduleId);
      if ((_a = Permissions.value) == null ? void 0 : _a.canAccess) {
        if ((_b = Permissions.value) == null ? void 0 : _b.canAdd) {
          isNew.value = false;
          commonStore.SetDefaultFields();
          await commonStore.GetBranches();
          GeneralFields.value.branchGUN = Branches.value[0].gun;
          if (OfferPrice) {
            commonStore.GetBranchDataForOfferPrice(
              GeneralFields.value.branchGUN,
              GeneralFields.value.isCash
            );
          }
          (void 0).querySelector(".firstItem input").focus();
        } else {
          errorHandle("\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643");
        }
      }
    }
    function cancel() {
      commonStore.ClearEverythings();
      footerDetails.value = {
        itemsCount: 0,
        quantityCount: 0,
        weight: 0,
        deliveryDate: "",
        time: "",
        today: ""
      };
      footerFields.value = {
        total: 0,
        totalBeforeTax: 0,
        discount: 0,
        extarDiscount: 0,
        taxValue: 0,
        invoiceValue: 0
      };
      isNew.value = true;
    }
    const salemanIndex = ref(null);
    async function checkCustomerHasDiscount(customerID, isInoviceTypeChange) {
      let selectedCustomerIndex = await Customers.value.findIndex((customer) => {
        return customer.gun === customerID;
      });
      if (selectedCustomerIndex >= 0) {
        if (NewItems.value[0].itemGUN !== "") {
          const selectedCustomer = { ...Customers.value[selectedCustomerIndex] };
          Customer.value = selectedCustomer;
          if (isInoviceTypeChange) {
            chooseenCustomerDialog.value = true;
            customerDiscountTitle = `\u064A\u0648\u062C\u062F \u062D\u0633\u0645 \u0644\u062F\u0649 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 ${GeneralFields.value.isCash ? "\u0646\u0642\u062F" : "\u0627\u062C\u0644"} \u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u062D\u0633\u0645 \u0627\u0644\u0630\u064A \u0644\u062F\u0649 \u0627\u0644\u0639\u0645\u064A\u0644`;
          }
          if (selectedCustomer.salesmanGUN) {
            let saleman = SalesMen.value.findIndex((saleman2) => {
              return saleman2.gun === selectedCustomer.salesmanGUN;
            });
            if (saleman >= 0) {
              salemanIndex.value = saleman;
            }
          }
          if (NewItems.value[0].itemGUN) {
            if ((selectedCustomer.cashInvoiceDiscountPercentage || selectedCustomer.creditInvoiceDiscountPercentage) && selectedCustomer.defaultPrice) {
              showModel.value = true;
              defaultPrice.value = selectedCustomer.defaultPrice;
            } else {
              if ((selectedCustomer.cashInvoiceDiscountPercentage || selectedCustomer.creditInvoiceDiscountPercentage) && NewItems.value[0].itemGUN) {
                chooseenCustomerDialog.value = true;
                customerDiscountTitle = "\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u062D\u0633\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0639\u0645\u064A\u0644";
              }
              if (selectedCustomer.defaultPrice && NewItems.value[0].itemGUN) {
                if (selectedCustomer.defaultPrice !== GeneralFields.value.priceType) {
                  priceTypeDialog.value = true;
                  defaultPrice.value = selectedCustomer.defaultPrice;
                }
              }
            }
          }
        }
      }
    }
    function setCustomerDiscount() {
      if (GeneralFields.value.isCash) {
        Customer.value.cashInvoiceDiscountPercentage ? CustomerDiscount.value = Customer.value.cashInvoiceDiscountPercentage : CustomerDiscount.value = 0;
        console.log(Customer.value.cashInvoiceDiscountPercentage);
        handleDiscount(`${CustomerDiscount.value}%`);
      } else {
        Customer.value.creditInvoiceDiscountPercentage ? CustomerDiscount.value = Customer.value.creditInvoiceDiscountPercentage : CustomerDiscount.value = 0;
        handleDiscount(`${CustomerDiscount.value}%`);
      }
      customerDialog.value = false;
      chooseenCustomerDialog.value = false;
    }
    async function checkInvoiceChanges(isCash) {
      let flag = false;
      if (OfferPrice) {
        await commonStore.GetBranchDataForOfferPrice(
          GeneralFields.value.branchGUN,
          GeneralFields.value.isCash
        );
      }
      checkCustomerHasDiscount(Customer.value.gun, true);
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        const element = NewItems.value[index];
        let item = Items.value.find((item2) => {
          return item2.gun === element.itemGUN;
        });
        if (!item) {
          flag = true;
          NewItems.value[index].forSale = false;
        }
      }
      if (flag) {
        notForSale.value = true;
      } else {
        notForSale.value = true;
        for (let index = 0; index < NewItems.value.length - 1; index++) {
          const element = NewItems.value[index];
          element.forSale = null;
        }
        notForSale.value = false;
      }
    }
    function handleNoneSaleItems() {
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        const element = NewItems.value[index];
        if (element.forSale === false) {
          NewItems.value.splice(index, 1);
          ItemDetails.value.splice(index, 1);
          index--;
        }
      }
      notForSale.value = false;
    }
    async function handleBranch() {
      var _a, _b, _c;
      if (isNew === false) {
        await checkInvoiceChanges();
        if ((_a = Customer.value) == null ? void 0 : _a.gun) {
          let customer = (_b = Customers.value) == null ? void 0 : _b.find((item) => {
            return item.gun === Customer.value.gun;
          });
          if (!customer) {
            commonStore.ClearCustomer();
          }
        }
        let saleMan = (_c = SalesMen.value) == null ? void 0 : _c.find((item) => {
          return item.gun === GeneralFields.value.salesmanGUN;
        });
        if (!saleMan) {
          GeneralFields.value.gun;
          salemanField.value = "";
        }
        if (NewItems.value[0].itemGUN !== "") {
          priceDialog.value = true;
        }
      }
    }
    async function handleTaxApplied(isTaxApplied, index) {
      let itemsIds = [];
      let deplicatedItems = [];
      if (isTaxApplied) {
        if (NewItems.value.length > 1) {
          for (let index2 = 0; index2 < NewItems.value.length - 1; index2++) {
            const element = NewItems.value[index2];
            if (!itemsIds.includes(element.itemGUN)) {
              itemsIds.push(element.itemGUN);
            } else {
              deplicatedItems.push({ itemId: element.itemGUN, index: index2 });
            }
          }
          await commonStore.GetItemsTaxes(itemsIds);
          if (deplicatedItems.length > 0) {
            itemsIds.forEach(async (itemId) => {
              let selectedIndex = NewItems.value.findIndex((item) => {
                return item.itemGUN === itemId && item.taxValue;
              });
              if (selectedIndex >= 0) {
                for (let index2 = 0; index2 < NewItems.value.length - 1; index2++) {
                  if (NewItems.value[index2].itemGUN === itemId) {
                    NewItems.value[index2].taxValue = NewItems.value[selectedIndex].taxValue;
                  }
                }
              }
            });
          }
        }
      } else {
        for (let index2 = 0; index2 < NewItems.value.length - 1; index2++) {
          const element = NewItems.value[index2];
          element.taxValue = null;
          element.net = element.total - element.discount;
        }
      }
    }
    watch(NewItems.value, () => {
      calculateInvoiceFooter();
    });
    const footerDetails = ref({
      itemsCount: 0,
      quantityCount: 0,
      weight: 0,
      deliveryDate: "",
      time: "",
      today: ""
    });
    const footerFields = ref({
      total: 0,
      totalBeforeTax: 0,
      discount: 0,
      extarDiscount: 0,
      taxValue: 0,
      invoiceValue: 0
    });
    function calculateInvoiceFooter() {
      let quantityCount = 0;
      let net = 0;
      let total = 0;
      let discount = 0;
      let taxValue = 0;
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        const element = NewItems.value[index];
        quantityCount += parseInt(element.quantity);
        total += element.total;
        taxValue += element.taxValue;
        discount += parseFloat(element.discount);
        net += element.net;
      }
      footerDetails.value.itemsCount = NewItems.value.length - 1;
      footerDetails.value.quantityCount = parseInt(quantityCount);
      footerFields.value.total = total;
      footerFields.value.totalBeforeTax = total - discount;
      footerFields.value.taxValue = taxValue;
      footerFields.value.discount = discount;
      footerFields.value.invoiceValue = net;
    }
    function handleDiscount(discount) {
      discount = discount ? discount : footerDetails.value.discount;
      if (typeof discount === "string" && discount) {
        if (discount.includes("%")) {
          discount = parseInt(discount.split("%")[0]);
          discount = discount / 100 * footerFields.value.total;
          footerFields.value.discount = discount;
          setDiscountToAllItems(footerFields.value.discount);
        } else {
          setDiscountToAllItems(footerFields.value.discount);
        }
      } else {
        if (discount > 0) {
          setDiscountToAllItems(discount);
        }
        setDiscountToAllItems(0);
      }
    }
    function setDiscountToAllItems(discount) {
      GeneralFields.value.totalDiscount = discount;
      discount = parseInt(discount);
      if (discount > 0) {
        let discountDivided = discount / (NewItems.value.length - 1);
        for (let index = 0; index < NewItems.value.length - 1; index++) {
          const element = NewItems.value[index];
          element.discount = useHandleDiscount(
            discountDivided,
            element.quantity,
            element.total,
            element.price
          );
          element.net = element.total - element.discount + element.taxValue;
        }
      }
    }
    function setPriceOnItems() {
    }
    function handlePriceType() {
      if (!isCustomerPriceCheck) {
        if (NewItems.value[0].itemGUN) {
          if (Customer.value.defaultPrice !== GeneralFields.value.priceType) {
            priceTypeDialog.value = true;
          } else {
            priceTypeDialog.value = true;
          }
        }
      }
    }
    function setPriceType() {
      var _a;
      let type = defaultPrice.value ? defaultPrice.value : GeneralFields.value.priceType;
      GeneralFields.value.priceType = type;
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        NewItems.value[index].price = (_a = NewItems.value[index].unitPriceList[type - 1]) == null ? void 0 : _a.price;
      }
      if (!isCustomerPriceCheck) {
        handleDiscount();
      }
      recalculate.value = true;
      priceTypeDialog.value = false;
      recalculate.value = true;
      defaultPrice.value = null;
    }
    function setCustomerCheckValue() {
      if (isCustomerDiscountCheck.value && isCustomerPriceCheck.value) {
        setPriceType();
        let delay = setTimeout(() => {
          setCustomerDiscount();
        }, 1e3);
        clearTimeout(delay);
      } else if (isCustomerDiscountCheck.value) {
        setCustomerDiscount();
      } else if (isCustomerPriceCheck.value) {
        setPriceType();
      }
      showModel.value = false;
    }
    async function saveInvoice() {
      var _a;
      await userStore.CheckPermissions(route.meta.moduleId);
      if ((_a = Permissions.value) == null ? void 0 : _a.canAdd) {
        await checkBeforeSave();
        setTimeout(async () => {
          if (validation.value.customer || validation.value.item || validation.value.quantity || validation.value.warehouse) {
            return;
          } else {
            await OfferPriceStore.SaveOfferPriceInvoice();
          }
        }, 500);
      } else {
        errorHandle("\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643");
        isNew.value = true;
        commonStore.ClearEverythings();
      }
    }
    function checkBeforeSave() {
      var _a, _b;
      if (NewItems.value.length === 1 || NewItems.value.length === 0) {
        validation.value.item = true;
      }
      console.log(GeneralFields.value.isCash);
      if (GeneralFields.value.isCash === false) {
        if (!Customer.value.gun || Customer.value.isSuspend) {
          validation.value.customer = true;
        }
      }
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        const element = NewItems.value[index];
        if (element.quantity === 0 || element.quantity === "") {
          validation.value.quantity = true;
        }
        if (element.warehouseGUN) {
          let warehouse = (_b = (_a = ItemDetails.value[index]) == null ? void 0 : _a.nonServiceData) == null ? void 0 : _b.warehouses.find(
            (item) => {
              return item.gun === element.warehouseGUN;
            }
          );
          if (warehouse) {
            if (warehouse.isSuspend) {
              validation.value.warehouse = true;
            } else {
              validation.value.warehouse = false;
            }
          }
        }
      }
    }
    async function insertAlternative() {
      await commonStore.GetInsertAlternativesItems(
        ItemId.value,
        SelectedAlternative.value,
        route.meta.DocOrder
      );
      alternativeDialog.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="right-side-tree col-12 col-md-2">`);
      _push(ssrRenderComponent(InvoicesTree, null, null, _parent));
      _push(`</div><div class="content border-right col-12 col-md-10"><section class="top-buttons row"><div class="d-flex align-center gap-6">`);
      if (unref(isNew)) {
        _push(ssrRenderComponent(Button, {
          color: "primary",
          text: "\u062C\u062F\u064A\u062F",
          rightIcon: Add,
          onClick: ($event) => AddNewInvoice()
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isNew)) {
        _push(ssrRenderComponent(Button, {
          color: "netural",
          text: "\u0625\u0644\u063A\u0627\u0621",
          rightIcon: Close,
          onClick: cancel
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Button, {
        color: "warning",
        onlyIcon: true,
        icon: Edit
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "danger",
        onlyIcon: true,
        icon: Delete
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "neutral",
        onlyIcon: true,
        icon: Refresh
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "neutral",
        onlyIcon: true,
        icon: MoreDotsVertical
      }, null, _parent));
      if (!__props.OfferPrice) {
        _push(ssrRenderComponent(Post, {
          text: "2233 \u0645\u0631\u062D\u0644 /",
          menu: true,
          menuItems: ["\u0625\u062F\u0631\u0627\u062C \u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u0628\u064A\u0639\u0627\u062A", "\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.Booked) {
        _push(ssrRenderComponent(Post, {
          text: "\u0645\u0646\u062A\u0647\u064A",
          noIcon: true,
          color: "danger"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="d-flex align-center gap-6">`);
      if (!__props.SalesInvoice) {
        _push(`<div class="avatar-group">`);
        _push(ssrRenderComponent(Avatar, {
          icon: User,
          borderColor: "primary",
          size: "md"
        }, null, _parent));
        _push(ssrRenderComponent(Avatar, {
          icon: User,
          borderColor: "warning",
          size: "md"
        }, null, _parent));
        _push(ssrRenderComponent(Avatar, {
          text: "+10",
          borderColor: "warning",
          size: "md"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Button, {
        color: "neutral",
        text: "\u0628\u0627\u0631\u0643\u0648\u062F",
        rightIcon: Barcode
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "neutral",
        text: "\u0637\u0628\u0627\u0639\u0629",
        menuLocation: "right",
        rightIcon: Printer,
        leftIcon: ArrowDown,
        menu: true,
        menuItems: [
          { text: "\u0637\u0628\u0627\u0639\u0629 \u0645\u0628\u0627\u0634\u0631\u0629" },
          { text: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0642\u0628\u0644 \u0627\u0644\u0637\u0628\u0627\u0639\u0629" },
          { text: "\u0637\u0628\u0627\u0639\u0629 \u0643\u0627\u0634\u064A\u0631" }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "primary",
        text: "\u062D\u0641\u0638",
        rightIcon: Save,
        onClick: saveInvoice
      }, null, _parent));
      _push(`</div></section><section><div class="row"><div class="sheet flex-column gap-8 col-12 col-md-7 pl-6 pb-4"><div class="grid-5 gap-4"><div>`);
      _push(ssrRenderComponent(Switch, {
        label: "\u0646\u0648\u0639 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
        trueText: "\u0646\u0642\u062F\u064A",
        falseText: "\u0627\u064E\u062C\u0644",
        input: unref(GeneralFields).isCash,
        "onUpdate:input": ($event) => unref(GeneralFields).isCash = $event,
        onChangeSwitch: checkInvoiceChanges
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
        input: unref(GeneralFields).no,
        "onUpdate:input": ($event) => unref(GeneralFields).no = $event,
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(ComboBox, {
        label: "\u0627\u0644\u0641\u0631\u0639",
        items: unref(Branches) || [],
        displayTitle: "name2",
        returnValue: "gun",
        isPage: false,
        onSetItem: handleBranch,
        valueReturn: unref(GeneralFields).branchGUN,
        "onUpdate:valueReturn": ($event) => unref(GeneralFields).branchGUN = $event,
        selectFirstItem: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        leftIcon: Calendar
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0648\u0642\u062A",
        leftIcon: Time
      }, null, _parent));
      _push(`</div></div>`);
      if (__props.OfferPrice) {
        _push(`<div class="offer-price-details"><div class="grid-3 gap-4"><div>`);
        _push(ssrRenderComponent(ComboBox, {
          label: "\u0646\u0648\u0639 \u0627\u0644\u0633\u0639\u0631",
          displayTitle: "name",
          returnValue: "id",
          selectItem: unref(PriceType) ? unref(PriceType)[unref(GeneralFields).priceType - 1] : null,
          noFilter: true,
          items: unref(PriceType),
          valueReturn: unref(GeneralFields).priceType,
          "onUpdate:valueReturn": ($event) => unref(GeneralFields).priceType = $event,
          selectFirstItem: true,
          onSetItem: handlePriceType
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(ComboBox, {
          label: "\u0627\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u0636\u0631\u064A\u0628\u0629",
          displayTitle: "name",
          returnValue: "id",
          noFilter: true,
          items: unref(TaxApplied),
          valueReturn: unref(GeneralFields).isTaxApplied,
          "onUpdate:valueReturn": ($event) => unref(GeneralFields).isTaxApplied = $event,
          selectFirstItem: true,
          onSetItem: handleTaxApplied
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(ComboBox, {
          label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062F\u0648\u0628",
          items: unref(SalesMen) || [],
          displayTitle: "name",
          returnValue: "gun",
          clearable: true,
          selectItem: unref(SalesMen) ? unref(SalesMen)[unref(salemanIndex)] : null,
          input: unref(salemanField),
          "onUpdate:input": ($event) => isRef(salemanField) ? salemanField.value = $event : null,
          valueReturn: unref(GeneralFields).salesmanGUN,
          "onUpdate:valueReturn": ($event) => unref(GeneralFields).salesmanGUN = $event
        }, null, _parent));
        _push(`</div></div><div class="mt-8">`);
        _push(ssrRenderComponent(TextArea, {
          label: "\u0645\u0644\u0627\u062D\u0638\u0629",
          text: "",
          input: unref(GeneralFields).note,
          "onUpdate:input": ($event) => unref(GeneralFields).note = $event
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.SalesInvoice || __props.ReturnInvoice) {
        _push(`<div class="flex-column gap-8"><div class="row align-center tabs-container"><div class="${ssrRenderClass([__props.SalesInvoice ? "col-3" : "col-4"])}">`);
        _push(ssrRenderComponent(Tab, {
          text: "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u0643\u0644\u0641\u0629",
          color: unref(detailsTabSelected) === "CostCenter" ? "primary" : "",
          onClick: ($event) => detailsTabSelected.value = "CostCenter"
        }, null, _parent));
        _push(`</div><div class="${ssrRenderClass([__props.SalesInvoice ? "col-3" : "col-4"])}">`);
        _push(ssrRenderComponent(Tab, {
          text: "\u0627\u0644\u0645\u0646\u062F\u0648\u0628",
          onClick: ($event) => detailsTabSelected.value = "Saleman",
          color: unref(detailsTabSelected) === "Saleman" ? "primary" : ""
        }, null, _parent));
        _push(`</div><div class="${ssrRenderClass([__props.SalesInvoice ? "col-3" : "col-4"])}">`);
        _push(ssrRenderComponent(Tab, {
          text: "\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
          onClick: ($event) => detailsTabSelected.value = "Notes",
          color: unref(detailsTabSelected) === "Notes" ? "primary" : ""
        }, null, _parent));
        _push(`</div>`);
        if (__props.SalesInvoice) {
          _push(`<div class="${ssrRenderClass([__props.SalesInvoice ? "col-3" : "col-4"])}">`);
          _push(ssrRenderComponent(Tab, {
            text: "\u0634\u0631\u0627\u0621 / \u062D\u062C\u0632",
            onClick: ($event) => detailsTabSelected.value = "BuyORBook",
            color: unref(detailsTabSelected) === "BuyORBook" ? "primary" : ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(detailsTabs)[unref(detailsTabSelected)]), null, null), _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sheet col-12 col-md-5 pr-6 pb-4"><div class="flex-column gap-8"><div class="row align-center tabs-container two-tabs"><div class="col-6">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644",
        color: unref(customerTabSelected) === "CustomerDetails" ? "primary" : "",
        onClick: ($event) => customerTabSelected.value = "CustomerDetails"
      }, null, _parent));
      _push(`</div><div class="col-6">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0639\u0645\u064A\u0644",
        onClick: ($event) => customerTabSelected.value = "CustomerAddresses",
        color: unref(customerTabSelected) === "CustomerAddresses" ? "primary" : ""
      }, null, _parent));
      _push(`</div></div><div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(customerTabs)[unref(customerTabSelected)]), {
        onCustomerHasDiscount: checkCustomerHasDiscount,
        customerValidation: unref(validation).customer
      }, null), _parent);
      _push(`</div></div></div></div></section><section class="table-container-invoice">`);
      _push(ssrRenderComponent(SalesInvoiceTabel, {
        itemValidation: unref(validation).item,
        recalculate: unref(recalculate),
        onShowAlternativeItems: () => alternativeDialog.value = true,
        onRestRecalculate: () => recalculate.value = false,
        onRecalculateTotalDiscount: setDiscountToAllItems,
        onClearValidation: () => unref(validation).item = false
      }, null, _parent));
      _push(`</section><section class="invoice-footer"><div class="row"><div class="sheet col-12 col-md-5 pb-4 pl-8 footer-details"><div class="flex-column gap-8"><div class="row align-center tabs-container two-tabs"><div class="${ssrRenderClass([
        { "col-4": __props.SalesInvoice },
        { "col-6": __props.ReturnInvoice },
        { "col-12": __props.OfferPrice }
      ])}">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
        color: unref(footerTabSelected) === "Details" ? "primary" : "",
        onClick: ($event) => footerTabSelected.value = "Details"
      }, null, _parent));
      _push(`</div>`);
      if (!__props.OfferPrice && !__props.ReturnInvoice) {
        _push(`<div class="${ssrRenderClass([
          { "col-4": __props.SalesInvoice },
          { "col-6": __props.ReturnInvoice },
          { "col-12": __props.OfferPrice }
        ])}">`);
        _push(ssrRenderComponent(Tab, {
          text: "\u0627\u0644\u0627\u0631\u0628\u0627\u062D",
          onClick: ($event) => footerTabSelected.value = "Profit",
          color: unref(footerTabSelected) === "Profit" ? "primary" : ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.SalesInvoice || __props.ReturnInvoice) {
        _push(`<div class="${ssrRenderClass([
          { "col-4": __props.SalesInvoice },
          { "col-6": __props.ReturnInvoice },
          { "col-12": __props.OfferPrice }
        ])}">`);
        _push(ssrRenderComponent(Tab, {
          text: "\u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639",
          onClick: ($event) => footerTabSelected.value = "PayWays",
          color: unref(footerTabSelected) === "PayWays" ? "primary" : ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(footerTabs)[unref(footerTabSelected)]), {
        isSalesInvoice: __props.SalesInvoice,
        isReturnInvoice: __props.ReturnInvoice,
        isOfferPrice: __props.OfferPrice,
        Details: unref(footerDetails)
      }, null), _parent);
      _push(`</div></div></div><div class="col-12 col-md-7 pl-8 pr-8 footer-leftside"><div class="grid-4 gap-8"><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0645\u062F\u0641\u0648\u0639",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A",
        readOnly: true,
        input: unref(footerFields).total,
        "onUpdate:input": ($event) => unref(footerFields).total = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u0636\u0631\u064A\u0628\u0629",
        readOnly: true,
        input: unref(footerFields).totalBeforeTax,
        "onUpdate:input": ($event) => unref(footerFields).totalBeforeTax = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u062D\u0633\u0645 \u0625\u0636\u0627\u0641\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u0645\u062A\u0628\u0642\u064A",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0627\u0644\u062D\u0633\u0645",
        input: unref(footerFields).discount,
        "onUpdate:input": ($event) => unref(footerFields).discount = $event,
        onSetInput: handleDiscount
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0636\u0631\u064A\u0628\u0629 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629",
        readOnly: true,
        input: unref(footerFields).taxValue,
        "onUpdate:input": ($event) => unref(footerFields).taxValue = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
        background: "invoice-total",
        readOnly: true,
        input: unref(footerFields).invoiceValue,
        "onUpdate:input": ($event) => unref(footerFields).invoiceValue = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div></div></section></div>`);
      if (unref(showModel)) {
        _push(ssrRenderComponent(Model, {
          show: unref(showModel),
          "onUpdate:show": ($event) => isRef(showModel) ? showModel.value = $event : null,
          headerText: "\u062A\u0646\u0628\u064A\u0629",
          title: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0639\u062A\u0645\u0627\u062F",
          isSlot: true,
          "cancel-text": "\u0644\u0627",
          confirmColor: "neutral",
          onConfirm: setCustomerCheckValue
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="row flex-column gap-6"${_scopeId}>`);
              _push2(ssrRenderComponent(CheckBox, {
                label: "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0639\u0645\u064A\u0644",
                color: "primary",
                input: unref(isCustomerPriceCheck),
                "onUpdate:input": ($event) => isRef(isCustomerPriceCheck) ? isCustomerPriceCheck.value = $event : null
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(CheckBox, {
                label: "\u0627\u0644\u062D\u0633\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0639\u0645\u064A\u0644",
                color: "primary",
                input: unref(isCustomerDiscountCheck),
                "onUpdate:input": ($event) => isRef(isCustomerDiscountCheck) ? isCustomerDiscountCheck.value = $event : null
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "row flex-column gap-6" }, [
                  createVNode(CheckBox, {
                    label: "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0639\u0645\u064A\u0644",
                    color: "primary",
                    input: unref(isCustomerPriceCheck),
                    "onUpdate:input": ($event) => isRef(isCustomerPriceCheck) ? isCustomerPriceCheck.value = $event : null
                  }, null, 8, ["input", "onUpdate:input"]),
                  createVNode(CheckBox, {
                    label: "\u0627\u0644\u062D\u0633\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0639\u0645\u064A\u0644",
                    color: "primary",
                    input: unref(isCustomerDiscountCheck),
                    "onUpdate:input": ($event) => isRef(isCustomerDiscountCheck) ? isCustomerDiscountCheck.value = $event : null
                  }, null, 8, ["input", "onUpdate:input"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chooseenCustomerDialog)) {
        _push(ssrRenderComponent(Dialog, {
          confirmColor: "neutral",
          cancelText: "\u0644\u0627",
          show: unref(chooseenCustomerDialog),
          "onUpdate:show": ($event) => isRef(chooseenCustomerDialog) ? chooseenCustomerDialog.value = $event : null,
          onConfirm: setCustomerDiscount,
          title: unref(customerDiscountTitle),
          headerText: "\u062A\u0646\u0628\u064A\u0629"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(taxAppliedDialog)) {
        _push(ssrRenderComponent(Dialog, {
          confirmColor: "neutral",
          cancelText: "\u0644\u0627",
          show: unref(taxAppliedDialog),
          "onUpdate:show": ($event) => isRef(taxAppliedDialog) ? taxAppliedDialog.value = $event : null,
          onConfirm: _ctx.setTaxApplied,
          title: " \u0647\u0644 \u062A\u0631\u064A\u062F \u062A\u063A\u064A\u0631 \u0627\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0635\u0646\u0627\u0641 \u0628\u0627\u0633\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u061F",
          headerText: "\u062A\u0646\u0628\u064A\u0629"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(priceDialog)) {
        _push(ssrRenderComponent(Dialog, {
          confirmColor: "neutral",
          cancelText: "\u0644\u0627",
          show: unref(priceDialog),
          "onUpdate:show": ($event) => isRef(priceDialog) ? priceDialog.value = $event : null,
          onConfirm: setPriceOnItems,
          title: " \u0647\u0644 \u062A\u0631\u064A\u062F \u062A\u063A\u064A\u0631 \u0627\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0635\u0646\u0627\u0641 \u0628\u0627\u0633\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u061F",
          headerText: "\u062A\u0646\u0628\u064A\u0629"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(priceTypeDialog)) {
        _push(ssrRenderComponent(Dialog, {
          confirmColor: "neutral",
          cancelText: "\u0644\u0627",
          show: unref(priceTypeDialog),
          "onUpdate:show": ($event) => isRef(priceTypeDialog) ? priceTypeDialog.value = $event : null,
          onConfirm: setPriceType,
          title: "\u0647\u0644 \u062A\u0631\u064A\u062F \u062A\u063A\u064A\u0631  \u0627\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u062F\u0631\u062C\u0629 \u0628\u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u061F",
          headerText: "\u062A\u0646\u0628\u064A\u0629"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(notForSale)) {
        _push(ssrRenderComponent(Snackbar, {
          stopHide: true,
          color: "danger",
          multiline: true,
          text: "\u0627\u0635\u0646\u0627\u0641 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0648 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0645\u062D\u062F\u062F",
          leftActionText: "\u062D\u0630\u0641 \u0627\u0644\u0643\u0644",
          noIcon: true,
          onClickLeftAction: handleNoneSaleItems
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(alternativeDialog)) {
        _push(ssrRenderComponent(Model, {
          class: "fixed",
          show: unref(alternativeDialog),
          "onUpdate:show": ($event) => isRef(alternativeDialog) ? alternativeDialog.value = $event : null,
          headerText: "\u0627\u0644\u0627\u0635\u0646\u0627\u0641 \u0627\u0644\u0628\u062F\u064A\u0644\u0629",
          headerIcon: Info,
          iconToolTip: "\u0647\u0630\u0647 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0641\u0631\u0639 \u0648\u0627\u0644\u062A\u064A \u062A\u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u0639 \u0628\u0646\u0641\u0633 \u0646\u0648\u0639 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u0648\u063A\u064A\u0631 \u0645\u0648\u0642\u0641\u0629",
          iconToolTipPosition: "bottom-left",
          confirmColor: "primary",
          confirmText: "\u0625\u062F\u0631\u0627\u062C",
          onConfirm: insertAlternative
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(AlternativeItems, { onInsertAlternative: insertAlternative }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(AlternativeItems, { onInsertAlternative: insertAlternative })
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Invoice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Invoice = _sfc_main;

export { Invoice as I, useSalesStore as u };
//# sourceMappingURL=Invoice-RXh0ad4X.mjs.map
