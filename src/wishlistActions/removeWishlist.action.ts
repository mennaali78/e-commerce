"use server"
import getMyToken from "@/utilities/getMyToken" 
export default async function RemoveWishlistItem(id:string) {
   const token = await getMyToken();
    if(!token){
      throw new Error("Please Login To Be Able See Cart");
    }
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
         method:"DELETE",
         headers:{
             token,
             "Content-Type":"application/json"
         },
     });
    const payload = await res.json();
     return payload; 
}
