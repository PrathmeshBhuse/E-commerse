import React from 'react'
import './Offers.css'
import offerModelImg from '../Assest/offer_model.png'



const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1 id='black'>BLACK </h1>
            <h1 id='friday'>FRIDAY</h1>
            <hr />
            <h3>SALE OFFER</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
            <button>Shop Now</button>

        </div>
        <div className="offers-right">
            <img src={offerModelImg} alt="" className='offerModelImg'  />

        </div>
      
    </div>
  )
}

export default Offers
