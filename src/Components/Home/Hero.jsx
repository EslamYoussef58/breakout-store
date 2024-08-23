import React from "react";
import { heroData } from "../../data/Data";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-11/12 m-auto mt-10">
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-[30px]">
        {heroData.map((item, index) => (
          <div className="relative" key={index}>
            <div className="shadow-xl">
            <img className='h-[350px] w-full rounded-lg ' src={item.img} alt="" />
            <div className="py-[60px] px-[28px] absolute top-0 left-0 max-w-[400px] w-full h-full">
                <p className="text-white text-2xl font-semibold mb-10">{item.topText}</p>
                <h3 className="text-xl text-white uppercase font-bold">{item.text}</h3>
                <Link>
                <button className="absolute bottom-12 text-white text-lg uppercase rounded-md bg-black py-2 px-4">{item.btn}</button>
                </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
