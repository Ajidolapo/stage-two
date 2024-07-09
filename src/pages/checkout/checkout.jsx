import React from 'react'
import airpod_max from '../../Components/Assets/airpod_max.png'
import amazon from '../../Components/Assets/amazon.png'
import mastercard from '../../Components/Assets/mastercard.png'
import visa from '../../Components/Assets/visa.png'
import './checkout.css'

const checkout = () => {
  return (
    <div className='container'>
        <div className='title'>
        <p><span className='home'>Home </span>/ Checkout</p><br />
        </div>

        <div className="main">
            <div className="ibk">
            <div>
            <section className='shippping' style={{border: "1px solid black", padding: "20px", display: "flex", flexWrap: "wrap"}}>
                <h1 style={{textAlign:"center", marginBottom:"20px"}}>Review item and shipping</h1><br />
                <div style={{alignItems:"center"}}>
                <img src={airpod_max} alt="" className='image' style={{ height:"100px", marginRight:"20px"}}/>
                <div className='info' style={{flex:"1"}}>
                <h3>Airpods-max</h3>
                <h3>$200.00</h3>
                <p>color:pink</p>
                <p>Quantity: 01</p>
                </div>
                </div>
            </section>
            </div>
            <div>
            <section className='delivery'>
                <form action="" className='form'>
                <h1 className='heading'>Delivery information</h1>
                <div className='formRow'>
                <label htmlFor="fname">First name</label>
                <label htmlFor="lname">Last name</label>
                </div>

                <input type="text" placeholder='type here...' />
                <input type="text" placeholder='type here...' />



                <label htmlFor="address">Address</label>
                <input type="text" placeholder='type here...' />

               
                <div className='formRow'>
                <label htmlFor="city">City / state</label>
                <label htmlFor="zip">Zip code</label>

                <input type="text" placeholder='type here...' />
                <input type="text" placeholder='type here...' />
                </div>


                <div className='formRow'>
                <label htmlFor="mobile">Mobile</label>
                <label htmlFor="email">Email</label>

                <input type="text" placeholder='type here...' />
                <input type="email" placeholder='type here...' />
                </div>
                </form>
            </section>
            </div>
            </div>
            <div className='summary'>
            <section>
                <form action="" className='form2'>
                <h1 className='heading'>Order Summary</h1>
                <hr />
                <div className='apply'>
                <input type="text" name="" id="code" placeholder='enter coupon code' />
                <button id='coupon'>Apply coupon</button>
                </div>
                <hr />

                <h2>Payment Details</h2>
                <div className='payment-option'>
                <input type="radio" />
                <label htmlFor="">cash on delivery</label><br />
                </div>

                <div className='payment-option'>
                <input type="radio" />
                <label htmlFor="">shopcart card</label><br />
                </div>

                <div className='payment-option'>
                <input type="radio" />
                <label htmlFor="">Paypal</label><br />
                </div>

                <div className='payment-option'>
                <input type="radio" />
                <label htmlFor="">Credit or Debit card</label>
                <img src={amazon} alt="" />
                <img src={mastercard} alt="" />
                <img src={visa} alt="" /><br />
                </div>

                <label htmlFor="">Email</label>
                <input type="text" placeholder='type here...'/>

                <label htmlFor="">Card holder name</label>
                <input type="text" placeholder='type here...'/>

                <label htmlFor="">Card number</label>
                <input type="text" placeholder='0000*****1234'/>

                <label htmlFor="">Expiry</label>
                <input type="text" placeholder='MM/YY'/>

                <label htmlFor="">CVV</label>
                <input type="text" placeholder='000'/>
                </form>
            </section>
            </div>
        </div>
    </div>
  )
}

export default checkout