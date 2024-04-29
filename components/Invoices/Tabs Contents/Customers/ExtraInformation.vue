<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
</script>
<template>
  <div class="grid-4">
    <div >
      <TextBox :label="'البلد'" />
    </div>
    <div >
      <TextBox :label="'المنطقة'" />
    </div>
    <div >
      <TextBox :label="'المدينة'" />
    </div>
    <div >
      <TextBox :label="'الحي'" />
    </div>
    <div >
      <TextBox :label="'الشارع الرئيسي'" />
    </div>
    <div >
      <TextBox :label="'الشارع الفرعي'" />
    </div>
    <div >
      <TextBox :label="'رقم المبنى'" />
    </div>

    <div >
      <TextBox :label="'الرمز البريدي'" />
    </div>
    <div >
      <TextBox :label="'الرمز الإضافي'" />
    </div>
    <div >
      <TextBox :label="' ص . ب'" />
    </div>
    <div >
      <TextBox :label="'الهاتف'" />
    </div>
    <div >
      <TextBox :label="'الجوال'" />
    </div>
    <div class="grid-3 item">
        <div >
      <TextBox :label="'الفاكس'" />
    </div>
    <div  >
      <TextBox :label="'البريد الإلكتروني'" />
    </div>
    <div >
      <TextBox :label="'الموقع الإلكتروني'" />
    </div>
    </div>
  </div>
</template>
