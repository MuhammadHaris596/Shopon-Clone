    import { MyNavbar } from "../components/navbar/navbar"
    import { Footer } from "../components/Cards/footer"
    import { Products } from "./pagesCompo"
    import { useState } from "react"
    import ProductCard from "./pagesCompo"
    import { Row,Col } from "react-bootstrap"
    import { Link } from "react-router"


    export  const MobileData=[
        {
            id: 6,
            image:"/images/mobile/download_6bqz-lv.jpg",
            title:"Nokia mobile Model 6310",
            description:" A classic feature phone with a large display and long battery life.",
            price:6000
        }

        ,{
            id: 7,
            image:"/images/mobile/download_8xhw-mj.jpg",
            title:"Nokia mobile Model 5310",
            description:"A music-focused feature phone with dual speakers and MP3 support.",
            price:7000
        },
        {
            id: 8,
            image:"/images/mobile/download_aqeu-y5.jpg",
            title:"Nokia mobile New Model 130",
            description:"A simple, durable phone with FM radio and long battery life.",
            price:8000
        },
        {
            id:9,
            image:"/images/mobile/download_bauz-ak.jpg",
            title:"Marshall Headphone",
            description:"Premium headphones with powerful bass and iconic design.",
            price:2000
        },
        {
            id:10,
            image:"/images/mobile/OHP-317-GREY.png",
            title:"Oraimo Bluetooth Headset Wireless",
            description:"Affordable wireless headset with good sound and battery life.",
            price:2500

        },
       
    ]


 export function ProductsMobile(){

       
         
        const[Mobile,setMobileCards] = useState(MobileData)
        

        return(
        <>
        <div className="w-100 h-100 ">
        <MyNavbar/>
            

        <Products title="GIFT CARDS"/>
            

            <div>
                <Row className="px-4 g-4  justify-content-center ">
                    {
                        Mobile.map((val,index)=>(
                         <Col key={index} sm={6}  md={3} lg={2} style={{maxWidth:"100%"}} > 
                         <Link className="a" to={`/mobile/${val.id}`} >
                         <ProductCard  key={val.id} src={val.image} title={val.title} alt={val.title} />
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