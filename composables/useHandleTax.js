export const useHandleTax = (tax,total) => {
    if (tax > 0) {
        let result = total * (tax / 100);
        return parseInt(result) ;
    }
    return 0
    
}