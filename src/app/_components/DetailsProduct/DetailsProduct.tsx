

import React from 'react'
import { ProductType } from './../../../types/product.type';

import AddBtn from '../AddBtn/AddBtn';
import getRelatedProducts from '@/productCategoryActions/relatedProducts.action';
import SingleProduct from '../SingleProduct/SingleProduct';
import Image from 'next/image';
export default async function DetailsProduct({data} :{data:ProductType}) {
  if(!data){
    return <h1>No Products Here</h1>;
  }
  const relatedProducts = await getRelatedProducts(data.category._id);
  
  return <>
    <div className="container w-full lg:w-[60%] mx-auto p-4 flex ">
       <div className="w-1/4">
          <div className="p-4">
            <Image src={data.imageCover} width={500} height={500} className="w-full" alt=""/>
          </div>
       </div>
       <div className="w-3/4">
       <div className="p-4">
        <h1 className="text-2xl font-bold my-4">{data.title}</h1>
        <p>{data.description}</p>
        <p className="text-emerald-600 my-2">{data.category.name}</p>
          <div className="flex justify-between w-full my-4">
                 <span>{data.price}EGP</span>
                 <span>{data.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i></span>
               </div>
               
              <AddBtn id={data.id}/>
       </div>
       </div>
   
       </div>

         <div className="container w-[80%] mx-auto my-12">
          <div className="flex flex-wrap">
       
             {relatedProducts.data.map((currentProduct:ProductType) => (
             <SingleProduct product={currentProduct} key={currentProduct.id} />
         ))}
          </div>
             
           </div>
     
  
  </>
}
