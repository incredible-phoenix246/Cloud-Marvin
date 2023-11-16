import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section>
      <div className="bg-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Cloud {" "}<span className="text-green-600">Marvin</span>
            </p>
            <div className="flex gap-6 pb-5  text-black ">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-[#D8A717] font-bold text-2xl pb-4">
              Office Hours
            </p>
            <li className="text-gray-500 text-md font-semibold hover:text-[#D8A717] cursor-pointer">
              Mondays to Friday
            </li>
            <li className="text-black texd-md pb-2 font-semibold">
              9:00 am to 6:00 pm
            </li>
           <li className="text-gray-500 text-md font-semibold hover:text-[#D8A717] cursor-pointer">
              Saturday
            </li>
            <li className="text-black texd-md pb-2 font-semibold">
              9:00 am to 12 noon
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#D8A717] cursor-pointer">
              Closed on Sundays
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold hover:text-blue-600 cursor-pointer">
          © Cloud Mavin&rsquo;s Cyber Academy 2023{" "}
          <span>All Rights Revesered </span>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
