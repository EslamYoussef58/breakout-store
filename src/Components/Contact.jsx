import React from "react";
import { FaMapMarked, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-11/12 m-auto mt-20">
      <h2 className="text-center text-3xl text-[#3c4242] font-bold mb-10">Contact US</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div >
          <span className="text-lg text-gray-400 font-medium ">GET IN TOUCH</span>
          <h5 className="my-4 font-semibold text-lg text-[#3c4242]">
            Visit one of our agency locations or contact us today
          </h5>
          <span className="text-[15px] font-medium text-gray-400">Head Office</span>
          <div className="my-3 flex items-center text-gray-400">
            <FaMapMarked className="mr-3 " />
            Nasr-City, Cairo, Egypt
          </div>
          <div className="my-3 flex items-center text-gray-400">
            <MdEmail className="mr-3" />
            info@breakout.com
          </div>
          <div className="my-3 flex items-center text-gray-400">
            <FaPhoneAlt className="mr-3" />
            +2014 222 000 11
          </div>
          <div className="my-3 flex items-center text-gray-400">
            <FaRegClock className="mr-3" />
            Sunday to Thursday: 10.00am to 18.00pm
          </div>
        </div>
        <div className="ml-0 lg:ml-5 mx-0 lg:mx-4">
          <iframe
            className="w-full h-[400px]"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20nasr%20city%20cairo%20egypt+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </div>
      <div className="border rounded mt-12">
            <form className="p-5">
                <span className="text-[15px] font-medium text-gray-400">LEAVE A MESSAGE</span>
                <h3 className="text-xl my-4 font-semibold text-gray-400">We love to hear from you</h3>
              <div className="flex flex-col">
                <input className="border py-2 px-4 mb-3 rounded" type="text" placeholder="Your Name" />
                <input className="border py-2 px-4 mb-3 rounded" type="text" placeholder="E-mail"/>
                <input className="border py-2 px-4 mb-3 rounded" type="text" placeholder="Subject"/>
                <textarea className="border py-2 px-4 mb-10 rounded h-[200px] " placeholder="Your Message"></textarea>
              </div>
              <Link className="border py-2 px-5 bg-[#3c4242] text-white hover:bg-black text-lg">Submit</Link>
            </form>
          </div>
    </div>
  );
};

export default Contact;
