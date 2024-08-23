import React from 'react'
import { bigsale } from '../../data/Data'
import { FaArrowDown } from 'react-icons/fa'

const BigSale = () => {
  return (
    <div className='w-11/12 m-auto mt-14 '>

        <span className='flex '> 
          <h4 className='w-[6px] rounded mt-1 mr-6 h-[35px] bg-[#008080]'></h4>
      <h2 className='mb-10 text-3xl  font-semibold'>Big Sale</h2>
        </span>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {
          bigsale.map((item,index) => (
            <div className="relative" key={index}>
                <img className='h-[340px] md:w-full w-full object-cover rounded-md' src={item.img} alt="" />
                <div className="absolute top-0 left-0 z-20 py-[32px] px-[24px] w-[230px]">
                  <h4 className='text-white font-semibold text-xl mt-20 my-[14px]'>{item.title}</h4>
                  <p className='mt-[4px] text-white uppercase font-bold text-sm'>{item.description}</p>
                  <div className="mt-[16px] mr-[16px] ml-auto flex items-center text-white justify-center text-xl animate-bounce ">
                  <FaArrowDown  />
                  </div>
                  <button className='ml-7 mt-5 py-2 px-4 border text-md md:text-lg  hover:bg-white hover:text-black bg-transparent uppercase  transition duration-300 ease-in-out text-white rounded-xl font-semibold'>shop now</button>
                </div>
            </div>
          ))
        }
      </div>
        </div>

  )
}

export default BigSale