import getOrderDetails from '@/api/orderDetails';
import { RootData } from '@/types/orderDetails';

import Image from 'next/image';
import React from 'react';

export default async function OrderDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  // FIX: single order, not array
  const order: RootData | null = await getOrderDetails(id);

  if (!order) {
    return <div className="text-center text-red-500 my-12">Order not found</div>;
  }

  return (
    <div className="w-2/3 mx-auto my-12">
      {/* Total Price */}
      <h1 className="text-center text-3xl font-bold text-emerald-600 my-6">
        Total Cart Price: {order.totalOrderPrice} EGP
      </h1>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-16 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Qty</th>
              <th scope="col" className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.cartItems.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b hover:bg-gray-50"
              >
                {/* Image */}
                <td className="p-4">
                  <Image
                    src={item.product.imageCover}
                    className="w-16 md:w-24 object-cover rounded"
                    alt={item.product.title}
                    width={500}
                    height={500}
                  />
                </td>

                {/* Product Title */}
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {item.product.title}
                </td>

                {/* Qty */}
                <td className="px-6 py-4">{item.count}</td>

                {/* Line Price */}
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {item.price * item.count} EGP
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
