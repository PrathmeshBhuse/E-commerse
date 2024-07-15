import React from 'react'
import './Item.css'
import Product from '../../Pages/Product'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}><img src={props.img} onClick={window.scrollTo(0,0)}/></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-new-price">
            ${props.new_price}
            </div>
            <div className="item-old-price">
            ${props.old_price}

            </div>
        </div>
      
    </div>
  )
}

export default Item
