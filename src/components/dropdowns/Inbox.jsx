import React from 'react'
import '../../App.css'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'

const Inbox = (props) => {
  return (
    <>
     <div  className={`${props.isVisible ? 'active' : 'inactive'} px-3 py-4 dropdown-shadow absolute top-20 right-[2rem] z-[100] bg-white rounded-2xl h-auto w-[21.5rem]`}>
      <div className='flex justify-between items-center mb-5'>
        <div></div>
        <p className='text-center font-semibold'>Inbox</p>
        <div className='h-fit w-fit px-2 py-2 hover:bg-gray-200 rounded-[50%]'><HiOutlineDotsHorizontal className="text-2xl"/></div> 
      </div>
       
       <div className='flex w-full relative items-center'>
           <div className='absolute z-50 left-0 h-fit w-fit px-3 py-3 rounded-[50%] cursor-pointer'><BiSearch className='text-2xl text-[var(--iconColor)]'/></div>
           <input  type="search" className='text-sm  placeholder-gray-500 border-nonetext-gray-700  outline-none h-11 w-full border-2 border-gray-300 rounded-3xl pr-3 pl-10' placeholder='Search by name or email'/>
       </div>

       <div className='flex items-center gap-3 mt-4 px-2 hover:bg-gray-100 rounded-xl py-2'>
         <div className='bg-[var(--redColor)] rounded-[50%] px-2 py-2'><TbMessages className='text-3xl text-white'/></div>
         <p>New message</p>
       </div>
     </div>
    </>
  )
}

export default Inbox