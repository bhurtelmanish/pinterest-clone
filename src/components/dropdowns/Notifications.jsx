import React, { useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import '../../App.css'
import img from '../../images/notification_img.jpg'

const Notifications = (props) => {
    const [dotBox1 , setdotBox1] = useState(false);
    const [dotBox2 , setdotBox2] = useState(false);
    
    const dotsClicked1 = () =>{
        setdotBox1(!dotBox1);
    }
    const dotsClicked2 = () =>{
        setdotBox2(!dotBox2);
    }
  return (
    <>
     <div className={`${props.isVisible ? 'active' : 'inactive'} px-2 py-4 dropdown-shadow absolute top-16 right-[-11rem] z-[100] bg-white rounded-2xl h-auto w-[22.5rem]`}>
        <p className='text-center mb-5 font-semibold mt-3'>Updates</p>
        <div className='relative noti-section flex gap-5 px-2 py-2 rounded-2xl hover:bg-[var(--hoverColor)]'>
           <div className='mt-2 h-fit w-fit bg-pink-100 px-3 py-3 text-2xl rounded-[50%]'><BiPlus /></div>
           <p className='leading-5 text-gray-700'>What ideas feel so User? <br />Create your first Pin to share <br /> what inspires you. </p>
           <div onClick={dotsClicked1} className="three-dots bg-[rgb(251,251,251)] h-fit w-fit px-1 py-1 rounded-[50%] mt-2  hover:bg-black hover:text-white transition-none"><HiOutlineDotsHorizontal className="text-2xl"/></div> 
           <Dots show={dotBox1}/>
        </div>
        <div className='relative noti-section flex mt-4 gap-5 px-2 py-2 rounded-2xl hover:bg-[var(--hoverColor)]'>
           <img src={img} alt="Notification Image" className='h-12 w-10 rounded-lg'/>
           <p className='leading-5 text-gray-700'>More inspiration based on<br/>  your interest in <strong>cute drawing</strong> </p>
           <div onClick={dotsClicked2} className="three-dots bg-[rgb(251,251,251)] h-fit w-fit px-1 py-1 rounded-[50%] mt-2  hover:bg-black hover:text-white transition-none"><HiOutlineDotsHorizontal className="text-2xl"/></div>
           <Dots show={dotBox2}/>
        </div>
     </div>
    </>
  )
}

const Dots = (props) =>{
    return (
        <>
          <ul className={`${props.show ? 'active' : 'inactive'} z-[200] dropdown-shadow bg-white absolute  rounded-2xl top-10 left-20 w-auto px-2 py-2`}>
             <li className='h-9 rounded-lg flex items-center px-2 hover:bg-[var(--hoverColor)]'>Delete update </li>
             <li className='h-9 rounded-lg flex items-center px-2  hover:bg-[var(--hoverColor)]'>View Notification Settings</li>
          </ul>
        </>
    )
}
export {Dots}

export default Notifications