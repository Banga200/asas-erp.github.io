<script setup>
import Invoice from '~/components/Invoices/Invoice.vue';
import {useSalesStore} from '~/stores/sales-system/sales';
const salesStore = useSalesStore();
salesStore.GetItems();
definePageMeta({
  // name: 'Sales Invoice page',
  userAccess: 'canAccessSalesInvoice',
  moduleId: 412
})
useHead({
  title: "فاتورة مبيعات"
})
</script>
<template>
  <Invoice :SalesInvoice="true"/>
</template>