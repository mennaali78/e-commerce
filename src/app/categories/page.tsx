import getAllCategories from '@/api/AllCategories'
import { RootData } from '@/types/categort';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function Categories() {
  const res :RootData[] = await getAllCategories();
  

  return (
    <div className='w-[80%] mx-auto my-12'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {res.map((category) => (
          <div 
            key={category._id} 
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
          
            <div className="w-full object-cover h-[150px] relative">
              <Image 
                src={category.image} 
                alt={category.name} 
                fill 
                className="rounded-t-lg object-cover" 
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
              </h5>

              <Link 
                href={`/specificCategory/${category._id}`} 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
                           bg-blue-700 rounded-lg hover:bg-blue-800 
                           focus:ring-4 focus:outline-none focus:ring-blue-300 
                           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
