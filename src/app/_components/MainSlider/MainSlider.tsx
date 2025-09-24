"use client"
import React from 'react'
import img1 from "../../../../public/Home _ FreshCart - eCommerce Theme/imgi_59_slider-image-1.jpg"
import img2 from "../../../../public/Home _ FreshCart - eCommerce Theme/imgi_58_slider-image-3.jpg"
import img3 from "../../../../public/Home _ FreshCart - eCommerce Theme/imgi_61_ad-banner-1.jpg"
import img4 from "../../../../public/Home _ FreshCart - eCommerce Theme/imgi_62_ad-banner-2.jpg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper/modules"
export default function MainSlider() {
  return <>
  <div className="w-[80%] mx-auto my-4 flex">
    <div className="w-3/4">
    
       <Swiper
      spaceBetween={0}
      slidesPerView={1}
     modules={[Autoplay]}
     autoplay = {{delay:2000}}
    
    >
      <SwiperSlide><Image src={img1} alt="Slider Image 1" className="w-full object-cover h-[400px]" /></SwiperSlide>
      <SwiperSlide><Image src={img2} alt="Slider Image 1" className="w-full object-cover h-[400px]" /></SwiperSlide>
      <SwiperSlide><Image src={img3} alt="Slider Image 1" className="w-full object-cover h-[400px]" /></SwiperSlide>
    
    

    </Swiper>
    </div>
    <div className="w-1/4">
      <Image src={img3} alt="Slider Image 2" className="w-full object-cover h-[200px]" />
      <Image src={img4} alt="Slider Image 3" className="w-full object-cover h-[200px]" />
    </div>

  </div>
  </>
}


  
  
