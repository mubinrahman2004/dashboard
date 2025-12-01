"use client";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillProduct, AiOutlineTransaction } from "react-icons/ai";
import { TbMessageShare } from "react-icons/tb";
import { MdOutlinePayment, MdPeople } from "react-icons/md";
import Image from "next/image";
import avatar from "../../../public/Avatar1.png";
import avatar2 from "../../../public/Avatar2.png";
import avatar3 from "../../../public/Avatar3.png";
import avatar4 from "../../../public/Avatar4.png";
import avatar5 from "../../../public/Avatar5.png";
import SliverImage from "../SliverImage";
import { IoBagAddSharp } from "react-icons/io5";


export default function Slider() {
  return (
    <>
      <div
        style={{
          width: "250px",
          background: "#fff",
          height: "100vh",
          borderRight: "1px solid #ddd",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

        <ul style={{ listStyle: "none", padding: 0 }} className=" ">
          <li className="">
            <Link href="/">
              <span className="flex items-center gap-2 text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <FaFacebookMessenger />{" "}
                <p className="text-base font-semibold font-sans ">Dashboard</p>
              </span>
            </Link>
          </li>
          <br />
          <li>
            <Link href="/products">
              <span className="flex items-center gap-2  text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <AiFillProduct /> <p className="text-base">Products</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/order">
              <span className="flex items-center gap-2   text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <TbMessageShare />
                <p className="text-base">order</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              {" "}
              <span className="flex items-center gap-2  text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <MdOutlinePayment />
                <p className="text-base">payment</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Transactions">
              <span className="flex items-center gap-2   text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <AiOutlineTransaction />
                <p className="text-base">Transactions</p>
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link href="/client">
              <span className="flex items-center gap-2  text-gray-500 hover:text-white hover:bg-[#7364DB] px-3 py-4 rounded-2xl transition duration-400">
                <MdPeople />
                <p className="text-base">client</p>
              </span>{" "}
            </Link>
          </li>
        </ul>
        <div>
          <h1 className="text-base font-semibold text-[#07070C] py-5">Categories</h1>
          <h2 className="flex justify-between py-2">
           <span className="text-base font-medium font-sans text-[#7E7E8F] "> Laptops</span>
            <span className="bg-amber-300 px-2  py-1 rounded-2xl">8</span>
          </h2>
          <h2 className="flex justify-between py-2">
            <span className="text-base font-medium font-sans text-[#7E7E8F]">Mobile phone</span>
            <span className="bg-amber-600 px-2  py-1 rounded-2xl">6</span>
          </h2>
          <h2 className="flex justify-between"><span className="text-base font-medium font-sans text-[#7E7E8F]">Desktops</span> </h2>
          <h2 className="flex justify-between py-2">
            <span className="text-base font-medium font-sans text-[#7E7E8F]">Accessories</span>
            <span className="bg-emerald-600 px-2  py-1 rounded-2xl">5</span>
          </h2>
          <h2 className="flex justify-between py-2">
           <span className="text-base font-medium font-sans text-[#7E7E8F]"> Portable storage</span>
            <span className="bg-amber-300 px-2  py-1 rounded-2xl">9</span>
          </h2>
          <h2 className="text-base font-medium font-sans text-[#7E7E8F]"> Networking </h2>
          <h3 className="flex items-center gap-2 py-5"> <IoBagAddSharp /><span className="text-base text-[#07070C] font-semibold font-sans">Add category</span></h3>
          <div>
            <h2 className="text-2xl text-[#07070C] font-semibold font-sans py-5">Top Sellers</h2>
            <div className="flex pb-6">
              <Image src={avatar} alt="avatar1" />
              <Image src={avatar2} alt="avatar2" />
              <Image src={avatar3} alt="avatar3" />
              <Image src={avatar4} alt="avatar4" />
              <Image src={avatar5} alt="avatar5" />
            </div>
          </div>
          <div className="py-5"><SliverImage /></div>
        </div>
      </div>
    </>
  );
}
