"use server"

import { checkoutSchemaType } from "@/schema/checkout.schema";
import getMyToken from "@/utilities/getMyToken"


export default async function cashCheckout(cartId:string,formValues:checkoutSchemaType){
 const token = await getMyToken();
    if(!token){
      throw new Error("Login First");
    }
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
         method:"POST",
         headers:{
            token,
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
            shippingAddress:formValues
      
     
         }),
      
     });
     const payload = await res.json();
     return payload; 
}