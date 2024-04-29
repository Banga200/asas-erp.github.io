<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";

const { isSalesInvoice, isReturnInvoice, isOfferPrice, isBooked, Details } = defineProps(
  ["isSalesInvoice", "isReturnInvoice", "isOfferPrice", "isBooked", "Details"]
);

</script>
<template>
  <!-- Sales Invocie  -->
  
  <div class="grid-3 gap-4" v-if="isSalesInvoice">
    
    <div>
      
      <TextBox :label="'عدد الاصناف'" :readOnly="true" />
    </div>
    <div>
      <TextBox :label="'عدد الكميات'" :readOnly="true" />
    </div>
    <div>
      <TextBox :label="'الوزن'" :readOnly="true" />
    </div>
    <div>
      <TextBox :label="'تاريخ التسليم'" :readOnly="true" v-model:input="Details.deliveryDate"/>
    </div>
    <div>
      <TextBox :label="'الوقت'" :readOnly="true" v-model:input="Details.time"/>
    </div>
    <div>
      <TextBox :label="'اليوم'" :readOnly="true" v-model:input="Details.today"/>
    </div>
  </div>
  <div class="grid-3 gap-4" v-if="isReturnInvoice || isOfferPrice">
    <div>
      <TextBox :label="'عدد الاصناف'" :readOnly="true" v-model:input="Details.itemsCount"/>
    </div>
    <div>
      <TextBox :label="'عدد الكميات'" :readOnly="true" v-model:input="Details.quantityCount"/>
    </div>
    <div>
      <TextBox :label="'الوزن'" :readOnly="true" v-model:input="Details.weight"/>
    </div>
  </div>
  <div class="col-12 mt-8" v-if="isReturnInvoice">
    <TextBox :label="'سبب الارتجاع'" :readOnly="true"  />
  </div>
</template>
