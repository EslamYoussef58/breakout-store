import React from "react";
import img_1 from "../../../public/assets/testimonial-2.jpg";
import img_2 from "../../../public/assets/quote-left.png";
import img_3 from '../../../public/assets/ser.jfif'
import { IoMdCall } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { LuShip } from "react-icons/lu";


const Services = () => {
  return (
    <div className="w-11/12 m-auto mt-10">
      <span className="flex ">
        <h4 className="w-[6px] rounded mt-1 mr-6 h-[35px] bg-[#008080]"></h4>
        <h2 className="mb-10 text-3xl  font-semibold">Our Services</h2>
      </span>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 mb-10 gap-6">
        <div className="border rounded-md py-4 px-10">
          <img className="m-auto rounded-[50%] mb-4" src={img_1} alt="" />
            <div className="text-center">
            <span className="text-xl font-medium">Arthur Richards</span>
          <p className="my-2 font-medium">CEO & Founder</p>
            </div>
          <img className="m-auto" src={img_2} alt="" />
          <p className="text-center mt-2 text-[#807d7e]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            architecto ipsa, eligendi ab quibusdam labore?
          </p>
        </div>
        <div>
            <img className="h-[350px] w-full" src={img_3} alt="" />
        </div>
        <div className="border p-10 rounded-md">
            <div className="flex pl-12 mb-3">
            <IoMdCall className="text-4xl text-[#008080]" />
            <div className="ml-6">
                <span className="text-xl font-medium text-[#575555]">Best Online Support</span>
                <p className="font-medium text-[#807d7e]">Hours: 8AM - 12PM</p>
            </div>
            </div>
            <div className="flex items-center pl-12 mb-3">
            <FaMoneyCheckDollar className="text-4xl text-[#008080]"/>
            <div className="ml-6">
                <span className="text-xl font-medium text-[#575555]">40% money back</span>
                <p className="font-medium text-[#807d7e]">For Order Over $250</p>
            </div>
            </div>
            <div className="flex items-center pl-12 mb-3">
            <GiReturnArrow  className="text-4xl text-[#008080]"/>
            <div className="ml-6">
                <span className="text-xl font-medium text-[#575555]">Return Policy</span>
                <p className="font-medium text-[#807d7e]">Easy & Free Return</p>
            </div>
            </div>
            <div className="flex items-center pl-12 ">
            <LuShip  className="text-4xl text-[#008080]"/>
            <div className="ml-6">
                <span className="text-xl font-medium text-[#575555]">Worldwide Delivery</span>
                <p className="font-medium text-[#807d7e]">For Order Over $250</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
