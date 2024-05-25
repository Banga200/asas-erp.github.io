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
import DatePicker from "~/components/DesignSystem/Inputs/DatePicker.vue";
import TimePicker from "../DesignSystem/Inputs/TimePicker.vue";
import User from "~/components/Icons/User.vue";
import Tab from "~/components/DesignSystem/Generals/Tab.vue";
import Post from "~/components/DesignSystem/Generals/Post.vue";
import Close from "~/components/Icons/Close.vue";
import Dialog from "../DesignSystem/Generals/Dialog.vue";
import Model from "../DesignSystem/Generals/Model.vue";
import Snackbar from "../DesignSystem/Generals/Snackbar.vue";
import CheckBox from "../DesignSystem/Inputs/CheckBox.vue";
import AlternativeItems from "./Models/AlternativeItems.vue";
import Popover from "../DesignSystem/Generals/Popover.vue";
import UserPopover from "../DesignSystem/Generals/UserPopover.vue";
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
import DropDown from "../DesignSystem/Inputs/DropDown.vue";
const {toDouble} = useCalculateNumbers()
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
const branchSelected = ref(false);
const deleteDialog = ref(false);
const isEdit = ref(false);
const treeDisabled = ref(false);
const contentDisabled = ref(true);
const tableDisabled = ref(true);
const invoiceIdTemp = ref(null);
const isCustomerDiscount = ref(false);
const InvoiceTable = ref(null)
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
  NewBranchPriceItems,
  InvoicesTree: ViewInvoice,
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
  EditCustomerGun,
  Items,
  Branches,
  PriceType,
  TaxApplied,
} = storeToRefs(commonStore);
let date = new Date();
const settingsStore = useSettingsStore();
const userStore = useUserStore();
await userStore.CheckPermissions(route.meta.moduleId);
const { Permissions } = storeToRefs(userStore);
const OfferPriceStore = useOfferPriceStore();
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
const childTree = ref(null);
const canView = ref(true)
onMounted(async () => {
  if (!Permissions.value?.canView) {
    canView.value = false
  }
  
  let invoice = JSON.parse(localStorage.getItem("invoice"));
  GeneralFields.value.date = date.toISOString().substring(0, 10);
    GeneralFields.value.time = date.toTimeString().split(" ")[0];
  if (invoice) {
    
    handleDateTime();
    if (OfferPrice) {
      await OfferPriceStore.GetOfferPriceInvoices('','',1, true);
    } else if (ReturnInvoice) {
    } else if (SalesInvoice) {
    } else if (Booked) {
    }
    childTree.value.setButtonMenuItem(invoice.id, invoice.itemId, invoice.index)
  }
  else{
  handleDateTime();
  if (OfferPrice) {
    await OfferPriceStore.GetOfferPriceInvoices('','',1, false);
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
  }
});
onUpdated(() => {
  // if (ViewInvoice.value?.data) {
  //   let invoice = ViewInvoice.value?.data.find((item) => {
  //     return item.no === GeneralFields.value.no;
  //   });
  //   if (invoice) {
  //     footerDetails.value.itemsCount = invoice.itemsCount;
  //     footerDetails.value.quantityCount = invoice.quantityTotal;
  //     footerDetails.value.weight = invoice.weightTotal;
  //     footerFields.value.invoiceValue = invoice.amountTotal;
  //   }
  // }
});

async function AddNewInvoice() {
  await userStore.CheckPermissions(route.meta.moduleId);
  if (Permissions.value?.canAccess) {
    if (Permissions.value?.canAdd) {
      commonStore.ClearEverythings();
      isNew.value = false;
      treeDisabled.value = false;
      tableDisabled.value = false;
      contentDisabled.value = false;
      // branchSelected.value = true;
      commonStore.SetDefaultFields();
      await commonStore.GetBranches();
      GeneralFields.value.date = date.toISOString().substring(0, 10);
      GeneralFields.value.time = date.toTimeString().split(" ")[0];
      GeneralFields.value.branchGUN = Branches.value[0].gun;
      GeneralFields.value.isTaxApplied = false
      handleDateTime();
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
async function cancel() {
  contentDisabled.value = true;
  tableDisabled.value = true;
  treeDisabled.value = false;
  commonStore.ClearEverythings();
  footerDetails.value = {
    itemsCount: 0,
    quantityCount: 0,
    weight: 0,
    deliveryDate: "",
    time: "",
    today: "",
  };
  footerFields.value = {
    total: 0,
    totalBeforeTax: 0,
    discount: 0,
    extarDiscount: 0,
    taxValue: 0,
    invoiceValue: 0,
  };
  CustomerDiscount.value = 0
  isNew.value = true;
  GeneralFields.value.isCash = true;
  await OfferPriceStore.GetOfferPriceInvoices();// شيك اذا كان عرض سعر او مبيعات او مرتجع
  let items = document.querySelectorAll(".tree li .item-row");
  if (items.length > 0) {
    items.forEach((item) => {
    item.classList.remove("selected");
  });
  items[0].classList.add("selected");
  }
}
// إذا كان فيه حسم لدى العميل يتم إظهار تنبيه
const salemanIndex = ref(null);
async function checkCustomerHasDiscount(customerID, isInoviceTypeChange) {
  let selectedCustomerIndex = null
  if(Customers.value){
    selectedCustomerIndex = await Customers.value.findIndex((customer) => {
    return customer.gun === customerID;
  });
  }
  if (selectedCustomerIndex && selectedCustomerIndex >= 0) {
    if (!Customers.value[selectedCustomerIndex].isSuspend) {
      validation.value.customer = false;
    }

    if (NewItems.value[0].itemGUN) {
      const selectedCustomer = { ...Customers.value[selectedCustomerIndex] };
      Customer.value = selectedCustomer;
      
        if (selectedCustomer.salesmanGUN) {
        let saleman = SalesMen.value.findIndex((saleman) => {
          return saleman.gun === selectedCustomer.salesmanGUN;
        });
        if (saleman >= 0) {
          salemanIndex.value = saleman;
        }
      }
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
            if (isInoviceTypeChange) {
              chooseenCustomerDialog.value = true;
              customerDiscountTitle = `يوجد حسم لدى هذا العميل على الفواتير ${
                GeneralFields.value.isCash ? "نقد" : "اجل"
              } هل تريد اعتماد الحسم الذي لدى العميل`;
            }
            else {
              chooseenCustomerDialog.value = true;
             customerDiscountTitle = "هل تريد اعتماد الحسم الخاص بالعميل";
            }
          }
          // شيك اذا نوع السعر مختلف عن نوع السعر المختار
          if (selectedCustomer.defaultPrice && NewItems.value[0].itemGUN) {
            if (
              selectedCustomer.defaultPrice !== GeneralFields.value.priceType
            ) {
              priceTypeDialog.value = true;
              defaultPrice.value = selectedCustomer.defaultPrice;
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

  CheckNoneSaleItems();
  if (isCash) {
    validation.value.customer = false;
  }
}
function CheckNoneSaleItems() {
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    let flag = false;
    const element = NewItems.value[index];
    let item = Items.value.find((item) => {
      return item.gun === (element.itemGUN || element.gun);
    });
    
    if (!item) {
      console.log(item)
      flag = true;
      element.forSale = false;
    }
    if (flag) {
      notForSale.value = true;
    } else {
      element.forSale = true;
    }
  }
}
// اذا صنف ليس للبيع يتم حذفه بعد الضغط على زر "حذف الكل"
function handleDeleteNoneSaleItems() {
  console.log(NewItems.value[2]);
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    if (element.forSale === false) {
      commonStore.RemoveItem(index);
      // NewItems.value.splice(index, 1);
      ItemDetails.value.splice(index, 1);
    }
  }
  notForSale.value = false;
  // calculateInvoiceFooter()
}
async function handleBranch() {
  // شيك اذا الفاتورة جديدة ام فقط جلب الفروع

  if (isNew.value === false || isEdit.value) {
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
      salemanField.value = "";
    }
    // تحقق اذا كان يوجد صنف واحد على الاقل
    if (NewItems.value[0]?.itemGUN !== "") {
      priceDialog.value = true;
      if (OfferPrice) {
        await commonStore.GetBranchDataForOfferPrice(
          GeneralFields.value.branchGUN,
          GeneralFields.value.isCash
        );
        let ItemsIds = [];
        CheckNoneSaleItems();
        for (let index = 0; index < NewItems.value.length - 1; index++) {
          const element = NewItems.value[index];
          if (element.forSale === true) {
            ItemsIds.push(element.gun || element.itemGUN);
          }
        }
        ItemsIds.length > 0
          ? await commonStore.GetItemBaseOnBranch(ItemsIds)
          : "";
      } else if (ReturnInvoice) {
      } else if (SalesInvoice) {
      } else if (Booked) {
      }
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
                  settingsStore.toDouble(NewItems.value[selectedIndex].taxValue)
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

function calculateInvoiceFooter() {
  let quantityCount = 0;
  let weight = 0;
  // Totals left side
  let net = 0.0;
  let total = 0.0;
  let discount = 0.0;
  let taxValue = 0.0;
  let items =
    isEdit.value || !isNew.value
      ? NewItems.value.length - 1
      : NewItems.value.length;
  for (let index = 0; index < items; index++) {
    const element = NewItems.value[index];
    if (element && element.unitName) {
      quantityCount += ItemDetails.value[index]?.type !== 3 ? parseFloat(element.quantity)  : 0;
      weight += ItemDetails.value[index]?.type === 3 ? parseFloat(element.quantity) : 0;
      total += element.total;
      taxValue += element.taxValue;
      discount += element.discount;
      net += element.net;
    }
  }
  footerDetails.value.itemsCount =
    isEdit.value || !isNew.value
      ? NewItems.value.length - 1
      : NewItems.value.length;
  footerDetails.value.quantityCount = parseFloat(quantityCount);
  footerDetails.value.weight = parseFloat(weight);
  // left Side
  footerFields.value.total = settingsStore.toDouble(total);
  footerFields.value.totalBeforeTax = settingsStore.toDouble(total - discount);
  footerFields.value.taxValue = settingsStore.toDouble(taxValue);
  footerFields.value.discount = settingsStore.toDouble(discount);
  footerFields.value.invoiceValue = settingsStore.toDouble(net);
}
function handleDiscount(discount) {
  discount = discount ? discount : footerDetails.value.discount;
  
  if (typeof discount === "string" && discount) {
    if (discount.includes("%")) {
      discount = parseInt(discount.split("%")[0]);
      discount = (discount / 100) * footerFields.value.total; // المجموع الكلي للفاتورة قبل الخصم والضريبة

      // footerFields.value.discount = discount;
      // parseFloat(
      //   useHandleDiscount(
      //     discount,
      //     NewItems.value[index].quantity,
      //     footerFields.value.total, // المجموع الكلي للفاتورة قبل الخصم والضريبة
      //     NewItems.value[index].price
      //   )?.toFixed(2)
      // );
      setDiscountToAllItems(discount);
    } else {
      //  useHandleDiscount(
      //   parseInt(discount),
      //   NewItems.value[index].quantity,
      //   footerFields.value.total, // المجموع الكلي للفاتورة قبل الخصم والضريبة
      //   NewItems.value[index].price
      // );
      setDiscountToAllItems(discount);
    }
  } else {
    if (discount > 0) {
      setDiscountToAllItems(discount);
      return;
    }
    setDiscountToAllItems(0);
  }
}
const calculatingNet = false;
function setDiscountToAllItems(discount) {
  // تخزين قيمة مجموع الحسم
  if (discount > 0) {
    isCustomerDiscount.value = true;
    
    let discountDivided = parseFloat(discount / (NewItems.value.length - 1))
    let updatedItems = [...NewItems.value];
    for (let index = 0; index < updatedItems.length - 1; index++) {
      const element = updatedItems[index];
      let result = settingsStore.toDouble(useHandleDiscount(
        discountDivided,
        element.quantity,
        element.total,
        element.price
      ))
      updatedItems[index].discount = result || 0;
      // element.net = element.total - element.discount + element.taxValue;
    }
    NewItems.value = updatedItems;
  }
}

// اذا ضغط على زر نعم (يريد تغير الاسعار على حسب الفرع المختار)
function setPriceOnItems() {
  for (let index = 0; index < NewItems.value.length - 1; index++) {
    const element = NewItems.value[index];
    let newItem = NewBranchPriceItems.value.find(item => {
      return item.itemGUN === (element.itemGUN || element.gun) 
    });
    if (newItem) {
      
      console.log(element)
        NewItems.value[index].price = newItem.nonServiceData.units[0].sellingPrice
        commonStore.setPriceList(newItem.nonServiceData.units[0], index);
        commonStore.ItemDetails.splice(index, 1, {currentTaxValue: newItem.currentTaxValue, ...newItem.nonServiceData});
        // element.unitPriceList = newItem.nonServiceData.units[0].
        
      
    }
  }
  priceDialog.value = false
}

function handlePriceType() {
  if (!isCustomerPriceCheck.value) {
    if (NewItems.value[0]?.itemGUN || NewItems.value[0]?.gun) {
      if (Customer.value.defaultPrice !== GeneralFields.value.priceType) {
        priceTypeDialog.value = false;
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
  if (!isCustomerPriceCheck.value) {
    handleDiscount();
  }
  recalculate.value = true;
  priceTypeDialog.value = false;
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
        if (isEdit.value) {
          // إذا كان العميل نفس العميل اللي جاء مع الفاتورة عادي يعدل على الفاتورة
          if (Customer.value.gun === EditCustomerGun.value) {
            if (!validation.value.warehouse) {
              await OfferPriceStore.EditOfferPriceInvoice(
                GeneralFields.value.gun
              );
            }
          } else {
            if (!Customer.value?.isSuspend) {
              await OfferPriceStore.EditOfferPriceInvoice(
                GeneralFields.value.gun
              );
              if (OfferPriceStore.success) {
                refresh();
              }
            }
          }
        } else {
          if (!Customer.value?.isSuspend) {
            await OfferPriceStore.SaveOfferPriceInvoice();
            if (OfferPriceStore.success) {
              refresh();
            }
          }
        }
        if (OfferPriceStore.success) {
          isNew.value = true;
          isEdit.value = false;
        }
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
  if (GeneralFields.value.isCash === false) {
    if (Customer.value.gun === EditCustomerGun.value) {
      validation.value.customer = false;
    } else if (!Customer.value.gun || Customer.value.isSuspend) {
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

function handleDateTime() {
  try {
    if (GeneralFields.value.isTaxApplied) {
      handleTaxApplied(GeneralFields.value.isTaxApplied);
    }
    let convertedDate = "";
    let convertedTime = "";
    const originalDateObj = new Date(GeneralFields.value.date);
    originalDateObj.setMonth(originalDateObj.getMonth() - 1);
    convertedDate = originalDateObj.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // Convert the original time
    const [hours, minutes] = GeneralFields.value.time.split(":").map(Number);
    const convertedTimeObj = new Date();
    convertedTimeObj.setUTCHours(hours);
    convertedTimeObj.setUTCMinutes(minutes);
    convertedTimeObj.setUTCSeconds(0);
    convertedTimeObj.setUTCMilliseconds(0);
    convertedTime = convertedTimeObj.toISOString();

    GeneralFields.value.dateTime = convertedTime;
  } catch (error) {
    console.log(error);
  }
}

function handleSaleman(saleman) {
  console.log(saleman);
}

async function deleteInvoice() {
  deleteDialog.value = false;
  let invoiceId = invoiceIdTemp.value ? invoiceIdTemp.value : GeneralFields.value.gun;
  await OfferPriceStore.DeleteOfferPriceInvoice(invoiceId);
  invoiceIdTemp.value = null;
}
function refresh() {
  cancel()
  if (OfferPrice) {
    OfferPriceStore.GetOfferPriceInvoices();
  } else if (ReturnInvoice) {
  } else if (SalesInvoice) {
  } else if (Booked) {
  }
}
async function editInvoice() {
  
  if(Permissions.value?.canEdit){
    isEdit.value = !isEdit.value;
    tableDisabled.value = false;
    contentDisabled.value = false;
    let invoiceId = GeneralFields.value.gun;
    if (isEdit.value) {
      
    treeDisabled.value = false;
    await OfferPriceStore.GetOfferPriceInvoiceEditById(invoiceId);
    GeneralFields.value.date = date.toISOString().substring(0, 10);
    GeneralFields.value.time = date.toTimeString().split(" ")[0];
    handleDateTime();
    } else {
      treeDisabled.value = false;
      contentDisabled.value = true;
      tableDisabled.value = true;
      NewItems.value.splice(NewItems.value.length - 1, 1);
      await OfferPriceStore.GetOfferPriceInvoiceItemsById(invoiceId);
      tableDisabled.value = true;
      contentDisabled.value = true;
    }
  }
  else {
    errorHandle("ليس لديك صلاحية التعديل")
  }
  
}
function clearDisabled() {
  treeDisabled.value = false;
  contentDisabled.value = false;
  tableDisabled.value = false;
}
function handleTreeOptions(optionId) {
  // 1 === عرض فاتورة
  clearDisabled();
  if (optionId === 1) {
    isNew.value = true;
    contentDisabled.value = true
    tableDisabled.value = true
  }
  // 2 === تعديل الفاتورة
  if (optionId === 2) {
    isEdit.value = true;
    treeDisabled.value = false
  }
  // 3 === تكرار الفاتورة
  if (optionId === 3) {
    isNew.value = false;
    treeDisabled.value = false;
  }
  
}
function deleteFromChild(invoiceId) {
  deleteDialog.value = true
  invoiceIdTemp.value = invoiceId
}
</script>
<template>
  <div class="row">
    <!-- Tree  -->
    <div class="right-side-tree col-12 col-md-2" v-if="canView">
      <div class="disabledAll" v-if="treeDisabled"></div>
      <InvoicesTree
        @setTreeOption="handleTreeOptions"
        :SalesInvoice="SalesInvoice"
        :OfferPrice="OfferPrice"
        :Booked="Booked"
        :ReturnInvoice="ReturnInvoice"
        @clearDisabled="clearDisabled"
        @deleteInvoice="deleteFromChild"
        :isNewOrEdit="!isNew || isEdit"
        ref="childTree"
      />
    </div>
    <!-- Content  -->
    <div class="content border-right col-12 col-md-10" :class="{'col-md-12': !canView}">
      <!-- Buttons  -->
      <section class="top-buttons row">
        <!-- right side  -->
        <div class="d-flex align-center gap-6">
          <Button
            :color="'primary'"
            :text="'جديد'"
            :rightIcon="Add"
            @click.capture="AddNewInvoice()"
            v-if="isNew && !isEdit"
            class="high_index"
          />
          <Button
            :color="'netural'"
            :text="'إلغاء'"
            :rightIcon="Close"
            @click.capture="cancel"
            v-if="!isNew"
          ></Button>
          <Button
            :color="isEdit ? 'netural' : 'warning'"
            :onlyIcon="isEdit ? false : true"
            :text="isEdit ? 'إلغاء': undefined"
            :icon="isEdit ? Close : Edit"
            :rightIcon="isEdit ? Close : undefined"
            :class="{ high_index: isNew }"
            v-if="isNew"
            @click.capture="editInvoice"
          />
          <Button
            :color="'danger'"
            :onlyIcon="true"
            :icon="Delete"
            @click.capture="Permissions.canDelete ? deleteDialog = true : errorHandle('ليس لديك صلاحية الحذف')"
            :class="{ high_index: isNew }"
            v-if="isNew && !isEdit"
          />
          <Button
            :color="'neutral'"
            :onlyIcon="true"
            :icon="Refresh"
            class="high_index"
            @click.capture="refresh"
            v-if="isNew && !isEdit"
          />
          <Button
            :color="'neutral'"
            :onlyIcon="true"
            :icon="MoreDotsVertical"
            v-if="isNew && !isEdit"
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
          <div class="avatar-group high_index" v-if="!SalesInvoice && isEdit || isNew">
            <Popover :isHover="true" :position="'bottom-right'">
              <Avatar :icon="User" :borderColor="'warning'" :size="'md'" />
              <template v-slot:content>
                <UserPopover
                  :username="GeneralFields?.lastModifiedBy"
                  :date="GeneralFields?.lastModifiedAt"
                  :isEdit="true"
                />
              </template>
            </Popover>
            <Popover :isHover="true" :position="'bottom-right'">
              <Avatar :icon="User" :borderColor="'primary'" :size="'md'" />
              <template v-slot:content>
                <UserPopover
                  :username="GeneralFields?.createdBy"
                  :date="GeneralFields?.createdAt"
                />
              </template>
            </Popover>
          </div>
          <Button :color="'neutral'" :text="'باركود'" :rightIcon="Barcode" v-if="isNew && !isEdit" />
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
            v-if="isNew && !isEdit"/>
          <Button
            :color="'primary'"
            :text="'حفظ'"
            :rightIcon="Save"
            @click.capture="saveInvoice"
           v-if="!isNew || isEdit"/>
        </div>
      </section>
      <!-- Details  -->
      <section>
        <div class="disabledAll" v-if="contentDisabled"></div>
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
                <DropDown
                  :white="true"
                  :label="'الفرع'"
                  :items="Branches || []"
                  :displayTitle="'name2'"
                  :returnValue="'gun'"
                  :isPage="false"
                  @setItem="handleBranch"
                  :selectFirstItem="true"
                  :selectItem="GeneralFields.branchGUN"
                  v-model:valueReturn="GeneralFields.branchGUN"
                />
              </div>
              <div>
                <DatePicker
                  :label="'التاريخ'"
                  :leftIcon="Calendar"
                  v-model:input="GeneralFields.date"
                  @setInput="handleDateTime"
                />
              </div>
              <div>
                <TimePicker
                  :label="'الوقت'"
                  :leftIcon="Time"
                  v-model:input="GeneralFields.time"
                  @setInput="handleDateTime"
                />
              </div>
            </div>
            <!-- Offer Price Details  -->
            <div class="offer-price-details" v-if="OfferPrice">
              <div class="grid-3 gap-4">
                <div>
                  <DropDown
                    :white="true"
                    :label="'نوع السعر'"
                    :displayTitle="'name'"
                    :returnValue="'id'"
                    :noFilter="true"
                    :items="PriceType"
                    v-model:valueReturn="GeneralFields.priceType"
                    :selectFirstItem="true"
                    @setItem="handlePriceType"
                  />
                </div>
                <div>
                  <DropDown
                    :white="true"
                    :label="'احتساب الضريبة'"
                    :displayTitle="'name'"
                    :returnValue="'id'"
                    :noFilter="true"
                    :items="TaxApplied"
                    v-model:valueReturn="GeneralFields.isTaxApplied"
                    :selectFirstItem="isEdit || !isNew ? false : true"
                    @setItem="handleTaxApplied"
                  />
                </div>
                <div>
                  <ComboBox
                    :label="'اسم المندوب'"
                    :items="SalesMen || []"
                    :displayTitle="'name'"
                    :returnValue="'gun'"
                    :clearable="true"
                    :selectFirstItem="isEdit || !isNew ? false : true"
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
          <div class="sheet col-12 col-md-5 pr-6 pb-4 high_index">
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
                <KeepAlive>
                  <component
                    :is="customerTabs[customerTabSelected]"
                    @customerHasDiscount="checkCustomerHasDiscount"
                    :customerValidation="validation.customer"
                    :isDisplay="!treeDisabled && contentDisabled"
                    :isEdit="isEdit"
                  />
                </KeepAlive>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Tabel  -->
      <section class="table-container-invoice high-index">
        <div class="disabledAll" v-if="tableDisabled"></div>
        <SalesInvoiceTabel
          :isEdit="isEdit"
          :itemValidation="validation.item"
          :recalculate="recalculate"
          ref="InvoiceTable"
          :isDisplay="isNew"
          @showAlternativeItems="() => (alternativeDialog = true)"
          @restRecalculate="() => (recalculate = false)"
          @recalculateTotalDiscount="setDiscountToAllItems"
          @clearValidation="() => (validation.item = false)"
          @calculate="calculateInvoiceFooter"
          :discountFromParent="isCustomerDiscount"/>
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
            <div class="grid-3 gap-8">
              <!--  <div>
                <TextBox :label="'المدفوع'" :readOnly="true" />
              </div>-->
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
              <!-- <div>
                <TextBox :label="'المتبقي'" :readOnly="true" />
               </div> -->
              <div>
                <TextBox
                  :label="'الحسم'"
                  v-model:input="footerFields.discount"
                  @changeInput="handleDiscount"
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
    <Dialog
      :confirmText="'حذف'"
      :confirmColor="'danger'"
      v-model:show="deleteDialog"
      @confirm="deleteInvoice"
      :title="'هل تريد بالفعل الحذف؟'"
      :headerText="'تأكيد الحذف'"
      v-if="deleteDialog"
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
      @clickLeftAction="handleDeleteNoneSaleItems"
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
~/composables/useCalculateNumbers.js