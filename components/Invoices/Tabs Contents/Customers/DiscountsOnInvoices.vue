<script setup>
import TextBox from '~/components/DesignSystem/Inputs/TextBox.vue';
</script>
<template>
  <div class="grid-2">
    <div>
      <TextBox :label="'نسبة خصم في الفواتير النقدية ( % )'" />
    </div>
    <div>
      <TextBox :label="'نسبة خصم في الفواتير الآجلة ( % ) '" />
    </div>
  </div>
</template>
