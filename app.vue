<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
import Dialog from "./components/DesignSystem/Generals/Dialog.vue";
import Snackbar from "./components/DesignSystem/Generals/Snackbar.vue";
import { useGeneralStore } from "./stores/general";
const {locale} = useI18n();
const userStore = useUserStore();
const { notify } = useNotify();
const snackbar = ref(false);
const generalStore = useGeneralStore();
const { isCtrlPressed } = storeToRefs(generalStore);
const cookie = useCookie("local");
cookie.value = locale.value
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
