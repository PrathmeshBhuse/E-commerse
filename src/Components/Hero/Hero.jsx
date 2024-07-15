import React from 'react'
import './Hero.css'
// import handIcon from '../Assest/hand_icon.png'
import arrowIcon from '../Assest/arrow.png'
import heroImg from '../Assest/hero_img.png'






const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>NEW COLLECTION</h2>
            {/* <div className="hand-icon">
                <p>New</p>
                <img src={handIcon} alt="" />
            </div> */}
            <p>ARRIVAL </p>
            <p>Don't Miss The Deal</p>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="" />

            </div>

        </div>
        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
