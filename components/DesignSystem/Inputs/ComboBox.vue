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
const ulMenu = ref(null);
const emit = defineEmits([
  "openAdvanceSearchModel",
  "getMoreItems",
  "getItemBySearch",
  "setInput",
  "setItem",
  "clearSelected",
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
  "rightTitle",
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
  "inputToolTipText",
  "inputToolTipPosition",
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
      setSelectItem(value);
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
      if (isOpen.value) {
        return props.items.filter((item) => {
          return item[props.displayTitle]?.includes(input.value);
        });
      }
      return props.items;
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
// أذا أختار صنف من القائمة 
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
// في حالة أدخل نص يدوي 
function setInput(value) {
  emit("setInput", input.value, selectedItem.value);
  selectedItem.value = "";
  if (props.items) {
    isOpen.value = true;
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
  var dropdownPosition = inputElement.value.getBoundingClientRect();
  ulMenu.value.style.left = dropdownPosition.x - 22 + "px"; // 22 يأخذ مساحة حقل الInput بالضبط فيكون ناقص شوي فلازم تخليه قريب من العرض(width)
  ulMenu.value.style.top = 
    dropdownPosition.y + 1 + inputElement.value.offsetHeight + "px"; // رقم واحد عشان ينزل تحت الborder اذا حذفناه يغطي الborder bottom
  ulMenu.value.style.width = dropdownPosition.width + 20 + "px";
  isOpen.value = true;
}
function openAdvanceSearch() {
  if (!input.value) {
    generalStore.setIsCtrlPressed();
  }
}
function setFirstItem(item) {
  input.value = item[props.displayTitle] 
  selectedItem.value = item[props.returnValue];
  valueReturn.value = item[props.returnValue];
  emit("setItem", item[props.returnValue], props.index);
}
function clearInput() {
  input.value = "";
  selectedItem.value = "";
  valueReturn.value = "";
  emit("clearSelected");
}
function handleKeydown(event) {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    if (event.key === "ArrowDown") {
      focusedIndex.value = (focusedIndex.value + 1) % filterItem.value.length;
      // ulMenu.scrollTop += ulMenu.offsetHeight / 5;
      ulMenu.value.querySelectorAll('ul')[focusedIndex.value]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // stickScroll(focusedIndex.value)
    } else {
      focusedIndex.value =
        (focusedIndex.value - 1 + filterItem.value.length) % filterItem.value.length;
        
      ulMenu.value.querySelectorAll('ul')[focusedIndex.value]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // stickScroll(focusedIndex.value)
    }
  } else if (event.key === "Enter") {
    if (
      filterItem.value[focusedIndex.value]?.[props.displayTitle] &&
      filterItem.value[focusedIndex.value]?.[props.returnValue]
    ) {
      setItem(
        filterItem.value[focusedIndex.value]?.[props.displayTitle],
        filterItem.value[focusedIndex.value]?.[props.returnValue]
      );
      isOpen.value = false;
    }
    else {
        
        if(!selectedItem.value && focusedIndex.value === -1) {
          setFirstItem(filterItem.value[0])
          isOpen.value = false;
        }
       
      
    }
  }
}
function setSelectItem(value) {
  selectedItem.value = value;
}
// function stickScroll(index) {
//   const itemElement = ulMenu.value.querySelectorAll(".item-container")[index];
//   const itemTop = itemElement.offsetTop;
//   const itemHeight = itemElement.offsetHeight;
//   const menuHeight = ulMenu.value.clientHeight;
//   itemElement.focus();
//   const scrollTop = Math.max(0, itemTop - (menuHeight - itemHeight) / 2);
//   ulMenu.value.scrollTop = scrollTop
// }
function handleLinkKeydown(index) {
  focusedIndex.value = index;
}
</script>
<template>
  <div
    class="input-group"
    :class="{ 'full-width': fullWidth }"
    
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
      @click.stop="focus"
    >
    <ToolTip :text="inputToolTipText" :position="inputToolTipPosition"  :textBox="Boolean(inputToolTipText)" v-move-next-on-enter>
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
    </ToolTip>
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
      class="dropMenu combobox"
      :class="{ virtual: props.bigData }"
      v-show="isOpen && !disabled"
      ref="ulMenu"
      @keydown="handleKeydown"
    >
      <div v-if="items && !bigData">
        <Item
          tabindex="0"
          v-for="item in filterItem"
          :rightText="props.rightTitle ? `${item[props.rightTitle]} >>`: ''"
          :key="item[props.returnValue]"
          :text="item[props.displayTitle]"
          :leftInnerIcon="
            item[props.leftInnerIconItemText]
              ? props.leftInnerIconItem
              : undefined
          "
          :leftInnerIconToolTip="
            item[props.leftInnerIconItemText]
              ? props.leftInnerIconToolTip
              : undefined
          "
          @click.stop="
            setItem((props.rightTitle ? `${item[props.rightTitle]} >> `: '') + item[props.displayTitle] , item[props.returnValue])
          "
          :leftInnerIconToolTipPosition="'bottom-right'"
          :selected="item[props.returnValue] === selectedItem"
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
        ref="ulMenu"
        v-if="items && bigData"
        :items="filterItem"
        :keyField="returnValue"
        :min-item-size="32"
      >
        <template v-slot="{ item }">
          <Item
          :rightText="props.rightTitle ? `${item[props.rightTitle]} >>` : ''"
            tabindex="0"
            :class="{
              focus:
                filterItem[focusedIndex]?.[props.returnValue] ===
                item[props.returnValue],
            }"
            :key="item[props.returnValue]"
            :text="item[props.displayTitle]"
            :selected="item[props.returnValue] === selectedItem"
            @click.stop="
              setItem((props.rightTitle ? `${item[props.rightTitle]} >> `: '') + item[props.displayTitle] , item[props.returnValue])
            "
            @keydown.prevent="handleLinkKeydown(index)"
          />
        </template>
        <template v-slot:after v-if="isPage">
          <div class="trigger" v-if="items">جاري جلب الأصناف...</div>
        </template>
      </DynamicScroller>
    </div>
  </div>
</template>
