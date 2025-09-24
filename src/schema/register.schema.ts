import * as z from "zod"
export const registerSchema = z.object({
     name:z.string().nonempty("Name is required").min(2,"min length is 2").max(10,"max length is 10"),
        email:z.email().nonempty("Email is required"),
        password:z.string().nonempty().min(6,"min length is 6"),
        rePassword:z.string().nonempty().min(6,"min length is 6"),
        phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8}$/)
       

}).refine((object)=> object.password === object.rePassword,{
    path:['rePassword'],
    error:"password & rePassword not match!!"
});

export type registerSchemaType=z.infer<typeof registerSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)