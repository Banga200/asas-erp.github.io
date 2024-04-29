<script setup>
const props = defineProps(["text", "position", 'textBox', 'show']);
const isTooltipVisible = ref(false);
function showTooltip() {
  isTooltipVisible.value = true;
}
function hideTooltip() {
  isTooltipVisible.value = false;
}
watch(() => props.show, (value) => {
    if (value) {
        isTooltipVisible.value = true
    }
    else {
        isTooltipVisible.value = false
    }
})
onMounted(() => {
  window.addEventListener("click", () => {
    isTooltipVisible.value = false;
  }, true);
});
onUnmounted(() => {
  window.removeEventListener("click", () => {});
});
</script>
<template>
  <!-- <div class="tooltip" :class="[position]">
        <span>{{ text }}</span>
    </div> -->
  <div
    
    class="tooltip-container "
    @click.capture="isTooltipVisible = !isTooltipVisible"
  >
    <slot></slot>
    <div v-show="isTooltipVisible" class="tooltip-content top" :class="[props.position, {'show': isTooltipVisible}]">
      <slot  name="content"></slot>
    </div>
  </div>
</template>
