import React, { useState } from 'react'
import { all_product } from '../data/Data'
import { useDispatch } from 'react-redux'
import { RiShoppingBag4Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { addToCart } from './redux/CartSlice'




const SmallProduct = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };


  return (
    <div className='w-11/12 m-auto mt-20'>
              <span className="flex ">
        <h4 className="w-[6px] rounded mt-1 mr-6 h-[35px] bg-[#008080]"></h4>
        <h2 className="mb-10 text-3xl  font-semibold">Categories</h2>
      </span>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
            {all_product.slice(0, 24).map((item,index) => (
            <div key={index}>
            <div className="relative h-[393px] shadow-lg rounded-xl overflow-hidden" key={index}>
              <Link to={`/product/${item.id}`}>
              <img className="h-[400px] w-full object-cover rounded-xl hover:transition-y-1 ease-in-out hover:scale-110 duration-500" src={item.img} alt="" />
              </Link>
              <Link to='/cart' className="absolute flex items-center justify-center top-[50px] right-[16px] w-[32px] h-[32px] rounded-full">
            <RiShoppingBag4Line onClick={() => handleAddToCart(item)} className="text-4xl p-[6px] bg-white rounded-full  hover:bg-yellow-400 hover:text-white duration-500" />
              
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

export default SmallProduct