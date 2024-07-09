import React from 'react'
import './product.css'

const product = ({id,name,image,price,description}) => {
  return (
    <div className='product' key={id}>
    <img src={image} alt = {name}  className='image'/>
    {/* <button className='add'><img src={add} alt="Add" /></button> */}
    <div className='info'>
      <div className='prodHeader'>
    <p className='name'>{name}</p>
    <span className="prodPrice">
      {price}
      </span>
      </div >
      <p className='desc'>{description}</p>
      </div>
      <button className='addCart'>Add to cart</button>
    </div>
  )
}

export default product