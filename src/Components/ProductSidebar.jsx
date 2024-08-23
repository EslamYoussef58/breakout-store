import React from 'react'
import Price from './Price'
import Category from './Category'
import Colors from './Colors'



const ProductSidebar = ({handleChange}) => {

  return (
    <div className=" xl:w-[30%] w-full ">
    <div className='border  px-4 py-2 shadow-md rounded-md'>
        <Category handleChange={handleChange} />
        <Price   handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </div>
    </div>
  )
}

export default ProductSidebar