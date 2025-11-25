import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cubitt Smart Watch",
    img: "/speaker.png",
    sku: "FBOX-13653",
    price: "$576.28",
    status: "Active",
    qty: 566,
    rating: 5,
    sales: "186 / 2058",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    img: "/headphone.png",
    sku: "FBOX-13654",
    price: "$299.99",
    status: "Active",
    qty: 423,
    rating: 4,
    sales: "152 / 1890",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 3,
    name: "Premium Earbuds",
    img: "/headphone2.png",
    sku: "FBOX-13655",
    price: "$199.99",
    status: "Out of Stock",
    qty: 0,
    rating: 5,
    sales: "89 / 1200",
    description: "Compact earbuds with superior sound quality.",
  },
  {
    id: 4,
    name: "Gaming Headset",
    img: "/headphone3.png",
    sku: "FBOX-13656",
    price: "$159.99",
    status: "Active",
    qty: 234,
    rating: 4,
    sales: "67 / 890",
    description: "Professional gaming headset with surround sound.",
  },
  {
    id: 5,
    name: "Smart Watch Pro",
    img: "/watch.png",
    sku: "FBOX-13657",
    price: "$399.99",
    status: "Active",
    qty: 189,
    rating: 5,
    sales: "134 / 1567",
    description: "Advanced smartwatch with health monitoring features.",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    img: "/watch2.png",
    sku: "FBOX-13658",
    price: "$129.99",
    status: "Low Stock",
    qty: 12,
    rating: 4,
    sales: "98 / 1345",
    description: "Track your fitness goals with this advanced tracker.",
  },
];

export default function RecentPurchases() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-200";
      case "Out of Stock":
        return "text-red-600 bg-red-50 border-red-200";
      case "Low Stock":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Out of Stock":
        return "bg-red-500";
      case "Low Stock":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          All Products
        </h1>
        <p className="text-sm text-gray-600">Dashboard → All Products</p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-left text-gray-600 text-sm">
                <th className="py-4 pl-6 font-medium">Image</th>
                <th className="py-4 font-medium">Name</th>
                <th className="py-4 font-medium">SKU</th>
                <th className="py-4 font-medium">Price</th>
                <th className="py-4 font-medium">Status</th>
                <th className="py-4 font-medium">QTY</th>
                <th className="py-4 font-medium">Rating</th>
                <th className="py-4 pr-6 font-medium">Sales</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <td className="py-4 pl-6">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-lg object-cover"
                      />
                    </Link>
                  </td>

                  <td className="py-4">
                    <Link href={`/product/${product.id}`}>
                      <div className="font-medium text-gray-900">
                        {product.name}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs">
                        {product.description}
                      </p>
                    </Link>
                  </td>

                  <td className="py-4 text-gray-600 text-sm">
                    <Link href={`/product/${product.id}`}>
                      {product.sku}
                    </Link>
                  </td>

                  <td className="py-4">
                    <Link href={`/product/${product.id}`}>
                      <span className="font-semibold text-gray-900">
                        {product.price}
                      </span>
                    </Link>
                  </td>

                  <td className="py-4">
                    <Link href={`/product/${product.id}`}>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(product.status)}`}></span>
                        {product.status}
                      </span>
                    </Link>
                  </td>

                  <td className="py-4 text-gray-700 text-sm">
                    <Link href={`/product/${product.id}`}>
                      {product.qty}
                    </Link>
                  </td>

                  <td className="py-4">
                    <Link href={`/product/${product.id}`}>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`w-4 h-4 ${index < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </Link>
                  </td>

                  <td className="py-4 pr-6">
                    <Link href={`/product/${product.id}`}>
                      <span className="font-medium text-gray-900 text-sm">
                        {product.sales}
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`w-3 h-3 ${index < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">SKU:</span>
                        <span className="font-medium ml-1">{product.sku}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold ml-1">
                          {product.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-medium ml-1 flex items-center gap-1 ${getStatusColor(product.status).split(' ')[0]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(product.status)}`}></span>
                          {product.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">QTY:</span>
                        <span className="font-medium ml-1">{product.qty}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600">Sales:</span>
                        <span className="font-medium ml-1">{product.sales}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="flex items-start gap-3">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-3 h-3 ${index < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-600">SKU:</span>
                      <span className="font-medium ml-1">{product.sku}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold ml-1">{product.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-medium ml-1 flex items-center gap-1 ${getStatusColor(product.status).split(' ')[0]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(product.status)}`}></span>
                        {product.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">QTY:</span>
                      <span className="font-medium ml-1">{product.qty}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Sales:</span>
                      <span className="font-medium ml-1">{product.sales}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    
    </div>
  );
}