import * as z from "zod"
export const resetPasswordSchema = z.object({
   
        email:z.email().nonempty("Email is required"),
        newPassword:z.string().nonempty().min(6,"min length is 6"),
       
       

})

export type resetPasswordSchemaType=z.infer<typeof resetPasswordSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)