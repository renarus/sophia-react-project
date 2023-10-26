import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import HairandSkinData from '../datas/HairandSkinData'
const CartItems = (props) => {
  const { id, img, title, price,info } = props.data
  const { cartItems, addToCart, removeFromCart, countHandler } = useContext(ShopContext)

  return (
    // <div className='cart-items'>
    //   <div className='card'>
    //     <div className="card-flex">
    //       <div className="card-img"><img src={img} alt="" /></div>
    //       <div className="card-body">
    //         <div className="card-title"><h4>{title}</h4></div>
    //         <div className="card-text"><h4>${price}</h4></div>
    //         <div className="count-handler">
    //           <button onClick={() => removeFromCart(id)}>-</button>
    //           <input value={cartItems[id]} onChange={(e) => countHandler(Number(e.target.value), id)} />
    //           <button onClick={() => addToCart(id)}>+</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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