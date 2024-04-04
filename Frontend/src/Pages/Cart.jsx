import React from 'react'
//import { CartItems } from '../Components/CartItems/CartItems'
import {CartItems} from '../Components/CartItems/CartItems.jsx'
import './CSS/Cart.css'

 const Cart = () => {
  return (
    <div className='cart'>
        <CartItems/>
    </div>
  )
}
export default Cart
