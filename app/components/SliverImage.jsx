import React from 'react'
import sliderimage from '../../public/sliderimage.png'
import Image from 'next/image'

const SliverImage = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
          <Image 
            src={sliderimage} 
            alt="sliderimage" 
            fill
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-[#07070C] font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
            Unlock more information now by Upgrade to PRO
          </h2>
          <button className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SliverImage