

import getSpecificBrand from '@/api/getSpecificBrand';
import Image from 'next/image';

import React from 'react'

export default async function specificBrand({ params }: { params: { id: string } }) {
  const { id } = params;
 const data = await getSpecificBrand(id);
 

  return (
    <div className='w-[90%] mx-auto my-12'>
      <div
        key={data._id}
        className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        {/* Image */}
        <div className="w-full h-[250px] relative">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>

          <p className="text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Slug:</span> {data.slug}
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Created:</span>{" "}
            {new Date(data.createdAt).toLocaleDateString()}
          </p>

        
        </div>
      </div>
    </div>
  )
}
