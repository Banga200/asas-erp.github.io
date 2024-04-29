<script setup>
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
  fullWidth,
  value
} = defineProps([
  "label",
  "color",
  'disabled',
  "background",
  "placeholder",
  "clearable",
  "readOnly",
  "rightIcon",
  "leftIcon",
  'fullWidth',
  'value'
]);

function setInput(value) {
  input.value = value;
}
</script>
<template>
    <div class="input-group" :class="{ 'full-width': fullWidth }">
      <label v-if="label">{{ label }}</label>
      <div class="textarea " :class="[color, background,{'disabled': disabled}, {'readonly': readOnly}]">
        <textarea
          type="text"
          :disabled="disabled"
          :placeholder="placeholder"
          v-model="input"
          :readonly="readOnly"
          @input="setInput($event.target.value)"
        />
        <div class="icon" @click="clearInput" v-if="clearable">
          <!-- <CloseIcon class="closeIcon" /> -->
        </div>
      </div>
  </div>
</template>