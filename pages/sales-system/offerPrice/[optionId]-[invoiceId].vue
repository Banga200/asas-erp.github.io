<script setup>
import Invoice from '../../../components/Invoices/Invoice.vue';
import {useRoute} from 'vue-router';
import {useOfferPriceStore} from "~/stores/sales-system/offerPrice"
const offerPriceStore = useOfferPriceStore();
const route = useRoute();
definePageMeta({
  userAccess: "canAccessOfferPrice",
  moduleId: 411,
  DocOrder: 6
})
useHead({
  title: "عرض سعر"
})
onMounted(async() => {
    const params = route.params;
    switch (params.id) {
    case 1: //  === عرض
        handleTreeSelect(params.invoiceId, index);
        clearSelected(index);
         break;
    case 2:
      offerPriceStore.GetOfferPriceInvoiceEditById(params.invoiceId);
      break;
    case 3:
    if (props.OfferPrice) {
      emit("clearDisabled");
      await offerPriceStore.GetDuplicateOffPriceInvoice(params.invoiceId);
      clearSelected(index)
      InvoicesTree.value.currentPage = index + 1;
      } else if (props.ReturnInvoice) {
      } else if (props.SalesInvoice) {
      } else if (props.Booked) {
      }
      break;
    case 4:
      emit('deleteInvoice', params.invoiceId)
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
  }
})
function handleTreeSelect(id, index) {
  let invoice = InvoicesTree.value?.data.find((item) => {
    return item.gun === id;
  });
  if (invoice) {
    GeneralFields.value.gun = id;
    commonStore.SetViewGeneralData(invoice);
    InvoicesTree.value.currentPage = index + 1;
  }
  if (props.OfferPrice) {
    offerPriceStore.GetOfferPriceInvoiceItemsById(id);
  } else if (props.ReturnInvoice) {
  } else if (props.SalesInvoice) {
  } else if (props.Booked) {
  }
}
function clearSelected(index) {
  let items = document.querySelectorAll(".tree li .item-row");
  items.forEach(item => {
    item.classList.remove('selected')
  })

  items[index].classList.add("selected")
}
</script>
<template>
    <Invoice :OfferPrice="true"/>
</template>