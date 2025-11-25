import Image from "next/image";
import React from "react";
import headphone from "../../public/headphone.png";
import { CiStar } from "react-icons/ci";

const SingleProduct = () => {
  return (
    <div className="w-[360px] border border-black" >
      <div className="flex gap-2">
        <Image src={headphone} alt="headphone" />
        <div>
          <p>Cubitt Smart Watch</p>
          <p className="flex gap-2 ">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </p>
          <div className="flex justify-between">
            <p>$576.28</p>

            <p>FROX-13563</p>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque
        ipsum, lacinia et tempor eget, hendrerit et orci. Phasellus at nisi non
        turpis accumsan feugiat vel non arcu. Aliquam ultrices lacus et leo
        ultrices facilisis. Aliquam ullamcorper lectus dui, ac posuere sapien
        iaculis ac.{" "}
      </p>
      <div className="flex justify-between">
        <p>active</p>
        <p>186 / 2058</p>
      </div>
    </div>
  );
};

export default SingleProduct;
