import React from 'react'
import '../Pages/CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your Emial' />
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox"  />
          <p>By continuing ,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup