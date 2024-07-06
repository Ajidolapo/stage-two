import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path ='/' element={<home />}/>
        <Route path ='/category' element={<category/>}/>
        <Route path ='/sales' element={<sales/>}/>
        <Route path ='/new' element={<category/>}/>
        <Route path ='/product' element={<product/>}/>
        <Route path =':productId' element={<product/>}/>
        <Route path ='/cart' element={<cart/>}/>
        <Route path ='/checkout' element={<checkout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
