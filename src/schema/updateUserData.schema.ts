import * as z from "zod"
export const updateUserDataSchema = z.object({
   
       
       name:z.string().nonempty("Name is required").min(2,"min length is 2").max(10,"max length is 10"),  
       email:z.email().nonempty("Email is required"),
       phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8}$/)
       
       

})

export type updateUserDataSchemaType=z.infer<typeof updateUserDataSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)