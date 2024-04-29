import { defineStore } from "pinia";
import {ref} from 'vue';
export const useOfferPriceStore = defineStore('offerPrice', () => {
    const {handleCodesMessage} = useHandleCodes();
    const commonStore = useCommonStore();
    // const {GeneralFields, NewItems, Customer} = storeToRefs(commonStore)
    // States 
    // const commonStore = useCommonStore();
    // const {Branches} = storeToRefs(commonStore)
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
    let isCustomerValid = false
    async function SaveOfferPriceInvoice() {
        await RemoveUnnessaceryFields();
        
        try {
            await useServerFetch("/offerPrice", {
                method: 'POST',
                body: JSON.stringify(generaFields)
            }).then(res => {
                console.log(res)
            }).catch(error => {console.log(error)})
            
            
        } catch (error) {
            console.log(error)
        }
    }
    async function GetOfferPriceInvoices() {
        
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

            Items.push(element)
        }
        if (!generaFields.salesmanGUN) {
            delete generaFields.salesmanGUN;
        }
        if (!commonStore.Customer.gun) {
            delete commonStore.Customer.gun;
        }
        generaFields.customer = (commonStore.Customer)
        for (const key in commonStore.Customer) {
            if (Object.hasOwnProperty.call(commonStore.Customer, key)) {
                const element = commonStore.Customer[key];
                if (element) {
                    isCustomerValid = true;
                }
            }
        }
        isCustomerValid ? true : generaFields.customer
        delete generaFields.totalDiscount
        generaFields.items = Items
        
        
    }
    return {
        NewOfferPrice,
        SaveOfferPriceInvoice
    }
})