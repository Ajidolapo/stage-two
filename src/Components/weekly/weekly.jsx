import React from 'react'
import './weekly.css'



const weekly = ({id,name,image,price,description}) => {
    return (
      <div className='weekly' key={id}>
      <img src={image} alt = {name} />
      <p>{name}</p>
      <p>{description}</p>
      <div className="prodPrice">
        {price}
      </div>
      </div>
    )
  }
  
  export default weekly