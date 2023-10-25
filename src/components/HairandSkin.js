import React, { useContext ,useState,useEffect} from 'react'
import HairandSkinData from '../datas/HairandSkinData'
import { ShopContext } from '../context/shop-context'
import {Link} from 'react-router-dom'
const HairandSkin = () => {
  const {addToCart,cartItems,removeFromCart,countHandler}=useContext(ShopContext)
  return (
    <div className='hair-and-skin'>
      <h1>-Hair&skin-</h1>
      <div className="image"><img src="https://static.wixstatic.com/media/9c608a_d0635c118ee5412bbdcbb248b68901dc.png/v1/fill/w_503,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_d0635c118ee5412bbdcbb248b68901dc.png" alt="" /></div>
   <div className='container'>
    {
      HairandSkinData.map((item)=>
      {
        return(
      <div key={item.id} className="boxes">
        <div className="box">
          <div className="img">
           <Link to={`/hair/${item.id}`}><img src={item.img}  alt="" /></Link> 
            <div className="quick-view"><p>Quick view</p></div>
          </div>
        <div className="box-details">
        <div className="box-info">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
          <div className="minus-plus">
            <button className='minus' onClick={()=>removeFromCart(item.id)}>-</button>
            <input value={cartItems[item.id]>0 ?((cartItems[item.id])):"1"} onChange={(e)=>countHandler(Number(e.target.value),item.id)}  />
            <button className='plus' onClick={()=>addToCart(item.id)}>+</button>
            </div>
            <button className='add-to-cart' onClick={({})=>{addToCart(item.id)}}>Add to Cart </button>            
          </div>
          </div>
      </div>  
        )
      })
    }
   </div>
   </div>
  )
}


export default HairandSkin