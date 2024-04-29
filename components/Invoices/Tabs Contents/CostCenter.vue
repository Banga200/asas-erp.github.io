<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
</script>
<template>
  <div class="flex-column gap-6">
    <ComboBox :label="'مركز التكلفة'" />
    <div class="grid-2 gap-6">
      <div >
        <ComboBox :label="'إحتساب الضريبة '" />
      </div>
      <div>
        <TextBox :label="'تاريخ الاستحقاق'" :leftIcon="Calendar" />
      </div>
    </div>
  </div>
</template>
