<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
const commonStore = useCommonStore();
const {GeneralFields,SalesMen} = storeToRefs(commonStore);
const OfferPriceStore = useOfferPriceStore();

</script>
<template>
  <div class="flex-column gap-6">
    <ComboBox :label="'اسم المندوب'" :items="SalesMen || []" :displayTitle="'name'" :returnValue="'gun'" v-model:valueReturn="GeneralFields.salesmanGUN"/>
    <div class="grid-2 gap-4 ">
      <div >
        <TextBox :label="'رقم فاتورة المندوب'" />
      </div>
      <div>
        <TextBox :label="'تاريخ الاستحقاق'" :leftIcon="Calendar" />
      </div>
    </div>
  </div>
</template>
