<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Item from "../Generals/Item.vue";
import ArrowDown from "../../Icons/Arrows/ArrowDown.vue";
const { text, leftIcon, value, color, disabled, items, label,DropArrowIcon, displayTitle, returnValue } = defineProps([
  "text",
  "leftIcon",
  'color',
  "value",
  "disabled",
  "items",
  "label",
  "displayTitle",
  "returnValue",
  'DropArrowIcon'
]);
const input = defineModel('input');
const isOpen = ref(false)
onMounted(() => {
    window.addEventListener('click', () => {
        isOpen.value = false
    }, true)
})
onUnmounted(() => {
    window.removeEventListener('click', () =>{});
})
const selectedItem = ref(false)
function setItem(value) {
    input.value = value
    selectedItem.value = value
}
</script>
<template>
  <div class="dropDown-container" :class="[{'disabled': disabled}]">
    <label v-if="label">{{ label }}</label>
    <div class="dropDown" :class="[color]" @click.stop="isOpen = !isOpen">
      <!-- Text  -->
      <span class="text">{{ selectedItem ? selectedItem :text }}</span>

      <div class="icons">
        <div class="icon">
        <component :is="leftIcon" />
      </div>
      <div class="icon">
        <component :is="DropArrowIcon ? DropArrowIcon : ArrowDown" :class="{'active-menu': isOpen}"/>
      </div>
      </div>
    </div>
    <!-- Menu  -->
    <div class="dropMenu"  v-if="isOpen">
        <Item v-for="(item) in items"
          :key="item[returnValue]"
          :text="item[displayTitle]"
          :selected="item[returnValue] === selectedItem"
          @click="setItem(item[displayTitle], item[returnValue])" />
    </div>
  </div>
</template>
