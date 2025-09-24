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

const FormSchema = z.object({
  resetCode: z.string().min(5, {
    message: "email canot be empty",
  }),
})

export default function VertifyCode() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resetCode:"",
    },
  })

 async function handleVertifyCode(values:z.infer<typeof FormSchema>){
  
   try {
       const response =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,values);
   
     if(response.status === 200){
      
      router.push('/resetPassword')
     }
     }catch(err) {
   
      //  toast.error(err.response.data.message,{position:"top-center",duration:3000});

     }
 }

  return (
  <div className="w-[80%] mx-auto my-12">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleVertifyCode)} className="w-2/3 space-y-6">
        <FormField 
          control={form.control}
          name="resetCode"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl cursor-pointer font-bold my-6">Please Enter Your Verification Code</FormLabel>
              <FormControl>
                <Input className="py-7" placeholder="resetCode" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      <Button className="mt-4 cursor-pointer" variant="outline">vertify</Button>
      </form>
    </Form>
  </div>
  )
}
