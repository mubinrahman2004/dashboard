import React from 'react'
import BestSellerCard from '../allcard/BestSellerCard'

const BestSeller = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 ">
          Best Sellers
        </h2>
        <div className="flex gap-4">
          <button className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Sales report
          </button>
          <button className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Export report
          </button>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1  gap-2">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </div>
  )
}

export default BestSeller