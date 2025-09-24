export default async function getAllOrders() {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/`);
   const {data} = await response.json();
   return data;
}
