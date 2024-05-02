<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
import Dialog from "./components/DesignSystem/Generals/Dialog.vue";
import Snackbar from "./components/DesignSystem/Generals/Snackbar.vue";
import { useGeneralStore } from "./stores/general";


useHead({
  link: [
    {rel: 'stylesheet', href: '/lib/css/bootstrap.css'},
    {rel: 'stylesheet', href: '/lib/css/bootstrap-datetimepicker.min.scss'},
  ],
  script:[
    {src: '/lib/js/jquery-3.3.1.js'},
    {src: '/lib/js/momentjs.js'},
    {src: '/lib/js/moment-with-locales.js'},
    {src: '/lib/js/moment-hijri.js'},
   
    {src: '/lib/js/bootstrap-hijri-datetimepicker.js'}
  ]
})
const {locale} = useI18n();
const userStore = useUserStore();
const { notify } = useNotify();
const snackbar = ref(false);
const generalStore = useGeneralStore();
const { isCtrlPressed } = storeToRefs(generalStore);
const cookie = useCookie("local");
cookie.value = locale.value;
onMounted(() => {

})
watch(notify.value, (value) => {
  if (value.message !== "") {
    snackbar.value = true;
  } else {
    snackbar.value = false;
  }
});
let user = useCookie('user');

  if (user.value) {
    userStore.setUser(user.value);
  }
</script>
<template>
  <div>
    <Dialog v-model:show="isCtrlPressed" v-if="isCtrlPressed"/>
    <NuxtLayout>
      <NuxtPage />
      <ClientOnly>
        <Snackbar
          :color="notify.color"
          :text="notify.message"
          v-if="snackbar"
        />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
<style scoped >

</style>
