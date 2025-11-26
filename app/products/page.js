"use client";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch.png",
  },
  {
    id: 2,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch2.png",
  },
  {
    id: 3,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch.png",
  },
  {
    id: 4,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch.png",
  },
  {
    id: 5,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch.png",
  },
  {
    id: 6,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: "5/56",
    sold: "186 / 2058",
    img: "/watch.png",
  },
];

const Page = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Products</h1>

        <Link
          href="/products/grid"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          Grid View
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">SKU</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">QTY</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Sales</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-gray-50 transition cursor-pointer"
              >
                <td className="p-4">
                  <img
                    src={p.img}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                </td>

                <td className="p-4">
                  <div className="font-semibold">{p.name}</div>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </td>

                <td className="p-4 text-sm">{p.sku}</td>
                <td className="p-4 font-semibold">{p.price}</td>

                <td className="p-4">
                  <span className="text-green-600 font-semibold">
                    ● {p.status}
                  </span>
                </td>

                <td className="p-4">{p.qty}</td>

                <td className="p-4 flex items-center gap-1 text-yellow-500">
                  <FaStar /> 5/5
                </td>

                <td className="p-4 font-semibold">{p.sold}</td>

                <td className="p-4">
                  <FiMoreHorizontal size={20} className="text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
