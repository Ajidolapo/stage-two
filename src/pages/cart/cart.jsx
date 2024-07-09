import React from 'react'
import airpod_max from '../../Components/Assets/cart 1.png'
import cart2 from '../../Components/Assets/cart2.png'
import cart3 from '../../Components/Assets/cart3.png'
import cart4 from '../../Components/Assets/cart4.png'
import cart5 from '../../Components/Assets/cart5.png'
import delivery from '../../Components/Assets/free delivery.png'
import blue from '../../Components/Assets/blue.png'
import coral from '../../Components/Assets/coral.png'
import grey from '../../Components/Assets/grey.png'
import green from '../../Components/Assets/green.png'
import dark_grey from '../../Components/Assets/dark_grey.png'
import { Link } from 'react-router-dom'

const cart = () => {
  return (
    
    <div className='cartPage'>
      <div className="breadcrumb">
        <span className="breadcrumb-item" style={{color:"#616161"}}>Electronics </span>
        <span className="breadcrumb-item" style={{color:"#616161"}}>  / Audio </span>
        <span className="breadcrumb-item" style={{color:"#616161"}}>  / Headphones </span>
        <span className="breadcrumb-item" style={{color:"#616161"}}>  / Shop Headphones by type </span>
        <span className="breadcrumb-item">  / airpods-max</span>
      </div>
        <div className="Container">
      <div className="product-details">
        <div className="product-image">
          <img src={airpod_max} alt="Airpods Max"/>
        </div>
        <div className="product-info">
          <h2 style={{margin:"10px"}}>AIRPORDS-MAX</h2>
          <p style={{color:"#616161", marginBottom:"7px"}}>
            A perfect balance for hearing high-fidelity audio and
            effortless magic of airpods.
          </p>
          <div className="rating" >
            <span className="star" >★★★★★</span>
            <span className="review-count">(121)</span><hr />
          </div>
          <div className="price" style={{color:"#1F456E", fontSize:"18px", fontWeight:"bold", marginTop:"10px"}}>$200.00</div>
          <p style={{color:"#616161", marginBottom:"10px"}}>amount to be paid</p><hr />
          <p style={{color:"#1F456E", margin:"10px"}}>Choose preferred colour</p>
          <div className="color-options">
            <img src={coral} alt="" style={{marginBottom:"20px", marginRight:"7px"}}/>
            <img src={blue} alt=""  style={{marginBottom:"20px", marginRight:"7px"}}/>
            <img src={green} alt="" style={{marginBottom:"20px", marginRight:"7px"}}/>
            <img src={grey} alt=""  style={{marginBottom:"20px", marginRight:"7px"}}/>
            <img src={dark_grey} alt="" style={{marginBottom:"20px"}}/><hr />
          </div>
          <div className="quantity">
            <button style={{border:"none"}}>-</button>
            <span>1</span>
            <button style={{border:"none"}}>+</button>
          </div>
          <p>only 12 items left</p>
          <p>don't miss out</p>
          <Link to="/checkout"><button className="buy-button" style={{borderRadius:"30px", padding:"5px 20px", backgroundColor:"#234F1E", color:"white", border:"none",marginRight:"10px", marginBottom:"20px"}}>Buy Now</button></Link>
          <button className="cart-button"style={{borderRadius:"30px", padding:"5px 20px", backgroundColor:"transparent", color:"#1F456E", border:"1px solid #1F456E" , marginBottom:"20px"}}>Add to cart</button><hr />
        </div>
      </div>
      
      <div className='similar-products'>
        <div className="product-grid">
          <div className="product-item">
            <img src={cart2} alt="Airpods Max" />
          </div>
          <div className="product-item">
            <img src={cart3} alt="Airpods Max" />
          </div>
          <div className="product-item" >
            <img src={cart4} alt="Airpods Max" />
            </div>
          <div className="product-item">
            <img src={cart5} alt="Airpods Max" />
          </div>
          
        <div className="free-delivery">
        <img src={delivery} alt="Free Delivery" />
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default cart