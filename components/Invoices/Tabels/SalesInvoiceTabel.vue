<script setup>
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import Sort from "~/components/Icons/Sort.vue";
import Percent from "~/components/Icons/Percent.vue";
import Delete from "~/components/Icons/Delete.vue";
import Info from "~/components/Icons/Info.vue";
import Dialog from "~/components/DesignSystem/Generals/Dialog.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import { useSalesStore } from "~/stores/sales-system/sales";
import Statment from "~/components/Icons/Statment.vue";
import Convert from "~/components/Icons/Convert.vue";
import Insert from "~/components/Icons/Insert.vue";
import Search from "~/components/Icons/Inputs/Search.vue";
import Model from "~/components/DesignSystem/Generals/Model.vue";
import AlternativeItems from "../Models/AlternativeItems.vue";
import Popover from "~/components/DesignSystem/Generals/Popover.vue";
import { useRoute } from "vue-router";
import { isNumber } from "~/node_modules/@intlify/shared/dist/shared";
const route = useRoute();
const dialog = ref(false);
const props = defineProps(["recalculate", "itemValidation", "isEdit"]);
const emit = defineEmits([
  "setInvoiceFooter",
  "restRecalculate",
  "recalculateTotalDiscount",
  "clearValidation",
  "showAlternativeItems",
  "calculate",
  
]);
const {toDouble} = useCalculateNumbers()
const salesStore = useSalesStore();
const commonStore = useCommonStore();
const priceTitle = ref("");
const {
  NewItems,
  Units,
  Items,
  Warehouses,
  ItemDetails,
  GeneralFields,
  PriceType,
  IsDetailsOnly
} = storeToRefs(commonStore);
let timeout = null;
const page = ref(1);
const input = ref("");
const validItem = ref(false);
onMounted(() => {
  if (NewItems.value.length > 0) {
    for (let index = 0; index < NewItems.value.length; index++) {
      setNet(index)
    }
    
  }
})
onUnmounted(() => {
  IsDetailsOnly.value = false
})
// watch(
//   () => props.recalculate,
//   (newValue) => {
//     if (newValue) {
//       console.log(newValue)
//       setTotal(null);
//     }
//   }
// );

function getItems() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    salesStore.GetItems(page.value++, input.value);
  }, 400);
}
function getItemsBySearch() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    salesStore.GetItems(1, input.value);
  }, 800);
}
watch(input, (newValue, oldValue) => {
  if (newValue === "") {
    page.value = 1;
    salesStore.Sales = [];
  }
});
async function getItemDetails(itemID, index) {
  await commonStore.GetItemDetails(itemID, index);
  NewItems.value[index].quantity = 1;
  
}
function removeItem(index) {
  commonStore.RemoveItem(index);
}
async function handleUnit(unitID, index) {
  let unitIndex = ItemDetails.value[index]?.nonServiceData?.units.findIndex(
    (unit) => {
      return unit.gun === unitID;
    }
  );
   if (!IsDetailsOnly.value) {
    if (unitIndex >= 0) {
    emit("clearValidation");
    // let item = Items.value.find((item) => {
    //   return item.gun === NewItems.value[index].itemGUN;
    // });
    let unit = await ItemDetails.value[index]?.nonServiceData?.units[unitIndex];
    await commonStore.GetItemQuantityByWarehouse(
      NewItems.value[index].itemGUN,
      NewItems.value[index].warehouseGUN,
      index
    );
    commonStore.setPriceList(unit, index);
    NewItems.value[index].price =
      NewItems.value[index].unitPriceList[
        GeneralFields.value.priceType - 1
      ].price;
    NewItems.value[index].discount = 0;

    NewItems.value[index].taxValue = useHandleTax(
      NewItems.value[index].taxValue,
      (NewItems.value[index].price * 1) - NewItems.value[index].discount
    );
    handleQuantity(null, index);
    setTotal(index);
    emit("recalculateTotalDiscount", GeneralFields.value.totalDiscount);
  }
   }
  
}
async function handleWarehouse(warehouseID, index) {
  await commonStore.GetItemQuantityByWarehouse(
    NewItems.value[index].itemGUN,
    warehouseID,
    index
  );
  handleQuantity(null, index);
}
async function handleQuantity(quantity, index) {
  let newquantity = NewItems.value[index].quantity;
  let unitIndex = ItemDetails.value[index]?.nonServiceData?.units.findIndex(
    (unit) => {
      return unit.gun === NewItems.value[index].unitGUN;
    }
  );
  
  if (unitIndex >= 0) {
    let unit = await ItemDetails.value[index]?.nonServiceData?.units[unitIndex];
    NewItems.value[index].warehouseQuantity =
      NewItems.value[index].warehouseQuantity / unit.equivalent;
  }
  setTotal(index);
}
function handlePrice(price, index) {
 
  if (NewItems.value[index]?.price >= 0) {
    setTotal(index);
  }
 
}
function handleDiscount(discount, index) {
  if (typeof discount === "string" && discount) {
    if (discount.includes("%")) {
      discount = discount.split("%")[0];
      discount = isNumber(discount) ? (parseFloat(discount.toFixed(2)) / 100) * NewItems.value[index].total : 0;
      NewItems.value[index].discount = useHandleDiscount(
        discount,
        NewItems.value[index].quantity,
        NewItems.value[index].total,
        NewItems.value[index].price
      );

      setNet(index);
    } else {
      const isNumber = isNaN(parseInt(discount)) ? false : true;
      if (isNumber) {
        NewItems.value[index].discount = useHandleDiscount(
          discount,
          NewItems.value[index].quantity,
          NewItems.value[index].total,
          NewItems.value[index].price
        );
        setNet(index);
      } else {
        NewItems.value[index].discount = "";
        setNet(index);
      }
    }
    handleTax(index)
  }
}
function setTotal(index) {
  if (props.recalculate) {
    for (let i = 0; i < NewItems.value.length - 1; i++) {
      let item = NewItems.value[i];
      item.total = item.price * item.quantity;
      handleDiscount(item.discount, i);
      handleTax(i);
      item.net = item.total - item.discount + item.taxValue;
    }
    // emit("restRecalculate");
  } else {
    NewItems.value[index].total =
      NewItems.value[index].price * NewItems.value[index].quantity;

    handleDiscount(NewItems.value[index].discount, index);
    handleTax(index);

    setNet(index);
  }
}
function handleTax(index) {
  if (NewItems.value[index]?.gun || NewItems.value[index].itemGUN) {
    NewItems.value[index].taxValue = useHandleTax(
    ItemDetails.value[index]?.currentTaxValue ,
    NewItems.value[index].total - NewItems.value[index].discount
  );
  }
  
  NewItems.value[index].net =
  NewItems.value[index].total + NewItems.value[index].taxValue;

  // setNet(index);
}
function setNet(index) {
  NewItems.value[index].net =
    NewItems.value[index].total -
    NewItems.value[index].discount +
    NewItems.value[index].taxValue;
    emit('calculate')
}
function getSelectedWarehouseIndex(warehouseID, index) {
  let warhouseIndex = ItemDetails.value[
    index
  ]?.nonServiceData?.warehouses.findIndex((item) => {
    return item.gun === warehouseID;
  });
  return warhouseIndex;
}
let priceList = [];
const priceItemIndex = ref(null);
function handlePriceChange(price, index) {
  priceList = [];
  let prices = NewItems.value[index].unitPriceList;
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    if (GeneralFields.value.priceType === index + 1) {
      if (price < element.price) {
        if (price < prices[3].price) {
          priceTitle.value = `السعر الذي ادخلتها لصنف اقل من`;
          priceList.push("سعرالتكلفة");
          priceList.push(PriceType.value[index].name);
          dialog.value = true;
        } else {
          priceTitle.value = `السعر الذي ادخلتها لصنف اقل من السعر ${PriceType.value[index].name}`;
          dialog.value = true;
        }
      }
    }
  }
  priceItemIndex.value = index;
}
function setPrice() {
  dialog.value = false;
  let row = document.querySelectorAll(`.table-container-invoice table tr`)[
    priceItemIndex.value + 2
  ];
  let discountInput = row.ownerDocument.querySelector(".discount input");
  discountInput.focus();
  discountInput.select();
}
function canclePrice() {
  NewItems.value[priceItemIndex.value].price =
    NewItems.value[priceItemIndex.value].unitPriceList[
      GeneralFields.value.priceType - 1
    ].price;
  handlePrice(null, priceItemIndex.value);
  let row = document.querySelectorAll(`.table-container-invoice table tr`)[
    priceItemIndex.value
  ];
  let priceInput = row.ownerDocument.querySelector(".price input");
  priceInput.focus();
  priceInput.select();
}

async function handleKeyPressF6(i) {
  let item = Items.value.find((item) => {
    return item.gun === NewItems.value[i].itemGUN;
  });

  if (NewItems.value[i].itemGUN) {
    if (
      item &&
      item.type === 1 &&
      ItemDetails.value[i]?.nonServiceData?.isHasAvailableAccessories
    ) {
      await commonStore.GetInsertAccessoriesItems(
        NewItems.value[i].itemGUN,
        route.meta.DocOrder
      );
    }
  }
}
async function handleKeyPressF5(i) {
  let item = Items.value.find((item) => {
    return item.gun === NewItems.value[i].itemGUN;
  });
  if (NewItems.value[i].itemGUN) {
    if (
      item &&
      item.type === 1 &&
      ItemDetails.value[i]?.nonServiceData?.isHasAvailableAlternatives
    ) {
      emit("showAlternativeItems");
      await commonStore.GetAlternativesItems(
        NewItems.value[i].itemGUN,
        route.meta.DocOrder
      );
    }
  }
}
function handleKeyupDelete(event, index) {
  if (event.key === "Delete") {
    removeItem(index)
  } 
}
function getUnitsAndWarehouse(index) {
  if ((props.isEdit && !ItemDetails.value[index]?.type) && NewItems.value[index].itemGUN || (!props.isEdit && !ItemDetails.value[index]?.type) && NewItems.value[index].itemGUN) {
    if (NewItems.value[index].type !== 2) {
      IsDetailsOnly.value = true
      getItemDetails(NewItems.value[index].itemGUN, index);
    }
  }
}

</script>
<template>
  <table>
    <thead>
      <tr>
        <th>الرقم</th>
        <th>الصنف</th>
        <th>الوحدة</th>
        <th>المستودع</th>
        <th>الكمية</th>
        <th>السعر</th>
        <th>المجموع</th>
        <th>الحسم</th>
        <th>الضريبة</th>
        <th>الاجمالي</th>
        <th>حذف</th>
      </tr>
    </thead>
    <tbody v-if="NewItems.length > 0">
      <!-- click event on the ROW only for Edit Inovice  -->
      <tr v-for="(item, i) in NewItems" :key="i" @click.capture="getUnitsAndWarehouse(i)">
        {{  handlePrice(0, i)  }}
        <!-- الرقم  -->
        <td class="text-center align-center gap-4 justify-center">
          {{ i + 1 }} <span class="circle" v-if="item.forSale === false"></span>
        </td>
        <!-- الصنف  -->
        <td class="item-column">
          <Popover
            :disableOnclick="true"
            :position="'bottom-left'"
            :show="
              ItemDetails[i]?.nonServiceData?.isHasAvailableAccessories ||
              ItemDetails[i]?.nonServiceData?.isHasAvailableAlternatives
            "
          >
            <Button
              :onlyIcon="true"
              :color="'neutral'"
              :menuLocation="'left'"
              :icon="MoreDotsVertical"
              :size="'md'"
              :menu="true"
              :menuItems="[
                {
                  id: 1,
                  text: 'كرت الصنف',
                  rightIcon: Statment,
                  value: '(F1)',
                  disable: false,
                },
                {
                  id: 2,
                  text: 'الأصناف الملحقة',
                  rightIcon: Insert,
                  value: '(F6)',
                  disabled:
                    !ItemDetails[i]?.nonServiceData?.isHasAvailableAccessories,
                },
                {
                  id: 3,
                  text: 'الأصناف البديلة',
                  rightIcon: Convert,
                  value: '(F5)',
                  disabled:
                    !ItemDetails[i]?.nonServiceData?.isHasAvailableAlternatives,
                },
                {
                  id: 4,
                  text: 'بحث متقدم',
                  rightIcon: Search,
                  value: '(Enter)',
                  disabled: false,
                },
                {
                  id: 5,
                  text: 'حذف',
                  rightIcon: Delete,
                  color: 'danger',
                  value: '(Delete)',
                  disabled: false,
                },
              ]"
            />
            <template v-slot:content>
              <p
                v-if="ItemDetails[i]?.nonServiceData?.isHasAvailableAccessories"
              >
                أصناف ملحقة أضغط (F6)
              </p>
              <p
                v-if="
                  ItemDetails[i]?.nonServiceData?.isHasAvailableAlternatives
                "
              >
                أصناف بديلة أضغط (F5)
              </p>
            </template>
          </Popover>
          <ComboBox
            @keyup.delete="handleKeyupDelete($event,i)"
            @keydown.f5.stop.prevent="handleKeyPressF5(i)"
            @keydown.f6.stop.prevent="handleKeyPressF6(i)"
            :size="'sm'"
            :color="props.itemValidation ? 'danger' : undefined"
            :class="{ firstItem: i === 0 }"
            v-model:valueReturn="item.itemGUN"
            v-model:input="item.name"
            :index="i"
            :clearable="true"
            :bigData="true"
            :items="Items || []"
            :displayTitle="'name'"
            :returnValue="'gun'"
            @setItem="getItemDetails"
            @getMoreItems="getItems"
            :placeholder="'رقم / باركود الصنف'"
            @getItemBySearch="getItemsBySearch"
          />
        </td>
        <!-- الوحدة  -->
        <td>
          <ComboBox
            :size="'sm'"
            v-model:input="item.unitName"
            v-model:valueReturn="item.unitGUN"
            :index="i"
            :items="ItemDetails[i]?.nonServiceData?.units || []"
            :selectFirstItem="true"
            :displayTitle="'name'"
            :returnValue="'gun'"
            @setItem="handleUnit"
            :placeholder="'الوحدة'"
            :disabled="ItemDetails[i]?.type === 2"
          />
        </td>
        <!-- المستودع  -->
        <td>
          <ComboBox
            :size="'sm'"
            v-model:input="item.warehouseName"
            v-model:valueReturn="item.warehouseGUN"
            :index="i"
            :items="ItemDetails[i]?.nonServiceData?.warehouses || []"
            @setItem="handleWarehouse"
            :selectFirstItem="true"
            :displayTitle="'name'"
            :returnValue="'gun'"
            :placeholder="'المستودع'"
            :disabled="ItemDetails[i]?.type === 2"
            :leftInnerIconItemText="'isSuspend'"
            :leftInnerIconItem="Info"
            :leftInnerIcon="
              ItemDetails[i]?.nonServiceData?.warehouses[
                getSelectedWarehouseIndex(item.warehouseGUN, i)
              ]?.isSuspend
                ? Info
                : undefined
            "
            :leftInnerIconToolTip="'هذا المستودع موقف'"
            :leftInnerIconToolTipPosition="'bottom'"
            :color="
              ItemDetails[i]?.nonServiceData?.warehouses[
                getSelectedWarehouseIndex(item.warehouseGUN, i)
              ]?.isSuspend
                ? 'danger'
                : undefined
            "
          />
        </td>
        <!-- الكمية  -->

        <td>
          <TextBox
            :size="'sm'"
            v-model:input="item.quantity"
            @changeInput="handleQuantity"
            :color="
              item?.itemGUN || item?.gun ? ((item.quantity === 0 || item.warehouseQuantity <= 0) ? 'danger' : undefined) : undefined
            "
            :index="i"
            :inputToolTipText="
              item.itemGUN
                ? `الكمية في المستودع: ${
                    item.warehouseQuantity ? item.warehouseQuantity : 0
                  }`
                : undefined
            "
            :inputToolTipPosition="'bottom'"
          />
        </td>
        <!-- السعر   -->
        <td>
          <TextBox
            class="price"
            :leftIcon="Sort"
            :size="'sm'"
            v-model:input="item.price"
            
            @changeInput="handlePriceChange"
            :index="i"
            :inputToolTipText="item?.unitPriceList ? item?.unitPriceList[0]?.price :'' "
            :inputToolTipPosition="'bottom'"
            :menu="true"
            :menuItems=" item?.unitPriceList ? [
              {
                id: 1,
                text: 'سعر البيع',
                value: item?.unitPriceList ? item?.unitPriceList[0]?.price : 0,
              },
              {
                id: 2,
                text: 'ادنى سعر بيع',
                value: item?.unitPriceList ? item?.unitPriceList[1]?.price : 0,
              },
              {
                id: 3,
                text: 'سعر الجملة',
                value: item?.unitPriceList ? item?.unitPriceList[2]?.price : 0,
              },

              {
                id: 4,
                text: 'سعر التكلفة',
                value: item?.unitPriceList ? item?.unitPriceList[3]?.price : 0,
              },
            ] : []"
          />
        </td>
        <!-- Total  -->
        <td>
          <TextBox
            :size="'sm'"
            :type="'number'"
            :readOnly="true"
            v-model:input="item.total"
          />
        </td>
        <!-- الحسم  -->
        <td>
          <TextBox
            class="discount"
            :leftIcon="Percent"
            :size="'sm'"
            v-model:input="item.discount"
            @changeInput="handleDiscount"
            :index="i"
          />
        </td>
        <!-- Tax الضريبة -->
        <td>
          <TextBox
            :size="'sm'"
            :type="'number'"
            :readOnly="true"
            v-model:input="item.taxValue"
          />
        </td>
        <!-- الاجمالي  -->
        <td>
          <TextBox
            :size="'sm'"
            :type="'number'"
            :readOnly="true"
            v-model:input="item.net"
          />
        </td>
        <td>
          <div class="icon delete">
            <Delete @click="removeItem(i)" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Dialog
    :confirmColor="'neutral'"
    :confirmText="'تأكيد'"
    v-model:show="dialog"
    @confirm="setPrice"
    @cancle="canclePrice"
    :list="priceList || undefined"
    :title="priceTitle"
    :headerText="'تنبية'"
    v-if="dialog"
  />
</template>
