import React from 'react'
import { FaCalendarAlt, FaChevronRight, FaFilter, FaSearch } from 'react-icons/fa'

const ClientList = () => {
  return (
    <div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      {/* Breadcrumb and Date Range */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Customers List</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <FaChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">Order List</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600">
          <FaCalendarAlt className="w-4 h-4" />
          <span className="text-sm font-medium">Feb 15, 2022 - Feb 21, 2022</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search and Category */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
            <option>All Category</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Computers</option>
          </select>
        </div>

        {/* Date, Status, and Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="10-02-2021" 
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full sm:w-40"
            />
          </div>
          
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white w-full sm:w-32">
            <option>Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Canceled</option>
          </select>
          
          <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <FaFilter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClientList