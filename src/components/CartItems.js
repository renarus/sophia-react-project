import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
const CartItems = (props) => {
  const { id, img, title, price } = props.data
  const { cartItems, addToCart, removeFromCart, countHandler } = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className='card'>
        <div className="card-flex">
          <div className="card-img"><img src={img} alt="" /></div>
          <div className="card-body">
            <div className="card-title"><h4>{title}</h4></div>
            <div className="card-text"><h4>${price}</h4></div>
            <div className="count-handler">
              <button onClick={() => removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e) => countHandler(Number(e.target.value), id)} />
              <button onClick={() => addToCart(id)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems