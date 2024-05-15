<script setup>
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import Info from "~/components/Icons/Info.vue";
const commonStore = useCommonStore();
const offerPriceStore = useOfferPriceStore();
const { Customers, Customer, CustomerDiscount, EditCustomerGun } = storeToRefs(commonStore);
const customerId = ref('');
const {customerValidation, isDisplay, isEdit} = defineProps(['customerValidation', 'isDisplay', "isEdit"])
const emit = defineEmits(['customerHasDiscount'])
function checkNameChange(inputValue) {
  Customer.value.isSuspend  = false;
  Customer.value.gun  = '';
}
function clear() {
   commonStore.ClearCustomer();
}
function hasDiscount(customerID, index) {
  const selectedCustomer = Customers.value.find(item => {
    return item.gun === customerID
  })
  Customer.value.isSuspend = selectedCustomer.isSuspend
  Customer.value.gun = customerID;
  emit('customerHasDiscount', customerID, index)
}
</script>
<template>
  <div class="flex-column pr-8 pl-8 gap-6">
    <div class="row flex-column-end gap-6">
     
      <ComboBox
        v-model:valueReturn="Customer.gun"
        :label="'العميل'"
        :clearable="true"
        :color="Customer.gun !== EditCustomerGun ? (Customer.isSuspend || customerValidation) ? 'danger' : undefined : undefined"
        :leftInnerIconItemText="'isSuspend'"
        :leftInnerIconItem="Info"
        :leftInnerIcon="Customer.isSuspend ? Info: ''"
        :leftInnerIconToolTip="'هذا العميل موقف'"
        :leftInnerIconToolTipPosition="'bottom'"
        class="flex-grow"
        :items="Customers || []"
        :displayTitle="'name'"
        :returnValue="'gun'"
        :selectItem="EditCustomerGun"
        :disabled="isDisplay"
        v-model:input="Customer.name"
        @clearSelected="clear"
        @setInput="checkNameChange"
        @setItem="hasDiscount"/>
      <Button
        :onlyIcon="true"
        :color="'neutral'"
        :icon="MoreDotsVertical"
        :disabled="isDisplay"
      />
    </div>
    <div class="grid-2 gap-6">
      <div>
        <TextBox :label="'الرقم الضريبي'" v-model:input="Customer.tin" :type="'number'" :readOnly="Customer.gun || Customer.no ? true : false"/>
      </div>
      <div>
        <TextBox :label="'رقم الجوال '" v-model:input="Customer.mobile" :type="'number'" :readOnly="Customer.gun || Customer.no? true : false"/>
      </div>
    </div>
    <div class="grid-2 gap-6">
      <div>
        <TextBox :label="'حد المديونية'" :readOnly="true"  :type="'number'"/>
      </div>
      <div>
        <TextBox :label="'الرصيد المدين '" :readOnly="true"  :type="'number'"/>
      </div>
    </div>
  </div>
 
</template>
