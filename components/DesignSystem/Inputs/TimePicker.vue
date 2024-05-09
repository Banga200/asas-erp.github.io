<script setup>
import ToolTip from '../Generals/ToolTip.vue';
import Badge from '../Generals/Badge.vue';
import CloseIcon from '~/components/Icons/Close.vue';
import Item from '../Generals/Item.vue';


import {ref} from 'vue';

const input = defineModel("input");
const emit = defineEmits(['setInput', 'changeInput']);
const isOpen = ref(false);
const selectedItem = ref(null);
let date = new Date();
onMounted(() => {
  input.value = date.toTimeString().split(' ')[0]
  window.addEventListener("click", () => {
    isOpen.value = false;
  });
});
onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
const {
  label,
  color,
  type,
  value,
  index,
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
  size,
  moveNext,
  tooltipNotVisible,
  inputToolTipText,
  inputToolTipPosition,
  leftInnerIcon,
  leftIconToolTip,
  leftIconToolTipPosition,
  leftInnerIconToolTip,
  leftInnerIconToolTipPosition,
} = defineProps([
  "label",
  "color",
  'type',
  "value",
  "index",
  'disabled',
  "moveNext",
  "background",
  "placeholder",
  "clearable",
  "readOnly",
  "rightIcon",
  "leftIcon",
  'badgeText',
  'size',
  'fullWidth',
  'badgeColor',
  "tooltipNotVisible",
  "inputToolTipText",
  "inputToolTipPosition",
  'leftInnerIcon',
  'leftIconToolTip',
  'leftIconToolTipPosition',
  'leftInnerIconToolTip',
  'leftInnerIconToolTipPosition'
]);


function setInput(value) {
  input.value = value;
  emit('setInput', value, index);
}
function changeInput(value) {
  emit('changeInput',value, index)
}

</script>


<template>
  <div class="input-group TextBox" :class="[{ 'full-width': fullWidth }]" >
      <label v-if="label">{{ label }}</label>
      <div class="input-container time" :class="[size,color, background, {'disabled': disabled}, {'readonly': readOnly}]">
        
          <input
          
          type="time"
          :disabled="disabled"
          :placeholder="placeholder"
          v-model="input"
          :readonly="readOnly"
          @input="setInput($event.target.value)"
          @change="changeInput($event.target.value)" 
          />

        <div class="icon" @click="clearInput" v-if="clearable">
          <CloseIcon class="closeIcon" />
        </div>
        
        <div class="icons" v-if="leftInnerIconToolTip || leftIcon">
          <!-- Left Inner Icon  -->
          <ToolTip :text="leftInnerIconToolTip" :position="leftInnerIconToolTipPosition" v-if="leftInnerIconToolTip">
            <component :is="leftIcon" />
          </ToolTip>
          <!-- Left Icon  -->
          <component :is="leftIcon" v-if="leftIcon"/>
          
        </div>
      </div>
      
  </div>
</template>
