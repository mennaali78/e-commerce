"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import {Autoplay} from "swiper/modules"
import { CategoryType } from './../../../types/categort.type';

export default function CategorySwiper({data} :{data: CategoryType[]}) {

  return <> 
    <h1 className="text-slate-500 font-semibold my-2 text-center">Shop Popular Categories</h1>
    <div className="w-[80%] mx-auto">
        <Swiper
           spaceBetween={0}
           slidesPerView={7}
          modules={[Autoplay]}
          autoplay = {{delay:2000}}
         
         >
         {data.map((category:CategoryType) => (
           <SwiperSlide key={category._id}>
             <Image width={500} height={500} src={category.image} alt={category.name} className="w-full object-cover h-[150px]" />
             <p className="text-center font-bold">{category.name}</p>
           </SwiperSlide>
         ))}
       </Swiper>

    </div>

  </>
}
