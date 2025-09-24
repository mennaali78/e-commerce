"use server";


import getMyToken from "@/utilities/getMyToken";
import { updateUserDataSchemaType } from "./schema/updateUserData.schema";

export default async function UpdateUserData(formValues: updateUserDataSchemaType) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("Login First");
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
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
