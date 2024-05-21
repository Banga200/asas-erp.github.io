<script setup>
import ArrowDown from "../../Icons/Arrows/ArrowDown.vue";
import Add from "../../Icons/Buttons/Add.vue";
import Item from "../Generals/Item.vue";
import ToolTip from "../Generals/ToolTip.vue";
const emit = defineEmits(['setMenuItem'])
const isOpen = ref(false);
onMounted(() => {
  window.addEventListener("click", () => {
    isOpen.value = false;
  }, true);
});
onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
const {
  rightIcon,
  leftIcon,
  text,
  type,
  items,
  color,
  block,
  onlyIcon,
  icon,
  menu,
  menuLocation,
  menuItems,
  disabled,
  size,
  toolTip,
  toolTipPosition,
  outline,
} = defineProps([
  "rightIcon",
  "size",
  "type",
  "leftIcon",
  "text",
  "block",
  "menu",
  "menuLocation",
  "items",
  "color",
  "onlyIcon",
  "outline",
  "menuItems",
  "toolTip",
  "toolTipPosition",
  "icon",
  "disabled",
]);
const selectedIndex = ref(null);
const selectedElement = ref(null)
const ulMenu = ref(null)
function showMenu() {
  isOpen.value = true;
  var dropdownPosition = selectedElement.value?.getBoundingClientRect();
  if (ulMenu.value) {
    if (menuLocation === "left") {
    ulMenu.value.style.bottom = 'auto'
    ulMenu.value.style.top = dropdownPosition.y  + selectedElement.value.offsetHeight + 'px' ;
    }
    else{
      ulMenu.value.style.left = dropdownPosition.x  +  'px';
      ulMenu.value.style.top = dropdownPosition.y  + selectedElement.value.offsetHeight + 'px' ;
    }
  }
  // ulMenu.value.style.width = dropdownPosition.width + dropdownPosition.width +'%' +  'px';
}
function selectItem(id, item, index) {
  // إذا كان القائمة في الزر تكون selected مع checkmark فك التعليق في الاسفل 
  // selectedIndex.value = id;
  emit('setMenuItem', id, item, index)
}
</script>
<template>
  <div class="button-container" ref="selectedElement">
    
    <button
      :class="[
        { block: block },
        color,
        { onlyIcon: onlyIcon },
        { disabled: disabled },
        icon ? `${color}-icon` : '',
        { outline: outline },
        size,
      ]"
      :disabled="disabled"
      @click.stop="showMenu"
      :type="type ? type : 'button'">
      <!-- Icon  -->
      
        <div class="icon" v-if="onlyIcon">
          <component :is="icon" />
        </div>
      
      <div class="icon" v-if="rightIcon">
        <component :is="rightIcon" />
      </div>
      <!-- text  -->
      <span v-if="text">{{ text }}</span>

      <div class="icon" v-if="leftIcon">
        <component :is="leftIcon" />
      </div>
    </button>
    <!-- <ToolTip :text="toolTip" :position="toolTipPosition"></ToolTip> -->
    <div
      class="dropMenu button"
      :class="[menuLocation]"
      ref="ulMenu"
      v-show="menuItems && isOpen && menu"
    >
      <Item
        v-for="(item, i) in menuItems"
        :key="i"
        :text="item.text"
        @click.stop="selectItem(item.id, item?.itemId, item.index)"
        :selected="item.id === selectedIndex"
        :value="item.value"
        :rightIcon="item.rightIcon || undefined"
        :leftIcon="item.leftIcon || undefined"
        :color="item.color || undefined"
        :disabled="item.disabled"/>
    </div>
  </div>
</template>
