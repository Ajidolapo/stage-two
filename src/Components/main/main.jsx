import React from 'react'
import './main.css'
import discount from '../Assets/discount.png'
import add from '../Assets/add.png'
import {items,weekly} from '../Assets/data'
import Product from '../products/product'
import Weekly from '../weekly/weekly'

const main = () => {
  return (
    <div className='main'>
      <div className='discount'>
        <img src = {discount} alt=''/>
        </div>

        <div className='mainPage'>
          <ul className='sort'>
            <li className='list'  style={{ border: "none", borderRadius: "30px", padding: "5px 15px" }}>
              Headphone Type<select className='select'></select></li>

            <li className='list' style={{ border: "none", borderRadius: "30px", padding: "5px 15px" }}>
              Price<select className='select'></select></li>

            <li className='list'  style={{ border: "none", borderRadius: "30px", padding: "5px 15px" }}>
              Review<select className='select'></select></li>

            <li className='list'  style={{ border: "none", borderRadius: "30px", padding: "5px 15px" }}>
              Offer<select className='select'></select></li>
          </ul>
           <div className='sortBy'>
             <p>Sort By</p>
            </div>
      </div>
       
        <div>
          <h1 className='text'>Headphones For You!</h1><br />
          <div className='products'>
          {items.map((item, i)=>{
            return <Product key={i} 
            id={item.id}
             name={item.name}
              image={item.image} 
              price={item.price}
              description={item.description} />    
          })}
          <button className='add'><img src={add} alt="" /></button>
          </div>
        </div>
{
        <div className='weekly'>
          <h1 className='text'>Weekly Popular Products</h1><br />
          {weekly.map((weekly, w)=>{
            return <Weekly key={w} 
            id={weekly.id}
             name={weekly.name}
              image={weekly.image} 
              price={weekly.price}
              description={weekly.description} />  
              
          })}
        </div> }
    </div>
  )
}

export default main