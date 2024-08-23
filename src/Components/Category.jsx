import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import Input from "./Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-lg font-medium">Filter</h2>
        <IoFilterSharp className="text-lg" />
      </div>
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-md font-medium ">Category</h2>
      </div>

      <label className="flex items-center justify-between gap-10 mb-2 ">
        <span className="font-medium cursor-pointer text-[#807d7e]">All</span>
        <input onChange={handleChange} type="checkbox" value='' name="text" />
      </label>

      <Input
        handleChange={handleChange}
        value="Jacket"
        title="Jacket"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="T-Shirt"
        title="T-Shirt"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Plain T-Shirts"
        title="Plain T-Shirts"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Hoodies & Sweatshirt"
        title="Hoodies & Sweatshirt"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Winter Coat"
        title="Winter Coat"
        name="test"
      />
            <Input
        handleChange={handleChange}
        value="Jeans"
        title="Jeans"
        name="test"
      />
            <Input
        handleChange={handleChange}
        value="Short Skirt"
        title="Short Skirt"
        name="test"
      />
                  <Input
        handleChange={handleChange}
        value="Waterproof Jacket"
        title="Waterproof Jacket"
        name="test"
      />
                        <Input
        handleChange={handleChange}
        value="Short"
        title="Short"
        name="test"
      />
    </div>
  );
};

export default Category;
