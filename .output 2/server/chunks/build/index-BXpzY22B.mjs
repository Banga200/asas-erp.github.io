import { mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSalesStore, I as Invoice } from './Invoice-RXh0ad4X.mjs';
import './server.mjs';
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
import './Tab-DoXFcaJE.mjs';
import './TextBox-CQCy0lNb.mjs';
import './Avatar-CNjjQUbr.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const salesStore = useSalesStore();
    salesStore.GetItems();
    useHead({
      title: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u0628\u064A\u0639\u0627\u062A"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Invoice, mergeProps({ SalesInvoice: true }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sales-system/salesInvoice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BXpzY22B.mjs.map
