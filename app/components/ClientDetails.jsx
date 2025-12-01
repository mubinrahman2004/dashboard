// import React from 'react'
// import { FaCalendarAlt } from 'react-icons/fa'
// import { IoIosArrowForward } from 'react-icons/io'
// import SellerProfile from '../client/SellerProfile'
// import Revenue from '../client/Revenue'
// import Chart from '../client/Chart'

// const ClientDetails = ({product}) => {
//   return (
//     <div>
//         <div>
//             <h1>Seller Details</h1>
//            <div className='flex justify-between'>
//              <h2 className='flex items-center gap-2'>Home <IoIosArrowForward />Seller details</h2>
//             <h3 className='flex items-center gap-2'><FaCalendarAlt /> Feb 15, 2022 - Feb 21, 2022</h3>
//            </div>
//            <SellerProfile/>
//            <Revenue/>
//            <Chart/>
           
//         </div>
//     </div>
//   )
// }

// export default ClientDetails
'use client'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import SellerProfile from '../client/SellerProfile'
import Revenue from '../client/Revenue'
import Chart from '../client/Chart'
import RevenueProduct from '../client/RevenueProduct'

const ClientDetails = ({ product }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Seller Details
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="flex items-center gap-2 text-sm md:text-base text-gray-600">
              Home <IoIosArrowForward className="text-xs" /> Seller details
            </h2>
            <h3 className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
              <FaCalendarAlt className="text-purple-600" /> 
              Feb 15, 2022 - Feb 21, 2022
            </h3>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Seller Profile - Full width on mobile, 1/3 on desktop */}
          <div className="lg:col-span-1">
            <SellerProfile />
          </div>
          
          {/* Revenue and Chart - Full width on mobile, 2/3 on desktop */}
          <div className="lg:col-span-2 space-y-6">
            <Revenue />
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              <Chart />
              <RevenueProduct/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDetails