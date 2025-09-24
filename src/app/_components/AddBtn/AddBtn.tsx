"use client"
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import AddToCart from '@/CartActions/addToCart.action';
import { toast } from 'sonner';
import { CartContext } from '@/context/CartContext';


export default function AddBtn({id}:{id:string}) {
   

  const {numberOfCartItem,setnumberOfCartItem} = useContext(CartContext)!;
   async function checkAddProduct(id:string){
         const res = await AddToCart(id)
      
        if(res.status === "success"){
        
            toast.success("Product Added Successfully",{position:"top-center",duration:2000});
            setnumberOfCartItem(numberOfCartItem + 1);
          
           
         
            }
            else{

                toast.error(res.message,{position:"top-center",duration:2000});
            }
      
    }
   
  return <>
     <Button onClick={()=>checkAddProduct(id)} className="cursor-pointer w-full">Add To Card</Button>
  
  </>
}
 