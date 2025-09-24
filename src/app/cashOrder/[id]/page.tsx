"use client"
import React, { useContext } from 'react';
import {Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage} from '@/components/ui/form';
import {useForm} from 'react-hook-form'
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import {checkoutSchemaType,checkoutSchema} from "@/schema/checkout.schema"
import {useRouter} from "next/navigation"
import {zodResolver} from '@hookform/resolvers/zod'


import { useParams } from 'next/navigation';
import cashCheckout from '@/checkoutActions/cashCheckout.action';

import { CartContext } from '@/context/CartContext';

export default function CashOrder() {
   const { setnumberOfCartItem } = useContext(CartContext)!;
   

     const router = useRouter();
  const {id}:{id:string} = useParams();
 
  const form = useForm<checkoutSchemaType>({
    defaultValues:{
     
  
   details:"",
    phone:"",
    city:"",
   


    },
    resolver:zodResolver(checkoutSchema),
  });

  
   async  function handleCheckOut(values:checkoutSchemaType){
  
  const res = await cashCheckout(id,values)
   
    if(res.status === "success"){
   
      setnumberOfCartItem(0);
      router.push('/allorders');
     
    }
    }

   
    
    

  return <>
  <div className="w-1/2 mx-auto">
  

      <h1 className="text-3xl text-center font-bold my-4">Checkout Now</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCheckOut)}>

  <FormField
    control={form.control}
    name="details"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Details:</FormLabel>
        <FormControl>
          <Input type="text" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Phone:</FormLabel>
        <FormControl>
          <Input type="tel" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
    />
  <FormField
    control={form.control}
    name="city"
    render={({ field }) => (
      <FormItem>
        <FormLabel>City:</FormLabel>
        <FormControl>
          <Input type="text" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
    />
    
   <Button className="mt-4 cursor-pointer w-full">Pay Now</Button>
  </form>
</Form>

  
  
  </div>
  
  
  </>
}
