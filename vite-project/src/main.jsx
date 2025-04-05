import { SthomerictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { ProductsGiftCards } from './pages/giftCard.jsx';
import { ProductsFashion } from './pages/Fashion.jsx';
import { ProductsElectronics } from './pages/Electronics.jsx';
import { ProductsMobile } from './pages/mobile.jsx';
import { ViewGiftProduct } from './pages/view.jsx';
import { ViewMobileProduct } from './pages/view.jsx';
import { ViewFashionProduct } from './pages/view.jsx';
import { ViewElectronicsProduct } from './pages/view.jsx';
import { CartProvider } from './context/context.jsx';
import { Cart } from './pages/cart.jsx';
import { CustomerDetails } from './pages/customerDetails.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter> 

      <CartProvider>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/home" element={<App/>}/>
    <Route path='/giftCards' element={<ProductsGiftCards/>}/>
    <Route path='/fashion' element={<ProductsFashion/>}/>
    <Route path='/electronics' element={<ProductsElectronics/>}/>
    <Route path='/mobile' element={<ProductsMobile/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/customerDetails" element={<CustomerDetails/>}></Route>
   




          {/** Dynamic Route of product View */}
    <Route path='/giftCard/:id' element={<ViewGiftProduct />} />
    <Route path='/mobile/:id' element={<ViewMobileProduct />} />
    <Route path='/fashion/:id' element={<ViewFashionProduct />} />
    <Route path='/electronics/:id' element={<ViewElectronicsProduct />} />





  </Routes>
  </CartProvider>
 </BrowserRouter>
)

