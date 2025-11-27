"use client";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillProduct, AiOutlineTransaction } from "react-icons/ai";
import { TbMessageShare } from "react-icons/tb";
import { MdOutlinePayment, MdPeople } from "react-icons/md";

export default function Slider() {
  return (
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
              <FaFacebookMessenger /> <p className="text-base font-semibold font-sans ">Dashboard</p>
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
          <Link href="/Transactions" >
          
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
    </div>
  );
}
