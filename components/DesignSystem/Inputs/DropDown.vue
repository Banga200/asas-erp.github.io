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
  "defualtValue",
  "selectItem",
  'DropArrowIcon'
]);
const valueReturn = defineModel('valueReturn');
const isOpen = ref(false);
const inputElement = ref(null);
const ulMenu = ref(null)
watch(
  () => props.items,
  (value) => {
    if (value) {
      if (value.length > 0) {
        if (props.selectFirstItem) {
          setFirstItem(value[0]);
        }
      }
    }
  }
);
watch(
  () => props.selectItem,
  (value) => {
    if (value) {
      let item = props.items.find(item => {
      return item[props.returnValue] === props.selectItem
      })
      if (item) {
        selectedItem.value = item[props.displayTitle]
        valueReturn.value = item[props.returnValue]
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
  if (selectedItem.value !== text) {
    valueReturn.value = value
    selectedItem.value = text,
    emit("setItem", value, index);
  }
  
}
function setFirstItem(item) {
  selectedItem.value = item[props.displayTitle];
  valueReturn.value = item[props.returnValue];
  if (item[props.returnValue] !== valueReturn.value) {
    emit("setItem", item[props.returnValue], 0);
  }
  
}
function openDropmenu() {
  isOpen.value = !isOpen.value;
  var dropdownPosition = inputElement.value.getBoundingClientRect();
  ulMenu.value.style.left = dropdownPosition.x  +  'px';
  ulMenu.value.style.top = dropdownPosition.y + 1 + inputElement.value.offsetHeight + 'px' ;
  ulMenu.value.style.width = dropdownPosition.width  +  'px';
}
</script>
<template>
  <div class="dropDown-container" :class="[{'disabled': disabled}]">
    <label v-if="label">{{ label }}</label>
    <div class="dropDown" :class="[color, {'white': white}, size, {'focus': isOpen}]" @click.stop="openDropmenu"  ref="inputElement">
      <!-- Text  -->
      <span class="text">{{ selectedItem ? selectedItem : defualtValue }}</span>

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
    <div class="dropMenu"  v-show="isOpen" ref="ulMenu">
        <Item @click="setItem(props.defualtValue, '')" :text="props.defualtValue" v-if="props.defualtValue">
          
        </Item>
        <Item v-for="(item,i) in props.items"
          :key="item[returnValue]"
          :text="item[displayTitle]"
          :selected="item[displayTitle] === selectedItem"
          @click="setItem(item[displayTitle], item[returnValue], i)" />
    </div>
  </div>
</template>
