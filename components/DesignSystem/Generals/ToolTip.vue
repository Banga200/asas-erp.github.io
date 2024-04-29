<script setup>
const { text, position, textBox } = defineProps(["text", "position", 'textBox']);
const isTooltipVisible = ref(false);
function showTooltip() {
  isTooltipVisible.value = true;
}
function hideTooltip() {
  isTooltipVisible.value = false;
}
</script>
<template>
  <!-- <div class="tooltip" :class="[position]">
        <span>{{ text }}</span>
    </div> -->
  <div
    
    class="tooltip-container "
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot></slot>
    <div v-show="isTooltipVisible" class="tooltip-content top" :class="[position, {'show': text}]">
      {{ text }}
    </div>
  </div>
</template>
