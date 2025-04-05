    import { MyNavbar } from "../components/navbar/navbar"
    import { Footer } from "../components/Cards/footer"
    import { Products } from "./pagesCompo"
    import { useState } from "react"
    import ProductCard from "./pagesCompo"
    import { Row,Col } from "react-bootstrap"
    import { Link } from "react-router"


    export const ElectronicsData = [
        {
          id: 15,
          image: "/images/Electronics/4zu3_HP_Probook_645_G4.jpg",
          title: "HP ProBook 645 G4 Laptop",
          description: "A powerful business laptop with an AMD Ryzen processor, ideal for multitasking.",
          price: 79999,
        },
        {
          id: 16,
          image: "/images/Electronics/840-G5-4.jpg",
          title: "HP EliteBook 840 G5",
          description: "A premium ultrabook with an Intel Core i5 processor, perfect for professionals.",
          price: 85999,
        },
        {
            id: 17,
            image: "/images/Electronics/71nV1VW1WOL._AC_SX466_.jpg",
            title: "HP Victus fa0032 i5 12th",
            description: "A high-performance gaming laptop with a 12th Gen Intel Core i5 processor and powerful graphics.",
            price: 120000,
          },
          {
            id: 18,
            image: "/images/Electronics/P8agK8Aifu.jpg",
            title: "HP 640 G1 Core i3 4th Gen",
            description: "A reliable business laptop with a 4th Gen Intel Core i3 processor, ideal for office and daily tasks.",
            price: 89999,
          },
      ];
      

 export function ProductsElectronics(){

       
         
        const[Electrnoics,setElectronicsCards] = useState(ElectronicsData)
        

        return(
        <>
        <div className="w-100 h-100 ">
        <MyNavbar/>
            

        <Products title="GIFT CARDS"/>
            

            <div>
                <Row className="px-4 g-4  justify-content-center ">
                    {
                        Electrnoics.map((val,index)=>(
                         <Col key={index} sm={6}  md={3} lg={2} style={{maxWidth:"100%"}} > 
                         <Link className="a" to={`/electronics/${val.id}`} >
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