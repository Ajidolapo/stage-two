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
    <div className='main'>
      <div className="breadcrumb">
          <span className="breadcrumb-item">Electronics</span>
          <span className="breadcrumb-item">/</span>
          <span className="breadcrumb-item">Audio</span>
          <span className="breadcrumb-item">/</span>
          <span className="breadcrumb-item">Headphones</span>
          <span className="breadcrumb-item">/</span>
          <span className="breadcrumb-item">Shop Headphones by type</span>
          <span className="breadcrumb-item">/</span>
          <span className="breadcrumb-item">airpods-max</span>
        </div>
        <div className="container">
      <div className="product-details">
        <div className="product-image">
          <img src={airpod_max} alt="Airpods Max" style={{ backgroundColor: "#ECECEC", padding: "20px", borderRadius: "5px", height: "350px", position:"absolute"}}/>
        </div>
        <div className="product-info">
          <h2 style={{margin:"10px"}}>AIRPORDS-MAX</h2>
          <p style={{color:"#616161", marginBottom:"7px"}}>
            A perfect balance for hearing high-fidelity audio and
            effortless magic of airpods.
          </p>
          <div className="rating" style={{marginBottom:'10px'}}>
            <span className="star">★★★★★</span>
            <span className="review-count">(121)</span><hr />
          </div>
          <div className="price" style={{color:"#1F456E", fontSize:"18px", fontWeight:"bold", marginTop:"10px"}}>$200.00</div>
          <p style={{color:"#616161", marginBottom:"10px"}}>amount to be paid</p><hr />
          <p style={{color:"#1F456E", margin:"10px"}}>Choose preferred colour</p>
          <div className="color-options">
            
          </div>
          <div className="quantity">
            <button style={{border:"none"}}>-</button>
            <span>1</span>
            <button style={{border:"none"}}>+</button>
          </div>
          <p>only 12 items left</p>
          <p>don't miss out</p>
          <Link to="/checkout"><button className="buy-button" style={{borderRadius:"30px", padding:"5px 20px", backgroundColor:"#234F1E", color:"white", border:"none"}}>Buy Now</button></Link>
          <button className="cart-button"style={{borderRadius:"30px", padding:"5px 20px", backgroundColor:"transparent", color:"#1F456E", border:"1px solid #1F456E"}}>Add to cart</button>
        </div>
      </div>
      <div className="free-delivery">
        <img src={delivery} alt="Free Delivery" />
      </div>
      <div className="similar-products" style={{display: "grid,", gridTemplateColumns: "repeat(4,1fr"}}>
        {/* <h2>Similar Products</h2> */}
        <div className="product-grid">
          <div className="product-item" style={{ backgroundColor: "#ECECEC", padding: "20px", borderRadius: "5px", height: "50px"}}>
            <img src={cart2} alt="Airpods Max" />
          </div>
          <div className="product-item" style={{ backgroundColor: "#ECECEC", padding: "20px", borderRadius: "5px", height: "50px"}}>
            <img src={cart3} alt="Airpods Max" />
          </div>
          <div className="product-item" style={{ backgroundColor: "#ECECEC", padding: "20px", borderRadius: "5px", height: "50px"}}>
            <img src={cart4} alt="Airpods Max" />
            </div>
          <div className="product-item" style={{ backgroundColor: "#ECECEC", padding: "20px", borderRadius: "5px", height: "50px"}}>
            <img src={cart5} alt="Airpods Max" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default cart