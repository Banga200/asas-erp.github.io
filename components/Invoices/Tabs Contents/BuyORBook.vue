<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
</script>
<template>
    <div class="grid-2 gap-4 ">
      <div >
        <ComboBox :label="'تاريخ الاستحقاق'" />
      </div>
      <div>
        <TextBox :label="'رقم السند'" :leftIcon="Calendar" />
      </div>
    </div>
</template>
