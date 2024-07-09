import React from 'react'
import phone from '../Assets/call.png'
import './header.css'

const header = () => {
  return (
    <div>
        <header className='header'>
            <div className='contact'>
            <img src={phone} alt="phone" />
            <p>+1234567890</p>
            </div>

            <div>
                <p>Get 50% Off On Selected Items | Shop Now</p>
            </div>

            <div>
                <p>Eng<select name="" id=""></select></p>
            </div>
        </header>
    </div>
  )
}

export default header