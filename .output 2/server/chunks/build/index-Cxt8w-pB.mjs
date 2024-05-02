import { ref, shallowRef, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { B as Button, _ as _export_sfc } from './server.mjs';
import { I as InvoicesTree, A as Add, E as Edit, D as Delete, R as Refresh, M as MoreDotsVertical, U as User, S as Save, C as ComboBox, T as Tab } from './Tab-DoXFcaJE.mjs';
import { A as Avatar } from './Avatar-CNjjQUbr.mjs';
import { B as Badge, T as TextBox } from './TextBox-CQCy0lNb.mjs';
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

const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M7.5 13.25V12.75H7H4C3.33696 12.75 2.70107 12.4866 2.23223 12.0178C1.76339 11.5489 1.5 10.913 1.5 10.25V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5C1.8163 1.5 1.87989 1.52634 1.92678 1.57322C1.97366 1.62011 2 1.6837 2 1.75V4.25C2 4.78043 2.21071 5.28914 2.58579 5.66421C2.96086 6.03929 3.46957 6.25 4 6.25H7H7.5V5.75V5C7.5 4.86739 7.55268 4.74022 7.64645 4.64645C7.74021 4.55268 7.86739 4.5 8 4.5H14C14.1326 4.5 14.2598 4.55268 14.3536 4.64645C14.4473 4.74022 14.5 4.86739 14.5 5V8C14.5 8.13261 14.4473 8.25978 14.3536 8.35355C14.2598 8.44732 14.1326 8.5 14 8.5H8C7.86739 8.5 7.74022 8.44732 7.64645 8.35355C7.55268 8.25978 7.5 8.13261 7.5 8V7.25V6.75H7H4C3.54407 6.75 3.11713 6.62827 2.75029 6.41615L2 5.98231V6.849V10.25C2 10.7804 2.21071 11.2891 2.58579 11.6642C2.96086 12.0393 3.46957 12.25 4 12.25H7H7.5V11.75V11C7.5 10.8674 7.55268 10.7402 7.64645 10.6464C7.74022 10.5527 7.86739 10.5 8 10.5H14C14.1326 10.5 14.2598 10.5527 14.3536 10.6464C14.4473 10.7402 14.5 10.8674 14.5 11V14C14.5 14.1326 14.4473 14.2598 14.3536 14.3536C14.2598 14.4473 14.1326 14.5 14 14.5H8C7.86739 14.5 7.74022 14.4473 7.64645 14.3536C7.55268 14.2598 7.5 14.1326 7.5 14V13.25ZM13.5 14H14V13.5V11.5V11H13.5H8.5H8V11.5V13.5V14H8.5H13.5ZM8 7.5V8H8.5H13.5H14V7.5V5.5V5H13.5H8.5H8V5.5V7.5Z" fill="currentColor" stroke="currentColor"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/OpenTree.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OpenTree = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_1070_6388)"><path d="M9.98794 8.48771C10.4532 7.74166 10.6999 6.88006 10.7 6.00082C10.7017 4.95638 10.3541 3.94135 9.71254 3.1172L9.36476 2.67048L8.96445 3.0708L3.0708 8.96445L2.66994 9.3653L3.11772 9.71294C3.81247 10.2523 4.64462 10.5859 5.51956 10.6758C6.3945 10.7658 7.27711 10.6083 8.06703 10.2215C8.85695 9.83471 9.52248 9.234 9.98794 8.48771ZM8.9292 3.03555L9.3298 2.63496L8.88252 2.28725C7.97826 1.58429 6.84843 1.23572 5.70529 1.30703C4.56215 1.37834 3.4844 1.86462 2.67451 2.67451C1.86462 3.4844 1.37834 4.56215 1.30703 5.70529C1.23572 6.84843 1.58429 7.97826 2.28725 8.88252L2.63496 9.3298L3.03555 8.9292L8.9292 3.03555ZM6 1.25C8.62343 1.25 10.75 3.37657 10.75 6C10.75 8.62343 8.62343 10.75 6 10.75C3.37657 10.75 1.25 8.62343 1.25 6C1.25 3.37657 3.37657 1.25 6 1.25Z" fill="#414141" stroke="currentColor"></path></g><defs><clipPath id="clip0_1070_6388"><rect width="12" height="12" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Block.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Block = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "ExtraInformation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-4" }, _attrs))}><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0628\u0644\u062F" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u062D\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0634\u0627\u0631\u0639 \u0627\u0644\u0641\u0631\u0639\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0628\u0646\u0649" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0625\u0636\u0627\u0641\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: " \u0635 . \u0628" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0647\u0627\u062A\u0641" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u062C\u0648\u0627\u0644" }, null, _parent));
      _push(`</div><div class="grid-3 item"><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0641\u0627\u0643\u0633" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Customers/ExtraInformation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ExtraInformation = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Branch",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    shallowRef({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-5" }, _attrs))}><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0645\u062F\u064A\u0646 \u0625\u0641\u062A\u062A\u0627\u062D\u064A",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u062F\u0627\u0626\u0646 \u0625\u0641\u062A\u062A\u0627\u062D\u064A",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0645\u062F\u064A\u0646 \u062D\u0627\u0644\u064A",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u062F\u0627\u0626\u0646 \u062D\u0627\u0644\u064A",
        readOnly: true
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, {
        label: "\u0631\u0635\u064A\u062F \u0627\u0644\u0639\u0645\u064A\u0644",
        readOnly: true
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Customers/Branch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Branch = _sfc_main$3;
const _sfc_main$2 = {
  __name: "CustomerBalance",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedBranch = ref("Branch");
    const BranchesTabs = shallowRef({
      Branch
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="grid-5"><div>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u0641\u062A\u0631\u0627\u0636\u064A" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u062D\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0645\u062F\u0629 \u0627\u0644\u0625\u0633\u062A\u062D\u0642\u0627\u0642" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0645\u062F\u0629 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0639\u0645\u064A\u0631 \u0627\u0644\u0630\u0645\u0645" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(ComboBox, { label: "\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0645\u0624\u0642\u062A" }, null, _parent));
      _push(`</div></div><div class="flex-column gap-8 mt-16"><div class="row align-center tabs-container"><div class="col-2">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0639",
        color: unref(selectedBranch) === "Branch" ? "primary" : "",
        onClick: ($event) => selectedBranch.value = "Branch"
      }, null, _parent));
      _push(`</div></div><div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(BranchesTabs)[unref(selectedBranch)]), null, null), _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Customers/CustomerBalance.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CustomerBalance = _sfc_main$2;
const _sfc_main$1 = {
  __name: "DiscountsOnInvoices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-2" }, _attrs))}><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0646\u0633\u0628\u0629 \u062E\u0635\u0645 \u0641\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0646\u0642\u062F\u064A\u0629 ( % )" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(TextBox, { label: "\u0646\u0633\u0628\u0629 \u062E\u0635\u0645 \u0641\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0622\u062C\u0644\u0629 ( % ) " }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Tabs Contents/Customers/DiscountsOnInvoices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DiscountsOnInvoices = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTab = ref("ExtraInformation");
    const customersTabs = shallowRef({
      ExtraInformation,
      CustomerBalance,
      DiscountsOnInvoices
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="right-side-tree col-12 col-md-2">`);
      _push(ssrRenderComponent(InvoicesTree, null, null, _parent));
      _push(`</div><div class="content customers col-12 col-md-10"><section class="top-buttons row justify-space-center"><div class="d-flex align-center gap-6">`);
      _push(ssrRenderComponent(Button, {
        color: "primary",
        text: "\u062C\u062F\u064A\u062F",
        rightIcon: Add
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "warning",
        onlyIcon: true,
        rightIcon: Edit
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "danger",
        onlyIcon: true,
        rightIcon: Delete
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        color: "neutral",
        onlyIcon: true,
        rightIcon: Refresh
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        menuLocation: "left",
        color: "neutral",
        onlyIcon: true,
        rightIcon: MoreDotsVertical,
        menu: true,
        menuItems: [{ text: "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0648\u0642\u064A\u0641", rightIcon: Block, color: "danger" }, { text: "\u0646\u0635 \u0645\u0642\u062A\u0631\u062D" }]
      }, null, _parent));
      _push(ssrRenderComponent(Badge, {
        color: "danger",
        rightIcon: Block,
        text: "\u0645\u062D\u0638\u0648\u0631",
        size: "md"
      }, null, _parent));
      _push(`</div><div class="d-flex align-center gap-6"><div class="avatar-group">`);
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
      _push(ssrRenderComponent(Button, {
        color: "primary",
        text: "\u062D\u0641\u0638",
        rightIcon: Save
      }, null, _parent));
      _push(`</div></section><section><div class="row mb-8"><div class="col-6 col-md-2">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0631\u0642\u0645" }, null, _parent));
      _push(`</div><div class="col-6 col-md-2">`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0627\u0644\u0641\u0631\u0648\u0639" }, null, _parent));
      _push(`</div><div class="row col-12 mb-4 col-md-4 flex-column-end"><div class="col-11 pl-8">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0627\u0633\u0645 (\u0639\u0631\u0628\u064A)" }, null, _parent));
      _push(`</div><div class="col-1">`);
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        rightIcon: OpenTree,
        color: "neutral"
      }, null, _parent));
      _push(`</div></div><div class="col-12 mb-4 col-md-4">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0627\u0633\u0645 (\u0627\u0646\u062C\u0644\u064A\u0632\u064A)" }, null, _parent));
      _push(`</div></div><div class="row"><div class="col-12 col-md-2">`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0627\u0644\u0645\u0646\u062F\u0648\u0628" }, null, _parent));
      _push(`</div><div class="col-12 col-md-3">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0627\u0644\u0634\u062E\u0635 \u0627\u0644\u0645\u0633\u0624\u0648\u0644" }, null, _parent));
      _push(`</div><div class="col-12 col-md-3">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0631\u0642\u0645 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0636\u0631\u064A\u0628\u064A" }, null, _parent));
      _push(`</div><div class="col-12 col-md-2">`);
      _push(ssrRenderComponent(ComboBox, { label: "\u0645\u0639\u0631\u0641 \u0627\u064E\u062E\u0631" }, null, _parent));
      _push(`</div><div class="col-12 col-md-2">`);
      _push(ssrRenderComponent(TextBox, { label: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629" }, null, _parent));
      _push(`</div></div></section><section class="mt-16"><div class="flex-column gap-8"><div class="row align-center tabs-container"><div class="col-2">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629",
        color: unref(selectedTab) === "ExtraInformation" ? "primary" : "",
        onClick: ($event) => selectedTab.value = "ExtraInformation"
      }, null, _parent));
      _push(`</div><div class="col-2">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0639\u0645\u064A\u0644",
        onClick: ($event) => selectedTab.value = "CustomerBalance",
        color: unref(selectedTab) === "CustomerBalance" ? "primary" : ""
      }, null, _parent));
      _push(`</div><div class="col-2">`);
      _push(ssrRenderComponent(Tab, {
        text: "\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
        onClick: ($event) => selectedTab.value = "DiscountsOnInvoices",
        color: unref(selectedTab) === "DiscountsOnInvoices" ? "primary" : ""
      }, null, _parent));
      _push(`</div></div><div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(customersTabs)[unref(selectedTab)]), null, null), _parent);
      _push(`</div></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cxt8w-pB.mjs.map
