import * as z from "zod"
export const checkoutSchema = z.object({
   
        details:z.string().nonempty("details canot be empty"),
      phone:z.string().nonempty("phone canot be empty").regex(/^01[1250][0-9]{8}$/,"not valid phone number"),
      city:z.string().nonempty("city canot be empty"),
       
       

})

export type checkoutSchemaType=z.infer<typeof checkoutSchema>
 // phone:z.string().regex(/^(2|\+2){0,1}01[0251][0-9]{8} $/)