import React from 'react'


const Products = ({result}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-[20px] gap-y-[20px]'>
        {result}
    </div>
  )
}

export default Products