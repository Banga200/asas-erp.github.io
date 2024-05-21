<script setup>
import Search from "~/components/DesignSystem/Inputs/Search.vue";
import PagenationItems from "~/components/DesignSystem/Generals/PagenationItems.vue";
import DropDown from "~/components/DesignSystem/Inputs/DropDown.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Filter from "~/components/Icons/Filter.vue";
import Tree from "~/components/DesignSystem/Generals/Tree.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import Repeat from "~/components/Icons/Repeat.vue";
import Edit from "~/components/Icons/Edit.vue";
import Delete from "~/components/Icons/Delete.vue";
import Printer from "~/components/Icons/Printer.vue";
import {useRouter, useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps([
  "SalesInvoice",
  "ReturnInvoice",
  "OfferPrice",
  "Booked",
  "isNewOrEdit"
]);
const emit = defineEmits(["clearDisabled", "setTreeOption"]);
const userStore = useUserStore();
const commonStore = useCommonStore();
const offerPriceStore = useOfferPriceStore();
const { Branches, InvoicesTree, GeneralFields } = storeToRefs(commonStore);
const { Permissions } = storeToRefs(userStore);
const items = ref([]);
const selecetedBranchId = ref("");
const search = ref("");
const buttonMenu = [];

onMounted(async () => {
  await commonStore.GetBranches();
});
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
function handleFilter(branchId) {
  if (props.OfferPrice) {
    offerPriceStore.GetOfferPriceInvoices(search.value || "", branchId, 1);
  } else if (props.ReturnInvoice) {
  } else if (props.SalesInvoice) {
  } else if (props.Booked) {
  }
}
function handleSearch() {
  handleFilter();
}
function handleBranch(branchId) {
  selecetedBranchId.value = branchId;
  handleFilter(branchId);
}
async function setButtonMenuItem(optionId, itemId, index) {
  // 3 === 'تكرار الفاتورة'
  switch (optionId) {
    case 1: //  === عرض
      if (props.isNewOrEdit) {
        openNewTab(optionId, itemId, index)
      }
      else {
        handleTreeSelect(itemId, index);
        clearSelected(index);
        localStorage.removeItem('invoice')
      }
      
      break;
    case 2:
      if (props.isNewOrEdit) {
        openNewTab(optionId, itemId, index)
      }
      else {
        offerPriceStore.GetOfferPriceInvoiceEditById(itemId);
        localStorage.removeItem('invoice')
        clearSelected(index);
      }
      
      break;
    case 3:
    if (props.isNewOrEdit) {
        openNewTab(optionId, itemId, index)
      }
      else {

        if (props.OfferPrice) {
          emit("clearDisabled");
          await offerPriceStore.GetDuplicateOffPriceInvoice(itemId);
          clearSelected(index)
          InvoicesTree.value.currentPage = index + 1;
        } else if (props.ReturnInvoice) {
        } else if (props.SalesInvoice) {
        } else if (props.Booked) {
        }
      }
   
      break;
    case 4:
      emit('deleteInvoice', itemId)
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

  emit("setTreeOption", optionId);
}
function openNewTab(optionId, itemId, index) {
  localStorage.setItem('invoice', JSON.stringify({id: optionId, itemId: itemId, index: index}))
  window.open(`#${route.path}`, '_blank');
}
async function CheckInvoiceType() {
  if (props.OfferPrice) {
    emit("clearDisabled");
    await offerPriceStore.GetDuplicateOffPriceInvoice(GeneralFields.value.gun);
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
defineExpose({
  setButtonMenuItem
})
</script>
<template>
  <div>
    <div class="treeSide">
      <!-- Search  -->
      <Search
        :placeholder="'رقم الفاتورة, اسم العميل'"
        v-model:input="search"
        @search="handleSearch"
      />
      <!-- Pagenation  -->
      <PagenationItems @setSelectedItem="handleTreeSelect" />
      <!-- Select DropDown  -->
      <div class="row align-center gap-10">
        <DropDown
          :defualtValue="'كل الفروع'"
          :items="Branches"
          :displayTitle="'name2'"
          :returnValue="'gun'"
          class="flex-grow"
          @setItem="handleBranch"
        />

        <Button :onlyIcon="true" :icon="Filter" />
      </div>
      <!-- Tree  -->
      <div class="tree-container" v-if="Permissions?.canView">
        <Tree
          v-for="(item, i) in InvoicesTree?.data"
          :key="i"
          :leftIcon="MoreDotsVertical"
          :index="i"
          :displayTitle="'no'"
          :secondaryTitle="'customer'"
          :returnValue="'gun'"
          :item="item"
          :noRepeat="true"
          :selectedFirst="true"
          @setItem="handleTreeSelect"
          @setMenuItem="setButtonMenuItem"
          :buttonMenu="[
            {
              id: 1,
              text: 'عرض',
              rightIcon: '',
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 2,
              text: 'تعديل',
              rightIcon: Edit,
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 3,
              text: 'تكرار',
              rightIcon: Repeat,
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 4,
              text: 'حذف',
              rightIcon: Delete,
              color: 'danger',
              itemId: item.gun,
              index: i,
            },
            {
              id: 5,
              text: 'طباعة',
              rightIcon: Printer,
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 6,
              text: 'تحويل لـ فاتورة مبيعات',
              rightIcon: '',
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 7,
              text: 'تحويل لـ حجز بضاعة',
              rightIcon: '',
              color: '',
              itemId: item.gun,
              index: i,
            },
            {
              id: 8,
              text: 'تحويل لـ صرف بضاعة',
              rightIcon: '',
              color: '',
              itemId: item.gun,
              index: i,
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>
