<template>
    <div class="virtual-scroller" ref="scroller" @scroll="handleScroll">
      <div ref="content" :style="{ height: totalHeight + 'px' }">
        <div v-for="(item, index) in visibleItems" :key="startIndex + index" class="virtual-item" :style="{ top: itemOffsets[index] + 'px' }">
          <!-- Render each item here -->
          <slot :item="item" :index="startIndex + index"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, reactive, onMounted, watch, defineProps } from 'vue';
  
  const props = defineProps({
    items: { type: Array, required: true },
  });
  
  const scroller = ref(null);
  const content = ref(null);
  
  const state = reactive({
    startIndex: 0,
    itemOffsets: [],
  });
  
  const totalHeight = computed(() => {
    return state.itemOffsets[state.itemOffsets.length - 1] || 0;
  });
  
  const visibleItems = computed(() => {
    const startIndex = state.startIndex;
    const endIndex = Math.min(startIndex + visibleItemCount.value - 1, props.items.length - 1);
    return props.items.slice(startIndex, endIndex + 1);
  });
  
  const visibleItemCount = computed(() => {
    return scroller.value ? Math.ceil(scroller.value.clientHeight / averageItemHeight.value) : 0;
  });
  
  const averageItemHeight = computed(() => {
    return state.itemOffsets.length > 0 ? totalHeight.value / state.itemOffsets.length : 0;
  });
  
  const handleScroll = () => {
    const scrollTop = scroller.value.scrollTop;
    const startIndex = Math.floor(scrollTop / averageItemHeight.value);
    state.startIndex = startIndex;
  };
  
  onMounted(() => {
    updateItemOffsets();
    scroller.value.addEventListener('scroll', handleScroll);
  });
  
  watch(() => props.items, () => {
    updateItemOffsets();
  });
  
  function updateItemOffsets() {
    state.itemOffsets.splice(0);
    let offset = 0;
    props.items.forEach((_, index) => {
      state.itemOffsets.push(offset);
      console.log(content.value.children)
      offset += content.value.children[index].offsetHeight || 0;
    });
  }
  </script>
  
  <style scoped>
  .virtual-scroller {
    overflow-y: auto;
    height: 100%;
    position: relative;
  }
  
  .virtual-item {
    position: absolute;
    left: 0;
    right: 0;
  }
  </style>