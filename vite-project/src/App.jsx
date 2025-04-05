import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Cards/cards';
import { Footer } from './components/Cards/footer';
import { Banner } from './components/Banner/banner';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { SectionHeading } from './components/Banner/banner';
import { BannerCards } from './components/Banner/banner';
import { MyCarousel } from './components/Carousels/carousel';
import { MyNavbar } from './components/navbar/navbar';
import { useEffect } from 'react';
import { ElectronicsData } from './pages/Electronics';
import { FashionData } from './pages/Fashion';
import { giftCardData } from './pages/giftCard';
import { MobileData } from './pages/mobile';



function App() {


  return(

              <>
            
           
  
              <div className='w-100 h-100'>
              <MyNavbar/>
            <div style={{ backgroundColor: "#e9ecef",}}>
    
           
              <MyCarousel/>
           
             <Card />


              <div className='w-100'>
                <Banner classes="w-100"  Image="/images/banner/electronics-collection.jpg"  title="Banner-electronics-image"/>
                </div>

                <SectionHeading title="ELECTRONICS"/>
               

                <SectionHeading title="FASHION" view="View All"/>
                

                
              
            
                 <BannerCards/>
      
                 


                 <Banner Image="/images/banner/Amazon-gift-card.jpg"/>


                 <SectionHeading title="COMPUTER & LAPTOPS"/>
              <Footer/>
             

              </div>

              </div>
              </>
            )
                   
                    
  
}

export default App
