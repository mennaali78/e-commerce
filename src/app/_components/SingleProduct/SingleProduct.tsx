import React from 'react'

import {
  Card,
 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image";
import { ProductType } from './../../../types/product.type';

import AddBtn from '../AddBtn/AddBtn';
import AddWishlist from '../AddWish/AddWishlist';

export default function SingleProduct({product}:{product:ProductType}) {
  return <>
      
            <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5'>
             <div className="product p-4">
                      <Card className="gap-2 p-2">
             <Link href={`products/${product.id}`}>
                <CardHeader>
               <CardTitle ><Image src={product.imageCover} alt="img" width={500} height={500} /></CardTitle>
             <CardDescription className="text-emerald-500">{product.category.name}</CardDescription>
           
           </CardHeader>
              <CardContent className="font-bold">
              <p className="line-clamp-1">{product.title}</p></CardContent>
            <CardFooter>
            <div className="flex justify-between w-full">
              <span>{product.price}EGP</span>
              <span>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i></span>
            </div>
          </CardFooter>
             </Link>

        <AddBtn id={product.id}/>
     
    <AddWishlist id={product.id} />
    </Card>
             
             </div>
            
        </div>  
  </>
}
