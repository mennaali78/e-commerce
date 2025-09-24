"use client"



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
 import {useRouter} from "next/navigation"
import {
  Form,
  FormControl,
 
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useState } from "react"

import { updateUserDataSchema, updateUserDataSchemaType } from "@/schema/updateUserData.schema"
import UpdateUserData from "@/updateUserData"






export default function UpdateUser() {
    const [isloading, setisloading] = useState(false);
     const [disabled, setdisabled] = useState(false);
  const router = useRouter();
  const form = useForm<updateUserDataSchemaType>({
    
    defaultValues: {
      name:"",
      email:"",
      phone:"",
     
      
    },
    resolver: zodResolver(updateUserDataSchema),
  });

 async function handleUpdateUserData(values:updateUserDataSchemaType){
  
 const res = await UpdateUserData(values);
    setdisabled(true);
    setisloading(true);
 
   
       
      if(res.message === "success"){
          setdisabled(false);
       setisloading(false);
          router.push('/login');
         
         
      }
   else{
     
    toast.error(res.message,{position:"top-center",duration:3000});
    
      setdisabled(false);
    setisloading(false);
    }
 }

  return (
  <div className="w-[50%] mx-auto my-12">
      <h1 className="text-3xl text-center font-bold my-4">Update My Data</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleUpdateUserData)} className="w-2/3 space-y-6">
       
        <FormField 
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Name</FormLabel>
              <FormControl>
                <Input  type="text" className="py-7" placeholder="name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Email</FormLabel>
              <FormControl>
                <Input  type="email" className="py-7" placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Phone</FormLabel>
              <FormControl>
                <Input  type="tel" className="py-7" placeholder="phone" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={disabled} className="mt-4 cursor-pointer" variant="outline">{isloading ?( <i className="fas fa-spinner fa-spin"></i> ):(<span>Change Password</span> ) }</Button>
      </form>
    </Form>
  </div>
  )
}
