'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Logo.png'
import { TbBrowserMaximize } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch, CiBellOn } from "react-icons/ci";
import avater from '../../public/avatar.png'

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* Left Section - Logo & Browse */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image 
                src={logo} 
                alt='Company Logo' 
                className="h-8 w-auto sm:h-9 lg:h-10"
                priority
              />
            </div>

            {/* Browse Button - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <TbBrowserMaximize className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-medium whitespace-nowrap">Browse</span>
            </div>
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='Search products, categories...' 
                className="block w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Section - Icons & User */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <CiSearch className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>

            {/* Icons Container */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              
              {/* Message Icon */}
              <button 
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Messages"
              >
                <MdOutlineMessage className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* Notification Icon */}
              <button 
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Notifications"
              >
                <CiBellOn className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  5
                </span>
              </button>

              {/* User Avatar - Hidden on mobile, visible on sm+ */}
              <div className="hidden sm:flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <Image 
                    src={avater} 
                    alt='User Avatar' 
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-200"
                  />
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                {/* User Name - Hidden on mobile, visible on lg+ */}
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>

              {/* Mobile Avatar Only */}
              <div className="sm:hidden flex items-center">
                <Image 
                  src={avater} 
                  alt='User Avatar' 
                  width={32}
                  height={32}
                  className="w-7 h-7 rounded-full border-2 border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - Full Width */}
        {isSearchOpen && (
          <div className="lg:hidden pb-3 border-t border-gray-200 mt-2 pt-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='Search products, categories...' 
                className="block w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              {/* Close button for mobile search */}
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
hello
    </nav>
  )
}

export default NavBar