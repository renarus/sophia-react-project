import React, { useContext } from 'react'
import FragrancesData from '../datas/FragrancesData'
import { ShopContext } from '../context/shop-context'
import { Link } from 'react-router-dom'
const Fragrances = () => {
  const { addToCart, removeFromCart, countHandler, cartItems } = useContext(ShopContext)
  return (
    <div>
      <h1>- Fragrances -</h1>
      <div className="image"><img src="https://static.wixstatic.com/media/9c608a_52467b6bcf2f45cdb31a4caed169e74d.png/v1/fill/w_500,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_52467b6bcf2f45cdb31a4caed169e74d.png" alt="" /></div>
      <div className='frags container'>
        {FragrancesData.map(frag => {
          return (
            <div key={frag.id}>
              <div className="frag-content">
                <Link to={`/frag/${frag.id}`}><img src={frag.img} alt="" /></Link>
                <div>
                  <p> {frag.title}</p>
                </div>
                <p>${frag.price}</p>
              </div>
              <div className="minus-plus">
                <button className='minus' onClick={() => removeFromCart(frag.id)}>-</button>
                <input value={cartItems[frag.id] > 0 ? ((cartItems[frag.id])) : "1"} onChange={(e) => countHandler(Number(e.target.value), frag.id)} />
                <button className='plus' onClick={() => addToCart(frag.id)}>+</button>
              </div>
              <button className='add-to-cart' onClick={() => { addToCart(frag.id) }}>Add to Cart </button>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Fragrances