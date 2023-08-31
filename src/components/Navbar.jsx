import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.png'
import { BiSearch } from 'react-icons/bi'
import { MdNotifications } from 'react-icons/md'
import { BiSolidMessageRoundedDots } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import '../index.css'
import profile from '../images/profile.jpeg'
import HomeDropdown from './dropdowns/HomeDropdown'
import Notifications from './dropdowns/Notifications'
import Inbox from './dropdowns/Inbox'
import Accounts from './dropdowns/Accounts'

const Navbar = (props) => {
  
  const [isVisible , setisVisible] = useState(false)
  const [notiVisible , setnotiVisible] = useState(false)
  const [inboxVisible , setinboxVisible] = useState(false)
  const [accountsVisible , setaccountsVisible] = useState(false)

  const menuRef = useRef();
  const homeRef = useRef();
  const inboxRef = useRef();
  const accountsRef = useRef();

  // This useEffect checks if user clicked outside the menuRef and if he does then it makes the menu box disappear 
  useEffect(()=>{
    document.addEventListener("click" , handleClickOutsideHome , true)
    document.addEventListener("click" , handleClickOutsideNoti , true)
    document.addEventListener("click" , handleClickOutsideInbox , true)
    document.addEventListener("click" , handleClickOutsideAccounts , true)
  } , [])


  const handleClickOutsideHome = (e) => {
    if(!homeRef.current.contains(e.target)){
      // console.log("CLicked Outside");
      setisVisible(false);
    }
  }

  const handleClickOutsideNoti = (e) => {
    if(!menuRef.current.contains(e.target)){
      setnotiVisible(false);
    }
  }

  const handleClickOutsideInbox = (e) => {
    if(!inboxRef.current.contains(e.target)){
      setinboxVisible(false);
    }
  }

  const handleClickOutsideAccounts = (e) => {
    if(!accountsRef.current.contains(e.target)){
      setaccountsVisible(false);
    }
  }


  const handleClick = () => {
    setisVisible(!isVisible);
  }

  const handleSearch = (e) => {
    if(e.key == "Enter"){
      if(e.target.value === "" || e.target.value === null){
        alert("Empty search request cannot be made")
      }
      else{
        props.handleChange(e);
      }
    }
  }
  const notificationClicked = () => {
    setnotiVisible(!notiVisible);
  }
  const inboxClicked = () => {
    setinboxVisible(!inboxVisible);
  }
  const accountsClicked = () => {
    setaccountsVisible(!accountsVisible);
  }
  return (
    <>
     <div className='h-12 w-screen flex items-center px-4 py-10 fixed z-[100] bg-white'>
        <div className='flex items-center gap-2'> 
           <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-3 rounded-[50%] cursor-pointer'><img src={logo} alt="Pinterest Logo" className='h-8'/></div>
             <div ref={homeRef} className='hidden sm:flex hover:bg-[var(--hoverColor)] cursor-pointer h-fit w-fit px-3 py-3 rounded-3xl relative'
              onClick={handleClick} >
                <li>Home</li>
                <MdOutlineKeyboardArrowDown className='text-2xl'/>
                <HomeDropdown isVisible={isVisible}/>
             </div>
        </div>
        <div className='flex w-40 sm:w-6/12 md:w-3/6 lg:w-9/12 relative items-center ml-2 mr-2'>
           <div className='absolute z-50 left-0 h-fit w-fit px-3 py-3 rounded-[50%] cursor-pointer'><BiSearch className='text-2xl text-[var(--iconColor)]'/></div>
           <input onKeyPress={handleSearch} type="search" className='placeholder-gray-600 border-nonetext-gray-700 text-base outline-none h-11 w-full rounded-3xl bg-[rgb(225,225,225)] pr-3 pl-10' placeholder='Search'/>
        </div>
        <div ref={menuRef} className='relative hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'>
          <MdNotifications onClick={notificationClicked} className='text-3xl text-[var(--iconColor)]'/>
          <Notifications isVisible={notiVisible}/>
        </div>
        <div ref={inboxRef} className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'>
          <BiSolidMessageRoundedDots onClick={inboxClicked} className='text-3xl text-[var(--iconColor)]'/>
          <Inbox isVisible={inboxVisible}/>
        </div>
        <div className='hover:bg-[var(--hoverColor)] h-fit w-fit px-2 py-2 rounded-[50%] cursor-pointer'><img src={profile} alt="User Profile" className='h-8 min-w-8 rounded-[50%]' /></div>
        <div ref={accountsRef} className='hover:bg-[var(--hoverColor)] h-fit w-fit px-[2px] py-[2px] rounded-[50%] cursor-pointer'>
          <MdOutlineKeyboardArrowDown onClick={accountsClicked} className='text-3xl text-[var(--iconColor)]'/>
          <Accounts isVisible={accountsVisible}/>
        </div>
     </div>
    </>
  )
}

export default Navbar