export const useHandleDiscount = (discount,quantity, total, price) => {
    if (discount > 0) {
        let result = (discount / total) * price;
        return result * quantity;
    }
    
}