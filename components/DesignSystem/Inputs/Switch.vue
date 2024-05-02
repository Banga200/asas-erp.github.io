<script setup>
import { ref, onMounted } from "vue";
import ToolTip from "../Generals/ToolTip.vue";
import Info from "~/components/Icons/Info.vue";
const emit = defineEmits(['changeSwitch'])
const { label, trueText, falseText, labelIcon } = defineProps([
  "label",
  "trueText",
  "falseText",
  "labelIcon",
]);
const input = defineModel("input");
const trueSide = ref(true);
const falseSide = ref(false);
function toggle(value) {
  // false = نقدي  /true = اجل
  clearStatus();
  value ? (trueSide.value = true) : (falseSide.value = true);
  input.value = value;
  emit('changeSwitch', value)
}

clearStatus();
input.value ? (trueSide.value = true) : (falseSide.value = true);

function clearStatus() {
  trueSide.value = false;
  falseSide.value = false;
}
</script>
<template>
  <div class="switch-container">
    <label class="row">
      <span>
        {{ label }}
      </span>
      <div class="icon">
        <ToolTip :position="'bottom'" :text="'0 = نقدي \n 1 = اجل'"
          ><component :is="labelIcon"
        /></ToolTip>
      </div>
    </label>
    <div class="switch">
      <span
        class="trueSide"
        :class="[{ active: trueSide }]"
        @click="!trueSide ? toggle(true): ''"
        >{{ trueText }}</span
      >
      <span
        class="falseSide"
        :class="[{ active: falseSide }]"
        @click="!falseSide ? toggle(false) : ''"
        >{{ falseText }}</span
      >
    </div>
  </div>
</template>
