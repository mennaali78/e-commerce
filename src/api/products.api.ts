
export default async function getProducts() {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
    method:"GET",
    next:{revalidate :60}
   });
    const {data} = await response.json();
    return data;
}
