export default async function getOrderDetails(id: string) {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders?_id=${id}`);
  const { data } = await response.json();
  return data[0]; 
}
