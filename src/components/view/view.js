
import React,{useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ItemAdd, InequalityItem} from '../../actions'
//import store from '../../store'

const View = ({checkValue, data, disabled}) => {
    const [value, updateState] = useState("")
    const dispatch = useDispatch()
    const cartList = useSelector(store => store.cart)
    let currentValue 
    let resultValue

    const checkCartItemValue = cartList.find(item => item.field === data.name)

    if(checkCartItemValue){      
      currentValue = checkCartItemValue.itemName
    }

    resultValue = checkCartItemValue ? currentValue : (disabled || !checkCartItemValue ? "select" : undefined)

    const change = (e) => {
        let select = e.target.value                    
        updateState(select)                
        dispatch(ItemAdd(data.name, select, data.child))                       
        dispatch(InequalityItem(data.name, select, data.child))         
    }     
  
      return(
        <div className="mb-2">        
          <label className="modal-title">{data.name}</label>
          <select className="form-control" value={resultValue } onChange={change} disabled={disabled}>
            <option value="select">--- Select ---</option>																																			
            {
              data.classifier.map(item => <option key={item.value} value={item.name}>{item.name}</option>)
            }  
          </select>
        </div>        
      )    
}

export default View;
