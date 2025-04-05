    import { MyNavbar } from "../components/navbar/navbar"
    import { Footer } from "../components/Cards/footer"
    import { Products } from "./pagesCompo"
    import { useState } from "react"
    import ProductCard from "./pagesCompo"
    import { Row,Col } from "react-bootstrap"
    import { Link } from "react-router"


    export const FashionData = [
        {
          id: 11,
          image: "/images/Fashion/DZ7A5829_850x.jpg",
          title: "Men's Peshawari Sandal - Mustard",
          description: "Traditional Peshawari sandals with premium leather and a stylish mustard finish.",
          price: 2199,
        },
        {
          id: 12,
          image: "/images/Fashion/DZ7A5844_850x.jpg",
          title: "Men's Peshawari Sandal - Grey",
          description: "Elegant and comfortable grey Peshawari sandals, perfect for casual and formal wear.",
          price: 2199,
        },
        {
          id: 13,
          image: "/images/Fashion/Norozi_chappal_black__1_.jpeg",
          title: "Norozi Chappal - Black",
          description: "Handcrafted black Norozi chappal with a durable sole and premium leather.",
          price: 4999,
        },
        {
          id: 14,
          image: "/images/Fashion/Norozi_chappal_Double_sole_Maroon__1_.jpg",
          title: "Norozi Chappal - Double Sole Maroon",
          description: "Stylish maroon Norozi chappal with double sole for extra durability and comfort.",
          price: 4999,
        },
      ];
      

 export function ProductsFashion(){

       
         
        const[Fashion,setFashionCards] = useState(FashionData)
        

        return(
        <>
        <div className="w-100 h-100 ">
        <MyNavbar/>
            

        <Products title="GIFT CARDS"/>
            

            <div>
                <Row className="px-4 g-4  justify-content-center ">
                    {
                        Fashion.map((val,index)=>(
                         <Col key={index} sm={6}  md={3} lg={2} style={{maxWidth:"100%"}} > 
                         <Link className="a" to={`/fashion/${val.id}`} >
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