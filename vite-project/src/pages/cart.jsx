import { useContext } from "react";
import { CartContext } from "../context/context";
import { MyNavbar } from "../components/navbar/navbar";
import { Footer } from "../components/Cards/footer";
import { NavbarBrand } from "react-bootstrap";
import {Row,Col} from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";


export function Cart(){


    

    const { cart,QuantityAdd,QuantityDec } = useContext(CartContext);
    



    return(
        <div className="w-100 h-100"> 
        
        <MyNavbar/>


            <h2 className="text-center mt-4">Your Cart</h2>

            <div className="container mt-3">
            {cart.length === 0 ? 
                 (<p className="text-center">Your cart is empty</p> )
             : 
               ( cart.map((item, index) => (
                <div key={index} className="card p-3 mb-3">
                    <img src={item.image} alt={item.title} width={100} height={100} />
                   
                    <Row  > 
                        <Col ><h5>{item.title}</h5></Col>
                     
                     <Col className="d-flex align-items-center justify-content-end gap-3" >
                     <span>{item.quantity}</span>
                    <span ><FaMinus onClick={()=> QuantityDec(item.id)}/> </span>
                    <span><FaPlus   onClick={()=> QuantityAdd(item.id)}/> </span>  
                    </Col>
                   </Row>
                   
                    
                    <p>Price: ${item.price}</p>
                </div>
                ))
           ) }
            </div>


        <Footer/>
        </div>
    )
}