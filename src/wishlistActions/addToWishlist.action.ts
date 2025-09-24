"use server"
import getMyToken from '@/utilities/getMyToken'

export default async function addToWishList(id : string){
  try {
      const token = await getMyToken();
    if(!token){
        throw new Error("please login to be able add products");
    }
const res =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method: 'POST',
       headers:{
        token:token,
        "Content-Type":"application/json"
       },
       body : JSON.stringify({
           productId: id
       })
    });
    const payload = await res.json();
    return payload;
  } catch(err){
    return err;
  }
}