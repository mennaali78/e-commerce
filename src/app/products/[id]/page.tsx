import React from 'react'

import SelectedProduct from '@/api/SelectedProduct';
import DetailsProduct from '@/app/_components/DetailsProduct/DetailsProduct';
export default async function ProductDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
   const data = await SelectedProduct(id);
 
  return <>
   <DetailsProduct data={data}/>
  </>
}
