"use client"

import React, {  useState } from 'react'

import { toast } from 'sonner';

import addToWishList from '@/wishlistActions/addToWishlist.action';

export default function AddWishlist({id}:{id:string}) {
const [add, setadd] = useState(false)
   async function checkAddWishlist(id:string){
         const res = await addToWishList(id)
    
        if(res.status === "success"){
         
            toast.success("Product Added Successfully In Wishlist",{position:"top-center",duration:2000});
            setadd(true);
          
            }
            else{

                toast.error(res.message,{position:"top-center",duration:2000});
                  setadd(true);
            }
      

    }
  return <>
    {add? <div className='cursor-pointer text-3xl my-1 text-red-700' onClick={()=>checkAddWishlist(id)}><i className="fa-solid fa-heart"></i></div>:<div className='cursor-pointer text-3xl my-1' onClick={()=>checkAddWishlist(id)}><i className="fa-solid fa-heart"></i></div>}
  
  </>
}
 