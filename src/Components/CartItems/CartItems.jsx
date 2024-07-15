import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Contex/ShopContext'
import removeIcon from '../Assest/cart_cross_icon.png'

const CartItems = () => {
    const {all_product,cartItem,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItem[e.id]>0) {
                return <div>
                <div className="cartitems-format cartitems-format-main">
                   <img src={e.image} alt="" className='carticon-product-icon'/>
                   <p>{e.name}</p>
                   <p>${e.new_price}</p>
                   <button className='cartitem-quantity' >{cartItem[e.id]}</button>
                   <p>${e.new_price*cartItem[e.id]}</p>
                   <img src={removeIcon} className='cartitem-remove-icon' onClick={()=>{removeFromCart(e.id)}} />
                </div>
                <hr />
               </div>
            }
        })}
      
    </div>
  )
}

export default CartItems
