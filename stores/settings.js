import { defineStore } from "pinia";
import { ref } from "vue";
export const useSettingsStore = defineStore('settings', () => {
    const keies = reactive({
      enter: 'Enter',
      f5: 'F5',
      f6: 'F6'
    })
    const settings = reactive({
      decimalQuantity: 2
    })
    const quantityDigitRegx = new RegExp(`^-?\\d+(\\.\\d{0,${settings.decimalQuantity}})?$`);
    const twoDigitsRegx = new RegExp(`^-?\\d+(\\.\\d{0,2})?$`);
    function QuantityDigit(number) {
      if (quantityDigitRegx.test(number)) {
        return number
      }
      else {
        return  number.slice(0, -1);
      }
    }
    function twoDigits(number) {
      if (twoDigitsRegx.test(number)) {
        return number
      }
      else {
        return  number.slice(0, -1);
      }
    }
    function toDouble(number) {
      if (typeof number === 'number') {
        return Math.trunc(Math.pow(10, 2) * number) / Math.pow(10, 2);
      }
    }

    // APIs Calls 
    function GetSettings() {
      useServerFetch("/inventory/settings").then(res => {
        if (res.code === '200') {
          settings.decimalQuantity = res.data.viewData.decimalPlacesNumberInQuantity
        }
      }).catch(error => {
        console.log(error)
      })
    }
  return {
    QuantityDigit,
    twoDigits,
    toDouble,
    GetSettings
  };
}) 