import React from 'react';
import Image from 'next/image';

export default function RevenueProduct() {
  const order = {
    id: "#68543",
    date: "Mon, Jan 28, 2022, 8:40AM",
    status: "Pending",
    customer: {
      name: "Jane Cooper",
      email: "tim.jennings@example.com",
      phone: "+099 856 245",
    },
    orderInfo: {
      shipping: "Next express",
      payment: "Paypal",
      status: "Pending",
      Color: "silver",
    },
    deliverTo: {
      address1: "Santa Ana, Illinois 85486",
      address2: "2972 Westheimer Rd.",
      block: "Block 9A",
    },
    paymentInfo: {
      card: "Master Card **** **** 8657",
      business: "Fox Market LLC",
      phone: "+09985 6578 52",
    },
    products: [
      {
        name: "Bose noise cancelling",
        price: 948.55,
       
        img: "/watch.png",
        color: "silver",
        sales: "556",
        available: "453",
      },
      {
        name: "Philips wireless headphone",
        price: 767.5,
     
        img: "/watch.png",
        color: "black",
        sales: "342",
        available: "289",
      },
      { 
        name: "Cummit smart watch", 
        price: 396.84, 
       
        img: "/watch.png",
        color: "gold",
        sales: "189",
        available: "156",
      },
      { 
        name: "Google Pixel Buds", 
        price: 778.35, 
       
        img: "/watch.png",
        color: "white",
        sales: "421",
        available: "378",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Order Details
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Home › Dashboard › Order #{order.id}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
       
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Products ({order.products.length})
            </h3>

            {/* Mobile View - Cards */}
            <div className="block md:hidden space-y-4">
              {order.products.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-12 h-12 bg-white rounded-lg border border-gray-200 flex">
                      <Image 
                        src={product.img} 
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">
                        {product.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Color:</span>
                          <span className="font-medium ml-1 capitalize">{product.color}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Price:</span>
                          <span className="font-medium ml-1">${product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-gray-500">Sales</p>
                      <p className="font-medium">{product.sales}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Available</p>
                      <p className="font-medium">{product.available}</p>
                    </div>
               
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
              <table className=" ">
                <thead className="bg-gray-50">
                  <tr>
                  
                 
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Image
                    </th>
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Name
                    </th>
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Color
                    </th>
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Sales
                    </th>
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Available
                    </th>
                    <th className="p-4 text-left text-xs font-medium text-gray-500 ">
                      Price
                    </th>
              
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {order.products.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                     
                      <td className="p-4">
                        <div className="relative w-10 h-10 bg-white rounded border border-gray-200 flex">
                          <Image 
                            src={product.img} 
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                            sizes="40px"
                          />
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-medium text-gray-900">
                          {product.name}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-900 capitalize">{product.color}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-900">{product.sales}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-900">{product.available}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-semibold text-gray-900">
                          ${product.price}
                        </span>
                      </td>
                  
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}