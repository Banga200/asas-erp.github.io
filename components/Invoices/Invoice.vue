<script setup>
import InvoicesTree from "~/components/Invoices/Sales/InvoicesTree.vue";
import Button from "~/components/DesignSystem/Buttons/Button.vue";
import Add from "~/components/Icons/Buttons/Add.vue";
import Edit from "~/components/Icons/Edit.vue";
import Delete from "~/components/Icons/Delete.vue";
import Refresh from "~/components/Icons/Refresh.vue";
import MoreDotsVertical from "~/components/Icons/MoreDotsVertical.vue";
import Barcode from "~/components/Icons/Barcode.vue";
import Save from "~/components/Icons/Save.vue";
import Printer from "~/components/Icons/Printer.vue";
import ArrowDown from "~/components/Icons/Arrows/ArrowDown.vue";
import Switch from "~/components/DesignSystem/Inputs/Switch.vue";
import TextBox from "~/components/DesignSystem/Inputs/TextBox.vue";
import TextArea from "../DesignSystem/Inputs/TextArea.vue";
import ComboBox from "~/components/DesignSystem/Inputs/ComboBox.vue";
import Calendar from "~/components/Icons/Calendar.vue";
import Time from "~/components/Icons/Time.vue";
import Info from "../Icons/Info.vue";
import Avatar from "~/components/DesignSystem/Generals/Avatar.vue";
import User from "~/components/Icons/User.vue";
import Tab from "~/components/DesignSystem/Generals/Tab.vue";
import Post from "~/components/DesignSystem/Generals/Post.vue";
import Close from "~/components/Icons/Close.vue";
import Dialog from "../DesignSystem/Generals/Dialog.vue";
import Model from "../DesignSystem/Generals/Model.vue";
import Snackbar from "../DesignSystem/Generals/Snackbar.vue";
import CheckBox from "../DesignSystem/Inputs/CheckBox.vue";
import AlternativeItems from "./Models/AlternativeItems.vue";
// Tabs
import CostCenter from "~/components/Invoices/Tabs Contents/CostCenter.vue";
import Saleman from "~/components/Invoices/Tabs Contents/Saleman.vue";
import Notes from "~/components/Invoices/Tabs Contents/Notes.vue";
import BuyORBook from "~/components/Invoices/Tabs Contents/BuyORBook.vue";
import CustomerDetails from "~/components/Invoices/Tabs Contents/CustomerDetails.vue";
import CustomerAddresses from "~/components/Invoices/Tabs Contents/CustomerAddresses.vue";
import SalesInvoiceTabel from "~/components/Invoices/Tabels/SalesInvoiceTabel.vue";
import Details from "~/components/Invoices/Tabs Contents/Details.vue";
import Profit from "~/components/Invoices/Tabs Contents/Profit.vue";
import PayWays from "~/components/Invoices/Tabs Contents/PayWays.vue";

import { useRoute } from "vue-router";
const emit = defineEmits(["recalculatePrice"]);
const route = useRoute();
const { errorHandle, warningHandle } = useNotify();
const customerDialog = ref(false);
const chooseenCustomerDialog = ref(false);
const priceDialog = ref(false);
const priceTypeDialog = ref(false);
const notForSale = ref(false);
const salemanField = ref("");
const recalculate = ref(false);
const defaultPrice = ref(null);
const showModel = ref(false);
const isCustomerPriceCheck = ref(false);
const isCustomerDiscountCheck = ref(false);
const taxAppliedDialog = ref(false);
const alternativeDialog = ref(false);
const validation = ref({
  customer: false,
  item: false,
  quantity: false,
  warehouse: false,
});
// Stores
const salesStore = useSalesStore();
const { Sales } = storeToRefs(salesStore);
const commonStore = useCommonStore();
const {
  GeneralFields,
  SelectedAlternative,
  ItemId,
  NewItems,
  ItemDetails,
  GetBranchDataForOfferPrice,
  Customer,
  Customers,
  CustomerDiscount,
  SalesMen,
  Items,
  Branches,
  PriceType,
  TaxApplied,
} = storeToRefs(commonStore);
const userStore = useUserStore();
await userStore.CheckPermissions(route.meta.moduleId);
const { Permissions } = storeToRefs(userStore);
const OfferPriceStore = useOfferPriceStore();
let customerDiscountTitle = "";
// Props
const { SalesInvoice, ReturnInvoice, OfferPrice, Booked } = defineProps([
  "SalesInvoice",
  "ReturnInvoice",
  "OfferPrice",
  "Booked",
]);
const invoiceDetails = ref({
  branchId: "",
  isCash: true,
});
// Customer Tabs componnets
const customerTabSelected = ref("CustomerDetails");
const customerTabs = shallowRef({
  CustomerDetails,
  CustomerAddresses,
});
// Details Tabs componnets
const detailsTabSelected = ref("CostCenter");
const detailsTabs = shallowRef({
  CostCenter,
  Saleman,
  Notes,
  BuyORBook,
});
// Footer Tabs componnets
const footerTabSelected = ref("Details");
const footerTabs = shallowRef({
  Details,
  Profit,
  PayWays,
});
const isNew = ref(true);

onMounted(async () => {
  if (OfferPrice) {
    await OfferPriceStore.GetOfferPriceInvoices();
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
});
async function AddNewInvoice() {
  await userStore.CheckPermissions(route.meta.moduleId);
  if (Permissions.value?.canAccess) {
    if (Permissions.value?.canAdd) {
      isNew.value = false;
      commonStore.SetDefaultFields();
      await commonStore.GetBranches();
      GeneralFields.value.branchGUN = Branches.value[0].gun;
      if (OfferPrice) {
        commonStore.GetBranchDataForOfferPrice(
          GeneralFields.value.branchGUN,
          GeneralFields.value.isCash
        );
      } else if (ReturnInvoice) {
      } else if (SalesInvoice) {
      } else if (Booked) {
      }
      document.querySelector(".firstItem input").focus();
    } else {
      errorHandle("غير مصرح لك");
    }
  }
}
function cancel() {
  commonStore.ClearEverythings();
  isNew.value = true;
}
// إذا كان فيه حسم لدى العميل يتم إظهار تنبيه
const salemanIndex = ref(null);
async function checkCustomerHasDiscount(customerID, isInoviceTypeChange) {
  let selectedCustomerIndex = await Customers.value.findIndex((customer) => {
    return customer.gun === customerID;
  });
  if (selectedCustomerIndex >= 0) {
    if (NewItems.value[0].itemGUN !== '') {
      const selectedCustomer = { ...Customers.value[selectedCustomerIndex] };
    Customer.value = selectedCustomer;
    if (isInoviceTypeChange) {
      chooseenCustomerDialog.value = true;
      customerDiscountTitle = `يوجد حسم لدى هذا العميل على الفواتير ${
        GeneralFields.value.isCash ? "نقد" : "اجل"
      } هل تريد اعتماد الحسم الذي لدى العميل`;
    }
    if (selectedCustomer.salesmanGUN) {
      let saleman = SalesMen.value.findIndex((saleman) => {
        return saleman.gun === selectedCustomer.salesmanGUN;
      });
      if (saleman >= 0) {
        salemanIndex.value = saleman;
      }
    }
    if (NewItems.value[0].itemGUN) {
      // إذاوجد سعر و حسم لدى العميل
      if (
        (selectedCustomer.cashInvoiceDiscountPercentage ||
          selectedCustomer.creditInvoiceDiscountPercentage) &&
        selectedCustomer.defaultPrice
      ) {
        showModel.value = true;
        // Customer.value = GeneralFields.value.isCash ? selectedCustomer.cashInvoiceDiscountPercentage : selectedCustomer.creditInvoiceDiscountPercentage
        defaultPrice.value = selectedCustomer.defaultPrice;
      } else {
        if (
          (selectedCustomer.cashInvoiceDiscountPercentage ||
            selectedCustomer.creditInvoiceDiscountPercentage) &&
          NewItems.value[0].itemGUN
        ) {
          chooseenCustomerDialog.value = true;
          customerDiscountTitle = "هل تريد اعتماد الحسم الخاص بالعميل";
        }
        // شيك اذا نوع السعر مختلف عن نوع السعر المختار
        if (selectedCustomer.defaultPrice && NewItems.value[0].itemGUN) {
          if (selectedCustomer.defaultPrice !== GeneralFields.value.priceType) {
            priceTypeDialog.value = true;
            defaultPrice.value = selectedCustomer.defaultPrice;
          }
        }
      }
    }
    }
  }
}
// إذا كان فيه حسم لدى العميل يتم حفظه
function setCustomerDiscount() {
  if (GeneralFields.value.isCash) {
    Customer.value.cashInvoiceDiscountPercentage
      ? (CustomerDiscount.value = Customer.value.cashInvoiceDiscountPercentage)
      : (CustomerDiscount.value = 0);
    console.log(Customer.value.cashInvoiceDiscountPercentage);
    handleDiscount(`${CustomerDiscount.value}%`);
  } else {
    Customer.value.creditInvoiceDiscountPercentage
      ? (CustomerDiscount.value =
          Customer.value.creditInvoiceDiscountPercentage)
      : (CustomerDiscount.value = 0);
    handleDiscount(`${CustomerDiscount.value}%`);
  }
  customerDialog.value = false;
  chooseenCustomerDialog.value = false;
}
// شيك اذا كان فيه صنف مختار في "نقد" و غير موجود في "اجل" واعطاء علامة حمراء
async function checkInvoiceChanges(isCash) {
  let flag = false;
  if (OfferPrice) {
    await commonStore.GetBranchDataForOfferPrice(
      GeneralFields.value.branchGUN,
      GeneralFields.value.isCash
    );
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
  checkCustomerHasDiscount(Customer.value.gun, true);

  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    let item = Items.value.find((item) => {
      return item.gun === element.itemGUN;
    });
    if (!item) {
      flag = true;
      NewItems.value[index].forSale = false;
    }
  }
  if (flag) {
    notForSale.value = true;
  } else {
    notForSale.value = true;
    for (let index = 0; index < NewItems.value.length - 1; index++) {
      const element = NewItems.value[index];
      element.forSale = null;
    }
    notForSale.value = false;
  }
}
// اذا صنف ليس للبيع يتم حذفه بعد الضغط على زر "حذف الكل"
function handleNoneSaleItems() {
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    if (element.forSale === false) {
      NewItems.value.splice(index, 1);
      ItemDetails.value.splice(index, 1);
      index--;
    }
  }
  notForSale.value = false;
}
async function handleBranch() {
  // شيك اذا الفاتورة جديدة ام فقط جلب الفروع
  if (isNew === false) {
    await checkInvoiceChanges();
    // إذا العميل المختار غير موجود في الفرع الاخر "اجعل الحقل فارغ"
    if (Customer.value?.gun) {
      let customer = Customers.value?.find((item) => {
        return item.gun === Customer.value.gun;
      });
      if (!customer) {
        commonStore.ClearCustomer();
      }
    }

    // إذا المندوب المختار غير موجود في الفرع الاخر "اجعل الحقل فارغ"
    let saleMan = SalesMen.value?.find((item) => {
      return item.gun === GeneralFields.value.salesmanGUN;
    });
    if (!saleMan) {
      GeneralFields.value.gun;
      salemanField.value = "";
    }
    // تحقق اذا كان يوجد صنف واحد على الاقل
    if (NewItems.value[0].itemGUN !== "") {
      priceDialog.value = true;
    }
  }
}
async function handleTaxApplied(isTaxApplied, index) {
  let itemsIds = [];
  let deplicatedItems = [];
  if (isTaxApplied) {
    if (NewItems.value.length > 1) {
      for (let index = 0; index < NewItems.value.length - 1; index++) {
        const element = NewItems.value[index];
        if (!itemsIds.includes(element.itemGUN)) {
          itemsIds.push(element.itemGUN);
        } else {
          deplicatedItems.push({ itemId: element.itemGUN, index: index });
        }
      }
      await commonStore.GetItemsTaxes(itemsIds);
      if (deplicatedItems.length > 0) {
        itemsIds.forEach(async (itemId) => {
          let selectedIndex = NewItems.value.findIndex((item) => {
            return item.itemGUN === itemId && item.taxValue;
          });
          if (selectedIndex >= 0) {
            for (let index = 0; index < NewItems.value.length - 1; index++) {
              if (NewItems.value[index].itemGUN === itemId) {
                // // تحقق اذا كان يوجد تغيير في احتساب الضريبة
                // if(NewItems.value[index].taxValue && (NewItems.value[index].taxValue !== NewItems.value[selectedIndex].taxValue)) {
                //   // إضهار تنبيه بوجود تغيير في الضريبة هل تريد التحديث
                //   taxAppliedDialog.value = true;
                // }
                // else {
                //   NewItems.value[index].taxValue =
                //   NewItems.value[selectedIndex].taxValue;
                // }
                NewItems.value[index].taxValue =
                  NewItems.value[selectedIndex].taxValue;
              }
            }
          }
        });
      }
    }
  } else {
    for (let index = 0; index < NewItems.value.length - 1; index++) {
      const element = NewItems.value[index];
      element.taxValue = null;
      element.net = element.total - element.discount;
    }
  }
}
watch(NewItems.value, () => {
  calculateInvoiceFooter();
});
const footerDetails = ref({
  itemsCount: 0,
  quantityCount: 0,
  weight: 0,
  deliveryDate: "",
  time: "",
  today: "",
});
const footerFields = ref({
  total: 0,
  totalBeforeTax: 0,
  discount: 0,
  extarDiscount: 0,
  taxValue: 0,
  invoiceValue: 0,
});

function calculateInvoiceFooter() {
  let quantityCount = 0;
  let weight = 0;
  // Totals left side
  let net = 0.0;
  let total = 0.0;
  let discount = 0.0;
  let taxValue = 0.0;
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    quantityCount += parseInt(element.quantity);
    total += element.total;
    taxValue += element.taxValue;
    discount += parseFloat(element.discount);
    net += element.net;
  }

  footerDetails.value.itemsCount = NewItems.value.length - 1;
  footerDetails.value.quantityCount = parseInt(quantityCount);
  // left Side
  footerFields.value.total = parseFloat(total.toFixed(2));
  footerFields.value.totalBeforeTax = parseFloat((total - discount).toFixed(2));
  footerFields.value.taxValue = parseFloat(taxValue.toFixed(2));
  footerFields.value.discount = parseFloat(discount.toFixed(2));
  footerFields.value.invoiceValue = parseFloat(net.toFixed(2));
}
function handleDiscount(discount) {
  discount = discount ? discount : footerDetails.value.discount;
  if (typeof discount === "string" && discount) {
    if (discount.includes("%")) {
      discount = parseInt(discount.split("%")[0]);
      discount = (discount / 100) * footerFields.value.total; // المجموع الكلي للفاتورة قبل الخصم والضريبة

      footerFields.value.discount = discount;
      // parseFloat(
      //   useHandleDiscount(
      //     discount,
      //     NewItems.value[index].quantity,
      //     footerFields.value.total, // المجموع الكلي للفاتورة قبل الخصم والضريبة
      //     NewItems.value[index].price
      //   )?.toFixed(2)
      // );
      setDiscountToAllItems(footerFields.value.discount);
    } else {
      //  useHandleDiscount(
      //   parseInt(discount),
      //   NewItems.value[index].quantity,
      //   footerFields.value.total, // المجموع الكلي للفاتورة قبل الخصم والضريبة
      //   NewItems.value[index].price
      // );
      setDiscountToAllItems(footerFields.value.discount);
    }
  } else {
    if (discount > 0) {
      setDiscountToAllItems(discount);
    }
    setDiscountToAllItems(0);
  }
}
const calculatingNet = false;
function setDiscountToAllItems(discount) {
  // تخزين قيمة مجموع الحسم

  GeneralFields.value.totalDiscount = discount;
  discount = parseInt(discount);
  if (discount > 0) {
    let discountDivided = discount / (NewItems.value.length - 1);

    for (let index = 0; index < NewItems.value.length - 1; index++) {
      const element = NewItems.value[index];

      element.discount = useHandleDiscount(
        discountDivided,
        element.quantity,
        element.total,
        element.price
      );
      element.net = parseFloat(
        (element.total - element.discount + element.taxValue).toFixed(1)
      );
    }
  }
}

// اذا ضغط على زر نعم (يريد تغير الاسعار على حسب الفرع المختار)
function setPriceOnItems() {}

function handlePriceType() {
  if (!isCustomerPriceCheck) {
    if (NewItems.value[0].itemGUN) {
      if (Customer.value.defaultPrice !== GeneralFields.value.priceType) {
        priceTypeDialog.value = true;
      } else {
        priceTypeDialog.value = true;
      }
    }
  }
}
// اذا ضغط على زر نعم (يريد تغير الاسعار على حسب نوع السعر)
function setPriceType() {
  let type = defaultPrice.value
    ? defaultPrice.value
    : GeneralFields.value.priceType; // 1 or 2 or 3 or 4
  GeneralFields.value.priceType = type;
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    NewItems.value[index].price =
      NewItems.value[index].unitPriceList[type - 1]?.price;
  }
  if (!isCustomerPriceCheck) {
    handleDiscount();
  }
  recalculate.value = true;
  priceTypeDialog.value = false;
  recalculate.value = true;
  defaultPrice.value = null;
}
function setCustomerCheckValue() {
  if (isCustomerDiscountCheck.value && isCustomerPriceCheck.value) {
    setPriceType();
    let delay = setTimeout(() => {
      setCustomerDiscount();
    }, 1000);
    clearTimeout(delay);
  } else if (isCustomerDiscountCheck.value) {
    setCustomerDiscount();
  } else if (isCustomerPriceCheck.value) {
    setPriceType();
  }
  showModel.value = false;
}

async function saveInvoice() {
  await userStore.CheckPermissions(route.meta.moduleId);
  if (Permissions.value?.canAdd) {
    await checkBeforeSave();
    setTimeout(async () => {
      if (
        validation.value.customer ||
        validation.value.item ||
        validation.value.quantity ||
        validation.value.warehouse
      ) {
        return;
      } else {
        await OfferPriceStore.SaveOfferPriceInvoice();
      }
    }, 500);
  } else {
    errorHandle("غير مصرح لك");
    isNew.value = true;
    commonStore.ClearEverythings();
  }
}
function checkBeforeSave() {
  // شيك إذا فيه صنف واحد على الاقل
  if (NewItems.value.length === 1 || NewItems.value.length === 0) {
    validation.value.item = true;
  }
  // إذا كان نوع الفاتورة اجل
  console.log(GeneralFields.value.isCash);
  if (GeneralFields.value.isCash === false) {
    if (!Customer.value.gun || Customer.value.isSuspend) {
      // وضع تنبيه في حقل العميل ولا يتم الحفظ
      validation.value.customer = true;
    }
  }
  // شيك اذا كانت الكمية تساوي صفر او فارغ
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    if (element.quantity === 0 || element.quantity === "") {
      validation.value.quantity = true;
    }
    if (element.warehouseGUN) {
      let warehouse = ItemDetails.value[index]?.nonServiceData?.warehouses.find(
        (item) => {
          return item.gun === element.warehouseGUN;
        }
      );
      if (warehouse) {
        if (warehouse.isSuspend) {
          validation.value.warehouse = true;
        } else {
          validation.value.warehouse = false;
        }
      }
    }
  }
  // if(GeneralFields.value.isTaxApplied) {
  //   handleTaxApplied(GeneralFields.value.isTaxApplied)
  // }
}
async function insertAlternative() {
  await commonStore.GetInsertAlternativesItems(
    ItemId.value,
    SelectedAlternative.value,
    route.meta.DocOrder
  );
  alternativeDialog.value = false;
}
</script>
<template>
  <div class="row">
    <!-- Tree  -->
    <div class="right-side-tree col-12 col-md-2">
      <InvoicesTree />
    </div>
    <!-- Content  -->
    <div class="content border-right col-12 col-md-10">
      <!-- Buttons  -->
      <section class="top-buttons row">
        <!-- right side  -->
        <div class="d-flex align-center gap-6">
          <Button
            :color="'primary'"
            :text="'جديد'"
            :rightIcon="Add"
            @click.capture="AddNewInvoice()"
            v-if="isNew"
          />
          <Button
            :color="'netural'"
            :text="'إلغاء'"
            :rightIcon="Close"
            @click.capture="cancel"
            v-if="!isNew"
          ></Button>
          <Button :color="'warning'" :onlyIcon="true" :icon="Edit" />
          <Button :color="'danger'" :onlyIcon="true" :icon="Delete" />
          <Button :color="'neutral'" :onlyIcon="true" :icon="Refresh" />
          <Button
            :color="'neutral'"
            :onlyIcon="true"
            :icon="MoreDotsVertical"
          />
          <Post
            :text="'2233 مرحل /'"
            v-if="!OfferPrice"
            :menu="true"
            :menuItems="['إدراج فاتورة مبيعات', 'تكرار الفاتورة']"
          />
          <Post
            :text="'منتهي'"
            :noIcon="true"
            :color="'danger'"
            v-if="Booked"
          />
        </div>
        <!-- left side  -->
        <div class="d-flex align-center gap-6">
          <!-- Avatars  -->
          <div class="avatar-group" v-if="!SalesInvoice">
            <Avatar :icon="User" :borderColor="'primary'" :size="'md'" />
            <Avatar :icon="User" :borderColor="'warning'" :size="'md'" />
            <Avatar :text="'+10'" :borderColor="'warning'" :size="'md'" />
          </div>
          <Button :color="'neutral'" :text="'باركود'" :rightIcon="Barcode" />
          <Button
            :color="'neutral'"
            :text="'طباعة'"
            :menuLocation="'right'"
            :rightIcon="Printer"
            :leftIcon="ArrowDown"
            :menu="true"
            :menuItems="[
              { text: 'طباعة مباشرة' },
              { text: 'معاينة قبل الطباعة' },
              { text: 'طباعة كاشير' },
            ]"
          />
          <Button
            :color="'primary'"
            :text="'حفظ'"
            :rightIcon="Save"
            @click.capture="saveInvoice"
          />
        </div>
      </section>
      <!-- Details  -->
      <section>
        <div class="row">
          <div class="sheet flex-column gap-8 col-12 col-md-7 pl-6 pb-4">
            <!-- Fields  -->
            <div class="grid-5 gap-4">
              <div>
                <Switch
                  :label="'نوع الفاتورة'"
                  :trueText="'نقدي'"
                  :falseText="'اَجل'"
                  v-model:input="GeneralFields.isCash"
                  @changeSwitch="checkInvoiceChanges"
                />
              </div>
              <div>
                <TextBox
                  :label="'رقم الفاتورة'"
                  v-model:input="GeneralFields.no"
                  :readOnly="true"
                />
              </div>
              <div>
                <ComboBox
                  :label="'الفرع'"
                  :items="Branches || []"
                  :displayTitle="'name2'"
                  :returnValue="'gun'"
                  :isPage="false"
                  @setItem="handleBranch"
                  v-model:valueReturn="GeneralFields.branchGUN"
                  :selectFirstItem="true"
                />
              </div>
              <div>
                <TextBox :label="'التاريخ'" :leftIcon="Calendar" />
              </div>
              <div>
                <TextBox :label="'الوقت'" :leftIcon="Time" />
              </div>
            </div>
            <!-- Offer Price Details  -->
            <div class="offer-price-details" v-if="OfferPrice">
              <div class="grid-3 gap-4">
                <div>
                  <ComboBox
                    :label="'نوع السعر'"
                    :displayTitle="'name'"
                    :returnValue="'id'"
                    :selectItem="
                      PriceType ? PriceType[GeneralFields.priceType - 1] : null
                    "
                    :items="PriceType"
                    v-model:valueReturn="GeneralFields.priceType"
                    :selectFirstItem="true"
                    @setItem="handlePriceType"
                  />
                </div>
                <div>
                  <ComboBox
                    :label="'احتساب الضريبة'"
                    :displayTitle="'name'"
                    :returnValue="'id'"
                    :noFilter="true"
                    :items="TaxApplied"
                    v-model:valueReturn="GeneralFields.isTaxApplied"
                    :selectFirstItem="true"
                    @setItem="handleTaxApplied"
                  />
                </div>
                <div>
                  <ComboBox
                    :label="'اسم المندوب'"
                    :items="SalesMen || []"
                    :displayTitle="'name'"
                    :returnValue="'gun'"
                    :selectItem="SalesMen ? SalesMen[salemanIndex] : null"
                    v-model:input="salemanField"
                    v-model:valueReturn="GeneralFields.salesmanGUN"
                  />
                </div>
              </div>
              <div class="mt-8">
                <TextArea
                  :label="'ملاحظة'"
                  :text="''"
                  v-model:input="GeneralFields.note"
                />
              </div>
            </div>
            <!-- Tabs  -->
            <div class="flex-column gap-8" v-if="SalesInvoice || ReturnInvoice">
              <div class="row align-center tabs-container">
                <div :class="[SalesInvoice ? 'col-3' : 'col-4']">
                  <Tab
                    :text="'مركز التكلفة'"
                    :color="
                      detailsTabSelected === 'CostCenter' ? 'primary' : ''
                    "
                    @click="detailsTabSelected = 'CostCenter'"
                  />
                </div>
                <div :class="[SalesInvoice ? 'col-3' : 'col-4']">
                  <Tab
                    :text="'المندوب'"
                    @click="detailsTabSelected = 'Saleman'"
                    :color="detailsTabSelected === 'Saleman' ? 'primary' : ''"
                  />
                </div>
                <div :class="[SalesInvoice ? 'col-3' : 'col-4']">
                  <Tab
                    :text="'ملاحظات'"
                    @click="detailsTabSelected = 'Notes'"
                    :color="detailsTabSelected === 'Notes' ? 'primary' : ''"
                  />
                </div>
                <div
                  :class="[SalesInvoice ? 'col-3' : 'col-4']"
                  v-if="SalesInvoice"
                >
                  <Tab
                    :text="'شراء / حجز'"
                    @click="detailsTabSelected = 'BuyORBook'"
                    :color="detailsTabSelected === 'BuyORBook' ? 'primary' : ''"
                  />
                </div>
              </div>
              <!-- Tabs Content -->
              <div>
                <component :is="detailsTabs[detailsTabSelected]" />
              </div>
            </div>
          </div>
          <div class="sheet col-12 col-md-5 pr-6 pb-4">
            <div class="flex-column gap-8">
              <div class="row align-center tabs-container two-tabs">
                <div class="col-6">
                  <Tab
                    :text="'بيانات العميل'"
                    :color="
                      customerTabSelected === 'CustomerDetails' ? 'primary' : ''
                    "
                    @click="customerTabSelected = 'CustomerDetails'"
                  />
                </div>
                <div class="col-6">
                  <Tab
                    :text="'عناوين العميل'"
                    @click="customerTabSelected = 'CustomerAddresses'"
                    :color="
                      customerTabSelected === 'CustomerAddresses'
                        ? 'primary'
                        : ''
                    "
                  />
                </div>
              </div>
              <!-- Tabs Content -->
              <div>
                <component
                  :is="customerTabs[customerTabSelected]"
                  @customerHasDiscount="checkCustomerHasDiscount"
                  :customerValidation="validation.customer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Tabel  -->
      <section class="table-container-invoice">
        <SalesInvoiceTabel
          :itemValidation="validation.item"
          :recalculate="recalculate"
          @showAlternativeItems="() => (alternativeDialog = true)"
          @restRecalculate="() => (recalculate = false)"
          @recalculateTotalDiscount="setDiscountToAllItems"
          @clearValidation="() => (validation.item = false)"
        />
      </section>
      <!-- Footer Details  -->
      <section class="invoice-footer">
        <div class="row">
          <div class="sheet col-12 col-md-5 pb-4 pl-8 footer-details">
            <div class="flex-column gap-8">
              <div class="row align-center tabs-container two-tabs">
                <div
                  :class="[
                    { 'col-4': SalesInvoice },
                    { 'col-6': ReturnInvoice },
                    { 'col-12': OfferPrice },
                  ]"
                >
                  <Tab
                    :text="'التفاصيل'"
                    :color="footerTabSelected === 'Details' ? 'primary' : ''"
                    @click="footerTabSelected = 'Details'"
                  />
                </div>
                <div
                  :class="[
                    { 'col-4': SalesInvoice },
                    { 'col-6': ReturnInvoice },
                    { 'col-12': OfferPrice },
                  ]"
                  v-if="!OfferPrice && !ReturnInvoice"
                >
                  <Tab
                    :text="'الارباح'"
                    @click="footerTabSelected = 'Profit'"
                    :color="footerTabSelected === 'Profit' ? 'primary' : ''"
                  />
                </div>
                <div
                  :class="[
                    { 'col-4': SalesInvoice },
                    { 'col-6': ReturnInvoice },
                    { 'col-12': OfferPrice },
                  ]"
                  v-if="SalesInvoice || ReturnInvoice"
                >
                  <Tab
                    :text="'طرق الدفع'"
                    @click="footerTabSelected = 'PayWays'"
                    :color="footerTabSelected === 'PayWays' ? 'primary' : ''"
                  />
                </div>
              </div>
              <!-- Tabs Content -->
              <div>
                <component
                  :is="footerTabs[footerTabSelected]"
                  :isSalesInvoice="SalesInvoice"
                  :isReturnInvoice="ReturnInvoice"
                  :isOfferPrice="OfferPrice"
                  :Details="footerDetails"
                />
              </div>
            </div>
          </div>
          <!-- Net, Tax ...  -->
          <div class="col-12 col-md-7 pl-8 pr-8 footer-leftside">
            <div class="grid-4 gap-8">
              <div>
                <TextBox :label="'المدفوع'" :readOnly="true" />
              </div>
              <div>
                <TextBox
                  :label="'الإجمالي'"
                  :readOnly="true"
                  v-model:input="footerFields.total"
                  :type="'number'"
                />
              </div>
              <div>
                <TextBox
                  :label="'الإجمالي قبل الضريبة'"
                  :readOnly="true"
                  v-model:input="footerFields.totalBeforeTax"
                  :type="'number'"
                />
              </div>
              <div>
                <TextBox :label="'حسم إضافي'" />
              </div>
              <div>
                <TextBox :label="'المتبقي'" :readOnly="true" />
              </div>
              <div>
                <TextBox
                  :label="'الحسم'"
                  v-model:input="footerFields.discount"
                  @setInput="handleDiscount"
                />
              </div>
              <div>
                <TextBox
                  :label="'ضريبة القيمة المضافة'"
                  :readOnly="true"
                  v-model:input="footerFields.taxValue"
                  :type="'number'"
                />
              </div>
              <div>
                <TextBox
                  :label="'قيمة الفاتورة'"
                  :background="'invoice-total'"
                  :readOnly="true"
                  v-model:input="footerFields.invoiceValue"
                  :type="'number'"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Model
      v-model:show="showModel"
      :headerText="'تنبية'"
      :title="'هل تريد إعتماد'"
      :isSlot="true"
      :cancel-text="'لا'"
      :confirmColor="'neutral'"
      @confirm="setCustomerCheckValue"
      v-if="showModel"
    >
      <div class="row flex-column gap-6">
        <CheckBox
          :label="'السعر الخاص بالعميل'"
          :color="'primary'"
          v-model:input="isCustomerPriceCheck"
        />
        <CheckBox
          :label="'الحسم الخاص بالعميل'"
          :color="'primary'"
          v-model:input="isCustomerDiscountCheck"
        />
      </div>
    </Model>
    <!-- If Customer Has a Dicount  -->
    <Dialog
      :confirmColor="'neutral'"
      :cancelText="'لا'"
      v-model:show="chooseenCustomerDialog"
      @confirm="setCustomerDiscount"
      :title="customerDiscountTitle"
      :headerText="'تنبية'"
      v-if="chooseenCustomerDialog"
    />
    <Dialog
      :confirmColor="'neutral'"
      :cancelText="'لا'"
      v-model:show="taxAppliedDialog"
      @confirm="setTaxApplied"
      :title="' هل تريد تغير اسعار الاصناف باسعار الفرع المختار؟'"
      :headerText="'تنبية'"
      v-if="taxAppliedDialog"
    />
    <!-- اذا غير الفرع ويوجد على الاقل صنف واحد فقط يتم إضهار الرسالة  -->
    <Dialog
      :confirmColor="'neutral'"
      :cancelText="'لا'"
      v-model:show="priceDialog"
      @confirm="setPriceOnItems"
      :title="' هل تريد تغير اسعار الاصناف باسعار الفرع المختار؟'"
      :headerText="'تنبية'"
      v-if="priceDialog"
    />

    <Dialog
      :confirmColor="'neutral'"
      :cancelText="'لا'"
      v-model:show="priceTypeDialog"
      @confirm="setPriceType"
      :title="'هل تريد تغير  اسعار الاصناف المدرجة بالنوع المختار؟'"
      :headerText="'تنبية'"
      v-if="priceTypeDialog"
    />
    <!-- If there are items not for sale  -->
    <Snackbar
      v-if="notForSale"
      :stopHide="true"
      :color="'danger'"
      :multiline="true"
      :text="'اصناف غير متاحة في المبيعات او غير موجودة في الفرع المحدد'"
      :leftActionText="'حذف الكل'"
      :noIcon="true"
      @clickLeftAction="handleNoneSaleItems"
    />
    <Model
      class="fixed"
      v-model:show="alternativeDialog"
      :headerText="'الاصناف البديلة'"
      :headerIcon="Info"
      :iconToolTip="'هذه الأصناف المرتبطة بالفرع والتي تقبل البيع بنفس نوع الفاتورة وغير موقفة'"
      :iconToolTipPosition="'bottom-left'"
      :confirmColor="'primary'"
      :confirmText="'إدراج'"
      @confirm="insertAlternative"
      v-if="alternativeDialog"
    >
      <AlternativeItems @insertAlternative="insertAlternative" />
    </Model>
  </div>
</template>
