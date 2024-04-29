import { defineStore } from "pinia";
import { ref } from "vue";
export const useGeneralStore = defineStore('general', () => {
   const isCtrlPressed = ref(false);

  const getIsCtrlPressed = computed(() => {
    return isCtrlPressed.value;
  });
  function setIsCtrlPressed() {
    isCtrlPressed.value = true;
  }
  return {
    isCtrlPressed,
    getIsCtrlPressed,
    setIsCtrlPressed,
  };
}) 