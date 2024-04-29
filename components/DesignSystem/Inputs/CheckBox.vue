<script setup>
import CheckMark from "../../Icons/Inputs/CheckMark.vue";
const { label, color, disabled } = defineProps(["label", "color", "disabled"]);
const input = defineModel("input");
const checked = ref(false);
function toggle() {
  if (!disabled) {
    checked.value = !checked.value;
    if (checked.value) {
      input.value = true;
    } else {
      input.value = false;
    }
  }
}
</script>
<template>
  <div
    class="check-container"
    :class="[{ 'checked': checked }, { 'disabled': disabled }]"
    @click="toggle"
  >
    <span class="check" :class="[color]"><CheckMark v-if="checked" /></span>
    <span class="text" >{{ label }} </span>
  </div>
</template>
