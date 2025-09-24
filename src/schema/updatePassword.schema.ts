import * as z from "zod"
export const updatePasswordSchema = z.object({
   
       
        currentPassword:z.string().nonempty().min(6,"min length is 6"),
       password:z.string().nonempty().min(6,"min length is 6"),
        rePassword:z.string().nonempty().min(6,"min length is 6"),
       
       

}).refine((object)=> object.password === object.rePassword,{
    path:['rePassword'],
    error:"password & rePassword not match!!"
});

export type updatePasswordSchemaType=z.infer<typeof updatePasswordSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)