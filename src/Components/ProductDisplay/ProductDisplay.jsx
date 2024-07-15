import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assest/star_icon.png'
import starDullIcon from '../Assest/star_dull_icon.png'
import { ShopContext } from '../../Contex/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}= useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} className='productdisplay-main-img' />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>

                </div>
                <div className="productdispay-right-description">
                    Introducing the JADK5 jacket - a versatile and stylish outerwear essential for all seasons. Crafted with high-quality materials,
                     this jacket offers both warmth and comfort, making it perfect for everyday wear. 
                     With its sleek design and durable construction, the JADK5 jacket is the perfect choice for staying cozy and looking great in any weather. Whether you're heading out for a hike or simply running errands, this jacket is your go-to option for staying stylish and comfortable.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='praductdisplay-right-category'><span>Category :</span> Women,T-shirt,crop top</p>
                <p className='praductdisplay-right-category'><span>Tags :</span> Modern,Popular</p>

            </div>

        </div>
    )
}

export default ProductDisplay
