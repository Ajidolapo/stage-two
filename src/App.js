import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
// import Main from './Components/main/main'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import Home from '../src/pages/home'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <NavBar/>
      <div className='t'>
      {/* <Main/> */}
      </div>
      
      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/category' element={<category/>}/>
        <Route path ='/sales' element={<sales/>}/>
        <Route path ='/new' element={<category/>}/>
        <Route path ='/product' element={<product/>}/>
        <Route path =':productId' element={<product/>}/>
        <Route path ='/cart' element={<Cart/>}/>
        <Route path ='/checkout' element={<Checkout/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
