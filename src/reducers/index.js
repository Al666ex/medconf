
import {updateStateRelations, updateRelations} from '../methods/relations'

const initialState = {
    cart : [
     //  {"field":"Product Category","itemName":"Manifolds","child":"brand","status":false},
     //  {"field":"Brand","itemName":"LINDE","child":"region","status":false},
     //  {"field":"Region","itemName":"OtherFDA","child":"standart","status":false}           
    ],    
    productCategory : false,
    relations : {  
        brand : true,
        region : true,
        standart : true
      },    
}

const reducers = (state = initialState, action) => {
    const serchField = action.field;
    const checkField = state.cart.find(item => item.field === serchField)
    let stateCart = state.cart;
    let stateRelations = state.relations;
    let updateCart = [];
    let actionItemName = action.itemName;
    switch(action.type) {
        case 'ITEM_ADD' :             
            let child = action.child                         

            if(checkField === undefined){
                const newCartItem = {
                    field : action.field,
                    itemName : actionItemName,
                    child : child,
                    status : false
                }            
    
                return {
                    ...state,
                    cart : [
                        ...state.cart, 
                        newCartItem
                    ]
                }
            } else {

                let newStateRelations = updateStateRelations(stateRelations, stateCart, true) 
                if(actionItemName === "select" ){
                    for(let i=0; i<stateCart.length; i=i+1 ){
                        if(stateCart[i].field === serchField ){                            
                            break;
                        }
                        updateCart.push(stateCart[i])
                    }

                    return {
                        ...state,
                        cart : updateCart,                                            
                    }
                }

                updateCart = 
                    stateCart.map(item => 
                        (item.field === serchField) ? 
                            {...item, itemName : actionItemName} : 
                                item 
                    )

                return {
                    ...state,
                    cart : updateCart,
                    relations : newStateRelations
                }
            }

        case 'INEQUALITY_ITEM' :            

            if(stateCart.length ){                
                let newStateRelations = stateRelations;                 
                let updateCart = [];              
                 
                for(let i = 0; i < stateCart.length; i++){
                    let cartItem = stateCart[i]
                    
                    if(cartItem.field === serchField){
                        cartItem.itemName = actionItemName
                        updateCart.push(cartItem)
                        break;
                    }
                    updateCart.push(cartItem)                   
                }

                newStateRelations = updateRelations(newStateRelations,updateCart,false)

                return {
                    ...state,
                    cart : updateCart,
                    relations : newStateRelations                       
                }
            } 

            return state

        case 'UPDATE_CLIENT' :
            let newStateRelations = stateRelations; 
            if(stateCart.length){
                newStateRelations = updateRelations(newStateRelations,stateCart,false)    
            }

            return {
                ...state,
                relations : newStateRelations
            }

        default : 
            return state
        
    }
}

export default reducers;