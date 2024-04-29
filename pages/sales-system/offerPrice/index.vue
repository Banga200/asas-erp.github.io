<script setup>
import Invoice from '~/components/Invoices/Invoice.vue';
import {onUnmounted} from "vue";
const commonStore = useCommonStore();
// commonStore.GetBranches();
// const {Branches} = storeToRefs(commonStore)
definePageMeta({
  userAccess: "canAccessOfferPrice",
  moduleId: 411,
  DocOrder: 6
})
useHead({
  title: "عرض سعر"
})
onUnmounted(() => {
  commonStore.ClearEverythings();
})
</script>
<template>
    <Invoice :OfferPrice="true" />
</template>