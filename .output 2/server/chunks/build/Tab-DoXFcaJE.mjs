import { useSSRContext, mergeProps, ref, unref, mergeModels, useModel, onUnmounted, watch, computed, resolveDirective, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createSlots, withModifiers, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, d as defineStore, f as useHandleCodes, s as storeToRefs, u as useUserStore, B as Button, h as useGeneralStore, C as Close, T as ToolTip, I as Item$1, g as useServerFetch, e as useNotify } from './server.mjs';
import { B as Badge } from './TextBox-CQCy0lNb.mjs';
import { DynamicScroller } from 'vue-virtual-scroller';

const _sfc_main$n = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M13.28 5.96666L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/ArrowDown.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const ArrowDown = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$m = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_134_1529)"><path d="M5.33334 7.99999H10.6667M8 10.6667V5.33333M6 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 9.99999V5.99999C14.6667 2.66666 13.3333 1.33333 10 1.33333H6C2.66667 1.33333 1.33334 2.66666 1.33334 5.99999V9.99999C1.33334 13.3333 2.66667 14.6667 6 14.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_134_1529"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Buttons/Add.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Add = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$l = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_965_6070)"><path d="M7.33325 1.33334H5.99992C2.66659 1.33334 1.33325 2.66668 1.33325 6.00001V10C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 10V8.66668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6933 2.01332L5.43992 7.26665C5.23992 7.46665 5.03992 7.85999 4.99992 8.14665L4.71325 10.1533C4.60659 10.88 5.11992 11.3867 5.84659 11.2867L7.85325 11C8.13325 10.96 8.52659 10.76 8.73325 10.56L13.9866 5.30665C14.8933 4.39999 15.3199 3.34665 13.9866 2.01332C12.6533 0.679985 11.5999 1.10665 10.6933 2.01332Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.93994 2.76666C10.161 3.55164 10.5799 4.26671 11.1566 4.84336C11.7332 5.42001 12.4483 5.83894 13.2333 6.06" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_965_6070"><rect width="16" height="16" fill="currentColor"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Edit.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$k = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M14 3.98667C11.78 3.76667 9.54667 3.65334 7.32 3.65334C6 3.65334 4.68 3.72 3.36 3.85334L2 3.98667M5.66667 3.31334L5.81333 2.44C5.92 1.80667 6 1.33334 7.12667 1.33334H8.87333C10 1.33334 10.0867 1.83334 10.1867 2.44667L10.3333 3.31334M12.5667 6.09334L12.1333 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86C4 14.6667 3.94 13.8533 3.86667 12.8067L3.43333 6.09334M6.88667 11H9.10667M6.33333 8.33334H9.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Delete.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Delete = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$j = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M14.6666 8.00001C14.6666 11.68 11.6799 14.6667 7.99992 14.6667C4.31992 14.6667 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 8.00001C1.33325 4.32001 4.29325 1.33334 7.99992 1.33334C12.4466 1.33334 14.6666 5.04001 14.6666 5.04001M14.6666 5.04001V1.70668M14.6666 5.04001H11.7066" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Refresh.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Refresh = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$i = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.66675 12.6667C6.66675 13.4 7.26675 14 8.00008 14C8.73341 14 9.33342 13.4 9.33341 12.6667C9.33341 11.9334 8.73341 11.3334 8.00008 11.3334C7.26675 11.3334 6.66675 11.9334 6.66675 12.6667ZM6.66675 3.33336C6.66675 4.0667 7.26675 4.6667 8.00008 4.6667C8.73341 4.6667 9.33341 4.0667 9.33341 3.33336C9.33341 2.60003 8.73341 2.00003 8.00008 2.00003C7.26675 2.00003 6.66675 2.60003 6.66675 3.33336ZM6.66675 8.00003C6.66675 8.73336 7.26675 9.33336 8.00008 9.33336C8.73341 9.33336 9.33341 8.73336 9.33341 8.00003C9.33341 7.2667 8.73341 6.6667 8.00008 6.6667C7.26675 6.6667 6.66675 7.2667 6.66675 8.00003Z" stroke="currentColor" stroke-width="1.5"></path></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/MoreDotsVertical.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const MoreDotsVertical = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$h = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_965_6034)"><path d="M10.6667 5.99332V13.5667C10.6667 14.5333 9.97337 14.94 9.12671 14.4733L6.50671 13.0133C6.22671 12.86 5.77337 12.86 5.49337 13.0133L2.87337 14.4733C2.02671 14.94 1.33337 14.5333 1.33337 13.5667V5.99332C1.33337 4.85332 2.26671 3.91998 3.40671 3.91998H8.59337C9.73337 3.91998 10.6667 4.85332 10.6667 5.99332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.66675 7.99998H7.33341M6.00008 9.33331V6.66665M14.6667 3.40665V10.98C14.6667 11.9466 13.9734 12.3533 13.1267 11.8866L10.6667 10.5133V5.99331C10.6667 4.85331 9.73342 3.91998 8.59342 3.91998H5.33341V3.40665C5.33341 2.26665 6.26675 1.33331 7.40675 1.33331H12.5934C13.7334 1.33331 14.6667 2.26665 14.6667 3.40665Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_965_6034"><rect width="16" height="16" fill="currentColor"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Save.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Save = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$g = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1.93677 13.4994C2.55149 12.4354 3.4354 11.5519 4.4997 10.9376C5.56399 10.3234 6.77119 9.99999 8.00003 10C9.22886 10 10.4361 10.3234 11.5003 10.9377C12.5646 11.552 13.4485 12.4355 14.0632 13.4995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z" stroke="currentColor" stroke-miterlimit="10"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/User.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$9]]);
const useOfferPriceStore = defineStore("offerPrice", () => {
  const { handleCodesMessage } = useHandleCodes();
  const { successHandle } = useNotify();
  const commonStore = useCommonStore();
  storeToRefs(commonStore);
  let generaFields = {};
  const NewOfferPrice = ref(
    {
      // ...GeneralFields هنا 
      items: [
        //   ادراج الاصناف القادمة من common store 
      ],
      customer: {
        // تخزين بيانات العميل القادمة من common store 
      }
    }
  );
  ref([]);
  let isCustomerValid = false;
  async function SaveOfferPriceInvoice() {
    await RemoveUnnessaceryFields();
    try {
      await useServerFetch("/offerPrice", {
        method: "POST",
        body: JSON.stringify(generaFields)
      }).then((res) => {
        if (res.code === "200") {
          successHandle("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D");
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function GetOfferPriceInvoices(search, pageNumber = 1) {
    try {
      await useServerFetch(`/offerPrice/specific-view-data-without-details/${pageNumber}`, {
        branchId: commonStore.GeneralFields.branchGUN,
        searchText: search ? search : ""
      }).then((res) => {
        if (res.code === "200") {
          commonStore.InvoicesTree = res.data.viewData;
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  function RemoveUnnessaceryFields() {
    let Items = [];
    generaFields = { ...commonStore.GeneralFields };
    for (let index = 0; index < commonStore.NewItems.length - 1; index++) {
      const element = { ...commonStore.NewItems[index] };
      delete element.name;
      delete element.unitName;
      delete element.warehouseName;
      delete element.forSale;
      delete element.total;
      delete element.net;
      delete element.warehouseQuantity;
      delete element.unitPriceList;
      Items.push(element);
    }
    if (!generaFields.salesmanGUN) {
      delete generaFields.salesmanGUN;
    }
    if (!commonStore.Customer.gun) {
      delete commonStore.Customer.gun;
    }
    generaFields.customer = commonStore.Customer;
    for (const key in commonStore.Customer) {
      if (Object.hasOwnProperty.call(commonStore.Customer, key)) {
        const element = commonStore.Customer[key];
        if (element) {
          isCustomerValid = true;
        }
      }
    }
    isCustomerValid ? true : generaFields.customer;
    delete generaFields.totalDiscount;
    generaFields.items = Items;
  }
  return {
    NewOfferPrice,
    SaveOfferPriceInvoice,
    GetOfferPriceInvoices
  };
});
const useHandleTax = (tax, total) => {
  if (tax > 0) {
    let result = total * (tax / 100);
    return parseInt(result);
  }
  return 0;
};
const useCommonStore = defineStore("common", () => {
  const { handleCodesMessage } = useHandleCodes();
  useOfferPriceStore();
  const InvoicesTree2 = ref(null);
  const GeneralFields = ref({
    branchGUN: "",
    salesmanGUN: "",
    no: "",
    isCash: true,
    dateTime: "2024-04-17T08:53:05.266Z",
    isTaxApplied: true,
    note: "",
    priceType: 1,
    dataVersion: "",
    totalDiscount: 0
    // يتم حذفها قبل الارسال
  });
  const FooterDetails = ref({
    itemsCount: 0,
    quantityCount: 0,
    weight: 0,
    deliveryDate: "",
    time: "",
    today: ""
  });
  const AlternativesItems = ref(null);
  const SelectedAlternative = ref(null);
  const ItemId = ref(null);
  const PriceType = ref(null);
  const TaxApplied = ref();
  const Branches = ref(null);
  const Customers = ref(null);
  const SalesMen = ref(null);
  const CustomerDiscount = ref(null);
  const Items = ref(null);
  const Units = ref(null);
  const Warehouses = ref(null);
  const ItemDetails = ref([]);
  const NewItems = ref([]);
  const Customer = ref({
    gun: null,
    name: null,
    tin: null,
    anotherIdType: null,
    anotherIdValue: null,
    mobile: null,
    country: null,
    area: null,
    city: null,
    neighborhood: null,
    street: null,
    buildingNo: null,
    postelCode: null,
    additionalCode: null,
    poBox: null,
    phone: null,
    fax: null
  });
  ref([]);
  ref([]);
  async function GetBranches() {
    try {
      await useServerFetch("/Branch/V1").then((res) => {
        if (res.code === "200") {
          Branches.value = res.data;
        } else {
          handleCodesMessage(res.code, res.data.veiwMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function GetBranchDataForOfferPrice(branchId, isCash) {
    try {
      await useServerFetch(
        `Branch/${branchId}/branch-data-for-offer-price-preparation`,
        {
          params: {
            isCash
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          Customers.value = res.data.viewData.customers;
          SalesMen.value = res.data.viewData.salesmen;
          Items.value = res.data.viewData.items;
          GeneralFields.value.no = res.data.viewData.no;
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetItemDetails(itemId, index, itemName) {
    try {
      await useServerFetch(
        `item/${itemId}/item-data-for-offer-price-preparation`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied,
            isCash: GeneralFields.value.isCash,
            docDate: GeneralFields.value.dateTime
          }
        }
      ).then((res) => {
        var _a, _b, _c, _d;
        if (res.code === "200") {
          if (itemName) {
            alert(itemId);
            NewItems.value[index].name = itemName;
            NewItems.value[index].itemGUN = itemId;
          }
          ItemDetails.value.splice(index, 1, res.data.viewData);
          NewItems.value[index].taxValue = res.data.viewData.currentTaxValue;
          NewItems.value[index].unitPriceList = [
            { id: 1, price: (_a = res.data.viewData.nonServiceData) == null ? void 0 : _a.units[0].sellingPrice },
            { id: 2, price: (_b = res.data.viewData.nonServiceData) == null ? void 0 : _b.units[0].lowestPrice },
            { id: 3, price: (_c = res.data.viewData.nonServiceData) == null ? void 0 : _c.units[0].wholesalePrice },
            { id: 4, price: (_d = res.data.viewData.nonServiceData) == null ? void 0 : _d.units[0].costPrice }
          ];
          IncreaseItem(index);
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetItemsTaxes(itemIds) {
    try {
      await useServerFetch(
        `item/tax`,
        {
          params: {
            ItemId: itemIds,
            dateTime: "2024-04-17T08:53:05.266Z"
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          res.data.viewData.forEach((element, index) => {
            NewItems.value[index].taxValue = useHandleTax(element.taxValue, NewItems.value[index].total);
            NewItems.value[index].net = useHandleTax(element.taxValue, NewItems.value[index].total) + NewItems.value[index].total - NewItems.value[index].discount;
          });
        } else {
          handleCodesMessage(res.code, res.data[0].viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetItemQuantityByWarehouse(itemId, warehouseId, index) {
    try {
      await useServerFetch(
        `item/${itemId}/main-unit-available-quantity`,
        {
          params: {
            warehouseId
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          NewItems.value[index].warehouseQuantity = res.data.viewData;
        } else {
          handleCodesMessage(res.code, res.data[0].viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetAlternativesItems(itemId, docType, search, pageNumber) {
    try {
      await useServerFetch(
        `item/${itemId}/alternatives-to-view-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            docType,
            searchText: search ? search : "",
            isCash: GeneralFields.value.isCash,
            pageNumber: pageNumber ? pageNumber : 1,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          ItemId.value = itemId;
          AlternativesItems.value = res.data.viewData;
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetInsertAlternativesItems(itemId, alternativeId, docType) {
    try {
      await useServerFetch(
        `item/${itemId}/alternatives-to-insert-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            alternativeId,
            docType,
            isCash: GeneralFields.value.isCash,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          let itemIndex = NewItems.value.findIndex((item) => {
            return item.itemGUN === ItemId.value;
          });
          if (itemIndex >= 0) {
            console.log(res);
            let data = res.data.viewData;
            GetItemDetails(alternativeId, itemIndex, res.data.viewData.itemName);
          }
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  async function GetInsertAccessoriesItems(itemId, docType) {
    try {
      await useServerFetch(
        `item/${itemId}/accessories-to-insert-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            docType,
            isCash: GeneralFields.value.isCash,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          }
        }
      ).then((res) => {
        if (res.code === "200") {
          let itemIndex = NewItems.value.findIndex((item) => {
            return item.itemGUN === itemId;
          });
          if (itemIndex >= 0) {
            let data = res.data.viewData;
            for (let index = 0; index < data.length; index++) {
              const element = data[index];
              NewItems.value[itemIndex + 1] = insertItem(element);
              itemIndex++;
              IncreaseItem();
              ItemDetails.value.push({});
            }
            NewItems.value[itemIndex + 1];
          }
        } else {
          handleCodesMessage(res.code, res.data.viewMessage);
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
    }
  }
  function insertItem(data) {
    return {
      name: data.itemName,
      unitName: data.unitName,
      warehouseName: data.warehouseName,
      forSale: null,
      itemGUN: data.itemGUN,
      warehouseGUN: data.warehouseGUN,
      unitGUN: data.unitGUN,
      price: data.currentSellingPrice,
      costPrice: data.currentCostPrice,
      quantity: 1,
      unitPriceList: [
        { id: 1, price: data.currentSellingPrice },
        { id: 2, price: data.currentLowestPrice },
        { id: 3, price: data.currentWholesalePrice },
        { id: 4, price: data.currentCostPrice }
      ],
      total: data.currentSellingPrice * 1,
      net: data.currentSellingPrice * 1,
      taxValue: null,
      discount: data.currentDefaultDiscountPercentage
    };
  }
  function IncreaseItem(index) {
    let isLastItemEmpty = NewItems.value[NewItems.value.length - 1];
    if (isLastItemEmpty.itemGUN !== "") {
      NewItems.value.push({
        name: "",
        // قم بحذفه قبل الحفظ في السيرفر ,
        unitName: "",
        // قم بحذفه قبل الحفظ في السيرفر ,
        warehouseName: "",
        // قم بحذفه قبل الحفظ في السيرفر ,
        forSale: null,
        // قم بحذفه قبل الحفظ في السيرفر ,
        itemGUN: "",
        warehouseGUN: "",
        unitGUN: "",
        price: 0,
        costPrice: 0,
        quantity: 0,
        unitPriceList: [],
        total: 0,
        // قم بحذفه قبل الحفظ في السيرفر ,
        net: 0,
        // قم بحذفه قبل الحفظ في السيرفر ,
        taxValue: null,
        discount: CustomerDiscount.value || 0
      });
    }
  }
  function RemoveItem(index) {
    let item = NewItems.value[index].itemGUN;
    if (item) {
      NewItems.value.splice(index, 1);
    }
  }
  function setPriceList(unit, index) {
    NewItems.value[index].unitPriceList[0].price = unit.sellingPrice;
    NewItems.value[index].unitPriceList[1].price = unit.lowestPrice;
    NewItems.value[index].unitPriceList[2].price = unit.wholesalePrice;
    NewItems.value[index].unitPriceList[3].price = unit.costPrice;
  }
  function SetDefaultFields() {
    NewItems.value.push({
      name: "",
      // قم بحذفه قبل الحفظ في السيرفر ,
      unitName: "",
      // قم بحذفه قبل الحفظ في السيرفر ,
      warehouseName: "",
      // قم بحذفه قبل الحفظ في السيرفر ,
      forSale: null,
      // قم بحذفه قبل الحفظ في السيرفر ,
      itemGUN: "",
      warehouseGUN: "",
      unitGUN: "",
      price: 0,
      unitPriceList: [],
      costPrice: 1,
      quantity: 0,
      total: 0,
      // قم بحذفه قبل الحفظ في السيرفر ,
      net: 0,
      // قم بحذفه قبل الحفظ في السيرفر ,
      taxValue: null,
      discount: CustomerDiscount.value || 0
    });
    PriceType.value = [
      {
        id: 1,
        name: "\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639"
      },
      {
        id: 2,
        name: "\u0623\u062F\u0646\u0649 \u0633\u0639\u0631 \u0628\u064A\u0639"
      },
      {
        id: 3,
        name: "\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629"
      },
      {
        id: 4,
        name: "\u0633\u0639\u0631 \u0627\u0644\u062A\u0643\u0644\u0641\u0629"
      }
    ];
    TaxApplied.value = [
      {
        id: false,
        name: "\u0628\u062F\u0648\u0646"
      },
      {
        id: true,
        name: "\u062D\u0633\u0628 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A\u0629"
      }
    ];
  }
  function setPriceInItem(price, index) {
    NewItems.value[index].price = price;
  }
  function ClearEverythings() {
    Branches.value = null;
    Customers.value = null;
    ClearCustomer();
    SalesMen.value = null;
    Items.value = null;
    Units.value = null;
    PriceType.value = null;
    TaxApplied.value = null;
    GeneralFields.value = {
      branchGUN: "",
      salesmanGUN: "",
      no: 0,
      isCash: true,
      dateTime: "2024-04-01T10:16:00.158Z",
      isTaxApplied: true,
      note: "",
      priceType: 0,
      dataVersion: "",
      items: [
        //   ادراج الاصناف القادمة من common store
      ],
      customer: {
        // تخزين بيانات العميل القادمة من common store
      }
    };
    NewItems.value = [];
  }
  function ClearCustomer() {
    Customer.value = {
      gun: "",
      name: "",
      tin: "",
      anotherIdType: 0,
      anotherIdValue: "",
      mobile: "",
      country: "",
      area: "",
      city: "",
      neighborhood: "",
      street: "",
      buildingNo: "",
      postelCode: "",
      additionalCode: "",
      poBox: "",
      phone: "",
      fax: ""
    };
  }
  return {
    // States
    InvoicesTree: InvoicesTree2,
    GeneralFields,
    FooterDetails,
    Branches,
    Customers,
    Customer,
    CustomerDiscount,
    SalesMen,
    Items,
    ItemId,
    NewItems,
    AlternativesItems,
    SelectedAlternative,
    Units,
    Warehouses,
    ItemDetails,
    // Static Values
    PriceType,
    TaxApplied,
    // Actions
    GetBranches,
    GetBranchDataForOfferPrice,
    GetItemDetails,
    GetItemsTaxes,
    GetItemQuantityByWarehouse,
    GetAlternativesItems,
    GetInsertAlternativesItems,
    GetInsertAccessoriesItems,
    setPriceList,
    SetDefaultFields,
    setPriceInItem,
    RemoveItem,
    ClearEverythings,
    ClearCustomer
  };
});
const _sfc_main$f = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M13.9961 14L12.7961 12.8M7.69609 13.4C8.44463 13.4 9.18583 13.2526 9.87739 12.9661C10.5689 12.6797 11.1973 12.2598 11.7266 11.7305C12.2559 11.2012 12.6758 10.5729 12.9622 9.8813C13.2487 9.18974 13.3961 8.44853 13.3961 7.7C13.3961 6.95147 13.2487 6.21026 12.9622 5.5187C12.6758 4.82715 12.2559 4.19879 11.7266 3.66949C11.1973 3.1402 10.5689 2.72034 9.87739 2.43389C9.18583 2.14743 8.44463 2 7.69609 2C6.18436 2 4.73454 2.60053 3.66558 3.66949C2.59663 4.73845 1.99609 6.18827 1.99609 7.7C1.99609 9.21173 2.59663 10.6616 3.66558 11.7305C4.73454 12.7995 6.18436 13.4 7.69609 13.4Z" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Inputs/Search.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Search$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$e = {
  __name: "Search",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "label",
    "color",
    "disabled",
    "background",
    "placeholder",
    "clearable",
    "readOnly",
    "rightIcon",
    "leftIcon",
    "badgeText",
    "fullWidth",
    "badgeColor",
    "leftIconToolTip",
    "leftIconToolTipPosition",
    "leftInnerIconToolTip",
    "leftInnerIconToolTipPosition"
  ], {
    "input": {},
    "inputModifiers": {}
  }),
  emits: ["update:input"],
  setup(__props) {
    const input = useModel(__props, "input");
    const closeicon = ref(false);
    function clearInput() {
      input.value = "";
      closeicon.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-group", { "full-width": __props.fullWidth }]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        __props.color,
        __props.background,
        { disabled: __props.disabled },
        { readonly: __props.readOnly }
      ], "input-container"])}"><input type="input"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", input.value)}${ssrIncludeBooleanAttr(__props.readOnly) ? " readonly" : ""}><div class="icons">`);
      if (unref(closeicon)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(Close), {
          onClick: clearInput,
          class: "close-icon"
        }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(Search$1), null, null), _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/Search.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Search = _sfc_main$e;
const _sfc_main$d = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M2.93994 13.28L7.28661 8.93337C7.79994 8.42003 7.79994 7.58003 7.28661 7.0667L2.93994 2.72003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.27344 13.28L12.6201 8.93337C13.1334 8.42003 13.1334 7.58003 12.6201 7.0667L8.27344 2.72003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/ArrowRightDouble.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ArrowRightDouble = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M5.94 13.28L10.2867 8.93333C10.8 8.42 10.8 7.58 10.2867 7.06667L5.94 2.72" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/ArrowRight.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M7.66673 13.28L3.32006 8.93337C2.80673 8.42003 2.80673 7.58003 3.32006 7.0667L7.66673 2.72003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.9997 13.28L8.65307 8.93337C8.13973 8.42003 8.13973 7.58003 8.65307 7.0667L12.9997 2.72003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/ArrowLeftDouble.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ArrowLeftDouble = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M10 13.28L5.65334 8.93333C5.14001 8.42 5.14001 7.58 5.65334 7.06667L10 2.72" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Arrows/ArrowLeft.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {
  __name: "PagenationItems",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { InvoicesTree: InvoicesTree2 } = storeToRefs(commonStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Pagenation_Items row" }, _attrs))}>`);
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        icon: ArrowRightDouble,
        outline: true,
        size: "x-small"
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        icon: ArrowRight,
        outline: true,
        size: "x-small"
      }, null, _parent));
      _push(`<span class="total flex-grow">${ssrInterpolate((_a = unref(InvoicesTree2)) == null ? void 0 : _a.currentPage)}/${ssrInterpolate((_b = unref(InvoicesTree2)) == null ? void 0 : _b.totalPages)}</span>`);
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        icon: ArrowLeft,
        outline: true,
        size: "x-small"
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        icon: ArrowLeftDouble,
        outline: true,
        size: "x-small"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/PagenationItems.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PagenationItems = _sfc_main$9;
const _sfc_main$8 = {
  __name: "DropDown",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "text",
    "leftIcon",
    "color",
    "value",
    "disabled",
    "items",
    "label",
    "displayTitle",
    "returnValue",
    "DropArrowIcon"
  ], {
    "input": {},
    "inputModifiers": {}
  }),
  emits: ["update:input"],
  setup(__props) {
    const input = useModel(__props, "input");
    const isOpen = ref(false);
    onUnmounted(() => {
      (void 0).removeEventListener("click", () => {
      });
    });
    const selectedItem = ref(false);
    function setItem(value2) {
      input.value = value2;
      selectedItem.value = value2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dropDown-container", [{ "disabled": __props.disabled }]]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[__props.color], "dropDown"])}"><span class="text">${ssrInterpolate(selectedItem.value ? selectedItem.value : __props.text)}</span><div class="icons"><div class="icon">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.leftIcon), null, null), _parent);
      _push(`</div><div class="icon">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.DropArrowIcon ? __props.DropArrowIcon : ArrowDown), {
        class: { "active-menu": isOpen.value }
      }, null), _parent);
      _push(`</div></div></div>`);
      if (isOpen.value) {
        _push(`<div class="dropMenu"><!--[-->`);
        ssrRenderList(__props.items, (item) => {
          _push(ssrRenderComponent(Item$1, {
            key: item[__props.returnValue],
            text: item[__props.displayTitle],
            selected: item[__props.returnValue] === selectedItem.value,
            onClick: ($event) => setItem(item[__props.displayTitle], item[__props.returnValue])
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/DropDown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DropDown = _sfc_main$8;
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.55501 4H8.2409C8.54737 4 8.8 4.21933 8.8 4.48539V5.01752C8.8 5.21168 8.65919 5.45258 8.52252 5.57483L7.3215 6.49527C7.15584 6.61752 7.04402 6.85842 7.04402 7.05257V8.09527C7.04402 8.23909 6.9322 8.43324 6.79139 8.50875L6.4021 8.72807C6.03765 8.92223 5.53653 8.70291 5.53653 8.31459V7.031C5.53653 6.86201 5.42471 6.64269 5.31289 6.52044L4.25268 5.54966C4.11187 5.42741 4.00005 5.21168 4.00005 5.06427V4.50696C3.99591 4.21933 4.24854 4 4.55501 4Z" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.3999 7.93201V9.63241C2.3999 12.4664 3.5199 13.6 6.3199 13.6H9.6799C12.4799 13.6 13.5999 12.4664 13.5999 9.63241V6.2316C13.5999 4.46318 13.1631 3.35225 12.1495 2.77411C11.8639 2.60974 11.2927 2.48504 10.7719 2.40002M8.5599 8.49881H11.3599M7.4399 10.766H11.3599" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Filter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none"
  }, _attrs))}><path d="M2.88672 3.44H12.1134C13.2201 3.44 14.1134 4.33334 14.1134 5.44V7.65334" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.99339 1.33333L2.88672 3.43999L4.99339 5.54666M14.1134 12.56H4.88672C3.78005 12.56 2.88672 11.6667 2.88672 10.56V8.34666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0066 14.6667L14.1133 12.56L12.0066 10.4533" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Repeat.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Repeat = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 16",
    fill: "none"
  }, _attrs))}><path d="M10.6111 0H4.38889C1.66667 0 0.5 1.6 0.5 4V12C0.5 14.4 1.66667 16 4.38889 16H10.6111C13.3333 16 14.5 14.4 14.5 12V4C14.5 1.6 13.3333 0 10.6111 0ZM4.38889 8.2H7.5C7.81889 8.2 8.08333 8.472 8.08333 8.8C8.08333 9.128 7.81889 9.4 7.5 9.4H4.38889C4.07 9.4 3.80556 9.128 3.80556 8.8C3.80556 8.472 4.07 8.2 4.38889 8.2ZM10.6111 12.6H4.38889C4.07 12.6 3.80556 12.328 3.80556 12C3.80556 11.672 4.07 11.4 4.38889 11.4H10.6111C10.93 11.4 11.1944 11.672 11.1944 12C11.1944 12.328 10.93 12.6 10.6111 12.6ZM12.5556 5.8H11C9.81778 5.8 8.86111 4.816 8.86111 3.6V2C8.86111 1.672 9.12556 1.4 9.44444 1.4C9.76333 1.4 10.0278 1.672 10.0278 2V3.6C10.0278 4.152 10.4633 4.6 11 4.6H12.5556C12.8744 4.6 13.1389 4.872 13.1389 5.2C13.1389 5.528 12.8744 5.8 12.5556 5.8Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Item = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M15.2136 4.7936C15.532 5.2464 15.1528 5.8 14.5984 5.8H0.8C0.587827 5.8 0.384344 5.71571 0.234315 5.56569C0.0842854 5.41566 0 5.21217 0 5V3.536C0 1.584 1.584 0 3.536 0H5.392C6.696 0 7.104 0.424 7.624 1.12L8.744 2.608C8.992 2.936 9.024 2.976 9.488 2.976H11.72C13.164 2.976 14.4416 3.6936 15.2136 4.7936ZM15.1864 7C15.3982 7 15.6013 7.08396 15.7512 7.23347C15.9012 7.38298 15.9858 7.58584 15.9864 7.7976L16 11.72C16 14.08 14.08 16 11.72 16H4.28C1.92 16 0 14.08 0 11.72V7.8C0 7.58783 0.0842854 7.38434 0.234315 7.23431C0.384344 7.08429 0.587827 7 0.8 7H15.1864Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Folder.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Folder = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "Tree",
  __ssrInlineRender: true,
  props: [
    "text",
    "displayTitle",
    "returnValue",
    "arrowIcon",
    "itemIcon",
    "leftIcon",
    "item",
    "noRepeat",
    "secondaryTitle"
  ],
  setup(__props) {
    const opened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "tree" }, _attrs))}><li>`);
      if (__props.item) {
        _push(`<div class="row item-row"><div class="gap-4 row"><div class="icon rowIcon">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(Item), null, null), _parent);
        _push(`</div><span># ${ssrInterpolate(__props.item[__props.displayTitle])} ${ssrInterpolate(__props.item[__props.secondaryTitle] ? __props.item[__props.secondaryTitle].name : "")}</span></div><div class="icon">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.leftIcon), null, null), _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(opened)) {
        _push(`<div><!--[-->`);
        ssrRenderList((_a = __props.item) == null ? void 0 : _a.child, (child, i) => {
          _push(ssrRenderComponent(Tree, {
            key: i,
            icon: child.child.length === 0 ? Item : Folder,
            leftIcon: __props.noRepeat ? void 0 : Repeat,
            item: child
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Tree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Tree = _sfc_main$3;
const _sfc_main$2 = {
  __name: "InvoicesTree",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const commonStore = useCommonStore();
    const { Branches, InvoicesTree: InvoicesTree2 } = storeToRefs(commonStore);
    const { Permissions } = storeToRefs(userStore);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="treeSide">`);
      _push(ssrRenderComponent(Search, { placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629, \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644" }, null, _parent));
      _push(ssrRenderComponent(PagenationItems, null, null, _parent));
      _push(`<div class="row align-center gap-10">`);
      _push(ssrRenderComponent(DropDown, {
        text: "\u0643\u0644 \u0627\u0644\u0641\u0631\u0648\u0639",
        items: unref(Branches),
        displayTitle: "name2",
        returnValue: "gun",
        class: "flex-grow"
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        onlyIcon: true,
        icon: Filter
      }, null, _parent));
      _push(`</div>`);
      if ((_a = unref(Permissions)) == null ? void 0 : _a.canView) {
        _push(`<div class="tree-container"><!--[-->`);
        ssrRenderList((_b = unref(InvoicesTree2)) == null ? void 0 : _b.data, (item, i) => {
          _push(ssrRenderComponent(Tree, {
            key: i,
            displayTitle: "no",
            secondaryTitle: "customer",
            returnValue: "gun",
            item,
            noRepeat: true
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Invoices/Sales/InvoicesTree.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InvoicesTree = _sfc_main$2;
const _sfc_main$1 = {
  __name: "ComboBox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels([
    "label",
    "color",
    "items",
    "index",
    "displayTitle",
    "disabled",
    "background",
    "returnValue",
    "placeholder",
    "bigData",
    "clearable",
    "readOnly",
    "leftInnerIconItem",
    "rightIcon",
    "leftIcon",
    "badgeText",
    "noFilter",
    "size",
    "isPage",
    "fullWidth",
    "selectFirstItem",
    "badgeColor",
    "leftInnerIcon",
    "leftIconToolTip",
    "leftIconToolTipPosition",
    "leftInnerIconToolTip",
    "leftInnerIconToolTipPosition",
    "DropArrowIcon",
    "selectItem"
  ], {
    "input": {},
    "inputModifiers": {},
    "valueReturn": {},
    "valueReturnModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels([
    "openAdvanceSearchModel",
    "getMoreItems",
    "getItemBySearch",
    "setInput",
    "setItem"
  ], ["update:input", "update:valueReturn"]),
  setup(__props, { emit: __emit }) {
    const generalStore = useGeneralStore();
    storeToRefs(generalStore);
    const emit = __emit;
    const input = useModel(__props, "input");
    const valueReturn = useModel(__props, "valueReturn");
    const selectedItem = ref("");
    ref("");
    const props = __props;
    const focusedIndex = ref(-1);
    const inputElement = ref(null);
    const isOpen = ref(false);
    onUnmounted(() => {
      (void 0).removeEventListener("click", () => {
      });
    });
    watch(
      () => props.items,
      (value) => {
        if (value) {
          input.value = "";
          if (value.length > 0) {
            if (props.selectFirstItem) {
              setFirstItem(value[0]);
            }
          }
        }
      }
    );
    watch(input, (newValue) => {
      setInput(newValue);
      if (newValue === "") {
        selectedItem.value = "";
        valueReturn.value = "";
      }
    });
    watch(
      () => props.selectItem,
      (value) => {
        if (value) {
          setFirstItem(value);
        }
      }
    );
    let filterItem = computed(() => {
      if (props.noFilter) {
        return props.items;
      }
      if (selectedItem.value) {
        return props.items;
      } else {
        return props.items.filter((item) => {
          return item[props.displayTitle].includes(input.value);
        });
      }
    });
    function setItem(text, value) {
      if (selectedItem.value !== value) {
        selectedItem.value = value;
        valueReturn.value = value;
        input.value = text;
        inputElement.value.focus();
        emit("setItem", value, props.index);
      } else {
        inputElement.value.focus();
      }
    }
    function setInput(value) {
      input.value = value;
      emit("setInput", value);
      if (value === "") {
        selectedItem.value = "";
      }
      if (props.isPage) {
        emit("getItemBySearch", input.value);
      }
    }
    function setFirstItem(item) {
      input.value = item[props.displayTitle];
      selectedItem.value = item[props.returnValue];
      valueReturn.value = item[props.returnValue];
      emit("setItem", item[props.returnValue], props.index);
    }
    function clearInput() {
      input.value = "";
    }
    function handleLinkKeydown(index) {
      focusedIndex.value = index;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_move_next_on_enter = resolveDirective("move-next-on-enter");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-group", { "full-width": __props.fullWidth }]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_move_next_on_enter)))}>`);
      if (__props.label) {
        _push(`<label>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        __props.size,
        __props.color,
        __props.background,
        { disabled: __props.disabled },
        { readonly: __props.readOnly }
      ], "input-container"])}"><input tabindex="0" type="input"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", input.value)}${ssrIncludeBooleanAttr(__props.readOnly) ? " readonly" : ""} class="combobox">`);
      if (input.value && __props.clearable) {
        _push(`<div>`);
        _push(ssrRenderComponent(Close, {
          class: "closeIcon",
          onClick: clearInput
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.leftInnerIcon || __props.badgeText) {
        _push(`<div class="icons combobox">`);
        if (__props.badgeText) {
          _push(ssrRenderComponent(Badge, {
            text: __props.badgeText,
            color: __props.badgeColor
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(ToolTip, {
          text: __props.leftInnerIconToolTip,
          position: __props.leftInnerIconToolTipPosition
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.leftInnerIcon), null, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(__props.leftInnerIcon)))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="icon">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.DropArrowIcon ? __props.DropArrowIcon : ArrowDown), {
        class: { "active-menu": isOpen.value && !__props.disabled }
      }, null), _parent);
      _push(`</div></div><div class="${ssrRenderClass([{ virtual: props.bigData }, "dropMenu"])}" style="${ssrRenderStyle(isOpen.value && !__props.disabled ? null : { display: "none" })}">`);
      if (__props.items && !__props.bigData) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(filterItem), (item) => {
          var _a;
          _push(ssrRenderComponent(Item$1, {
            key: item[props.returnValue],
            text: item[props.displayTitle],
            leftInnerIcon: item[props.leftInnerIconItem] ? __props.leftInnerIcon : void 0,
            leftInnerIconToolTip: item[props.leftInnerIconItem] ? __props.leftInnerIconToolTip : void 0,
            leftInnerIconToolTipPosition: "bottom-right",
            selected: item[props.returnValue] === selectedItem.value,
            onClick: ($event) => setItem(item[props.displayTitle], item[props.returnValue]),
            onKeydown: ($event) => handleLinkKeydown(__props.index),
            class: { focus: ((_a = unref(filterItem)[focusedIndex.value]) == null ? void 0 : _a[props.returnValue]) === item[props.returnValue] }
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (__props.isPage) {
          _push(`<div class="trigger">\u062C\u0627\u0631\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u0635\u0646\u0627\u0641...</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.items && __props.bigData) {
        _push(ssrRenderComponent(unref(DynamicScroller), {
          items: unref(filterItem),
          keyField: __props.returnValue,
          "min-item-size": 32
        }, createSlots({
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(ssrRenderComponent(Item$1, {
                class: { focus: ((_a = unref(filterItem)[focusedIndex.value]) == null ? void 0 : _a[props.returnValue]) === item[props.returnValue] },
                key: item[props.returnValue],
                text: item[props.displayTitle],
                selected: item[props.returnValue] === selectedItem.value,
                onClick: ($event) => setItem(item[props.displayTitle], item[__props.returnValue]),
                onKeydown: ($event) => handleLinkKeydown(__props.index)
              }, null, _parent2, _scopeId));
            } else {
              return [
                (openBlock(), createBlock(Item$1, {
                  class: { focus: ((_b = unref(filterItem)[focusedIndex.value]) == null ? void 0 : _b[props.returnValue]) === item[props.returnValue] },
                  key: item[props.returnValue],
                  text: item[props.displayTitle],
                  selected: item[props.returnValue] === selectedItem.value,
                  onClick: withModifiers(($event) => setItem(item[props.displayTitle], item[__props.returnValue]), ["stop"]),
                  onKeydown: withModifiers(($event) => handleLinkKeydown(__props.index), ["prevent"])
                }, null, 8, ["class", "text", "selected", "onClick", "onKeydown"]))
              ];
            }
          }),
          _: 2
        }, [
          __props.isPage ? {
            name: "after",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (__props.items) {
                  _push2(`<div class="trigger"${_scopeId}>\u062C\u0627\u0631\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u0635\u0646\u0627\u0641...</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  __props.items ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "trigger"
                  }, "\u062C\u0627\u0631\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u0635\u0646\u0627\u0641...")) : createCommentVNode("", true)
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Inputs/ComboBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ComboBox = _sfc_main$1;
const _sfc_main = {
  __name: "Tab",
  __ssrInlineRender: true,
  props: ["text", "color", "disabled"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tab", [__props.color, { "disabled": __props.disabled }]]
      }, _attrs))}><span>${ssrInterpolate(__props.text)}</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DesignSystem/Generals/Tab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tab = _sfc_main;

export { Add as A, ComboBox as C, Delete as D, Edit as E, InvoicesTree as I, MoreDotsVertical as M, Refresh as R, Save as S, Tab as T, User as U, useOfferPriceStore as a, ArrowDown as b, Search$1 as c, useHandleTax as d, useCommonStore as u };
//# sourceMappingURL=Tab-DoXFcaJE.mjs.map
