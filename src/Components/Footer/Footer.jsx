import React from 'react'
import './Footer.css'
import footerImg from '../Assest/logo.png'
import instsIcon from '../Assest/instagram_icon.png'
import whatsappIcon from '../Assest/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerImg} alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instsIcon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsappIcon} alt="" />
            </div>
            
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
