<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
const commonStore = useCommonStore();
const {Customer} = storeToRefs(commonStore)
</script>
<template>
  <div class="flex-column gap-6 pl-8 pr-8">
    <div class="grid-4 gap-4">
      <div >
        <TextBox :label="'البلد'" v-model:input="Customer.country" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div>
        <TextBox :label="'المنطقة'" v-model:input="Customer.area" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div>
        <TextBox :label="'المدينة'" v-model:input="Customer.city" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div>
        <TextBox :label="'الحي'" v-model:input="Customer.neighborhood" :readOnly="Customer.gun ? true : false"/>
      </div>
    </div>
    <div class="grid-3 gap-4 ">
      <div >
        <TextBox :label="'الشارع الرئيسي'" v-model:input="Customer.street" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div >
        <TextBox :label="'رقم المبنى'" v-model:input="Customer.buildingNo" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div>
        <TextBox :label="'الرمز البريدي'"  v-model:input="Customer.postelCode" :readOnly="Customer.gun ? true : false"/>
      </div>
    </div>
    <div class="grid-3 gap-4 ">
      <div >
        <TextBox :label="'الرمز الاضافي'" v-model:input="Customer.additionalCode" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div >
        <TextBox :label="'ص.ب'" v-model:input="Customer.fax" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div >
        <TextBox :label="'الهاتف الثابت'" v-model:input="Customer.phone" :type="'number'" :readOnly="Customer.gun ? true : false"/>
      </div>
      <div >
        <TextBox :label="'الفاكس'" v-model:input="Customer.fax" :type="'number'" :readOnly="Customer.gun ? true : false"/>
      </div>
    </div>
  </div>
</template>
