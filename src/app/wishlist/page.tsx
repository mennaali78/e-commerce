"use client"
import getLoggedUserWishlist from '@/wishlistActions/getLoggedUserWishlist';
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import AddBtn from '../_components/AddBtn/AddBtn';
import RemoveWishlistItem from '@/wishlistActions/removeWishlist.action';
import { RootData } from '@/types/wishlist';
import Image from 'next/image';

export default function Wishlist() {
  const [products, setProducts] = useState<RootData[]>([]);;
  const [isLoading, setisLoading] = useState(true);
  async function getUserWishlist() {
    try {
      const res = await getLoggedUserWishlist();
      if (res.status === "success") {
   
        setProducts(res.data);
        setisLoading(false);
      }
    } catch (err) {
    
       setisLoading(false);
      toast.error("Can't show wishlist");
    }
  }

   async function handleRemoveItem(id:string){
     
      const res = await RemoveWishlistItem(id);
  
    if(res.status === "success"){
    
      setProducts(res.data);
      toast.success("Product Deleted Successfully",{position:"top-center",duration:2000});
     getUserWishlist();
      }
     
     
   
    else {
      toast.error("Can't Delete This Product now",{position:"top-center",duration:2000})
     
   
    }
   
    }
  useEffect(() => {
    getUserWishlist();
  }, []);
 if(isLoading){
    return <h1 className="text-center text-3xl font-bold my-12 text-slate-900">
         Loading.....
        </h1>
  }
  return (
    <div className='w-[80%] mx-auto mt-12 flex flex-wrap gap-7'>
    <>
      {products.length > 0 ? (
        products.map((product) => (
        
          <div  key={product.id} className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className='w-[70%] mx-auto'>
            <a href="#">
                <Image src={product.imageCover} width={500} height={500} className="w-16 md:w-32 max-w-full max-h-full" alt="product"/>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product?.category?.name}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
           
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
               <span onClick={()=> handleRemoveItem(product.id)} className='text-red-600 cursor-pointer'><i className="fa-solid fa-trash"></i> Remove</span>
              </div>
            </div>
              <div className='mb-5'><AddBtn id={product.id}/></div>
          </div>
          </div>
        ))
      ) : (
        <h1 className="text-center text-3xl font-bold my-12 text-red-600">
          No Products Added yet!
        </h1>
      )}
    </>
    </div>
  );
}
