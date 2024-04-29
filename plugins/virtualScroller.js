import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { DynamicScroller } from 'vue-virtual-scroller'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(DynamicScroller);
});