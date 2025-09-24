"use server"
import getMyToken from "@/utilities/getMyToken" 
export default async function ClearCart(){
 const token = await getMyToken();
    if(!token){
      throw new Error("Please Login To Be Able See Cart");
    }
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
         method:"DELETE",
         headers:{ token },
      
     });
    const payload = await res.json();
     return payload; 
}