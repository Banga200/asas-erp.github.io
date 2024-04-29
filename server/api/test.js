

export default defineEventHandler(async (event) => {
    let items = [];
    for (let index = 0; index < 30000; index++) {
        let element = {id: index + 1, email: 'b@gmail.com '}
        items.push(element)
    }
    items.push({id: 30001, email: 'banga200@gmail.com'})
    return items;
})