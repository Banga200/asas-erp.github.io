<script setup>
import CheckMark from "../Icons/Inputs/CheckMark.vue";
const { text, color, disabled } = defineProps(["text", "color", "disabled"]);
const input = defineModel("input");
const checked = ref(false);
function toggle() {
  if (!disabled) {
    console.log(disabled)
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
    <span class="check radio" :class="[color]"><span class="circle" v-if="checked"></span></span>
    <span class="text" v-if="text">{{ text }} </span>
  </div>
</template>