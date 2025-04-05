import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { giftCardData } from "./giftCard";
import { MobileData } from "./mobile";
import { MyNavbar } from "../components/navbar/navbar";
import { Footer } from "../components/Cards/footer";
import { Link } from "react-router";
import { FashionData } from "./Fashion";
import { ElectronicsData } from "./Electronics";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../context/context";

export function ViewGiftProduct(){
   
    const [product  , setProduct] = useState({})

    const { id } = useParams();

  
    

    useEffect(()=>{
        setProduct(giftCardData.find(item => item.id === parseInt(id)))
    },[id])
    

     if(!product){
        return <p>Not found</p>
     }

    

    return(
        <>
        
        <div className="w-100 h-100"> 
            <MyNavbar/>
              
            <View   id={product.id} title={product.title} image={product.image} desc={product.description} price={product.price}/>
       


        <Footer/>
        </div>
        </>

        
    )
}

export function ViewMobileProduct(){
   
    const [MobileProduct  , setMobileProduct] = useState({})

    const { id } = useParams();

    
    

    useEffect(()=>{

        setMobileProduct(MobileData.find(item => item.id === parseInt(id)))
    },[id])
    

     if(!MobileProduct){
        return <p>Not found</p>
     }

    return(
        <>
        
        <div className="w-100 h-100"> 
            <MyNavbar/>
              
          <View margin="mt-2" id={MobileProduct.id} title={MobileProduct.title} image={MobileProduct.image} desc={MobileProduct.description} price={MobileProduct.price}/>


        <Footer/>
        </div>
        </>

        
    )
}


export function ViewFashionProduct(){
    const [FashionProduct  , setFashionProduct] = useState({})

    const { id } = useParams();

    
    

    useEffect(()=>{

        setFashionProduct(FashionData.find(item => item.id === parseInt(id)))
    },[id])
    

     if(!FashionProduct){
        return <p>Not found</p>
     }

    return(
        <>
        
        <div className="w-100 h-100"> 
            <MyNavbar/>
              
          <View margin="mt-2"id={FashionProduct.id} title={FashionProduct.title} image={FashionProduct.image} desc={FashionProduct.description} price={FashionProduct.price}/>


        <Footer/>
        </div>
        </>
    )
}


export function ViewElectronicsProduct(){
    const [ElectronicsProduct  , setElectronicsProduct] = useState({})

    const { id } = useParams();

    
    

    useEffect(()=>{

        setElectronicsProduct(ElectronicsData.find(item => item.id === parseInt(id)))
    },[id])
    

     if(!ElectronicsProduct){
        return <p>Not found</p>
     }

    return(
        <>
        
        <div className="w-100 h-100"> 
            <MyNavbar/>
              
          <View margin="mt-2" id={ElectronicsProduct.id} title={ElectronicsProduct.title} image={ElectronicsProduct.image} desc={ElectronicsProduct.description} price={ElectronicsProduct.price}/>


        <Footer/>
        </div>
        </>
    )
}


export function  View({title,image,desc,price,id,margin}){

    const { addCart } = useContext(CartContext);
    return(
        
        <div className="w-100 h-100 d-flex flex-column justify-content-center mt-5 align-items-center">
        
       
        <h4  style={{textTransform:"uppercase"}}>{title}</h4>
        <img width={280} height={250} className="rounded-5" src={image} alt={title} /> 
        <p style={{fontWeight:"500",fontSize:"1.2em",textAlign:"center"}} className={margin}>{desc}</p>
         <p style={{fontWeight:"800",fontSize:"1.2em"}}>{price}$</p>
         <Button onClick={()=> addCart(title,image,price,id)} style={{padding:"15px 60px",fontSize:"1.2em"}} variant="success">Order Now</Button>
        

        </div>  

    )
}