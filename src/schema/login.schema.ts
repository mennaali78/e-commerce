import * as z from "zod"
export const loginSchema = z.object({
   
        email:z.email().nonempty("Email is required"),
        password:z.string().nonempty().min(6,"min length is 6"),
       
       

})

export type loginSchemaType=z.infer<typeof loginSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)