import React, { useContext } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Contex/ShopContext'
import dropDownIcon from '../Components/Assest/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shopcategory-banner'/>
      <div className="shop-category-indexSort">
        <p>
          <span>Showing  1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
            all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore 
      </div>
  
    </div>
  )
}

export default ShopCategory
