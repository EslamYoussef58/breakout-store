import React from "react";
import { newArrivalData } from "../../data/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className="w-11/12 m-auto mt-10">
      <span className="flex ">
        <h4 className="w-[6px] rounded mt-1 mr-6 h-[35px] bg-[#008080]"></h4>
        <h2 className="mb-10 text-3xl  font-semibold">New Arrival</h2>
      </span>
      <div>
        <Swiper
         slidesPerView={4}
         spaceBetween={10}
         
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           350: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           668: {
             slidesPerView: 3,
               spaceBetween: 40,
           },
           1024: {
             slidesPerView: 5,
             spaceBetween: 50,
           }
           
         }}
        //  navigation={true}
         modules={[Autoplay,  Navigation]}
         className="mySwiper"
        >

        {newArrivalData.map((item, index) => (
            <SwiperSlide className="relative h-[393px] shadow-lg rounded-xl overflow-hidden " key={index}>
                <Link to='/shop'>
                <img className="h-[400px] w-full object-cover rounded-xl hover:transition-y-1 ease-in-out hover:scale-110 duration-500" src={item.img} alt="" />
                </Link>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
