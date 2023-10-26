import React, { useContext } from 'react'
import HairandSkinData from '../datas/HairandSkinData'
import CartItems from './CartItems'
import { ShopContext } from '../context/shop-context'
const Cart = () => {
  const { cartItems, cartTotal, clearCart } = useContext(ShopContext)
  const totalAmount = cartTotal()
  return (
    <div>
      {HairandSkinData.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItems key={product.id} data={product} />
        }
      })}
      {totalAmount > 0 ?  
        <div className="cart-total">
          <p>Total : $ {totalAmount.toFixed(2)}</p>
          <button onClick={() => clearCart()}>remove all</button>
        </div>
        : <div className='empty-box'><img src="https://pennpowergroup.com/images/EmptyCart.png" alt="" /></div>
      }
    </div>
  )
}

export default Cart