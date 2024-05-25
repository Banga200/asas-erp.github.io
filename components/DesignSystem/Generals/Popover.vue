<script setup>
const props = defineProps(["text", "position", 'textBox',"isHover", 'show', 'disableOnclick', 'color', "fullWidth"]);
const isTooltipVisible = ref(false);
const isHover = ref(false);
function showTooltip() {
  if (props.isHover) {
    isHover.value = true;
  }
}
function hideTooltip() {
  if (props.isHover) {
    isHover.value = false;
  }
}
function showPopover() {
  if (!props.disableOnclick) {
    isTooltipVisible.value  = !isTooltipVisible.value 
  }
  
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
  });
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
    @click.stop="showPopover"
    @mouseenter="showTooltip()" @mouseleave="hideTooltip()">
    <slot></slot>
    <div v-show="isTooltipVisible || isHover" class="tooltip-content  popover top" :class="[props.position, {'show': isTooltipVisible}, {'white': props.color}, {'w-100': props.fullWidth}]" >
      <slot  name="content" ></slot>
    </div>
  </div>
</template>
