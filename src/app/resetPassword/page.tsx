"use client"



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import axios from "axios"
import { resetPasswordSchema, resetPasswordSchemaType } from "@/schema/resetPassword.schema"





export default function ResetPassword() {
   
  const router = useRouter();
  const form = useForm<resetPasswordSchemaType>({
    
    defaultValues: {
      email:"",
      newPassword:"",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

 async function handleResetPassword(values:resetPasswordSchemaType){
 
   try {
       const response =  await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values);
    
     if(response.status === 200){
      
      router.push('/login')
     }
     }catch(err) {
    
      //  toast.error(err.response.data.message,{position:"top-center",duration:3000});

     }
 }

  return (
  <div className="w-[80%] mx-auto my-12">
      <h1 className="text-3xl text-center font-bold my-4">Reset Password</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleResetPassword)} className="w-2/3 space-y-6">
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Email</FormLabel>
              <FormControl>
                <Input type="email" className="py-7" placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">newPassword</FormLabel>
              <FormControl>
                <Input  type="password" className="py-7" placeholder="newPassword" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      <Button className="mt-4 cursor-pointer" variant="outline">Reset Password</Button>
      </form>
    </Form>
  </div>
  )
}
