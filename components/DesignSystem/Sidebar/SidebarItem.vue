<script setup>
import ToolTip from "../Generals/ToolTip.vue";
import Lock from "~/components/Icons/Lock.vue";
const { text, rightIcon, leftIcon, item,link, index, icon, lock } = defineProps([
  "text",
  "rightIcon",
  "leftIcon",
  "item",
  "index",
  "lock",
  'link'
]);
const collapse = defineModel("collapse");
function showSidebar() {
  collapse.value = false
}
</script>
<template>
  <ul class="sidebar-item-container single-item">
    <li>
      <NuxtLink :to="link" class="side-Item " :class="[{ 'lock': lock }]" >
        <div class="rightIcon" @click="showSidebar">
          <ToolTip :text="text" :position="'left'">
            <component :is="rightIcon" v-if="rightIcon" />
          </ToolTip>
        </div>

        <span class="text" v-if="!collapse">{{ text }}</span>
        <div v-if="lock">
          <Lock />
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
