import React from 'react'
import img_1 from '../../public/assets/app_store.jpg'
import img_2 from '../../public/assets/google_play.jpg'
import img_3 from '../../public/assets/payment.png'





const Footer = () => {
  return (
    <div className='w-full m-auto mt-10 bg-[#383838]'>
        <div className="py-[50px] px-[60px] grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10">
            <div className='flex items-center tracking-wider'>
              <ul className='pt-2 text-white underline underline-offset-4'>
                <p className='text-xl text-white pb-2 font-semibold'>Need Help</p>
                <li className='mb-1'>Contact Us</li>
                <li className='mb-1'>Track Order</li>
                <li className='mb-1'>Returns & Refunds</li>
                <li className='mb-1'>FAQ's</li>
              </ul>
            </div>
            <div className='flex items-center tracking-wider'>
              <ul className='pt-2 text-white underline underline-offset-4'>
                <p className='text-xl text-white pb-2 font-semibold'>Company</p>
                <li className='mb-1'>About Us</li>
                <li className='mb-1'>Arhats Blog</li>
                <li className='mb-1'>Collaboration</li>
                <li className='mb-1'>Media</li>
              </ul>
            </div>
            <div className='flex items-center tracking-wider'>
              <ul className='pt-2 text-white underline underline-offset-4'>
                <p className='text-xl text-white pb-2 font-semibold'>More info</p>
                <li className='mb-1'>Terms and conditions</li>
                <li className='mb-1'>Privacy Policy</li>
                <li className='mb-1'>Shipping Policy</li>
                <li className='mb-1'>Sitemap</li>
              </ul>
            </div>
            <div className='flex items-center tracking-wider'>
              <ul className='pt-2 text-white underline underline-offset-4 '>
                <p className='text-xl text-white pb-2 font-semibold'>Location</p>
                <li className='mb-1'>Support@Breakout.com</li>
                <li className='mb-1'>Nasr City, Makram Ebid</li>
                <li className='mb-1'>Cairo Egypt</li>
                <li className='mb-1'>Phone: +2014 222 000 11</li>
              </ul>
            </div>
            </div>
            <div className=" text-start ml-14 pb-6 mb-4">
              <p className='text-xl text-white font-medium tracking-wide'>Download the App</p>
              <div className="flex items-center gap-6 justify-start mt-4">
              <img className='w-[150px]' src={img_1} alt="" />
              <img className='w-[150px]' src={img_2} alt="" />
              </div>
            </div>
            <div className="border-t pt-8 pb-5 flex items-center justify-center ">
              <img src={img_3} alt="" />
            </div>
              <p className='text-center text-white tracking-wider pb-4'>Copyright © <span className='text-[#008080] text-lg font-semibold '>Breakout</span> all rights reserved.</p>
        </div>

  )
}

export default Footer