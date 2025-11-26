"use client";

import React from "react";
import Link from "next/link";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    sold: "186 / 2058",
    img: "/watch1.png",
  },
  {
    id: 2,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    sold: "186 / 2058",
    img: "/watch2.png",
  },
  {
    id: 3,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    sold: "186 / 2058",
    img: "/watch3.png",
  },
  {
    id: 4,
    name: "Cubit Smart Watch",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    sold: "186 / 2058",
    img: "/watch4.png",
  },
];

const Page = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Products</h1>

        <Link
          href="/products"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          List View
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link
            href={`/products/${p.id}`}
            key={p.id}
            className="bg-white p-4 shadow-md rounded-xl cursor-pointer hover:shadow-lg transition"
          >
            {/* Three dots */}
            <div className="flex justify-end">
              <FiMoreHorizontal size={20} className="text-gray-600" />
            </div>

            {/* Product Image */}
            <img
              src={p.img}
              className="w-full h-40 object-contain mb-4 rounded-lg"
              alt={p.name}
            />

            {/* Name */}
            <h2 className="font-semibold text-lg">{p.name}</h2>

            {/* Stars */}
            <div className="flex items-center text-yellow-500 gap-1 mt-1">
              <FaStar />
              <span className="text-sm">5/5</span>
            </div>

            {/* Price + SKU */}
            <div className="text-gray-600 text-sm mt-2">{p.price}</div>
            <div className="text-gray-500 text-sm">{p.sku}</div>

            {/* Description */}
            <p className="text-gray-500 mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur posuere.
            </p>

            {/* Status + Sold */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-600 font-semibold">● {p.status}</span>
              <span className="font-semibold">{p.sold}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
