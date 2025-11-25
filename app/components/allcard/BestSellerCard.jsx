import Image from "next/image";
import React from "react";
import saller from "../../../public/saller.png";

const BestSellerCard = () => {
  return (
    <div className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-300">
      <Image 
        src={saller} 
        alt="seller" 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex flex-1 justify-between items-center min-w-0">
        <div className="min-w-0">
          <h1 className="text-sm sm:text-base font-semibold text-gray-800 truncate">Esther Howard</h1>
          <p className="text-xs sm:text-sm text-gray-600 truncate">Louis Vuitton</p>
        </div>
        <div className="text-right flex-shrink-0 ml-2">
          <h1 className="text-sm sm:text-base font-bold text-gray-800">$396.84</h1>
          <p className="text-xs text-gray-600">563 sales</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;