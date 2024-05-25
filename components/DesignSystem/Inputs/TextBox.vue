<script setup>
import ToolTip from '../Generals/ToolTip.vue';
import Badge from '../Generals/Badge.vue';
import CloseIcon from '~/components/Icons/Close.vue';
import Item from '../Generals/Item.vue';
import {ref} from 'vue';
import { useSettingsStore } from '~/stores/settings';
const settingsStore = useSettingsStore();
const input = defineModel("input");
const emit = defineEmits(['setInput', 'changeInput']);
const isOpen = ref(false);
const selectedItem = ref(null);
onMounted(() => {
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
  menuLocation,
  menu,
  menuItems,
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
  regx
} = defineProps([
  "label",
  "color",
  'type',
  "value",
  "index",
  'disabled',
  'menuLocation',
  'menu',
  "moveNext",
  'menuItems',
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
  'leftInnerIconToolTipPosition',
  "regx"
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
        <ToolTip :text="inputToolTipText" :position="inputToolTipPosition"  :textBox="Boolean(inputToolTipText)" v-move-next-on-enter>
          <input
          :type="type ? type: 'text'"
          :disabled="disabled"
          :placeholder="placeholder"
          v-model="input"
          :readonly="readOnly"
          @input="setInput($event.target.value, 0)"
         @change="changeInput($event.target.value)"/>
        </ToolTip>
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
          <ToolTip :text="leftIconToolTip" :position="leftIconToolTipPosition" v-if="leftIcon && leftIconToolTip">
            <component :is="leftIcon" />
          </ToolTip>
          <component :is="leftIcon" v-if="leftIcon && !leftIconToolTip" class="blue-icon" @click.stop="isOpen = true"/>
          
        </div>
      </div>
      <div
      class="dropMenu button"
      :class="[menuLocation]"
      v-show="menuItems && isOpen && menu"
    >
      <Item
        v-for="(item, i) in menuItems"
        :key="i"
        :text="item.text"
        @click="setInput(item.value, item.id)"
        :selected="item.id === selectedItem"
        :value="item.value"
        :rightIcon="item.rightIcon || undefined"
        :leftIcon="item.leftIcon || undefined"
        :color="item.color || undefined"/>
    </div>
  </div>
</template>
