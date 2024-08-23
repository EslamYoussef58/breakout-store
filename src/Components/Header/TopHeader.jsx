import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const TopHeader = () => {
  return (
    <div className='w-11/12 m-auto mt-3 border-b pb-4'>
    <div className="flex items-center justify-between">
      <div className="hidden md:flex items-center gap-2 cursor-pointer text-[26px] text-gray-500 ">
      <FaFacebook className='bg-gray-100 hover:bg-[#008080] hover:text-white rounded p-[4px] hover:transition-y-1 ease-in-out hover:scale-125 duration-700'/>
      <FaXTwitter  className='bg-gray-100 p-[4px] hover:bg-[#008080] hover:text-white rounded hover:transition-y-1 ease-in-out hover:scale-125 duration-700'/>
      <FaInstagram  className='bg-gray-100 p-[4px] hover:bg-[#008080] hover:text-white rounded hover:transition-y-1 ease-in-out hover:scale-125 duration-700'/>
      <FaLinkedin  className='bg-gray-100 p-[4px] hover:bg-[#008080] hover:text-white rounded hover:transition-y-1 ease-in-out hover:scale-125 duration-700'/>
      </div>
      <div className="text-gray-500">
        <p>Free Shipping This Week Order Over - $60</p>
      </div>
      <div className='hidden sm:flex'>
        <select className='cursor-pointer outline-none text-gray-500'>
          <option  value="usd">USD $</option>
          <option value="eur">EUR &euro;</option>
        </select>
        <select className='cursor-pointer outline-none ml-3 text-gray-500'>
        <option value="en-US">English</option>
                <option value="ar">Arabic</option>
                <option value="es-ES">Espa&ntilde;ol</option>
                <option value="fr">Fran&ccedil;ais</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default TopHeader