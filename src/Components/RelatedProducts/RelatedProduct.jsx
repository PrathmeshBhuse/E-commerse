import React from 'react'
import './RelatedProduct.css'
import data_produts from '../Assest/data'
import Item from '../Items/Item'

const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='relateditem-products'>
            {
                data_produts.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })

            }
        </div>
      
    </div>
  )
}

export default RelatedProduct
