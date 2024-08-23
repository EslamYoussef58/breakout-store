import React from "react";
import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-y mt-4 pb-4 mb-4">
        <h2 className="text-md font-medium mt-4">Colors</h2>
      </div>

      <label className="flex items-center justify-between gap-10 mb-2 ">
        <span className="font-medium cursor-pointer text-[#807d7e]">All</span>
        <input onChange={handleChange} type="checkbox" value="" name="text1" />
      </label>

      <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          
        />
           <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
        />
           <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
        />
           <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          
        />
    </div>
  );
};

export default Colors;
