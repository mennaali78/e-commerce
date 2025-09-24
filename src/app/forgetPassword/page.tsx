"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
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
import { useState } from "react"

const FormSchema = z.object({
  email: z.string().min(5, {
    message: "email canot be empty",
  }),
})

export default function ForgetPassword() {
  const [isloading, setisloading] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

 async function handleForgetPassword(values:z.infer<typeof FormSchema>){
  
  
   try {
       const response =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,values);
    
    setdisabled(true);
    setisloading(true);
   
     if(response.status === 200 ){
        setdisabled(false);
    setisloading(false);
      router.push('/vertifyCode')
     }
     }catch(err) {
        setdisabled(false);
    setisloading(false);
      //  toast.error(err.response.data.message,{position:"top-center",duration:3000});

     }
 }

  return (
  <div className="w-[80%] mx-auto my-12">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForgetPassword)} className="w-2/3 space-y-6">
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Please Enter Your Verification Code</FormLabel>
              <FormControl>
                <Input type="email" className="py-7" placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      <Button disabled={disabled} className="mt-4 cursor-pointer" variant="outline">{isloading ? <i className="fas fa-spinner fa-spin"></i>: "vertify" }</Button>
      </form>
    </Form>
  </div>
  )
}
