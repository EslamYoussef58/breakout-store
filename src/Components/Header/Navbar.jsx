import React from "react";
import Header from "./Header";
import {  NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <>
      <Header />
      <div className="m-auto mt-5 w-11/12">
        <div>
          <div className="hidden md:flex items-center bg-[#3c4242] text-white py-4  rounded-md font-medium border-b-[#008080] justify-center gap-12">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/shop'>Shop</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
