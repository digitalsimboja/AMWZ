import React from "react";
import { orders } from "../../lib/data/orders/ordersData";
import { FaShoppingBag } from "react-icons/fa";

export default function RecentOrders() {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1 className="text-blue-500">Recent Orders</h1>
      <ul>
        {orders.map((order, id) => (
          <li
            key={order.id}
            className="bg-custom-gray hover:gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-custom-gray rounded-lg p-3">
              <FaShoppingBag className="text-custom-yellow" />
            </div>
            <div className="pl-4">
                <p className="text-gray-500 font-bold">${order.total}</p>
                <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm text-gray-400">{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
