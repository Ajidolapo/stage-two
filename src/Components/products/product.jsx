import React from 'react'
import './product.css'

const product = (props) => {
  return (
    <div className='product'>
    <img src={props.image} alt = '' />
    <p>{props.name}</p>
    <div className="prodPrice">
      {props.price}
    </div>
    </div>
  )
}

export default product