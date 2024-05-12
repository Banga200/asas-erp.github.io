<script setup>
import ToolTip from "../Generals/ToolTip.vue";
import Badge from "../Generals/Badge.vue";
import CloseIcon from "../../Icons/Close.vue";
import Search from "../../Icons/Inputs/Search.vue";
const emit = defineEmits(['search']);
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
  closeicon.value = false;
  emit('search')
}
function setInput(value) {
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
function setSearch() {
  if (input.value) {
    emit("search")
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
        @blur="setUnFocus"
        @keydown.enter="setSearch"/>
      <div class="icons">
        <component :is="CloseIcon" @click="clearInput" class="close-icon" v-if="closeicon"/>
        <!-- Left Icon  -->
        <component :is="Search" @click="setSearch" class="search-icon"/>
      </div>
    </div>
  </div>
</template>
