import React from 'react'
import './main.css'
import discount from '../Assets/discount.png'
import items from '../Assets/data'
import weekly from '../Assets/data'
import Product from '../products/product'

const main = () => {
  return (
    <div className='main'>
      <div className='discount'>
        <img src = {discount} alt=''/>
        </div>
        <div className='products'>
          <h1>Headphones for You!</h1><br />
          {items.map((item, i)=>{
            return <Product key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>   
          })}
        </div>
    </div>
  )
}

export default main