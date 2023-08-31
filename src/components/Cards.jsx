import React from "react";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { FiUpload } from 'react-icons/fi'
import '../App.css'

const Cards = (props) => {
  return (
    <>
      <div className="gallery pb-4 px-2 sm:px-20 m-auto absolute top-[5.2rem]">
        {props.images.slice(0,40).map((dat) => (
          <div className="container" key={dat.id}>
            <img
              key={dat.id}
              src={dat.webformatURL}
              alt={dat.tags}
              className="z-[-10] w-[100%] mb-2 rounded-2xl cursor-pointer"
            />
            <div className=" flex flex-col justify-between  px-4 py-3 middle rounded-2xl h-full w-full bg-[rgba(0,0,0,0.5)] text-center cursor-pointer">
              <div className="flex items-center justify-between">
                 <div className="text-white flex">Profile <MdOutlineKeyboardArrowDown className='text-white text-2xl'/></div>
                 <button className="bg-[var(--redColor)] text-white h-12 w-20 rounded-3xl hover:bg-red-700">Save</button>
              </div>

              <div className="flex w-full gap-2 justify-end">
              <div className="bg-[rgba(218,218,218,0.8)] h-fit w-fit px-2 py-2 rounded-[50%] hover:bg-[rgba(255,255,255,0.8)]"><FiUpload className="text-2xl"/></div>
                <div className="bg-[rgba(218,218,218,0.8)] h-fit w-fit px-2 py-2 rounded-[50%] hover:bg-[rgba(255,255,255,0.8)]"><HiOutlineDotsHorizontal className="text-2xl"/></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
