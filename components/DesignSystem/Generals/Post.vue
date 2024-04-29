<script setup>
import {ref} from 'vue';
import ArrowDown from "~/components/Icons/Arrows/ArrowDown.vue";
import Item from "./Item.vue";
const { text, color, noIcon , menu, menuItems} = defineProps(["text", "color", "noIcon", 'menu', 'menuItems']);
const isOpen = ref(false);
onMounted(() => {
  window.addEventListener("click", () => {
    isOpen.value = false;
  },true);
});
onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
</script>
<template>
  <div class="post-container" @click.stop="isOpen = true">
    <div class="post" :class="[color]">
      <span v-if="text" class="text">{{ text }}</span>
      <div class="icon" v-if="!noIcon">
        <component :is="ArrowDown" />
      </div>
    </div>
    <!-- Menu  -->
    
    <div class="dropMenu button center" v-if="menu && isOpen">
        <Item v-for="(item,i) in menuItems" :key="i" :text="item"/>
    </div>
  </div>
</template>
