import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxExternalLink } from "react-icons/rx";

const DashboardCard = () => {
  return (
    <div className="w-full min-h-[110px] sm:min-h-[120px] border border-gray-200 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5">
      <div className="h-full flex flex-col justify-between">
        <h1 className="text-xs sm:text-sm font-normal text-gray-500 mb-2">
          Total sells
        </h1>
        
        <div className="flex justify-between items-center mb-2">
          <h2 className="flex items-center gap-2">
            <RiDeleteBin6Fill className="text-green-600 text-base sm:text-lg" /> 
            <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
              $126.500
            </span>
          </h2>
          <h3 className="flex items-center gap-1 sm:gap-2 text-[#50D1B2] text-xs sm:text-sm font-semibold">
            <RxExternalLink className="text-sm sm:text-base" />34.7%
          </h3>
        </div>
        
        <p className="text-xs text-gray-500 mt-auto">
          Compared to Jan 2022
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;