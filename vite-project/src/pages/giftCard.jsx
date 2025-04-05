    import { MyNavbar } from "../components/navbar/navbar"
    import { Footer } from "../components/Cards/footer"
    import { Products } from "./pagesCompo"
    import { useState } from "react"
    import ProductCard from "./pagesCompo"
    import { Row,Col } from "react-bootstrap"
    import { Link } from "react-router"


   
  export  const giftCardData=[
        {
            id: 1,
            image:"/images/GiftCards/Screenshot_11.png",
            title:"DoorDash Gift Card",
            description:"Use it to order food and drinks from local restaurants via DoorDash.",
            price:340
        }

        ,{
            id: 2,
            image:"/images/GiftCards/Screenshot_54.png",
            title:"The Hotel.com Gift Card",
            description:" Redeem for hotel bookings on Hotels.com with no expiration date.",
            price:400
        },
        {
            id: 3,
            image:"/images/GiftCards/Screenshot_13.png",
            title:"The Home Gift Card",
            description:"A versatile card for home improvement, furniture, and appliances.",
            price:410
        },
        {
            id:4,
            image:"/images/GiftCards/download_o4r8-8u.png",
            title:"Hey You Gift Card Austrailia Region",
            description:" Pay for coffee and food at local cafés via the Hey You app in Australia.",
            price:430
        },
        {
            id:5,
            image:"/images/GiftCards/Screenshot_12.png",
            title:"Airbnb Gift Card",
            description:"Use it to book stays and experiences on Airbnb, with no expiration date.",
            price:500

        },
       
    ]

   

    export function ProductsGiftCards(){
   
        const[giftCards,setGiftCards] = useState(giftCardData)
        
        return(
        <>
        <div className="w-100 h-100 ">
        <MyNavbar/>
            

        <Products title="GIFT CARDS"/>
            

            <div>
                <Row className="px-4 g-4  justify-content-center ">
                    {
                        giftCards.map((val,index)=>(
                         <Col key={index} sm={6}  md={3} lg={2} style={{maxWidth:"100%"}} > 
                         <Link className="a" to={`/giftCard/${val.id}`} >
                         <ProductCard key={val.id} src={val.image} title={val.title} alt={val.title} />
                         </Link>
                         </Col>
                        ))

                        }
                    
                </Row>
           
            </div>
          

            <Footer/>
        </div>
        </>
        )
    }