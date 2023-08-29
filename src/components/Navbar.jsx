import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.png'
import { BiSearch } from 'react-icons/bi'
import { MdNotifications } from 'react-icons/md'
import { BiSolidMessageRoundedDots } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import '../index.css'
import profile from '../images/profile.jpeg'
import HomeDropdown from './dropdowns/HomeDropdown'


const Navbar = () => {
  const [isVisible , setisVisible] = useState(false)
  let menuRef = useRef(); 
  useEffect(()=>{
    let handler = (e)=>{
      console.log(e)
      if(!menuRef.current.contains(e.target)){
        setisVisible(false);
      }      
    };
    document.addEventListener("mousedown" , handler)
    console.log("sdfsdfsdf");
  } , [])
  return (
    <>
     <div className='h-12 w-screen flex items-center px-4 py-10 bg-slate-100 '>
        <div className='flex items-center gap-2'> 
           <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-3 py-3 rounded-[50%] cursor-pointer'><img src={logo} alt="Pinterest Logo" className='h-8'/></div>
             <div className='flex hover:bg-[var(--hoverColor)] cursor-pointer h-fit w-fit px-3 py-3 rounded-3xl relative'
              onClick={()=>{setisVisible(!isVisible)}}
             >
                <li>Home</li>
                <MdOutlineKeyboardArrowDown className='text-2xl'/>
                <HomeDropdown isVisible={isVisible} menuRef={menuRef}/>
             </div>
        </div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-3 py-3 rounded-[50%] cursor-pointer'><BiSearch className='text-2xl text-[var(--iconColor)]'/></div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'><MdNotifications className='text-3xl text-[var(--iconColor)]'/></div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'><BiSolidMessageRoundedDots className='text-3xl text-[var(--iconColor)]'/></div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'><img src={profile} alt="User Profile" className='h-8 rounded-[50%]' /></div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-[2px] py-[2px] rounded-[50%] cursor-pointer'><MdOutlineKeyboardArrowDown className='text-3xl text-[var(--iconColor)]'/></div>
     </div>
    </>
  )
}

export default Navbar