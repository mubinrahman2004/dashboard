import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxExternalLink } from "react-icons/rx";

const DashboardCard = () => {
  return (
    <div className="w-full min-h-[120px] border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-4 md:p-6 h-full flex flex-col justify-between">
        {/* Card Header */}
        <h1 className="text-sm md:text-base font-normal text-gray-400 mb-2">
          Total sells
        </h1>
        
        {/* Main Content */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="flex items-center gap-2">
            <RiDeleteBin6Fill className="text-green-600 text-lg" /> 
            <span className="text-lg md:text-xl font-bold text-gray-800">
              $126.500
            </span>
          </h2>
          <h3 className="flex items-center gap-1 md:gap-2 text-[#50D1B2] text-sm md:text-base font-semibold">
            <RxExternalLink className="text-base md:text-lg" />34.7%
          </h3>
        </div>
        
        {/* Footer */}
        <p className="text-xs md:text-sm text-gray-400 mt-auto">
          Compared to Jan 2022
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;