import React, { useState } from 'react'
import { CiHeart, CiMenuBurger } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5'
import Logo from '../../../public/assets/Logoo.png'
import { Link } from 'react-router-dom'
import { LuShoppingBag } from 'react-icons/lu'
import { FaBookReader, FaRegHeart } from 'react-icons/fa'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { BiSolidContact } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'

const Sidebar = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='flex md:hidden relative ' onClick={() => setOpenMenu(!openMenu)}>
        <CiMenuBurger className='text-3xl cursor-pointer  absolute'/>

        {
            openMenu &&  (
                <div className='flex bg-white  h-full fixed top-0 left-0 w-[280px] z-50 shadow-2xl p-[16px] '>
                    <div className="relative ">
                    <IoMdClose  className='absolute right-0 top-4 text-xl  hover:text-[#008080]  border border-black/45 cursor-pointer' />
                        <img className='w-28' src={Logo} alt="" />
                        <div className="flex items-center rounded py-2 px-3 mt-7 border bg-[#f8f7f7] outline-none">
                            <IoSearchOutline className='mr-2 text-[#807d7e]'/>
                            <input className='bg-[#f8f7f7] outline-none' type="text" placeholder='Search' />
                        </div>
                    <ul className='border-t mt-6 '>
                    <Link to='/' className='flex items-center font-semibold gap-4 mt-10 text-md p-2 hover:bg-[#f8f7f7] rounded hover:text-[#008080]'>
                    <IoHomeOutline className='text-xl'/>
                    <li>Home</li>
                    </Link>
                    <Link to='/shop' className='flex items-center font-semibold gap-4 mt-4 text-md p-2 hover:bg-[#f8f7f7] rounded hover:text-[#008080]'>
                    <RiShoppingBasket2Line className='text-xl' />
                    <li>Shop</li>
                    </Link>
                    <Link to='/about' className='flex items-center font-semibold gap-4 mt-4 text-md p-2 hover:bg-[#f8f7f7] rounded hover:text-[#008080]'>
                    <FaBookReader className='text-xl'/>
                   
                    <li>About</li>
                    </Link>
                    <Link to='/cart' className='flex items-center font-semibold gap-4 mt-4 text-md p-2 hover:bg-[#f8f7f7] rounded hover:text-[#008080]'>
                    <LuShoppingBag className='text-xl' />
                    <li>Cart</li>
                    </Link>
                    <Link to='/contact' className='flex items-center font-semibold gap-4 mt-4 text-md p-2 hover:bg-[#f8f7f7] rounded hover:text-[#008080]'>
                    <BiSolidContact  className='text-xl'/>
                    <li>Contact</li>
                    </Link>
                    </ul>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Sidebar