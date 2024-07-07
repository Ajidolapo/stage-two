import React from 'react'
import './product.css'

const product = ({id,name,image,price,description}) => {
  return (
    <div className='product' key={id}>
    <img src={image} alt = {name} />
    <p>{name}</p>
    <div className="prodPrice">
      {price}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default product