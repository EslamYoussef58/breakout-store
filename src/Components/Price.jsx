import React, { useContext, useState } from 'react'

import Input from './Input';

const Price = ({ handleChange }) => {




  return (
    <div>
            <div className="flex items-center justify-between border-y mt-4 pb-4 mb-4">
      <h2 className='text-md font-medium mt-4'>Price</h2>
      </div>

      <label className="flex items-center justify-between gap-10 mb-2 ">
        <span className="font-medium cursor-pointer text-[#807d7e]">All</span>
        <input onChange={handleChange} type="checkbox" value="" name="text2" />
      </label>
      
      <Input
          handleChange={handleChange}
          value={50}
          title="$0.00 - $50.00"
          name="test2"
        />
                <Input
          handleChange={handleChange}
          value={100.00}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150.00}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200.00}
          title="Over $150"
          name="test2"
        />

    </div>
  )
}

export default Price