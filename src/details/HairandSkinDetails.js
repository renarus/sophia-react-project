import { React } from 'react'
import { useParams } from 'react-router-dom'
import HairandSkinData from '../datas/HairandSkinData'
function HairandSkinDetails() {
  const { id } = useParams()
  const thisProduct = HairandSkinData.find((prod) => prod.id == id)
  if (!thisProduct) {
    return (
      <div>Product is not found</div>
    )
  }
  return (
    <div>
      <div className='details container'>
        <div className="details-img-desc">
          <div className="details-img">
            <img src={thisProduct.img} alt="" />
          </div>
          <div className="details-desc">
            <p>{thisProduct.desc}</p>
          </div>
        </div>
        <div className="details-content">
          <div className="details-title">
            <h1>{thisProduct.title}</h1>
            <p className='details-price'>${thisProduct.price}</p>
            <div className="add-to-cart">
              <button>Add to Cart</button>
            </div>
            <div className="buy-now">
              <button>Buy Now</button>
            </div>
            <h3>Product info</h3>
            <p>{thisProduct.info}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HairandSkinDetails