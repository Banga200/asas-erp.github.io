import { defineStore } from "pinia";
import {ref} from 'vue';
export const useOfferPriceStore = defineStore('offerPrice', () => {
    const {handleCodesMessage} = useHandleCodes();
    const {successHandle} = useNotify()
    const commonStore = useCommonStore();
    const {GeneralFields} = storeToRefs(commonStore)
    
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
        try {
            await useServerFetch("/offerPrice", {
                method: 'POST',
                body: JSON.stringify(generaFields)
            }).then(res => {
                if (res.code === "200") {
                    successHandle("تم حفظ الفاتورة بنجاح")
                }
                else {
                    handleCodesMessage(res.code, res.data.viewMessage);
                }
            }).catch(error => {console.log(error)})
            
            
        } catch (error) {
            console.log(error)
        }
    }
    async function GetOfferPriceInvoices(search, pageNumber = 1) {
        try {
            await useServerFetch(`/offerPrice/specific-view-data-without-details/${pageNumber}`, {
                branchId: commonStore.GeneralFields.branchGUN,
                searchText: search ? search : ''
            }).then(res => {
                if (res.code === '200') {
                    commonStore.InvoicesTree = res.data.viewData;
                    commonStore.SetViewGeneralData(res.data.viewData.data[0])
                    GetOfferPriceInvoiceById(res.data.viewData.data[0].gun)
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
    async function GetOfferPriceInvoiceById(offerPriceID, pageNumber = 1) {
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
        if (!generaFields.customer?.gun ) {
            for (const key in generaFields.customer) {
                if (Object.hasOwnProperty.call(generaFields.customer, key)) {
                    const element = generaFields.customer[key];
                    if (element) {
                        isCustomerValid = false;
                    }
                }
            }
        }
    //    شيك إذا العميل كان فاضي وجميع الحقول فاضية 
    //    اعطي العميل قيمة null 
        if (isCustomerValid) {
            generaFields.customer = null
        }
        delete generaFields.totalDiscount;
        delete generaFields.date;
        delete generaFields.time;
        generaFields.items = Items
        
        
    }
    return {
        NewOfferPrice,
        SaveOfferPriceInvoice,
        GetOfferPriceInvoices,
        GetOfferPriceInvoiceById
    }
})