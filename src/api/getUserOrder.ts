export default async function getUserOrder(id:string) {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
   const res = await response.json();
  
   return res;
}
