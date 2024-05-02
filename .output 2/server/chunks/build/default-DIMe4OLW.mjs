import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { u as useUserStore, s as storeToRefs, _ as _export_sfc, T as ToolTip, a as __nuxt_component_0$1, j as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, ref, mergeProps, unref, isRef, mergeModels, useModel, watch, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { A as Avatar } from './Avatar-CNjjQUbr.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-virtual-scroller';

const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M6.51844 1.33331H1.33325V6.5185H6.51844V1.33331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6666 1.33331H9.48145V6.5185H14.6666V1.33331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6666 9.48145H9.48145V14.6666H14.6666V9.48145Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.51844 9.48145H1.33325V14.6666H6.51844V9.48145Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Dashboard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$c = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17 14.72H1M2.28 14.72V8.96003H6.76M6.76 14.72V5.12003H11.24M11.24 1.28003H15.72V14.72H11.24V1.28003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Sales.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Sales = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "20",
    viewBox: "0 0 16 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M14 4H3" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M14 10H2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M14 16H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Bars.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Bars = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10 2.7085C10.1658 2.7085 10.3247 2.77434 10.4419 2.89155C10.5592 3.00876 10.625 3.16774 10.625 3.3335C10.625 3.49926 10.5592 3.65823 10.4419 3.77544C10.3247 3.89265 10.1658 3.9585 10 3.9585C8.39765 3.9585 6.86093 4.59503 5.7279 5.72806C4.59486 6.86109 3.95833 8.39781 3.95833 10.0002C3.95833 11.6025 4.59486 13.1392 5.7279 14.2723C6.86093 15.4053 8.39765 16.0418 10 16.0418C10.1658 16.0418 10.3247 16.1077 10.4419 16.2249C10.5592 16.3421 10.625 16.5011 10.625 16.6668C10.625 16.8326 10.5592 16.9916 10.4419 17.1088C10.3247 17.226 10.1658 17.2918 10 17.2918C8.06613 17.2918 6.21146 16.5236 4.84401 15.1562C3.47656 13.7887 2.70833 11.934 2.70833 10.0002C2.70833 8.06629 3.47656 6.21163 4.84401 4.84418C6.21146 3.47672 8.06613 2.7085 10 2.7085Z" fill="currentColor"></path><path d="M13.725 7.9417C13.6146 7.82322 13.5545 7.66652 13.5574 7.5046C13.5602 7.34268 13.6258 7.18819 13.7403 7.07368C13.8548 6.95917 14.0093 6.89358 14.1712 6.89072C14.3331 6.88787 14.4899 6.94797 14.6083 7.05837L17.1083 9.55837C17.2254 9.67556 17.2911 9.83441 17.2911 10C17.2911 10.1657 17.2254 10.3245 17.1083 10.4417L14.6083 12.9417C14.5511 13.0031 14.4821 13.0524 14.4054 13.0865C14.3288 13.1207 14.246 13.139 14.1621 13.1405C14.0782 13.142 13.9948 13.1266 13.917 13.0951C13.8392 13.0637 13.7685 13.0169 13.7091 12.9576C13.6498 12.8982 13.603 12.8275 13.5716 12.7497C13.5401 12.6719 13.5247 12.5885 13.5262 12.5046C13.5277 12.4207 13.546 12.3379 13.5802 12.2613C13.6143 12.1846 13.6636 12.1156 13.725 12.0584L15.1583 10.625H8.33333C8.16757 10.625 8.0086 10.5592 7.89139 10.442C7.77418 10.3248 7.70833 10.1658 7.70833 10C7.70833 9.83427 7.77418 9.6753 7.89139 9.55809C8.0086 9.44088 8.16757 9.37504 8.33333 9.37504H15.1583L13.725 7.9417Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/LogOut.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const LogOut = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17.1875 13.6977V6.30201C17.1875 6.19133 17.1581 6.08264 17.1023 5.98704C17.0466 5.89144 16.9664 5.81237 16.87 5.75791L10.3075 2.04867C10.2137 1.99564 10.1078 1.96777 10 1.96777C9.89223 1.96777 9.78629 1.99564 9.69246 2.04867L3.12996 5.75791C3.03361 5.81237 2.95345 5.89144 2.89767 5.98704C2.84189 6.08264 2.8125 6.19133 2.8125 6.30201V13.6977C2.8125 13.8084 2.84189 13.9171 2.89767 14.0127C2.95345 14.1083 3.03361 14.1873 3.12996 14.2418L9.69246 17.951C9.78629 18.0041 9.89223 18.0319 10 18.0319C10.1078 18.0319 10.2137 18.0041 10.3075 17.951L16.87 14.2418C16.9664 14.1873 17.0466 14.1083 17.1023 14.0127C17.1581 13.9171 17.1875 13.8084 17.1875 13.6977Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 12.8123C11.5533 12.8123 12.8125 11.5531 12.8125 9.99985C12.8125 8.44655 11.5533 7.18735 10 7.18735C8.4467 7.18735 7.1875 8.44655 7.1875 9.99985C7.1875 11.5531 8.4467 12.8123 10 12.8123Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Setteing.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Setteing = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.273322 2.30117L3.02564 5.05349L4.70619 6.74262C5.41784 7.45428 6.57536 7.45428 7.28702 6.74262L11.7285 2.30117C12.3115 1.71812 11.8914 0.723513 11.0769 0.723513L6.26669 0.723513L0.92496 0.723514C0.101836 0.723514 -0.309724 1.71812 0.273322 2.30117Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/SidebarArrow.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SidebarArrow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H12C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8V12.6667C14 13.1971 13.7893 13.7058 13.4142 14.0809C13.0391 14.456 12.5304 14.6667 12 14.6667H4C3.46957 14.6667 2.96086 14.456 2.58579 14.0809C2.21071 13.7058 2 13.1971 2 12.6667V8ZM8.66667 9.33333C8.66667 9.15652 8.59643 8.98695 8.4714 8.86193C8.34638 8.7369 8.17681 8.66667 8 8.66667C7.82319 8.66667 7.65362 8.7369 7.5286 8.86193C7.40357 8.98695 7.33333 9.15652 7.33333 9.33333V11.3333C7.33333 11.5101 7.40357 11.6797 7.5286 11.8047C7.65362 11.9298 7.82319 12 8 12C8.17681 12 8.34638 11.9298 8.4714 11.8047C8.59643 11.6797 8.66667 11.5101 8.66667 11.3333V9.33333Z" fill="currentColor"></path><path d="M5.33337 6.66667V4.66667C5.33337 3.95942 5.61433 3.28115 6.11442 2.78105C6.61452 2.28095 7.2928 2 8.00004 2C8.70728 2 9.38556 2.28095 9.88566 2.78105C10.3858 3.28115 10.6667 3.95942 10.6667 4.66667V6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Lock.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Lock = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "SidebarItemGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "text",
    "rightIcon",
    "leftIcon",
    "item",
    "index",
    "lock"
  ], {
    "collapse": {},
    "collapseModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["openSidebar"], ["update:collapse"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const collapse = useModel(__props, "collapse");
    const isOpen = ref(false);
    const mainSelect = ref(false);
    const itemSelect = ref(false);
    watch(
      () => collapse.value,
      (value) => {
        if (value) {
          isOpen.value = false;
          mainSelect.value = false;
        }
      }
    );
    async function select() {
      emit("openSidebar");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["sidebar-item-container", [
          { "main-icon": __props.item.icon ? true : false },
          { item: __props.item.child.length === 0 ? true : false }
        ]]
      }, _attrs))}><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.item.child.length === 0 ? __props.item.link : "",
        class: ["side-Item", [
          { "item-select": __props.lock === false ? false : itemSelect.value },
          { "no-icon": !__props.item.icon },
          { "lock": ((_a = __props.item) == null ? void 0 : _a.lock) === false }
        ]],
        id: __props.item.text,
        onClick: select
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="rightIcon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
            if (!collapse.value) {
              _push2(`<span class="text"${_scopeId}>${ssrInterpolate(__props.item.text)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.item.child.length > 0 && !__props.lock) {
              _push2(`<div class="leftIcon"${_scopeId}>`);
              if (!collapse.value) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.leftIcon ? __props.leftIcon : SidebarArrow), null, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a2 = __props.item) == null ? void 0 : _a2.lock) === false) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(Lock, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "rightIcon" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(ToolTip, {
                      text: __props.item.text,
                      position: "left"
                    }, {
                      default: withCtx(() => [
                        __props.item.icon || __props.rightIcon ? (openBlock(), createBlock(resolveDynamicComponent(__props.rightIcon ? __props.rightIcon : __props.item.icon), { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  _: 1
                })
              ]),
              !collapse.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text"
              }, toDisplayString(__props.item.text), 1)) : createCommentVNode("", true),
              __props.item.child.length > 0 && !__props.lock ? (openBlock(), createBlock("div", {
                key: 1,
                class: "leftIcon"
              }, [
                !collapse.value ? (openBlock(), createBlock(resolveDynamicComponent(__props.leftIcon ? __props.leftIcon : SidebarArrow), { key: 0 })) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              ((_b = __props.item) == null ? void 0 : _b.lock) === false ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode(Lock)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="subItem"><!--[-->`);
      ssrRenderList(__props.item.child, (child, i) => {
        _push(ssrRenderComponent(SidebarItemGroup, {
          key: i,
          item: child
        }, null, _parent));
      });
      _push(`<!--]--></div></li></ul>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Sidebar/SidebarItemGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SidebarItemGroup = _sfc_main$6;
const _sfc_main$5 = {
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "text",
    "rightIcon",
    "leftIcon",
    "item",
    "index",
    "lock",
    "link"
  ], {
    "collapse": {},
    "collapseModifiers": {}
  }),
  emits: ["update:collapse"],
  setup(__props) {
    const collapse = useModel(__props, "collapse");
    function showSidebar() {
      collapse.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "sidebar-item-container single-item" }, _attrs))}><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: ["side-Item", [{ "lock": __props.lock }]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rightIcon"${_scopeId}>`);
            _push2(ssrRenderComponent(ToolTip, {
              text: __props.text,
              position: "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.rightIcon) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.rightIcon), null, null), _parent3, _scopeId2);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.rightIcon ? (openBlock(), createBlock(resolveDynamicComponent(__props.rightIcon), { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (!collapse.value) {
              _push2(`<span class="text"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.lock) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(Lock, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: "rightIcon",
                onClick: showSidebar
              }, [
                createVNode(ToolTip, {
                  text: __props.text,
                  position: "left"
                }, {
                  default: withCtx(() => [
                    __props.rightIcon ? (openBlock(), createBlock(resolveDynamicComponent(__props.rightIcon), { key: 0 })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["text"])
              ]),
              !collapse.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text"
              }, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
              __props.lock ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(Lock)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Sidebar/SidebarItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SidebarItem = _sfc_main$5;
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none"
  }, _attrs))}><path d="M11.9999 3.66667H3.99992V7.66667H11.9999V3.66667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6666 16.3333V1.66667C14.6666 1.29848 14.3681 1 13.9999 1H1.99992C1.63173 1 1.33325 1.29848 1.33325 1.66667V16.3333C1.33325 16.7015 1.63173 17 1.99992 17H13.9999C14.3681 17 14.6666 16.7015 14.6666 16.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3332 15C11.8855 15 12.3332 14.5523 12.3332 14C12.3332 13.4477 11.8855 13 11.3332 13C10.7809 13 10.3332 13.4477 10.3332 14C10.3332 14.5523 10.7809 15 11.3332 15Z" fill="currentColor"></path><path d="M7.99984 15C8.55212 15 8.99984 14.5523 8.99984 14C8.99984 13.4477 8.55212 13 7.99984 13C7.44755 13 6.99984 13.4477 6.99984 14C6.99984 14.5523 7.44755 15 7.99984 15Z" fill="currentColor"></path><path d="M4.6665 15C5.21879 15 5.6665 14.5523 5.6665 14C5.6665 13.4477 5.21879 13 4.6665 13C4.11422 13 3.6665 13.4477 3.6665 14C3.6665 14.5523 4.11422 15 4.6665 15Z" fill="currentColor"></path><path d="M11.3332 11.6667C11.8855 11.6667 12.3332 11.219 12.3332 10.6667C12.3332 10.1144 11.8855 9.66669 11.3332 9.66669C10.7809 9.66669 10.3332 10.1144 10.3332 10.6667C10.3332 11.219 10.7809 11.6667 11.3332 11.6667Z" fill="currentColor"></path><path d="M7.99984 11.6667C8.55212 11.6667 8.99984 11.219 8.99984 10.6667C8.99984 10.1144 8.55212 9.66669 7.99984 9.66669C7.44755 9.66669 6.99984 10.1144 6.99984 10.6667C6.99984 11.219 7.44755 11.6667 7.99984 11.6667Z" fill="currentColor"></path><path d="M4.6665 11.6667C5.21879 11.6667 5.6665 11.219 5.6665 10.6667C5.6665 10.1144 5.21879 9.66669 4.6665 9.66669C4.11422 9.66669 3.6665 10.1144 3.6665 10.6667C3.6665 11.219 4.11422 11.6667 4.6665 11.6667Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Accounting.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Accounting = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, _attrs))}><path d="M1.61548 12.6923L9.00009 17L16.3847 12.6923M1.61548 9L9.00009 13.3077L16.3847 9M1.61548 5.30769L9.00009 9.61538L16.3847 5.30769L9.00009 1L1.61548 5.30769Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Store.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Store = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none"
  }, _attrs))}><path d="M12.0766 10.0768H14.5381M8.38441 10.0768H9.61514M1 4.60406H16.9995M1.61582 1.46167H16.3846C16.7245 1.46167 17 1.73718 17 2.07704V11.9229C17 12.2628 16.7245 12.5383 16.3846 12.5383H1.61582C1.27596 12.5383 1.00045 12.2628 1.00045 11.9229V2.07704C1.00045 1.73718 1.27596 1.46167 1.61582 1.46167Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Purchases.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Purchases = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "TheSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const userStore = useUserStore();
    const { User } = storeToRefs(userStore);
    const items = [
      {
        text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0625\u062F\u0627\u0631\u0629",
        icon: Sales,
        child: [
          {
            text: "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u0627\u0644\u0641\u0631\u0648\u0639", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0643\u0644\u0641\u0629", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0645\u0646\u062F\u0648\u0628\u064A\u0646", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A\u0629", icon: "", child: [], link: "" },
              { text: "\u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646", icon: "", child: [], link: "" }
              // {
              //   text: "العملات (لا يتم عرضها في الوقت الحالي يتم اخفاؤها الى وقت لاحق)",
              //   icon: "",
              //   child: [],
              //   link: ''
              // },
              // {
              //   text: "البنوك (لا يتم عرضها في الوقت الحالي يتم اخفاؤها الى وقت لاحق)",
              //   icon: "",
              //   child: [],
              //   link: ''
              // },
            ]
          },
          {
            text: "\u0627\u0639\u062F\u0627\u062F \u0627\u0644\u0646\u0638\u0627\u0645",
            icon: "",
            child: [
              { text: "\u0627\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645", icon: "", child: [], link: "" },
              { text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629", icon: "", child: [], link: "" }
            ]
          }
        ]
      },
      {
        text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629",
        icon: Accounting,
        child: [
          {
            text: "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u0643\u0631\u0648\u062A \u0627\u0644\u062D\u0633\u0627\u0628", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0635\u0646\u0627\u062F\u064A\u0642", icon: "", child: [], link: "" },
              { text: "\u0633\u0646\u062F\u0627\u062A \u0627\u0644\u0642\u0628\u0636", icon: "", child: [], link: "" },
              { text: "\u0633\u0646\u062F\u0627\u062A \u0627\u0644\u0635\u0631\u0641", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0642\u064A\u0648\u062F \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u064A\u0629", icon: "", child: [], link: "" },
              { text: "\u0627\u0634\u0639\u0627\u0631 \u0645\u062F\u064A\u0646", icon: "", child: [], link: "" },
              { text: "\u0627\u0634\u0639\u0627\u0631 \u062F\u0627\u0626\u0646", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u062A\u0631\u062D\u064A\u0644", icon: "", child: [], link: "" }
            ]
          },
          {
            text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0645\u062D\u0627\u0633\u0628\u064A\u0629",
            icon: "",
            child: [
              { text: "\u062A\u0642\u0631\u064A\u0631 \u0643\u0634\u0641 \u062D\u0633\u0627\u0628", icon: "", child: [], link: "" },
              {
                text: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 (\u0628\u062F\u0644 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0642\u064A\u062F \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u064A)",
                icon: "",
                child: [],
                link: ""
              },
              { text: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0633\u0646\u062F\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u062A\u0642\u0631\u064A\u0631 \u0645\u064A\u0632\u0627\u0646 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629", icon: "", child: [], link: "" },
              {
                text: "\u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 (\u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u0633\u062F\u0644\u0629)",
                icon: "",
                child: [],
                link: ""
              },
              { text: "\u0627\u0644\u062A\u062F\u0641\u0642\u0627\u062A \u0627\u0644\u0646\u0642\u062F\u064A\u0629", icon: "", child: [], link: "" },
              { text: "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062F\u062E\u0644", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629", icon: "", child: [], link: "" }
            ]
          }
        ]
      },
      {
        text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
        icon: Store,
        child: [
          {
            text: "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u0627\u0644\u0623\u0635\u0646\u0627\u0641", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0648\u062D\u062F\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u0641\u0631\u0648\u0639", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0635\u0631\u0641 \u0628\u0636\u0627\u0639\u0629 \u0645\u0646 \u0645\u0646\u062F\u0648\u0628", icon: "", child: [], link: "" },
              { text: "\u0627\u0633\u062A\u0644\u0627\u0645 \u0628\u0636\u0627\u0639\u0629 \u0645\u0646 \u0645\u0646\u062F\u0648\u0628", icon: "", child: [], link: "" },
              { text: "\u062C\u0631\u062F \u0627\u0648\u0644 \u0627\u0644\u0645\u062F\u0629", icon: "", child: [], link: "" },
              { text: "\u0623\u0635\u0646\u0627\u0641 \u062A\u0627\u0644\u0641\u0629", icon: "", child: [], link: "" },
              { text: "\u0641\u0631\u0648\u0642\u0627\u062A \u0627\u0644\u062C\u0631\u062F", icon: "", child: [], link: "" },
              { text: "\u0627\u0633\u062A\u0644\u0627\u0645 \u062A\u0634\u063A\u064A\u0644\u064A\xA0", icon: "", child: [], link: "" },
              { text: "\u0635\u0631\u0641 \u062A\u0634\u063A\u064A\u0644\u064A", icon: "", child: [], link: "" }
            ]
          },
          {
            text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
            icon: "",
            child: [
              { text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0623\u0635\u0646\u0627\u0641", icon: "", child: [], link: "" },
              { text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u062E\u0632\u0648\u0646", icon: "", child: [], link: "" }
            ]
          }
        ]
      },
      {
        text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A",
        icon: Sales,
        child: [
          {
            text: "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631", icon: "", child: [], link: "/sales-system/offerPrice", lock: (_b = (_a = User.value) == null ? void 0 : _a.salesCanAccessModules) == null ? void 0 : _b.canAccessOfferPrice },
              {
                text: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A",
                icon: "",
                child: [],
                link: "/sales-system/salesInvoice"
              },
              { text: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u0631\u062A\u062C\u0639 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", icon: "", child: [], link: "" },
              {
                text: "\u062D\u062C\u0632 \u0628\u0636\u0627\u0639\u0629 (\u0628\u062F\u0644 \u0627\u0644\u062D\u062C\u0632 \u0627\u0644\u062F\u0627\u062E\u0644\u064A)",
                icon: "",
                child: [],
                link: ""
              }
              // {
              //   text: "طلب حجز (بدل الحجز الخارجي) لا يتم عرضها في الوقت الحالي",
              //   icon: "",
              //   child: [],
              //   link: "",
              // },
            ]
          },
          {
            text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A",
            icon: "",
            child: [
              { text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A", icon: "", child: [], link: "" },
              {
                text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0641\u0648\u0627\u062A\u064A\u0631 \u0645\u0631\u062A\u062C\u0639 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A",
                icon: "",
                child: [],
                link: ""
              }
            ]
          }
        ]
      },
      {
        text: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A",
        icon: Purchases,
        child: [
          {
            text: "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u0637\u0644\u0628 \u0634\u0631\u0627\u0621", icon: "", child: [], link: "" },
              { text: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", icon: "", child: [], link: "" },
              { text: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u0631\u062A\u062C\u0639 \u0645\u0634\u062A\u0631\u064A\u0627\u062A", icon: "", child: [], link: "" }
            ]
          },
          {
            text: "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A",
            icon: "",
            child: [
              { text: "\u062A\u0642\u0631\u064A\u0631 \u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", icon: "", child: [], link: "" },
              {
                text: "\u062A\u0642\u0631\u064A\u0631 \u0641\u0648\u0627\u062A\u064A\u0631 \u0645\u0631\u062A\u062C\u0639 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A",
                icon: "",
                child: [],
                link: ""
              }
            ]
          }
        ]
      }
    ];
    const collapsed = ref(true);
    function showSidebar() {
      collapsed.value = false;
    }
    function logOut() {
      userStore.LogOut();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["side-container", { collapse: unref(collapsed) }],
        id: "sidebar"
      }, _attrs))}><div class="icon">`);
      _push(ssrRenderComponent(Bars, null, null, _parent));
      _push(`</div><div class="items">`);
      _push(ssrRenderComponent(SidebarItem, {
        text: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        link: "/",
        rightIcon: Dashboard,
        collapse: unref(collapsed),
        "onUpdate:collapse": ($event) => isRef(collapsed) ? collapsed.value = $event : null
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(ssrRenderComponent(SidebarItemGroup, {
          item,
          index: i,
          key: i,
          onOpenSidebar: showSidebar,
          collapse: unref(collapsed),
          "onUpdate:collapse": ($event) => isRef(collapsed) ? collapsed.value = $event : null
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="bottom-items"><div class="user"><div class="avatar-container">`);
      _push(ssrRenderComponent(Avatar, {
        src: "/images/logo.png",
        size: "md"
      }, null, _parent));
      _push(`</div>`);
      if (!unref(collapsed)) {
        _push(`<div><p>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</p><p>user@gmail.com</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(SidebarItem, {
        text: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        rightIcon: LogOut,
        collapse: unref(collapsed),
        "onUpdate:collapse": ($event) => isRef(collapsed) ? collapsed.value = $event : null,
        onClick: logOut
      }, null, _parent));
      _push(ssrRenderComponent(SidebarItem, {
        text: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        rightIcon: Setteing,
        collapse: unref(collapsed),
        "onUpdate:collapse": ($event) => isRef(collapsed) ? collapsed.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Sidebar/TheSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheSidebar = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheSidebar, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DIMe4OLW.mjs.map
