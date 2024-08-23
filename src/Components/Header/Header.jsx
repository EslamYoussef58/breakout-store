import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import Logo from "../../../public/assets/Logoo.png";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Header = () => {

  const [sticky, setSticky] = useState(false)

  const {cartTotalQuantity} = useSelector(state => state.cart)
 



  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0 )
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <>
      <TopHeader />
      <div className={`w-11/12 m-auto mt-5 border-b pb-5 ${sticky ? "sticky hidden lg:block bg-white top-0 px-5  py-6 md:py-0 z-50" : "" }`}>
        <div className="flex items-center justify-between">
          <div className="mb-7">
          <Sidebar />
          </div>
          <div className="w-[150px] md:w-[200px] mb-4 lg:mb-4 m-auto lg:m-0">
            <Link to='/'>
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="md:flex hidden border py-3  px-3 rounded-2xl relative m-4 lg:m0">
          <IoIosSearch  className="absolute right-3 bottom-4 text-xl text-gray-500"/>
            <input
              className="w-[280px] sm:w-[400px] lg:w-[600px]  outline-none tracking-wide"
              type="text"
              placeholder="Enter Your Product Name"
            />
          </div>
          <div className="items-center flex justify-center text-gray-500 gap-2 text-3xl">
            <Link to='/login'>
            <FaRegUser className="hover:text-[#008080]" />
            </Link>
            <Link to="/cart" className="relative">
              <RiShoppingBag4Line className="hover:text-[#008080]" />
              <span className="absolute flex items-center justify-center text-white -top-3 -right-3 w-[20px] h-[20px] bg-[#008080] text-lg rounded-full">
                {cartTotalQuantity}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
