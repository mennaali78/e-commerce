
export default async function getAllUsers() {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users`);
   const {users} = await response.json();
   return users;
}
