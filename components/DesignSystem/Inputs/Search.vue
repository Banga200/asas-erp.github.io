<script setup>
import ToolTip from "../Generals/ToolTip.vue";
import Badge from "../Generals/Badge.vue";
import CloseIcon from "../../Icons/Close.vue";
import Search from "../../Icons/Inputs/Search.vue";
const input = defineModel("input");
const {
  label,
  color,
  background,
  disabled,
  placeholder,
  clearable,
  readOnly,
  rightIcon,
  leftIcon,
  badgeColor,
  badgeText,
  fullWidth,
  leftIconToolTip,
  leftIconToolTipPosition,
  leftInnerIconToolTip,
  leftInnerIconToolTipPosition,
} = defineProps([
  "label",
  "color",
  "disabled",
  "background",
  "placeholder",
  "clearable",
  "readOnly",
  "rightIcon",
  "leftIcon",
  "badgeText",
  "fullWidth",
  "badgeColor",
  "leftIconToolTip",
  "leftIconToolTipPosition",
  "leftInnerIconToolTip",
  "leftInnerIconToolTipPosition",
]);
const closeicon = ref(false);
function clearInput() {
  input.value = "";
  closeicon.value = false
}
function setInput(value) {
    console.log(value)
  if (value) {
    closeicon.value = true;
    input.value = value;
  }
  else {
    closeicon.value = false
  }
  
}
function setFocus() {
    if (input.value > 0) {
        closeicon.value = true;
    }
}
function setUnFocus() {
    if (!input.value) {
        closeicon.value = false;
    }
}
</script>
<template>
  <div class="input-group" :class="{ 'full-width': fullWidth }">
    <label v-if="label">{{ label }}</label>
    <div
      class="input-container"
      :class="[
        color,
        background,
        { disabled: disabled },
        { readonly: readOnly },
      ]"
    >
      <input
        type="input"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="input"
        :readonly="readOnly"
        @input="setInput($event.target.value)"
        @focus="setFocus"
        @blur="setUnFocus"/>
      <div class="icons">
        <component :is="CloseIcon" @click="clearInput" class="close-icon" v-if="closeicon"/>
        <!-- Left Icon  -->
        <component :is="Search" />
      </div>
    </div>
  </div>
</template>
