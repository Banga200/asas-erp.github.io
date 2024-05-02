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

onMounted(() => {
  $(document).ready(function() {
    $('#hijriDatePicker').hijriDatePicker({
      // Options as needed (e.g., format, language)
      showSwitcher: false,
      hijri: false,
      showTodayButton: true
    })
  })
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


function setInput(value, itemId) {
  input.value = value;
  selectedItem.value = itemId
  emit('setInput', value, index);
}
function changeInput(value) {
  emit('changeInput',value, index)
}

</script>


<template>
  <div class="input-group TextBox" :class="[{ 'full-width': fullWidth }]" >
      <label v-if="label">{{ label }}</label>
      <div class="input-container " :class="[size,color, background, {'disabled': disabled}, {'readonly': readOnly}]">
        
          
          <input
          :type="type ? type: 'text'"
          :disabled="disabled"
          :placeholder="placeholder"
          v-model="input"
          :readonly="readOnly"
          @input="setInput($event.target.value, 0)"
         @change="changeInput($event.target.value)" id="hijriDatePicker"/>

        <div class="icon" @click="clearInput" v-if="clearable">
          <CloseIcon class="closeIcon" />
        </div>
        
        <div class="icons" v-if="badgeText || leftInnerIconToolTip || leftIcon">
          <Badge :text="badgeText" v-if="badgeText" :color="badgeColor"/>
          <!-- Left Inner Icon  -->
          <ToolTip :text="leftInnerIconToolTip" :position="leftInnerIconToolTipPosition">
            <component :is="leftInnerIcon" />
          </ToolTip>
          <!-- Left Icon  -->
          <ToolTip :text="leftIconToolTip" :position="leftIconToolTipPosition" v-if="leftIcon">
            <component :is="leftIcon" />
          </ToolTip>
          
        </div>
      </div>
      
  </div>
</template>
