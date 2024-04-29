<script setup>
import Invoice from '~/components/Invoices/Invoice.vue';
definePageMeta({
  name: 'ReturnInvoice',
  userAccess: 'canAccessSalesReturnInvoice',
  moduleId: 413
  // middleware: ['access']
})
</script>
<template>
    <Invoice :ReturnInvoice="true"/>
</template>