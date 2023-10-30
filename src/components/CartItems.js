import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
const CartItems = (props) => {
  const { id, img, title, price } = props.data
  const { cartItems, addToCart, removeFromCart, countHandler } = useContext(ShopContext)

  return (
    <div className='cart-elements container' >
      <div className="cart-img"><img src={img} alt="" /></div>
      <div className="cart-title"><h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="cart-price"><p>${price}</p>
        <div className="minus-plus">
          <button className='minus' onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id] > 0 ? cartItems[id] : "1"} onChange={e => {countHandler(Number(e.target.value),id)}} />
          <button className='plus' onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems