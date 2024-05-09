<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Item from "../Generals/Item.vue";
import ArrowDown from "../../Icons/Arrows/ArrowDown.vue";
const emit = defineEmits([
  "setItem",
]);
const props = defineProps([
  "text",
  "leftIcon",
  'color',
  "value",
  "disabled",
  "items",
  "white",
  'size',
  "label",
  "displayTitle",
  "returnValue",
  "selectFirstItem",
  'DropArrowIcon'
]);
const valueReturn = defineModel('valueReturn');
const isOpen = ref(false);
watch(
  () => props.items,
  (value) => {
    console.log()
    if (value) {
      if (value.length > 0) {
        if (props.selectFirstItem) {
          setFirstItem(value[0]);
        }
      }
    }
  }
);
onMounted(() => {
    window.addEventListener('click', () => {
        isOpen.value = false
    }, true)
})
onUnmounted(() => {
    window.removeEventListener('click', () =>{});
})
const selectedItem = ref(false)
function setItem(text, value, index) {
  valueReturn.value = value
  selectedItem.value = text,
  emit("setItem", value, index);
}
function setFirstItem(item) {
  selectedItem.value = item[props.displayTitle];
  valueReturn.value = item[props.returnValue];
  emit("setItem", item[props.returnValue], 0);
}
</script>
<template>
  <div class="dropDown-container" :class="[{'disabled': disabled}]">
    <label v-if="label">{{ label }}</label>
    <div class="dropDown" :class="[color, {'white': white}, size, {'focus': isOpen}]" @click.stop="isOpen = !isOpen">
      <!-- Text  -->
      <span class="text">{{ selectedItem ? selectedItem : text }}</span>

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
        <Item v-for="(item,i) in props.items"
          :key="item[returnValue]"
          :text="item[displayTitle]"
          :selected="item[displayTitle] === selectedItem"
          @click="setItem(item[displayTitle], item[returnValue], i)" />
    </div>
  </div>
</template>
