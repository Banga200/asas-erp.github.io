import { ref, mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-wOlovHEu.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
    });
    ref(false);
    ref([
      {
        text: "\u0634\u0631\u0643\u0629 \u0627\u0633\u0627\u0633 \u0627\u0644\u062D\u0627\u0633\u0628",
        child: [
          {
            text: "\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0639\u0642\u0644\u0629",
            child: [
              {
                text: "\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646",
                child: []
              }
            ]
          }
        ]
      },
      {
        text: "\u062C\u0633\u0631",
        child: [
          {
            text: "\u0643\u0644\u0643 \u0627\u0628",
            child: []
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "home" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="company logo"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DboSxqor.mjs.map
