import React from 'react'
import sur from '../Components/Assets/Suraj.png'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
    const myStyles1 = {
        fontSize: 'larger',
        fontStyle: 'oblique',
        fontWeight: 'bolder',
        color: 'rgb(15, 15, 15)',
      };
      const emailStyle = {
        fontSize: 'medium',
        fontStyle: 'oblique',
        fontWeight: 'bolder',
        color: 'rgb(27, 26, 26)',
      };
      const textStyle = {
        fontSize: 'medium',
        fontStyle: 'oblique',
        fontWeight: 'bolder',
        color: 'rgb(27, 26, 26)',
      };
      const headingStyle = {
        marginLeft: '0.3cm',
      };
  return (
    // <div className='loginsignup'>
    //     <div className="loginsignup-container">
    //         <h1>Sign Up</h1>
    //         <div className="loginsignup-fields">
    //             <input type="text" placeholder='Your Name'/>
    //             <input type="email" placeholder='Email Address'/>
    //             <input type="password" placeholder='Password'/>

    //         </div>
    //         <button>Continue</button>
    //         <p className="loginsignup-login">Already have an account? <span>Login here</span></p>

    //         <div className="loginsignup-agree">
    //             <input type="checkbox" name='' id=''/>
    //             <p>By continue, i agree to the terms of use & privacy policy</p>
    //         </div>

            
    //     </div>
    // </div>
   
    <div className="profile-container">
        <img className="profile-image" src={sur} alt="" />
    <div className="person-details">
      <span style={myStyles1}>Suraj Subedi</span><br/>
      <span style={emailStyle}>surajsubedi14@gmail.com</span><br/>
      <span style={textStyle}>India</span>
    </div>
  
    <div class="recent-orders">
      <h3 style={headingStyle}>Recent Orders</h3>
      <div class="order-item">
        <div class="order-details">
          <p>Order #12345</p>
          <p>Date: Dec 10, 2023</p>
        </div>
        <p class="order-total">$50.00</p>
      </div>
  
      <div class="order-item">
        <div class="order-details">
          <p>Order #67890</p>
          <p>Date: Dec 15, 2023</p>
        </div>
        <p class="order-total">$30.00</p>
      </div>
  
     
  
    </div>
  </div>

  )
}
