"use server";

import { updatePasswordSchemaType } from "@/schema/updatePassword.schema";
import getMyToken from "@/utilities/getMyToken";

export default async function UpdatePassword(formValues: updatePasswordSchemaType) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("Login First");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
    {
      method: "PUT",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues), 
    }
  );

  const payload = await res.json();
  return payload;
}
