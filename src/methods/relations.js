
export function updateStateRelations(newStateRelations,stateCart,bool){

    for(let i = 0; i < stateCart.length; i++){
    let cartItem = stateCart[i]
   
        for(let [fieldCartItem, valueCartItem] of Object.entries(cartItem)){      
            for(let [searchField, mainValue] of Object.entries(newStateRelations)){               
                if(cartItem[fieldCartItem] !== searchField){
                    newStateRelations[searchField] = bool
                }                
            }
    
        }
    } 

    let result = newStateRelations

    return result

}

export function updateRelations(relations, cart, bool){

    for(let [field, value] of Object.entries(relations)){
        for(let i = 0; i < cart.length; i++){ 
            let cartItem = cart[i].child
            if(field === cartItem){ 
                relations[field] = bool
                break 
            }                                        
        }    
    } 
    
    return relations

}

