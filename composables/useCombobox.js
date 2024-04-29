import { ref } from "vue";
const ctrlPressed = ref(false);

export const useCombobox = () => {
  function setCtrlPressed() {
    ctrlPressed.value = true;
  }
  return {
    setCtrlPressed,
    ctrlPressed,
  };
}
