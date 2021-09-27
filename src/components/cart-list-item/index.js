
const CartListItem = ({field,itemName}) => 
<li className="list-group-item" >
    <div className="row">
        <label className="col">
            {field}
        </label>
        <div className="col">
            {itemName}
        </div>    
    </div>
</li>

export default CartListItem