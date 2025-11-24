'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Logo.png'
import { TbBrowserMaximize } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";


import avater from '../../public/avatar.png'

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <Image 
              src={logo} 
              alt='logo' 
            //   className="w-10 h-10"
          
            />
          </div>

          {/* Browse Button */}
          <div className="ml-6 flex items-center space-x-1 text-gray-700 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
            <TbBrowserMaximize className="h-5 w-5" />
            <span className="text-sm font-medium">browse</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='search...' 
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right side Icons */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Mobile Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <CiSearch className="h-5 w-5 text-gray-600" />
            </button>

            {/* Message Icon */}
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <MdOutlineMessage className="h-5 w-5 text-gray-600" />
            </button>

            {/* Notification Icon */}
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <CiBellOn className="h-5 w-5 text-gray-600" />
            </button>

            {/* Avatar */}
            <div className="flex items-center">
              <Image 
                src={avater} 
                alt='avatar' 
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='search...' 
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar