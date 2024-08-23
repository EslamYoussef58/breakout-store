import React from 'react'
import Products from './Products'
import Button from './Button'



const Recommended = ({ result, handleClick }) => {
  
  return (
    <div className='w-full ml-0 xl:ml-[40px]'>
        <h2 className='mb-8 font-semibold mt-10 xl:mt-0'>Recommended</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 ">
        <Button  onClickHandler={handleClick}  value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="H&M" title="H&M" />
          <Button onClickHandler={handleClick} value="Zara" title="Zara" />
          <Button onClickHandler={handleClick} value="Pull&bear" title="Pull&bear" />






            {/* <button className='border px-4 py-1 rounded-md font-medium hover:bg-black hover:text-white'>Adidas</button>
            <button className='border px-4 py-1 rounded-md font-medium hover:bg-black hover:text-white'>H&M</button>
            <button className='border px-4 py-1 rounded-md font-medium hover:bg-black hover:text-white'>Zara</button>
            <button className='border px-4 py-1 rounded-md font-medium hover:bg-black hover:text-white'>Pull&bear</button> */}
        </div>
        
          <Products result={result}/>
          
        </div>
    
  )
}

export default Recommended