import {useSelector} from 'react-redux'
import {v4} from 'uuid'
import CartListItem from '../cart-list-item'

const CartList = () => {
    const cartItems = useSelector(store => store.cart)
    
    return (
      <>
        <h3>My product configuration</h3>        
        <ul className="list-group list-group-flush">
          {cartItems.map(item => <CartListItem key={v4()} {...item} /> )}
        </ul>
      </>
    )
}
export default CartList;