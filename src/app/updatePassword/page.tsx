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
import { updatePasswordSchema, updatePasswordSchemaType } from "@/schema/updatePassword.schema"
import UpdatePassword from "../updatePassword"
import { useState } from "react"






export default function UUpdatePassword() {
    const [isloading, setisloading] = useState(false);
     const [disabled, setdisabled] = useState(false);
 const router = useRouter();
  const form = useForm<updatePasswordSchemaType>({
    
    defaultValues: {
      currentPassword:"",
      password:"",
      rePassword:"",
     
      
    },
    resolver: zodResolver(updatePasswordSchema),
  });

 async function handleUpdatePassword(values:updatePasswordSchemaType){
 
 const res = await UpdatePassword(values);
    setdisabled(true);
    setisloading(true);
    try {
   
   
      
      if(res.message === "success"){
          setdisabled(false);
       setisloading(false);
          router.push('/login');
         
      }
    } catch (err){
       const error = err as Error;
    toast.error(error.message,{position:"top-center",duration:3000});
      setdisabled(false);
    setisloading(false);
    }
 }

  return (
  <div className="w-[50%] mx-auto my-12">
      <h1 className="text-3xl text-center font-bold my-4">Reset Password</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleUpdatePassword)} className="w-2/3 space-y-6">
       
        <FormField 
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">currentPassword</FormLabel>
              <FormControl>
                <Input  type="password" className="py-7" placeholder="currentPassword" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">password</FormLabel>
              <FormControl>
                <Input  type="password" className="py-7" placeholder="password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">rePassword</FormLabel>
              <FormControl>
                <Input  type="password" className="py-7" placeholder="rePassword" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={disabled} className="mt-4 cursor-pointer" variant="outline">{isloading ? <i className="fas fa-spinner fa-spin"></i>: "Change Password" }</Button>
      </form>
    </Form>
  </div>
  )
}
