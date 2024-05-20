<script setup>
import { ref, onMounted } from "vue";
import ToolTip from "../Generals/ToolTip.vue";
import Info from "~/components/Icons/Info.vue";
const emit = defineEmits(['changeSwitch'])
const props = defineProps([
  "label",
  "trueText",
  "falseText",
  "labelIcon",
  "value"
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
watch(input,(newValue) => {
  toggle(newValue)
})
</script>
<template>
  <div class="switch-container">
    <label class="row">
      <span>
        {{ props.label }}
      </span>
      <div class="icon">
        <ToolTip :position="'bottom'" :text="'0 = نقدي \n 1 = اجل'"
          ><component :is="props.labelIcon"
        /></ToolTip>
      </div>
    </label>
    <div class="switch">
      <span
        class="trueSide"
        :class="[{ active: trueSide }]"
        @click="!trueSide ? toggle(true): ''"
        >{{ props.trueText }}</span
      >
      <span
        class="falseSide"
        :class="[{ active: falseSide }]"
        @click="!falseSide ? toggle(false) : ''"
        >{{ props.falseText }}</span
      >
    </div>
  </div>
</template>
