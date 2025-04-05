import { Row, Col, Container } from "react-bootstrap";
import { Footer } from "../components/Cards/footer";
import { MyNavbar } from "../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useState,useEffect } from "react";

export function CustomerDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [delivery, setDelivery] = useState('');

  const[detailsobj,setdetailsobj] = useState({name,email,delivery})
  
  useEffect(()=>(

    localStorage.setItem('detailsobj',JSON.stringify((detailsobj)))
  ),[detailsobj])

 

  return (
    <> 

    <div className="w-100 h-100">
      <MyNavbar/>

   
      <div className="container my-5">
        <Row className="justify-content-center">
          <div lg={12}>
            <h1 className="text-center">Customer Details</h1>
          </div>

          <Row className="g-3">
            <Col md={6} sm={6}>
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                className="form-control" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </Col>

            <Col md={6}  sm={6}>
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Col>

            <Col md={12}  sm={6}>
              <label htmlFor="delivery" className="form-label">Delivery Details</label>
              <input 
                type="text" 
                id="delivery" 
                className="form-control" 
                value={delivery} 
                onChange={(e) => setDelivery(e.target.value)} 
                required 
              />
            </Col>

            <Col md={12}>
              <button 
                className="p-2 rounded-2" 
                > 
            
                Submit
              </button>
            </Col>
          </Row>
        </Row>
      </div>

      <Footer/>
      </div>
    </>
  );
}


