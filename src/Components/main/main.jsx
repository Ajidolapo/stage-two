import React from 'react'
import './main.css'
import discount from '../Assets/discount.png'
import next from '../Assets/right.png'
import { items, weekly } from '../Assets/data'
import Product from '../products/product'
import Weekly from '../weekly/weekly'
import { Link } from 'react-router-dom'

const main = () => {
  return (
    <div className='main'>
      <div className='discount'>
        <img src={discount} alt='' width="100%" />
      </div>

      <div className='mainPage'>
        <div className='fine'>
          <div>
            <ul className='sort'>
              <li style={{ border: "none", borderRadius: "30px", padding: "5px 15px", backgroundColor: "#DEDEDE" }}>
                Headphone Type<select className='select'></select></li>

              <li style={{ border: "none", borderRadius: "30px", padding: "5px 15px", backgroundColor: "#DEDEDE" }}>
                Price<select className='select'></select></li>

              <li style={{ border: "none", borderRadius: "30px", padding: "5px 15px", backgroundColor: "#DEDEDE" }}>
                Review<select className='select'></select></li>

              <li style={{ border: "none", borderRadius: "30px", padding: "5px 15px", backgroundColor: "#DEDEDE" }}>
                Offer<select className='select'></select></li>
            </ul>
          </div>
          <div className='sortBy'>
            <ul>
            <li style={{ border: "1px solid #1F456E", borderRadius: "30px", padding: "5px 15px", backgroundColor: "transparent", listStyle: "none", float: "right"}}>
                Sort By
              </li> 
            </ul>
          </div>

          {/* <div className='sortBy'> */}
          {/* </div> */}
        </div>

        <div>
          <h1 className='text'>Headphones For You!</h1><br />
          <div className='products'>
            {items.map((item, i) => {
              return <Product key={i}
                id={item.id}
                name={item.name}
                image={item.image}
               price={item.price}
                description={item.description} />
            })}
          </div>
        </div>

        <div>
          <ul className='pages'>
          <li style={{ border: "1px solid #1F456E", borderRadius: "150px", padding: "15px 20px", backgroundColor: "#1F456E", color: "white"}}>1</li>
          <li style={{ border: "none", borderRadius: "150px", padding: "15px 20px", backgroundColor: "#ECECEC", color: "black"}}>2</li>
          <li style={{ border: "none", borderRadius: "150px", padding: "15px 20px", backgroundColor: "#ECECEC", color: "black"}}>3</li>
          <li style={{ border: "1px solid black", borderRadius: "150px", padding: "10px 10px", backgroundColor: "#transparent", color: "black"}}><img src={next} alt="" /></li>
          </ul>
        </div>
        
          <div>
            <h1 className='text'>Weekly Popular Products</h1><br />
            <div className='weekly'>
            {weekly.map((weekly, w) => {
              return <Weekly key={w}
                id={weekly.id}
                name={weekly.name}
                image={weekly.image}
                price={weekly.price}
                description={weekly.description} />

            })}
            </div >
          </div>
        
      </div>


    </div>
  )
}

      export default main