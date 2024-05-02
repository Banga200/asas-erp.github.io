import { u as useCommonStore } from './Tab-DoXFcaJE.mjs';
import { onUnmounted, mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { I as Invoice } from './Invoice-RXh0ad4X.mjs';
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
import './TextBox-CQCy0lNb.mjs';
import './Avatar-CNjjQUbr.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    useHead({
      title: "\u0639\u0631\u0636 \u0633\u0639\u0631"
    });
    onUnmounted(() => {
      commonStore.ClearEverythings();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Invoice, mergeProps({ OfferPrice: true }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sales-system/offerPrice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-WDgAOq60.mjs.map
