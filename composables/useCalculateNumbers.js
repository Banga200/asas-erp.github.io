export default function () {
    function toDouble (num)  {
        let str = num.toString();
        let decimalIndex = str.indexOf('.');
        
        if (decimalIndex === -1) {
            return parseFloat(str + ".00");
        } else {
            // Extract the integer part and the decimal part
            let integerPart = str.slice(0, decimalIndex);
            let decimalPart = str.slice(decimalIndex + 1);
            
            // Ensure the decimal part has at least 2 characters
            if (decimalPart.length < 2) {
                decimalPart = decimalPart + "0".repeat(2 - decimalPart.length);
            } else {
                decimalPart = decimalPart.slice(0, 2); // Truncate without rounding
            }
            
            return parseFloat(integerPart + '.' + decimalPart);
        }
    }

    return {
        toDouble
    }
} 
