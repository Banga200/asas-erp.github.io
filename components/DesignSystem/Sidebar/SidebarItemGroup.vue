<script setup>
import SidebarItem from "./SidebarItemGroup.vue";
import ToolTip from "../Generals/ToolTip.vue";
import SidebarArrow from "~/components/Icons/Arrows/SidebarArrow.vue";
import Lock from "~/components/Icons/Lock.vue";
import { watch, ref } from "vue";
const emit = defineEmits(["openSidebar"]);
const collapse = defineModel("collapse");
const { text, rightIcon, leftIcon, item, index, icon, lock } = defineProps([
  "text",
  "rightIcon",
  "leftIcon",
  "item",
  "index",
  "lock",
]);
const isOpen = ref(false);
const mainSelect = ref(false);
const itemSelect = ref(false);

watch(
  () => collapse.value,
  (value) => {
    if (value) {
      isOpen.value = false;
      mainSelect.value = false;
    }
  }
);

async function select() {
  emit("openSidebar");
}
</script>
<template>
  <ul
    class="sidebar-item-container"
    :class="[
      { 'main-icon': item.icon ? true : false },
      { item: item.child.length === 0 ? true : false },
    ]"
  >
    <li>
      <NuxtLink
        :to="item.child.length === 0 ? item.link : ''"
        class="side-Item"
        :id="item.text"
        :class="[
          { 'item-select': lock === false ? false : itemSelect },
          { 'no-icon': !item.icon },
          { 'lock': item?.lock === false },
        ]"
      @click="select">
        <div class="rightIcon">
          <ClientOnly>
            <ToolTip :text="item.text" :position="'left'">
              <component
                :is="rightIcon ? rightIcon : item.icon"
                v-if="item.icon || rightIcon"
              />
            </ToolTip>
          </ClientOnly>
        </div>

        <span class="text" v-if="!collapse">{{ item.text }}</span>
        <!-- if has children show the Arrow  -->
        <div v-if="item.child.length > 0 && !lock" class="leftIcon">
          <component
            :is="leftIcon ? leftIcon : SidebarArrow"
            v-if="!collapse"
          />
        </div>
        <div v-if="item?.lock === false">
          <Lock />
        </div>
      </NuxtLink>
      <!-- Nested Items  -->
      <div class="subItem">
        <SidebarItem v-for="(child, i) in item.child" :key="i" :item="child" />
      </div>
    </li>
  </ul>
</template>
