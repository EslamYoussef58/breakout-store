import React from "react";

import { Link } from "react-router-dom";



const CategoryShop = ({ img, title, price, brand, id }) => {




  return (
    <div className="mt-16 ">
      <div>
        <div className="relative h-[393px] shadow-lg rounded-xl overflow-hidden">
          <Link to={`/product/${id}`}>
          <img className="h-[400px] w-full rounded-xl object-cover hover:transition-y-1 ease-in-out hover:scale-110 duration-500" src={img} alt="" />
          </Link>

        </div>
        <div>
          <p className="text-md font-semibold mt-2">{title}</p>
          <div className="flex items-center justify-between">
            <span className="text-[#807d7e] ">{brand}</span>
            <span className="text-md font-semibold ">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShop;
