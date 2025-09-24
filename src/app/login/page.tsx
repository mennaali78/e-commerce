"use client"
import React from 'react';
import {Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage} from '@/components/ui/form';
import {useForm} from 'react-hook-form'
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import {loginSchema,loginSchemaType} from '@/schema/login.schema'
import {zodResolver} from '@hookform/resolvers/zod'

import { toast } from "sonner"

import { signIn } from "next-auth/react"
import Link from 'next/link';
export default function Login() {
  
  const form = useForm<loginSchemaType>({
    defaultValues:{
     
  
    email:"",
    password:"",
   


    },
    resolver:zodResolver(loginSchema)
  });
   async  function handleLogin(values:loginSchemaType){
   
    const res = await signIn('credentials',{
      email:values.email,
      password:values.password,
      redirect:false,
      callbackUrl:'/'
    })
    if(res?.ok){
     toast.success("You logedIn Successfully",{position:"top-center",duration:2000});
       window.location.href="/";
    }
    else{
      toast.error(res?.error,{position:"top-center",duration:3000});
    }
    // try {
    //    let response =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values);
    //  console.log(response);
    //  if(response.data.message === "success"){
    //   //  alert & go login
    //   toast.success("You Loged in Successfully",{position:"top-center",duration:3000});
    //   router.push('/')
    //  }
    //  }catch(err) {
      
    //    toast.error(err.response.data.message,{position:"top-center",duration:3000});

    //  }
    }

  return <>
  <div className="w-1/2 mx-auto">
  

      <h1 className="text-3xl text-center font-bold my-4">Login Now</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)}>

  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email:</FormLabel>
        <FormControl>
          <Input type="email" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Password:</FormLabel>
        <FormControl>
          <Input type="password" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
    />
    
   <Button className="mt-4 cursor-pointer w-full">Login Now</Button>
 
    <Link href="forgetPassword"><h3 className='text-2xl text-emerald-600 cursor-pointer font-bold my-6'>Forgot Your Password?</h3>  </Link>
   
  
 
  </form>
</Form>

  
  
  </div>
  
  
  </>
}
