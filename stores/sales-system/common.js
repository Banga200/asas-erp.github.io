import { defineStore } from "pinia";
import { ref } from "vue";
export const useCommonStore = defineStore("common", () => {
  const { handleCodesMessage } = useHandleCodes();
  const offerPriceStore = useOfferPriceStore();
  // States
    const InventoryDocsOrder = {
    FirstTermInventory: 1,
    PurchaseInvoice: 2,
    SalesInvoice: 3,
    PurchaseReturnInvoice: 4,
    SalesReturnInvoice: 5,
    OfferPrice: 6,
    PurchaseOrder: 7,
    InternalBooked: 8,
    ExternalBooked: 9,
    DamagedItemInvoice: 10,
    TransferBetweenBranch: 11,
    TransferBetweenWarehouse: 12,
    HandingOutInvoice: 13,
    HandingInInvoice: 14,
    InventoryDifferences: 15,
    OperationalHandingOutInvoice: 16,
    OperationalHandingInInvoice: 17
  }
  const GeneralFields = ref({
    branchGUN: "",
    salesmanGUN: "",
    no: '',
    isCash: true,
    dateTime: "2024-04-17T08:53:05.266Z",
    isTaxApplied: true,
    note: "",
    priceType: 1,
    dataVersion: "",
    totalDiscount: 0 // يتم حذفها قبل الارسال
  });
  // بيانات تحت الفاتورة 
  const FooterDetails = ref({
    itemsCount: 0,
    quantityCount: 0,
    weight: 0,
    deliveryDate: '',
    time: '',
    today: ''
  })
  const AlternativesItems = ref(null);
  const SelectedAlternative = ref(null);
  const ItemId = ref(null);
  const PriceType = ref(null);
  const TaxApplied = ref();
  const Branches = ref(null);
  const Customers = ref(null);
  const SalesMen = ref(null);
  const CustomerDiscount = ref(null);
  const Items = ref(null);// الاصناف القادمة مع العميل والمندوب
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
    fax: null, 
  });
  const Sales = ref([]);
  const Invoices = ref([]);
  // Actions

  async function GetBranches() {
    try {
      await useServerFetch("/Branch/V1")
        .then((res) => {
          if (res.code === "200") {
            Branches.value = res.data;
          } else {
            handleCodesMessage(res.code, res.data.veiwMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  // Offer Price
  async function GetBranchDataForOfferPrice(branchId, isCash) {
    try {
      await useServerFetch(
        `Branch/${branchId}/branch-data-for-offer-price-preparation`,
        {
          params: {
            isCash: isCash,
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            Customers.value = res.data.viewData.customers;
            SalesMen.value = res.data.viewData.salesmen;
            Items.value = res.data.viewData.items;
            GeneralFields.value.no = res.data.viewData.no;
          } else {
            handleCodesMessage(res.code, res.data.viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
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
            docDate: GeneralFields.value.dateTime,
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            // إضافة الوحدات والمستودعات الخاصة بالصنف المختار
            if (itemName) {
              alert(itemId)
              NewItems.value[index].name = itemName;
              NewItems.value[index].itemGUN = itemId;
            }
            ItemDetails.value.splice(index, 1, res.data.viewData);
            NewItems.value[index].taxValue = res.data.viewData.currentTaxValue;
            NewItems.value[index].unitPriceList = [
              {id: 1, price: res.data.viewData.nonServiceData?.units[0].sellingPrice},
              {id: 2, price: res.data.viewData.nonServiceData?.units[0].lowestPrice},
              {id: 3, price: res.data.viewData.nonServiceData?.units[0].wholesalePrice},
              {id: 4, price: res.data.viewData.nonServiceData?.units[0].costPrice},
            ];
            IncreaseItem(index);
          } else {
            handleCodesMessage(res.code, res.data.viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  async function GetItemsTaxes(itemIds) {
    
    try {
      await useServerFetch(
        `item/tax`,
        {
          params: {
            ItemId: itemIds,
            dateTime: '2024-04-17T08:53:05.266Z',
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            res.data.viewData.forEach((element, index) => {
              NewItems.value[index].taxValue = useHandleTax(element.taxValue, NewItems.value[index].total);
              NewItems.value[index].net = useHandleTax(element.taxValue, NewItems.value[index].total) + NewItems.value[index].total - NewItems.value[index].discount;
            });
           
          } else {
            handleCodesMessage(res.code, res.data[0].viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  async function GetItemQuantityByWarehouse(itemId,warehouseId, index) {
    try {
      await useServerFetch(
        `item/${itemId}/main-unit-available-quantity`,
        {
          params: {
            warehouseId: warehouseId,
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            NewItems.value[index].warehouseQuantity = res.data.viewData;
            
          } else {
            handleCodesMessage(res.code, res.data[0].viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  async function GetAlternativesItems(itemId, docType,search, pageNumber) {
    
    try {
      await useServerFetch(
        `item/${itemId}/alternatives-to-view-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            docType: docType,
            searchText: search? search : '',
            isCash: GeneralFields.value.isCash,
            pageNumber: pageNumber ? pageNumber : 1,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            ItemId.value = itemId
            AlternativesItems.value = res.data.viewData;
          } else {
            handleCodesMessage(res.code, res.data.viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  async function GetInsertAlternativesItems(itemId,alternativeId, docType) {
    try {
      await useServerFetch(
        `item/${itemId}/alternatives-to-insert-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            alternativeId: alternativeId,
            docType: docType,
            isCash: GeneralFields.value.isCash,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          },
        }
      )
        .then((res) => {
          if (res.code === "200") {
            let itemIndex = NewItems.value.findIndex(item => {
              return item.itemGUN === ItemId.value
            })
            if (itemIndex >= 0) {
              console.log(res)
              let data = res.data.viewData;
              // NewItems.value.splice(itemIndex, 1, insertItem(data))
               
              GetItemDetails(alternativeId, itemIndex, res.data.viewData.itemName)
            }
            
          } else {
            handleCodesMessage(res.code, res.data.viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  async function GetInsertAccessoriesItems(itemId, docType) {
    
    try {
      await useServerFetch(
        `item/${itemId}/accessories-to-insert-in-docs`,
        {
          params: {
            branchId: GeneralFields.value.branchGUN,
            docType: docType,
            isCash: GeneralFields.value.isCash,
            IsCurrentTaxRequired: GeneralFields.value.isTaxApplied
          },
        }
      )
        .then((res) => {
          
          if (res.code === "200") {
            let itemIndex = NewItems.value.findIndex(item => {
              return item.itemGUN === itemId
            })
            if (itemIndex >= 0) {
              let data = res.data.viewData;
              for (let index = 0; index < data.length; index++) {
                const element = data[index];
                NewItems.value[itemIndex + 1] = insertItem(element)
                itemIndex++
                IncreaseItem();
                ItemDetails.value.push({})
              }
              NewItems.value[itemIndex + 1] 
              // NewItems.value.splice(itemIndex, 1, insertItem(data))
               
              // GetItemDetails(alternativeId, itemIndex, res.data.viewData.itemName)
            }
            
          } else {
            handleCodesMessage(res.code, res.data.viewMessage);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  }
  function insertItem(data) {
    return  {
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
        {id: 1, price: data.currentSellingPrice},
        {id: 2, price: data.currentLowestPrice},
        {id: 3, price: data.currentWholesalePrice},
        {id: 4, price: data.currentCostPrice},
      ],
      total: data.currentSellingPrice * 1, 
      net: data.currentSellingPrice * 1,  
      taxValue: null,
      discount: data.currentDefaultDiscountPercentage
    }
  }
  function IncreaseItem(index) {
    let isLastItemEmpty = NewItems.value[NewItems.value.length - 1];
    if (isLastItemEmpty.itemGUN !== "") {
      NewItems.value.push({
        name: "", // قم بحذفه قبل الحفظ في السيرفر ,
        unitName: "", // قم بحذفه قبل الحفظ في السيرفر ,
        warehouseName: "", // قم بحذفه قبل الحفظ في السيرفر ,
        forSale: null, // قم بحذفه قبل الحفظ في السيرفر ,
        itemGUN: "",
        warehouseGUN: "",
        unitGUN: "",
        price: 0,
        costPrice: 0,
        quantity: 0,
        unitPriceList: [],
        total: 0, // قم بحذفه قبل الحفظ في السيرفر ,
        net: 0,  // قم بحذفه قبل الحفظ في السيرفر ,
        taxValue: null,
        discount: CustomerDiscount.value || 0,
      });
    }
  }
  function RemoveItem(index) {
    let item = NewItems.value[index].itemGUN; // check if the row is selected
    if (item) {
      NewItems.value.splice(index, 1);
    }
  }
  function setPriceList(unit, index) {
    NewItems.value[index].unitPriceList[0].price = unit.sellingPrice
    NewItems.value[index].unitPriceList[1].price = unit.lowestPrice
    NewItems.value[index].unitPriceList[2].price = unit.wholesalePrice
    NewItems.value[index].unitPriceList[3].price = unit.costPrice
  }
  function SetDefaultFields() {
    NewItems.value.push({
      name: "", // قم بحذفه قبل الحفظ في السيرفر ,
      unitName: "", // قم بحذفه قبل الحفظ في السيرفر ,
      warehouseName: "", // قم بحذفه قبل الحفظ في السيرفر ,
      forSale: null, // قم بحذفه قبل الحفظ في السيرفر ,
      itemGUN: "",
      warehouseGUN: "",
      unitGUN: "",
      price: 0,
      unitPriceList: [],
      costPrice: 1,
      quantity: 0,
      total: 0, // قم بحذفه قبل الحفظ في السيرفر ,
      net: 0,  // قم بحذفه قبل الحفظ في السيرفر ,
      taxValue:null,
      discount: CustomerDiscount.value || 0,
    });
    PriceType.value = [
      {
        id: 1,
        name: "سعر البيع",
      },
      {
        id: 2,
        name: "أدنى سعر بيع",
      },
      {
        id: 3,
        name: "سعر الجملة",
      },
      {
        id: 4,
        name: "سعر التكلفة",
      },
    ];
    TaxApplied.value = [
      {
        id: false,
        name: "بدون",
      },
      {
        id: true,
        name: "حسب المجموعة الضريبية",
      },
    ];
  }
  function setPriceInItem(price, index) {
    NewItems.value[index].price = price;
  }
  function ClearEverythings() {
    Branches.value = null;
    Customers.value = null;
    ClearCustomer()
    SalesMen.value = null;
    Items.value = null;
    Units.value = null;
    PriceType.value = null 
    TaxApplied.value = null
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
        },
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
      fax: "",
    };
  }
  return {
    // States
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
    ClearCustomer,
  };
});
