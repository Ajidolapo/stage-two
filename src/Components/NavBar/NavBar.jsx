import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'
import search from '../Assets/search.png'
import Shop from '../../pages/home'

export const NavBar = () => {

    const [itemCount, setItemCount] = useState(0);
    const [menu, setMenu] = useState("home");

  return (
    <div className='navBar'>
        <div className='nav-logo'>
        <Link to='/' className='link'><img src={logo} alt="logo" onClick={()=>{setMenu("home")}}/></Link>
        </div>
        <ul className='navMenu'>
            <li onClick={()=>{setMenu("category")}}><Link to = '/category' className='link'><span style = {{ color: menu === "category" ? "#FA8128" : "#1F456E"}}>Category</span></Link>{menu==="category" && <hr />}<select name="" id="select"></select></li>
            <li onClick={()=>{setMenu("sales")}}><Link to = '/sales' className='link'><span style = {{ color: menu === "sales" ? "#FA8128" : "#1F456E"}}>Deals</span></Link>{menu==="sales" && <hr />}</li>
            <li onClick={()=>{setMenu("new")}}><Link to = '/new' className='link'><span style = {{ color: menu === "new" ? "#FA8128" : "#1F456E"}}>What's New</span></Link>{menu==="new" && <hr />}</li>
            <li onClick={()=>{setMenu("delivery")}}><span style = {{ color: menu === "delivery" ? "#FA8128" : "#1F456E"}}>Delivery</span>{menu==="delivery" && <hr />}</li>
            <li>
                <div className='searchContainer'>
                    <input type="text" className='searchInput' placeholder='Type a command or search...'/>
                    <button className='search'><img src={search} alt="" /></button>
                </div>
            </li>
        </ul>
        <div className='cart'>
               <Link to = '/cart' className='link'><button><img src={cart_icon} alt="cart" />  {itemCount >= 0 && <span className='cartCount'>{itemCount}</span>}</button></Link>
            </div>
    </div>
    
  )
}
