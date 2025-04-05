import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { MobileData } from "../../pages/mobile";
import { giftCardData } from "../../pages/giftCard";
import { FashionData } from "../../pages/Fashion";
import { ElectronicsData } from "../../pages/Electronics";
import Slick from "../slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Card() {
  const cardData = [
    { img: "/images/cards/gift-card.png", title: "Gift Cards" },
    { img: "/images/cards/grocery.png", title: "Grocery" },
    { img: "/images/cards/fashion.png", title: "Fashion" },
    { img: "/images/cards/beauty.png", title: "Beauty" },
    { img: "/images/cards/home-decor-item.png", title: "Home & Decor" },
    { img: "/images/cards/mobile-&-tablets.png", title: "Mobile & Tablets" },
    { img: "/images/cards/electonics.png", title: "Electronics" },
    { img: "/images/cards/new-on-shopon.png", title: "New on shopon" },
  ];



  const largeCards = [
    { img: "/images/large-Cards/Amazon-gift-card.jpg", title: "Amazon Gift Card" },
    { img: "/images/large-Cards/Google-Play-gift-card.jpg", title: "Google Play Gift Card" },
    { img: "/images/large-Cards/itune-gift-card.jpg", title: "Itune Gift Card" },
    { img: "/images/large-Cards/Playstation-card-from-shopon (1).jpg", title: "Play Station Gift Card" },
  ]


  const bannerCards=[
    { img: "/images/large-Cards/gaming-cards.jpg", title: " Game Card" },
    { img: "/images/large-Cards/IPHONE-SALESS.jpg", title: "Iphone  Card" },
  ]


  const [cards, setCard] = useState(cardData);
  const [cardsLarge, setlargeCard] = useState(largeCards);
  const [BannerCards, setbannerCard] = useState(bannerCards);



  useEffect(() => {
    return () => {
      console.log('Cleaning up cards state');
      setCard([]); 
    };
  }, []);


  useEffect(() => {
    return () => {
      console.log('Cleaning up cards state');
      setlargeCard([]); 
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('Cleaning up cards state');
      setbannerCard([]); 
    };
  }, []);
  
  return (

    <>
    <Container  className="p-5 "  >
      <Row className="justify-content-center g-1" >
        {cards.map((val, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <div  className="custom-width">
              <img src={val.img} alt={val.title} style={{maxWidth:"100%"}} />
              <p className="text-center mt-2 fs-5">{val.title}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className=" w-100">
    <h4 className=" text-md-start">FLASH SALE</h4>
    </div>
    </Container>



       <div  className="px-0 mt-4 text-center" >
        <h2 className="fs-3">TRENDING GIFT CARDS</h2>
        <a href="" className="fs-5 text-black">View All</a>
       </div>

       {/* <Container className='mt-5 text-center'>
       <Slick objectImages={giftCardData}/>
        
         </Container> */}
       
  
        
        

       <Container   className="p-4 mt-4 " >
      <Row className="  justify-content-center " >
        {cardsLarge.map((val, index) => (
          <Col key={index} md={3}  sm={6} xs={6}  className="d-flex justify-content-center " >
            <div className="w-100 mb-2  d-flex justify-content-center " >
              <img className="w-100 rounded-4" src={val.img} alt={val.title} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>






    <Container fluid className="px-0 mt-5 px-5"  >
      <Row className=" justify-content-center rounded-5" >
        {BannerCards.map((val, index) => (
          <Col key={index} md={6}  sm={12} className="d-flex justify-content-center">
            <div className="w-100 mb-2 d-flex justify-content-center">
              <img className="w-100 rounded-3" src={val.img} alt={val.title} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>

    <div  className="px-0 mt-4 mb-4 text-center" >
        <h2 className="fs-3">MOBILE & ACCESSORIES</h2>
        <a href="" className="fs-5 text-black">View All</a>
       </div>


    </>
  );
}



