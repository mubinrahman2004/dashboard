// import React from 'react'
// import BestSellerCard from '../allcard/BestSellerCard'

// const BestSeller = () => {
//   return (
//     <div className="w-full">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Best Sellers</h2>
//         <div className="flex gap-3">
//           <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 border border-gray-300 rounded-lg hover:border-blue-600">
//             Sales report
//           </button>
//           <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 border border-gray-300 rounded-lg hover:border-blue-600">
//             Export report
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-3">
//         {[...Array(6)].map((_, index) => (
//           <BestSellerCard key={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BestSeller
import React from 'react'
import BestSellerCard from '../allcard/BestSellerCard'

const BestSeller = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          Best Sellers
        </h2>
        <div className="flex gap-2 sm:gap-3">
          <button className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-600 bg-white">
            Sales report
          </button>
          <button className="text-xs  sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-600 bg-white">
            Export report
          </button>
        </div>
      </div>

      {/* Best Seller Cards */}
      <div className="grid grid-cols-1 gap-3  sm:gap-4 max-h-[500px] overflow-y-auto">
        {[...Array(6)].map((_, index) => (
          <BestSellerCard key={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
        <button className="w-full py-3 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
          View All Products
        </button>
      </div>
    </div>
  )
}

export default BestSeller