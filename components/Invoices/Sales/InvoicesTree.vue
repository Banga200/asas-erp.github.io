<script setup>
import Search from "~/components/DesignSystem/Inputs/Search.vue";
import PagenationItems from "~/components/DesignSystem/Generals/PagenationItems.vue";
import DropDown from "~/components/DesignSystem/Inputs/DropDown.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Filter from "~/components/Icons/Filter.vue";
import Tree from "~/components/DesignSystem/Generals/Tree.vue";
const userStore = useUserStore();
const commonStore = useCommonStore();
const offerPrice = useOfferPriceStore();
const {Branches, InvoicesTree, GeneralFields} = storeToRefs(commonStore)
const {Permissions} = storeToRefs(userStore)
const items = ref([
  
]);
onMounted(async () => {
  await commonStore.GetBranches();
})
function handleTreeSelect(id) {
  let invoice = InvoicesTree.value?.data.find(item => {
    return item.gun === id
  })
  if (invoice) {
  GeneralFields.value.gun = id;
   commonStore.SetViewGeneralData(invoice);
   offerPrice.GetOfferPriceInvoiceById(id)
  }
  
}
</script>
<template>
  <div>
    <div class="treeSide">
      <!-- Search  -->
      <Search :placeholder="'رقم الفاتورة, اسم العميل'" />
      <!-- Pagenation  -->
      <PagenationItems />
      <!-- Select DropDown  -->
      <div class="row align-center  gap-10">
        <DropDown :text="'كل الفروع'" :items="Branches" :displayTitle="'name2'" :returnValue="'gun'" class="flex-grow"/>
      
        <Button :onlyIcon="true" :icon="Filter" />
      
      </div>
      <!-- Tree  -->
      <div class="tree-container" v-if="Permissions?.canView">
        <Tree v-for="(item, i) in InvoicesTree?.data" :key="i" :displayTitle="'no'" :secondaryTitle="'customer'" :returnValue="'gun'" :item="item" :noRepeat="true" :selectedFirst="true" @setItem="handleTreeSelect"/>
      </div>
    </div>
  </div>
</template>
