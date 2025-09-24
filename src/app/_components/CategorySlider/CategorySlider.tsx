import React from 'react'
import getAllCategories from '@/api/AllCategories'
import CategorySwiper from '../CategorySwiper/CategorySwiper';

export default async function CategorySlider() {
  const data = await getAllCategories();

  return <>
  <CategorySwiper data={data}/>
  
  </>
  
}
