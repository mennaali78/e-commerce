"use client";

import getUserOrder from "@/api/getUserOrder";
import { Button } from "@/components/ui/button";
import { Order } from "@/types/userCart";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";


export default function Page() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]); // <-- use Order[]

  useEffect(() => {
    async function fetchOrders() {
      if (session?.user?.id) {
        try {
          const res: Order[] = await getUserOrder(session.user.id); // <-- type API response
        
          setOrders(res);
        } catch (error) {
          toast.error("Error fetching orders:");
        }
      }
    }

    if (status === "authenticated") {
      fetchOrders();
    }
  }, [session, status]);

  return (
    <div className="w-2/3 mx-auto my-12">
      <Link href="/userOrder">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button>All orders</Button>
        </div>
      </Link>

      {orders.length === 0 ? (
        <p className="text-center text-lg">No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="mb-12">
            {/* Total Price */}
            <h1 className="text-center text-3xl font-bold text-emerald-600 my-6">
              Total Cart Price: {order.totalOrderPrice} EGP
            </h1>

            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
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
        ))
      )}
    </div>
  );
}
