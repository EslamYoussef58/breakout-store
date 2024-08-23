import React from "react";

const Input = ({ handleChange, value, title, color  }) => {
  return (
    <div>
      <label className="flex items-center justify-between  mb-2 ">
        <span className="font-medium cursor-pointer text-[#807d7e]" style={{ backgroundColor: color }}>{title}</span>
        <input onChange={handleChange} type="checkbox" value={value} name={name}  />
      </label>
    </div>
  );
};

export default Input;
