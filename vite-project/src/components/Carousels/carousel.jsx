
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";




 export function MyCarousel() {


    const CarouselData = [
        {img:"/images/bannerCarousel/1.png"},
        {img:"/images/bannerCarousel/4.png"},
        {img:"/images/bannerCarousel/arch_x_shopon.jpg"},
        {img:"/images/bannerCarousel/special_offer_di3y-ni (1).gif"},
        {img:"/images/bannerCarousel/special_offer.png"},
        {img:"/images/bannerCarousel/xbox_Gift_cards__1_.png"},
        {img:"/images/bannerCarousel/xbox_Gift_cards.png"},           
     ]
            
             
        const[bannerCaousel,setCarousel] = useState(CarouselData)


        return (
            <Carousel  indicators  interval={800} ride="carousel">
              {CarouselData.map((val, index) => (
                <Carousel.Item key={index}>
                  <img   style={{maxHeight:"400px"}}  className=" w-100 object-fit-cover" src={val.img} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          );
  }