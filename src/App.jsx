
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Contact from './Contact';
import About from './About';
import Shop from './Shop';
import Navbar from './Navbar';
import Products from './Products';
import ProductsInfo from './ProductsInfo';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/ProductInformation/:id' element={<ProductsInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
