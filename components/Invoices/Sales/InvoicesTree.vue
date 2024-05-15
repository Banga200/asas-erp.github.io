<script setup>
import Search from "~/components/DesignSystem/Inputs/Search.vue";
import PagenationItems from "~/components/DesignSystem/Generals/PagenationItems.vue";
import DropDown from "~/components/DesignSystem/Inputs/DropDown.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Filter from "~/components/Icons/Filter.vue";
import Tree from "~/components/DesignSystem/Generals/Tree.vue";
const { SalesInvoice, ReturnInvoice, OfferPrice, Booked } = defineProps([
  "SalesInvoice",
  "ReturnInvoice",
  "OfferPrice",
  "Booked",
]);
const userStore = useUserStore();
const commonStore = useCommonStore();
const offerPriceStore = useOfferPriceStore();
const {Branches, InvoicesTree, GeneralFields} = storeToRefs(commonStore)
const {Permissions} = storeToRefs(userStore)
const items = ref([
  
]);
const selecetedBranchId = ref('')
const search = ref('')
onMounted(async () => {
  await commonStore.GetBranches();
})
function handleTreeSelect(id, index) {
  let invoice = InvoicesTree.value?.data.find(item => {
    return item.gun === id
  })
  if (invoice) {
  GeneralFields.value.gun = id;
   commonStore.SetViewGeneralData(invoice);
   InvoicesTree.value.currentPage = index + 1
  }
  if (OfferPrice) {
    offerPriceStore.GetOfferPriceInvoiceItemsById(id);
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
}
function handleFilter(branchId) {
  
  if (OfferPrice) {
    offerPriceStore.GetOfferPriceInvoices(search.value || '',branchId, 1)
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
}
function handleSearch() {
  handleFilter()
}
function handleBranch(branchId) {
  selecetedBranchId.value = branchId
  handleFilter(branchId)
}
</script>
<template>
  <div>
    <div class="treeSide">
      <!-- Search  -->
      <Search :placeholder="'رقم الفاتورة, اسم العميل'" v-model:input="search" @search="handleSearch"/>
      <!-- Pagenation  -->
      <PagenationItems @setSelectedItem="handleTreeSelect"/>
      <!-- Select DropDown  -->
      <div class="row align-center  gap-10">
        <DropDown :defualtValue="'كل الفروع'" :items="Branches" :displayTitle="'name2'" :returnValue="'gun'" class="flex-grow" @setItem="handleBranch"/>
      
        <Button :onlyIcon="true" :icon="Filter" />
      
      </div>
      <!-- Tree  -->
      <div class="tree-container" v-if="Permissions?.canView">
        <Tree v-for="(item, i) in InvoicesTree?.data" :key="i" :index="i" :displayTitle="'no'" :secondaryTitle="'customer'" :returnValue="'gun'" :item="item" :noRepeat="true" :selectedFirst="true" @setItem="handleTreeSelect"/>
      </div>
    </div>
  </div>
</template>
