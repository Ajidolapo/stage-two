import React from 'react'
import airpod_max from '../../Components/Assets/airpod_max.png'
import amazon from '../../Components/Assets/amazon.png'
import mastercard from '../../Components/Assets/mastercard.png'
import visa from '../../Components/Assets/visa.png'
import './checkout.css'
// import '/index.css'

const checkout = () => {
    return (
        <div className='container'>
            <div className='title'>
                <p><span className='home'>Home </span>/ Checkout</p><br />
            </div>

            <div className="main">
                <div className="ibk">
                    <section className="shipping" style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
                        <h1 style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}>Review item and shipping</h1>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={airpod_max} alt="" className="image" style={{ height: "100px", marginRight: "20px" }} />
                            <div className="info" style={{ flex: "1" }}>
                                <h3>Airpods-max</h3>
                                <h3>$200.00</h3>
                                <p>color: pink</p>
                                <p>Quantity: 01</p>
                            </div>
                        </div>
                    </section>
                    <section className="delivery">
                        <form action="" className="form">
                            <h1 className="heading">Delivery information</h1>
                            <div className="formRow">
                                <div>
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" placeholder="type here..." />
                                </div>
                                <div>
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" placeholder="type here..." />
                                </div>
                            </div>
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder="type here..." />
                            <div className="formRow">
                                <div>
                                    <label htmlFor="city">City / state</label>
                                    <input type="text" placeholder="type here..." />
                                </div>
                                <div>
                                    <label htmlFor="zip">Zip code</label>
                                    <input type="text" placeholder="type here..." />
                                </div>
                            </div>
                            <div className="formRow">
                                <div>
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" placeholder="type here..." />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{marginTop:"10px"}}>Email</label>
                                    <input type="email" placeholder="type here..." />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="summary">
                    <section>
                        <form action="" className="form2">
                            <h1 className="heading">Order Summary</h1>
                            <hr />
                            <div className="apply">
                                <input type="text" name="code" id="code" placeholder="enter coupon code" />
                                <button id="coupon">Apply coupon</button>
                            </div>
                            <hr />
                            <h2>Payment Details</h2>
                            <div className="payment-option">
                                <input type="radio" name="payment" label="cash on delivery"/>
                                <label>cash on delivery</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" name="payment" />
                                <label>shopcart card</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" name="payment" />
                                <label>Paypal</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" name="payment" />
                                <label>Credit or Debit card</label>
                                
                            </div>
                            <div>
                            <img src={amazon} alt="Amazon" />
                                <img src={mastercard} alt="Mastercard" />
                                <img src={visa} alt="Visa" />
                            </div>
                            <label>Email</label>
                            <input type="text" placeholder="type here..." />
                            <label>Card holder name</label>
                            <input type="text" placeholder="type here..." />
                            <label>Card number</label>
                            <input type="text" placeholder="0000*****1234" />
                            <div className="formRow">
                                <div>
                                    <label>Expiry</label>
                                    <input type="text" placeholder="MM/YY" />
                                </div>
                                <div>
                                    <label>CVV</label>
                                    <input type="text" placeholder="000" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default checkout