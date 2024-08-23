import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
import { men } from '../../data/Data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';


const MenProduct = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };


  return (
    <div className="w-11/12 m-auto mt-20">
    <span className="flex ">
      <h4 className="w-[6px] rounded mt-1 mr-6 h-[35px] bg-[#008080]"></h4>
      <h2 className="mb-10 text-3xl  font-semibold">Categories For Men</h2>
    </span>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
      {men.map((item, index) => (
          <div key={index}>
        <div className="relative h-[393px] shadow-lg rounded-xl overflow-hidden" key={index}>
          <Link to={`/product/${item.id}`}>
          <img className="h-[400px] w-full rounded-xl object-cover hover:transition-y-1 ease-in-out hover:scale-110 duration-500" src={item.img} alt="" />
          </Link>
          <Link to='/cart' className="absolute flex items-center justify-center top-[50px] right-[16px] w-[32px] h-[32px] rounded-full">
          <RiShoppingBag4Line onClick={() => handleAddToCart(item)} className="text-4xl p-[6px] bg-white rounded-full hover:bg-yellow-400 duration-500 hover:text-white" />
          
          </Link>
          </div>
          <div>
              <p className="text-md font-semibold mt-2">{item.title}</p>
              <div className="flex items-center justify-between">
                  <span className="text-[#807d7e] ">{item.brand}</span>
                  <span className="text-md font-semibold ">${item.price}</span>
              </div>
          </div>
          </div>
      ))}
    </div>
  </div>
  )
}

export default MenProduct