import getAllOrders from '@/api/allOrders';
import { Order } from '@/types/userCart';
import Link from 'next/link';
import React from 'react';

export default async function AllOrders() {
  const res: Order[] = await getAllOrders();

  return (
    <div className="w-[50%] mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center border-b pb-4">
        My Orders
      </h1>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((order) => (
          <Link key={order._id} href={`orderDetails/${order._id}`}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
              {/* Order Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  Order #{order._id}
                </h2>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    order.isPaid
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {order.isPaid ? 'Paid' : 'Unpaid'}
                </span>
              </div>

              {/* Order Details (stacked vertically) */}
              <div className="text-sm divide-y divide-gray-200">
                <div className="py-3">
                  <p className="font-medium text-blue-600">Tax</p>
                  <p className="text-gray-700">{order.taxPrice} EGP</p>
                </div>

                <div className="py-3">
                  <p className="font-medium text-blue-600">Shipping</p>
                  <p className="text-gray-700">{order.shippingPrice} EGP</p>
                </div>

                <div className="py-3">
                  <p className="font-medium text-blue-600">Payment</p>
                  <p className="capitalize text-gray-700">
                    {order.paymentMethodType}
                  </p>
                </div>

                <div className="py-3">
                  <p className="font-medium text-blue-600">Delivery</p>
                  <p
                    className={`font-semibold ${
                      order.isDelivered ? 'text-green-600' : 'text-yellow-600'
                    }`}
                  >
                    {order.isDelivered ? 'Delivered' : 'Pending'}
                  </p>
                </div>
              </div>

              {/* Total Price (vertical alignment) */}
              <div className="mt-6 border-t pt-5 flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-2">Total Order Price</p>
                <p className="text-3xl font-extrabold text-emerald-600">
                  {order.totalOrderPrice} EGP
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
