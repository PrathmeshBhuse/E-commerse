
import './App.css';
import Navbar from './Components/navBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import menBanner from './Components/Assest/banner_mens.png'
import womenBanner from './Components/Assest/banner_women.png'
import kidBanner from './Components/Assest/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={menBanner} category='men'/>} />
        <Route path='/womens' element={<ShopCategory  banner={womenBanner} category='women'/>} />
        <Route path='/kids' element={<ShopCategory  banner={kidBanner} category='kid'/>} />
        <Route path='/product' element={<Product/>}> 
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>}/>
        
         
        
      </Routes>
      <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
