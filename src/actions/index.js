const ItemShow = () => 
({
    type : 'ITEM_SHOW'  
})

const ItemAdd = (field, itemName, child) => 
({
    type : 'ITEM_ADD',
    field,
    itemName,
    child
})

const InequalityItem = (field, itemName, child) =>
({
    type : 'INEQUALITY_ITEM',
    field,
    itemName,
    child
})

const updateClient = () => 
({
    type : 'UPDATE_CLIENT'
})

export {ItemShow, ItemAdd, InequalityItem, updateClient}