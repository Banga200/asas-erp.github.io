import { defineStore } from "pinia";
import {ref} from 'vue';
export const useSalesStore = defineStore('sales', () => {
    
    const Sales = ref([]);
    const Invoices = ref([]);
    async function GetItems(page,search) {
        // try {
        //     const data = await useServerFetch(`/items/GetItems?companyCode=APP_tqq1&branchId=1&pageNumber=${page? page : 1}&PageSize=15&searchFor=${search ? search : ''}`).then(res => {
        //             if (search && page === 1) {
        //                 Sales.value = res.Data.Data;
        //             }
        //             else {
        //                 for (let index = 0; index < res.Data.Data.length; index++) {
        //                     const element = res.Data.Data[index];
        //                     let exist = Sales.value.find(item => {
        //                         if (item) {
        //                          return item.ItemID === res.Data.Data[index].ItemID
                                    
        //                         }
        //                     })
        //                     if (!exist) {
        //                         Sales.value.push(element)
        //                     }
        //                 }
        //             }
                
                
        //         // Sales.value = res
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }
    async function OfferPriceViewData() {
        try {
            const response = await useServerFetch("/")
        } catch (error) {
            
        }
    }
    return {
        Sales,
        GetItems
    }
})