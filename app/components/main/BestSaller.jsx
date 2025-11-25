import React from 'react'
import BestSellerCard from '../allcard/BestSellerCard'

const BestSeller = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Best Sellers</h2>
        <div className="flex gap-3">
          <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 border border-gray-300 rounded-lg hover:border-blue-600">
            Sales report
          </button>
          <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 border border-gray-300 rounded-lg hover:border-blue-600">
            Export report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {[...Array(6)].map((_, index) => (
          <BestSellerCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller