import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";







export function Footer(){


    return(
    <footer style={{backgroundColor:"rgba(46,46,84,255)"}}>

    <Container  className="w-100 h-100 mt-4  text-white justify-content-center d-flex" >
    <Row className="justify-content-center pt-4 ">
        <Col sm={12} lg={2} md={12}>
         <h5 className="font-sizes-md" >USEFUL LINKS</h5>
         <ul className="ul custom-fs" >
            <li>About us</li>
            <li>Gift Certificates</li>
            <li>Our Brands</li>
            <li>Sitemap</li>
            <li>Blog</li>
         </ul>
        </Col>

        <Col sm={12} lg={2} md={12}>
        <h5 >MY ACCOUNT</h5>
         <ul className="ul custom-fs">
            <li>Sign in</li>
            <li>Create Accounts</li>
         </ul>
        </Col>


        <Col sm={12} lg={3} md={12}>
        <h5 className="font-sizes-md">CUSTOMER SERVICE</h5>
         <ul className="ul custom-fs">
            <li>Payment & Shipping</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQS</li>
            <li>Return & Exchange</li>
            <li>About your order</li>
            <li>Wishlist</li>
            <li>Comapnion List</li>
         </ul>
        </Col>


     
       
        <Col  sm={12} lg={2} md={12}>
        <h5 className="font-sizes-md">CONTACT US</h5>
         <ul className="ul custom-fs">
             <li> 15E Officers Colony Bosan Road Multan  03336198169</li>
            <li>Mon-Sun 09:00 AM to 11:30 PM</li>
            <li> <a href="#" className="text-white" >admin@shopon.pk</a></li>
            <li><a href="#" className="text-white" > View on map</a></li>
            
         </ul>
        </Col>


        <Col  sm={12} lg={3} md={12}>
        <h5 className="font-sizes-md">KEEP IN TOUCH</h5>
         <ul className="ul custom-fs">
        
          <Row className="gap-3 pt-2">
         <li> <div className="d-flex align-items-center gap-1">  <FaFacebook className="social-icon" />
         <span>Facebook</span></div> </li> 
           
          <li>  <div className="d-flex  align-items-center gap-1">  <FaInstagram  className="social-icon" />
         <span>Instagram</span></div> </li>
         
         <li>  <div className="d-flex  align-items-center gap-1">  <FaTwitter  className="social-icon" />
         <span>Twitter</span></div> </li>
        
         <li>  <div className="d-flex  align-items-center gap-1">  <FaYoutube  className="social-icon" />
         <span>Youtube</span></div> </li>

         </Row>
         </ul>
        </Col>  
        
     
        
     
    </Row>
    </Container>
    </footer>

    )
}



