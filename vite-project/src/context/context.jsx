import { createContext, useEffect, useState } from "react";



export const CartContext  = createContext()


export function CartProvider({children}){


    
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    

    function QuantityAdd(id){
            console.log("Add quantity for item:", id);

            if (cart.map(item => item.id == id && item.quantity > 1 )){
         setCart(cart.map(item=> item.id === id  ? {...item,quantity : item.quantity+1} : item) )
            }


            setCart(cart.map(item=> item.id === id  ? {...item,quantity : item.quantity+1} : item) )
           
            
        }
    
    
        function QuantityDec(id){
            console.log("Decrease quantity for item:", id);
       setCart(cart.map(item=> item.id === id && item.quantity>0 ?
         {...item,quantity : item.quantity-1} : item) )
        }
    
          

     useEffect(()=>{
        
        localStorage.setItem("cart",JSON.stringify(cart))
        
     },[cart])
   


     
    
    function addCart(title, image,price,id){

        console.log(title)
        console.log(price)
        console.log(image)

    
        setCart([...cart,{title:title,image:image,price:price,id:id,quantity:1} ] )
        console.log(cart)
    }


    return (
        <>
        <CartContext.Provider value={{cart, addCart,QuantityAdd,QuantityDec}} >
            {children}
        </CartContext.Provider>
        </>
    )
}