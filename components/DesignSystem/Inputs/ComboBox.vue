<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import ToolTip from "../Generals/ToolTip.vue";
import Badge from "../Generals/Badge.vue";
import ArrowDown from "~/components/Icons/Arrows/ArrowDown.vue";
import Item from "../Generals/Item.vue";
import CloseIcon from "~/components/Icons/Close.vue";
import { useGeneralStore } from "~/stores/general";
import { DynamicScroller } from "vue-virtual-scroller";
const generalStore = useGeneralStore();
const { isCtrlPressed } = storeToRefs(generalStore);
const emit = defineEmits([
  "openAdvanceSearchModel",
  "getMoreItems",
  "getItemBySearch",
  "setInput",
  "setItem",
]);
const input = defineModel("input");
const valueReturn = defineModel("valueReturn");
const selectedItem = ref("");
const search = ref("");
const props = defineProps([
  "label",
  "color",
  "items",
  "index",
  "displayTitle",
  "disabled",
  "background",
  "returnValue",
  "placeholder",
  "bigData",
  "clearable",
  "readOnly",
  "leftInnerIconValue",
  "rightIcon",
  "leftIcon",
  "badgeText",
  "size",
  "isPage",
  "fullWidth",
  "selectFirstItem",
  "badgeColor",
  "leftInnerIcon",
  "leftIconToolTip",
  "leftIconToolTipPosition",
  "leftInnerIconToolTip",
  "leftInnerIconToolTipPosition",
  "DropArrowIcon",
  "selectItem"
]);

const inputElement = ref(null);
const isOpen = ref(false);
let observer = null;
onMounted(() => {
  window.addEventListener(
    "click",
    () => {
      isOpen.value = false;
    },
    true
  );
  observeTrigger();
});
onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
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
watch(input, (newValue) => {
  if (newValue === "") {
    selectedItem.value = "";
    valueReturn.value = "";
  }
});
watch(() => props.selectItem, (value) => {
  if (value) {
    setFirstItem(value)
  }
})
function observeTrigger() {
  observer = new IntersectionObserver(
    (entity) => {
      if (entity[0].isIntersecting) {
        emit("getMoreItems");
      }
    },
    {
      threshold: 0,
    }
  );
  const triggers = document.querySelectorAll(".trigger");
  triggers.forEach((element) => {
    observer.observe(element);
  });
}
function setItem(text, value) {
  if (selectedItem.value !== value) {
    selectedItem.value = value;
    valueReturn.value = value;
    input.value = text;
    inputElement.value.focus();
    emit("setItem", value, props.index);
  }
}

function setInput(value) {
  input.value = value;
  emit("setInput", value);
  if (value === "") {
    selectedItem.value = "";
  }

  emit("getItemBySearch", input.value);
}
function unfocus() {
  setTimeout(() => {
    isOpen.value = false;
  }, 100);
}
function focus() {
  isOpen.value = true;
}
function openAdvanceSearch() {
  if (!input.value) {
    generalStore.setIsCtrlPressed();
  }
}
function setFirstItem(item) {
  input.value = item[props.displayTitle];
  selectedItem.value = item[props.returnValue];
  valueReturn.value = item[props.returnValue];
  emit("setItem", item[props.returnValue], props.index);
}
</script>
<template>
  <div
    class="input-group"
    :class="{ 'full-width': fullWidth }"
    v-move-next-on-enter
    @focusout.stop="unfocus"
  >
    <label v-if="label">{{ label }}</label>
    <div
      class="input-container"
      :class="[
        size,
        color,
        background,
        { disabled: disabled },
        { readonly: readOnly },
      ]"
      @click.stop="isOpen = !isOpen"
    >
      <input
        ref="inputElement"
        type="input"
        :disabled="disabled"
        :placeholder="placeholder"
        @focus.stop="focus"
        v-model="input"
        @keydown.ctrl="openAdvanceSearch"
        :readonly="readOnly"
        @input="setInput($event.target.value)"
      />
      <div class="icon" @click="clearInput" v-if="clearable">
        <CloseIcon class="closeIcon" />
      </div>

      <div class="icons" v-if="leftInnerIcon || badgeText">
        <Badge :text="badgeText" v-if="badgeText" :color="badgeColor" />
        <!-- Left Inner Icon  -->
        <ToolTip
          :text="leftInnerIconToolTip"
          :position="leftInnerIconToolTipPosition"
        >
          <component :is="leftInnerIcon" />
        </ToolTip>
        <!-- Left Icon  -->
        <!-- <ToolTip :text="leftIconToolTip" :position="leftIconToolTipPosition">
          <component :is="leftIcon" />
        </ToolTip> -->
      </div>
      <div class="icon">
        <component
          :is="DropArrowIcon ? DropArrowIcon : ArrowDown"
          :class="{ 'active-menu': isOpen && !disabled }"
        />
      </div>
    </div>
    <!-- Menu  -->
    <div class="dropMenu virtual" v-show="isOpen && !disabled">
      <div v-if="items && !bigData">
          <Item
          v-for="(item) in items"
          :key="item[props.returnValue]"
          :text="item[props.displayTitle]"
          :leftInnerIcon="item[props.leftInnerIconValue] ? leftInnerIcon : undefined"
          :leftInnerIconToolTip="item[props.leftInnerIconValue] ? leftInnerIconToolTip : undefined"
          :leftInnerIconToolTipPosition="'bottom-right'"
          :selected="item[props.returnValue] === selectedItem"
          @click="setItem(item[props.displayTitle], item[props.returnValue])"
        />
        <div class="trigger" v-if="isPage">جاري جلب الأصناف...</div>
      </div>
      
          
      <DynamicScroller
        v-if="items && bigData"
        :items="items"
        :keyField="returnValue"
        :min-item-size="32"
      >
        <template v-slot="{ item }">
          <Item
            :key="item[props.returnValue]"
            :text="item[props.displayTitle]"
            :selected="item[props.returnValue] === selectedItem"
            @click="setItem(item[props.displayTitle], item[returnValue])"
          />
        </template>
        <template v-slot:after v-if="isPage">
          <div class="trigger" v-if="items">جاري جلب الأصناف...</div>
        </template>
      </DynamicScroller>
    </div>
  </div>
</template>
