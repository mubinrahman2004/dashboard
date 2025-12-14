import React from 'react'
import DashboardCard from '../DashboardCard'
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from 'react-icons/ci';
import Link from 'next/link';


const DashboardItem = () => {
  return (
    <div>
         <div className=" bg-red-50 p-4 md:p-6">
              <div className="w-full  ">
                <div className="mb-6 md:mb-8">
                  <h1 className="text-2xl md:text-3xl   font-bold text-gray-800 mb-2">
                    Dashboard
                  </h1>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
               
                    <p className="flex items-center gap-2 text-sm  md:text-base text-gray-600">
                      <span className='text-base text-[#7E7E8F] hover:text-[#7364DB]'>
                        <Link href={'/'}>Home</Link>
                        </span> <IoIosArrowForward className="text-gray-400" /> Dashboard
                    </p>
                    <p className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CiCalendarDate className="text-lg" /> 
                      Feb 15, 2022 - Feb 21, 2022
                    </p>
                  </div>
                </div>
        
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
