<script setup>
import TextArea from "~/components/DesignSystem/Inputs/TextArea.vue";
import Calendar from "~/components/Icons/Calendar.vue";
const text = ref("هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،")
</script>
<template>
  <div class="flex-column gap-6">
    <TextArea  v-model:input="text" />
  </div>
</template>
  