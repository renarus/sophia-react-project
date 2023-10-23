import React, { createContext, useState } from 'react'
import HairandSkinData from '../datas/HairandSkinData'
export const ShopContext = createContext()
const getDefaultCartItems = () => {
  let cart = {}
  for (let i = 1; i < HairandSkinData.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCartItems())
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  console.log(cartItems)
  const countHandler = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }
  const  cartTotal=()=>{
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=HairandSkinData.find((product)=>product.id===Number(item))
        total+=cartItems[item]*itemInfo.price
      }
    }
    return total;
  }
//  const removeAll=()=>{
//   setCartItems(() => ({  [cartItems]:[] })) 
// }


//  console.log(prev)
  const contextValue = { cartItems, addToCart, removeFromCart, countHandler,cartTotal }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider