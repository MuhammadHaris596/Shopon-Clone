import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";



export function Banner({Image,title}){

        return(
            <div className="w-100 mt-4 d-flex justify-content-center align-items-center " >
            <img src={Image} alt={title} className=" object-fit-cover"  style={{maxWidth:"100%"}}/>
            </div>
        )
}



export function  SectionHeading({title,view}){
    return(
         <div  className="px-0 mt-4 text-center" >
        <h2 className="fs-3">{title}</h2>
        <a href="" className="fs-5 text-black">{view}</a>
      </div>
    )
}




export function BannerCards(){
    const BannerCards2 = [
      { img: "/images/large-Cards/MEN.jpg", title: "Men" },
      { img: "/images/large-Cards/women.jpg", title: "women" },
      { img: "/images/large-Cards/kids.jpg", title: "kids" },
      { img: "/images/large-Cards/dd.jpg", title: "shoes" },
    ]
  
    const [bannercards, setBannerCards] = useState(BannerCards2);
  
  
      return(
  
            <>
        <div className="d-flex mt-4 flex-column justify-content-center align-items-center">
            <img src="/images/banner/summer-new-arrials.jpg" alt="Summer-arrivals-pic" style={{maxWidth:"100%"}} />
        </div>
      
      <Container  className="p-4 mt-4 " >
        <Row className="g-4  justify-content-center " >
          {bannercards.map((val, index) => (
            <Col key={index} md={3}  sm={6} xs={6}  className="d-flex justify-content-center " >
              <div className="w-100 mb-2  d-flex justify-content-center " >
                <img className="w-100 object-fit-cover rounded-4" src={val.img} alt={val.title} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
  
      </>
      
     
      )
  
  }