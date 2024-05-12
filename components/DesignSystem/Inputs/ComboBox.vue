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
  "clearSelected"
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
  "leftInnerIconItemText",
  "leftInnerIconItem",
  "rightIcon",
  "leftIcon",
  "badgeText",
  "noFilter",
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
  "selectItem",
]);

const focusedIndex = ref(-1);
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

watch(
  () => props.selectItem,
  (value) => {
    if (value) {
      setFirstItem(value);
    }
  }
);
let filterItem = computed(() => {
  if (props.noFilter) {
    return props.items;
  }
  if (selectedItem.value) {
    return props.items;
  } else {
    if (input.value) {
      return props.items.filter((item) => {
        return item[props.displayTitle].includes(input.value);
      });
    } else {
      return props.items;
    }
  }
  
});
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
  } else {
    inputElement.value.focus();
  }
}

function setInput(value) {
  emit("setInput", input.value, selectedItem.value);
  selectedItem.value = "";
  if (props.items) {
    isOpen.value = true
  }
  if (props.isPage) {
    emit("getItemBySearch", input.value);
  }
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
function clearInput() {
  input.value = ''
  selectedItem.value = '';
  valueReturn.value = '';
  emit('clearSelected')
}
function handleKeydown(event) {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    if (event.key === "ArrowDown") {
      focusedIndex.value = (focusedIndex.value + 1) % props.items.length;
    } else {
      focusedIndex.value =
        (focusedIndex.value - 1 + props.items.length) % props.items.length;
    }
  } else if (event.key === "Enter") {
    if (
      props.items[focusedIndex.value]?.[props.displayTitle] &&
      props.items[focusedIndex.value]?.[props.returnValue]
    ) {
      setItem(
        props.items[focusedIndex.value]?.[props.displayTitle],
        props.items[focusedIndex.value]?.[props.returnValue]
      );
    }
  }
}
function handleLinkKeydown(index) {
  focusedIndex.value = index;
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
        @keydown.exact="handleKeydown"
        tabindex="0"
        ref="inputElement"
        type="input"
        :disabled="disabled"
        :placeholder="placeholder"
        @focus.stop="focus"
        v-model="input"
        @input="setInput"
        @keydown.ctrl="openAdvanceSearch"
        :readonly="readOnly"
        class="combobox"
      />
      <div v-if="input && clearable && !disabled">
        <CloseIcon class="closeIcon" @click="clearInput" />
      </div>

      <div class="icons combobox" v-if="leftInnerIcon || badgeText">
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
    <div
      class="dropMenu"
      :class="{ virtual: props.bigData }"
      v-show="isOpen && !disabled"
    >
      <div v-if="items && !bigData">
        <Item
          v-for="item in filterItem"
          :key="item[props.returnValue]"
          :text="item[props.displayTitle]"
          :leftInnerIcon="
            item[props.leftInnerIconItemText] ? props.leftInnerIconItem : undefined
          "
          :leftInnerIconToolTip="
            item[props.leftInnerIconItemText]
              ? props.leftInnerIconToolTip
              : undefined
          "
          @mousedown.stop="
            setItem(item[props.displayTitle], item[props.returnValue])
          "
          :leftInnerIconToolTipPosition="'bottom-right'"
          :selected="item[props.returnValue] === selectedItem"
          @click.stop="
            setItem(item[props.displayTitle], item[props.returnValue])
          "
          @keydown.prevent="handleLinkKeydown(index)"
          :class="{
            focus:
              filterItem[focusedIndex]?.[props.returnValue] ===
              item[props.returnValue],
          }"
        />
        <div class="trigger" v-if="isPage">جاري جلب الأصناف...</div>
      </div>

      <DynamicScroller
        v-if="items && bigData"
        :items="filterItem"
        :keyField="returnValue"
        :min-item-size="32"
      >
        <template v-slot="{ item }">
          <Item
            :class="{
              focus:
                filterItem[focusedIndex]?.[props.returnValue] ===
                item[props.returnValue],
            }"
            :key="item[props.returnValue]"
            :text="item[props.displayTitle]"
            :selected="item[props.returnValue] === selectedItem"
            @click.stop="setItem(item[props.displayTitle], item[returnValue])"
            @keydown.prevent="handleLinkKeydown(index)"
            @mousedown.stop="
              setItem(item[props.displayTitle], item[props.returnValue])
            "
          />
        </template>
        <template v-slot:after v-if="isPage">
          <div class="trigger" v-if="items">جاري جلب الأصناف...</div>
        </template>
      </DynamicScroller>
    </div>
  </div>
</template>
