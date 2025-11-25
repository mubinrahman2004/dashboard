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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image 
              src={logo} 
              alt='logo' 
              className="h-8 w-auto sm:h-9"
              priority
            />
          </div>

          {/* Browse Button */}
          <div className="hidden sm:flex items-center space-x-1 text-gray-700 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <TbBrowserMaximize className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm font-medium">Browse</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='Search...' 
                className="block w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <CiSearch className="h-5 w-5 text-gray-600" />
            </button>

            {/* Message */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <MdOutlineMessage className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notification */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <CiBellOn className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                5
              </span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center">
              <Image 
                src={avater} 
                alt='avatar' 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder='Search...' 
                className="block w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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