import { defineStore } from "pinia";
import {ref} from 'vue';
export const useOfferPriceStore = defineStore('offerPrice', () => {
    const {handleCodesMessage} = useHandleCodes();
    const {successHandle} = useNotify()
    const commonStore = useCommonStore();
    const {GeneralFields} = storeToRefs(commonStore)
    const success = ref(false);
    let generaFields = {}
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
    )
    const Invoices = ref([]);
    let isCustomerValid = true;
    async function SaveOfferPriceInvoice() {
        await RemoveUnnessaceryFields();
        success.value = false
        try {
            await useServerFetch("/offerPrice", {
                method: 'POST',
                body: JSON.stringify(generaFields)
            }).then(res => {
                if (res.code === "200") {
                    successHandle("تم حفظ الفاتورة بنجاح");
                    GetOfferPriceInvoices();
                    success.value = true
                }
                else {
                    handleCodesMessage(res.code, res.data.viewMessage);
                }
            }).catch(error => {console.log(error)})
            
            
        } catch (error) {
            console.log(error)
        }
    }
    async function GetOfferPriceInvoices(search = '', branchId= '', pageNumber = 1) {
        try {
            await useServerFetch(`/offerPrice/specific-view-data-without-details/${pageNumber}`, {
               params: {
                branchId: branchId,
                searchText: search 
               }
            }).then(res => {
                if (res.code === '200') {
                    commonStore.InvoicesTree = res.data.viewData;
                    commonStore.SetViewGeneralData(res.data.viewData.data[0]);
                    GetOfferPriceInvoiceItemsById(res.data.viewData.data[0].gun);
                }
                else if (res.code === '204') {
                    commonStore.InvoicesTree = [];
                    commonStore.ClearEverythings();
                }
                else {
                    handleCodesMessage(res.code, res.data.message)
                }
                commonStore.GetBranches()
            }).catch(error => {
                console.log(error)
            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
    async function GetOfferPriceInvoiceItemsById(offerPriceID, pageNumber = 1) {
        commonStore.NewItems = []
        try {
            await useServerFetch(`/offerPrice/${offerPriceID}/specific-view-data-of-items/${pageNumber}`, {
            }).then(res => {
                if (res.code === '200') {
                    
                    for (let index = 0; index < res.data.viewData.data.length; index++) {
                        const element = res.data.viewData.data[index];
                        commonStore.NewItems.push(element);
                        commonStore.NewItems[index].name = element.itemName

                    }
                }
                else {
                    handleCodesMessage(res.code, res.data.viewMessage)
                }
            }).catch(error => {
                console.log(error)
            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
    async function GetOfferPriceInvoiceEditById(offerPriceID) {
        commonStore.NewItems = []
        try {
            await useServerFetch(`/offerPrice/${offerPriceID}/orignal-data-with-details-and-specific-show-data`, {
            }).then(async res => {
                if (res.code === '200') {
                    commonStore.SetViewGeneralData(res.data.viewData, true);
                    for (let index = 0; index < res.data.viewData.items.length; index++) {
                        const element = res.data.viewData.items[index];
                        commonStore.NewItems.push(element);
                        commonStore.NewItems[index].name = element.itemName;
                        commonStore.NewItems[index].unitPriceList = [];
                        commonStore.ItemDetails.splice(index, 1, {
                            nonServiceData: {
                                isHasAvailableAlternatives: element.isItemHasAvailableAccessories,
                                units: [
                                    {
                                        gun: element.unitGUN,
                                        name: element.unitName,
                                    }
                                ],
                                warehouses: [
                                    {
                                        gun: element.warehouseGUN,
                                        name: element.warehouseName,
                                        code: element.warehouseCode,
                                    }
                                ]
                            }
                            
                        })
                        commonStore.NewItems[index].unitPriceList = [
                            { id: 1, price: element.currentSellingPrice },
                            { id: 2, price: element.currentLowestPrice },
                            { id: 3, price: element.currentWholesalePrice },
                            { id: 4, price: element.currentCostPrice },
                        ];

                    }
                    commonStore.EditCustomerGun = res.data.viewData.customer?.gun || ''
                    
                    await commonStore.GetBranchDataForOfferPrice(commonStore.GeneralFields.branchGUN, commonStore.GeneralFields.isCash);
                    commonStore.GeneralFields.no = res.data.viewData.no;
                    commonStore.IncreaseItem();
                }
                else {
                    handleCodesMessage(res.code, res.data.viewMessage)
                }
            }).catch(error => {
                console.log(error)
            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
    async function EditOfferPriceInvoice(invoiceId) {
        await RemoveUnnessaceryFields();
        success.value = false;
        try {
            await useServerFetch(`offerPrice/${invoiceId}`, {
                method: "PUT",
                body: JSON.stringify(generaFields)
            }).then(res => {
                if (res.code === '200') {
                    successHandle("تم تعديل الفاتورة بنجاح");
                    GetOfferPriceInvoiceEditById(invoiceId);
                    
                    success.value = true
                }
                else {
                    console.log(res)
                    handleCodesMessage(res.code, res.data[0].viewMessage);
                }
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function DeleteOfferPriceInvoice(id) {
        try {
            await useServerFetch(`/offerPrice/${id}`, {
                method: "DELETE"
            }).then(res => {
                if (res.code === '200') {
                    successHandle(res.data.viewMessage);
                    let index = commonStore.InvoicesTree?.data.findIndex(item => {
                        return item.gun === id
                    })
                    if (index >= 0) {
                        commonStore.InvoicesTree?.data.splice(index, 1);
                        GetOfferPriceInvoices()
                        commonStore.ClearEverythings();
                    }

                }
                else {
                    handleCodesMessage(res.code, res.data[0].viewMessage)
                }
            }).catch(error => {
                console.log(error)
            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
    function RemoveUnnessaceryFields() {
        let Items = []
        generaFields = {...commonStore.GeneralFields}
        for (let index = 0; index < commonStore.NewItems.length - 1; index++) {
            const element = {...commonStore.NewItems[index]};
            delete element.name;
            delete element.unitName;
            delete element.warehouseName;
            delete element.forSale;
            delete element.total;
            delete element.net;
            delete element.warehouseQuantity;
            delete element.unitPriceList;
            delete element?.currentCostPrice
            delete element?.currentLowestPrice
            delete element?.currentSellingPrice
            delete element?.currentTaxRate
            delete element?.currentWholesalePrice
            delete element?.cuurentDefaultDiscountPercentage
            delete element?.currentWholesalePrice;
            delete element?.warehouseCode;
            delete element?.warehouseName;
            delete element?.unitName;
            delete element?.unitEquivalent;
            delete element?.itemName;
            delete element?.itemNo;
            delete element?.isItemHasAvailableAccessories;


            if (element.warehouseGUN === '') {element.warehouseGUN = null}
            if (element.unitGUN === '') {element.unitGUN = null}
            
            Items.push(element)
        }
        
        if (!generaFields.salesmanGUN) {
            delete generaFields.salesmanGUN;
        }
        if (!commonStore.Customer.gun) {
            delete commonStore.Customer.gun;
        }
        generaFields.customer = (commonStore.Customer)
        if (!generaFields.customer.gun ) {
            for (const key in generaFields.customer) {
                if (Object.hasOwnProperty.call(generaFields.customer, key)) {
                    const element = generaFields.customer[key];
                    if (element) {
                        isCustomerValid = false;
                    }
                }
            }
        }
        else {
            generaFields.customer = {gun: commonStore.Customer.gun}
            isCustomerValid = false
        }
    //    شيك إذا العميل كان فاضي وجميع الحقول فاضية 
    //    اعطي العميل قيمة null 
    
        if (isCustomerValid) {
            generaFields.customer = null
        }
        delete generaFields.totalDiscount;
        delete generaFields.date;
        delete generaFields.time;
        delete generaFields.salesmanName;
        delete generaFields.lastModifiedBy;
        delete generaFields.lastModifiedAt;
        delete generaFields.createdAt;
        delete generaFields.createdBy;
        
        generaFields.items = Items
        
        
    }
    return {
        success,
        NewOfferPrice,
        SaveOfferPriceInvoice,
        GetOfferPriceInvoices,
        GetOfferPriceInvoiceItemsById,
        DeleteOfferPriceInvoice,
        GetOfferPriceInvoiceEditById,
        EditOfferPriceInvoice
    }
})