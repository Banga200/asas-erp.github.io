<script setup>
import CircleClose from '~/components/Icons/CircleClose.vue';
import Crown from '~/components/Icons/Crown.vue';
const  {text,color,rightIcon,leftIcon, size} = defineProps(['text','color', 'rightIcon', 'leftIcon', 'size'])
</script>
<template>
    <div class="badge" :class="[color, size]">
          <!-- Right Icon  -->
          <div class="icon" v-if="rightIcon">
            <component :is="rightIcon"/>
          </div>
          <!-- Text  -->
          <span class="text">{{ text }}</span>
          <!-- Left Icon  -->
          <div class="icon" v-if="leftIcon">
            <CircleClose/>
          </div>
    </div>
</template>