import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { MdOutlineLocalShipping, MdOutlineShoppingCart, MdPayment } from "react-icons/md";
import { PiTShirtThin } from "react-icons/pi";
import { TfiCommentAlt } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/CartSlice";


const ProductDisplay = (props) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const { product } = props;
  return (
    <div className="w-11/12 m-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <img
            className="w-full h-[650px] rounded-md object-cover"
            src={product.img}
            alt=""
          />
        </div>
        <div className="border p-10 rounded-md ">
          <p className="text-2xl font-semibold mb-3 text-[#a39f9f]">
            Category Name: <span className="pl-2">{product.title}</span>
          </p>
          <span className="text-xl font-semibold  text-[#615f5f]">
            Brand Name: <span className="pl-2">{product.brand}</span>
          </span>
          <p className="mt-4 text-sm text-[#a39f9f]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, id, perspiciatis doloremque sunt libero quis, eveniet
            esse repellat sint quibusdam quo corrupti itaque iure culpa.
          </p>
          <div className="mt-4 flex items-center text-xl ">
            <IoIosStar className="mr-2 text-orange-400" />
            <IoIosStar className="mr-2 text-orange-400" />
            <IoIosStar className="mr-2 text-orange-400" />
            <IoIosStar className="mr-2 text-orange-400" />
            <div className="flex items-center ml-4">
              <p className="pr-4 text-sm text-[#a39f9f]">4.0</p>
              <TfiCommentAlt className="text-sm text-[#a39f9f]" />
              <span className="text-sm ml-4 text-[#a39f9f]">255 comments</span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="mr-4 font-medium">Select Size</span>
            <span className="text-sm pr-4">Size Guide</span>
            <FaArrowRightLong className="text-[#a39f9f]" />
          </div>
          <div className="mt-6">
            <span className=" mr-4 border px-3 py-2 rounded-md text-[#a39f9f] cursor-pointer">
              XS
            </span>
            <span className="mr-4 border px-3  py-2 rounded-md text-[#a39f9f] cursor-pointer">
              S
            </span>
            <span className="mr-4 border px-3 py-2 rounded-md text-[#a39f9f] cursor-pointer">
              M
            </span>
            <span className="mr-4 border px-3 py-2 rounded-md text-[#a39f9f] cursor-pointer">
              L
            </span>
            <span className="mr-4 border px-3 py-2 rounded-md text-[#a39f9f] cursor-pointer">
              XL
            </span>
          </div>
          <div className="mt-8">
          <h4 className="font-medium ">Colors Available</h4>
          <div className="mt-3 flex gap-4 cursor-pointer ">
            <h4 className="w-[20px] h-[20px] rounded-full bg-black"></h4>
            <h4 className="w-[20px] h-[20px] rounded-full bg-blue-700"></h4>
            <h4 className="w-[20px] h-[20px] rounded-full bg-yellow-400"></h4>
            <h4 className="w-[20px] h-[20px] rounded-full bg-red-600"></h4>
          </div>
          </div>
          <div onClick={() => handleAddToCart(product)} className=" flex items-center gap-6 mt-8">
            <Link to='/cart'  className="flex items-center rounded-md cursor-pointer bg-[#00a8a8] py-1 px-5 text-lg text-white hover:transition-y-1 ease-in-out hover:scale-105 duration-300 ">
            <MdOutlineShoppingCart />
            <button    className="pl-2 font-medium"> Add To Cart</button>
            </Link>
            <span className="font-semibold text-lg text-[#a39f9f]">${product.price}</span>
          </div>
          <div className="mt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div className="flex items-center  mt-5">
            <MdPayment  className="mr-2 text-4xl p-2 bg-[#eef4f4] rounded-full text-[#7c7979]"/>
            <span className="text-sm font-medium text-[#a39f9f]">Secure Payment</span>
            </div>
            <div className="flex items-center mt-5">
            <MdOutlineLocalShipping className="mr-2 text-4xl p-2 bg-[#eef4f4] rounded-full text-[#7c7979]"/>
            <span className="text-sm font-medium text-[#a39f9f]">Free Shipping</span>
            </div>
            <div className="flex items-center mt-5">
            <GiReturnArrow className="mr-2 text-4xl p-2 bg-[#eef4f4] rounded-full text-[#7c7979]"/>
            <span className="text-sm font-medium text-[#a39f9f]">Free Shipping & Returns</span>
            </div>
            <div className="flex items-center mt-5">
            <PiTShirtThin className="mr-2 text-4xl p-2 bg-[#eef4f4] rounded-full text-[#7c7979]"/>
            <span className="text-sm font-medium text-[#a39f9f]">Size & fit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
