import Image from "next/image";
import React from "react";
import saller from "../../../public/saller.png";

const BestSellerCard = () => {
  return (
    <div className="flex gap-3 border p-3 border-black">
      <Image src={saller} alt="saller w-[100px] h-[100px]" />
     <div className="flex w-full justify-between">
         <div className="text-black">
        <h1>Esther Howard</h1>
        <p>Louis Vuitton</p>
      </div>
      <div>
        <h1 className="text-black">$396.84</h1>
        <p className="text-black">563 sales</p>
      </div>
     </div>
    </div>
  );
};

export default BestSellerCard;
