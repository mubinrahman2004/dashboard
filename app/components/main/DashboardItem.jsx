import React from 'react'
import DashboardCard from '../DashboardCard'
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from 'react-icons/ci';


const DashboardItem = () => {
  return (
    <div>
         <div className=" bg-gray-50 p-4 md:p-6">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Dashboard
                  </h1>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    {/* Breadcrumb */}
                    <p className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                      Home <IoIosArrowForward className="text-gray-400" /> Dashboard
                    </p>
                    <p className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CiCalendarDate className="text-lg" /> 
                      Feb 15, 2022 - Feb 21, 2022
                    </p>
                  </div>
                </div>
        
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                  <DashboardCard />
                </div>
              </div>
            </div>
    </div>
  )
}

export default DashboardItem