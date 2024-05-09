<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
import Dialog from "./components/DesignSystem/Generals/Dialog.vue";
import Snackbar from "./components/DesignSystem/Generals/Snackbar.vue";
import { useGeneralStore } from "./stores/general";
const useStore = useUserStore();
const {locale} = useI18n();
const userStore = useUserStore();
const { notify } = useNotify();
const snackbar = ref(false);
const generalStore = useGeneralStore();
const { isCtrlPressed } = storeToRefs(generalStore);
// const cookie = useCookie("local");
if (process.client) {
  localStorage.setItem('local',JSON.stringify(locale.value))
  let user = JSON.parse(localStorage.getItem('user'))

  if (user) {
    userStore.setUser(user);
  }
}
onMounted(() => {
  if (process.client) {
    userStore.getWithExpiry("token");
  }
})
watch(notify.value, (value) => {
  if (value.message !== "") {
    snackbar.value = true;
  } else {
    snackbar.value = false;
  }
});

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