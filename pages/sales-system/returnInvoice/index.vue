<script setup>
import Invoice from '~/components/Invoices/Invoice.vue';
definePageMeta({
  userAccess: 'canAccessSalesReturnInvoice',
  moduleId: 413
  // middleware: ['access']
})
</script>
<template>
    <Invoice :ReturnInvoice="true"/>
</template>