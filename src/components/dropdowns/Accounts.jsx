import React from 'react'
import '../../App.css'
import profileImg from '../../images/profile.jpeg'
import { menus } from '../Menu'

const Accounts = (props) => {
  return (
    <> 
     <div  className={`${props.isVisible ? 'active' : 'inactive'} px-3 py-4 dropdown-shadow absolute top-20 right-[2rem] z-[100] bg-white rounded-2xl h-auto w-[21.5rem]`}>
        <p className='text-xs text-gray-500 ml-2 mt-1 mb-2'>Currently in</p>

        <div className='flex bg-gray-100 px-2 mb-5 py-3 rounded-xl items-center'>
          <img src={profileImg} alt="User Profile Image" className='h-16 w-16 rounded-[50%]' />
          <div className='ml-2'>
              <p className='font-medium'>Manish Bhurtel</p>
              <p className='text-xs text-gray-500'>Personal</p>
              <p className='text-xs text-gray-500'>manishbhurtel668@gmail.com</p>
          </div>
        </div>

        <p className='text-gray-500 text-xs ml-2 mb-4'>Your accounts</p>
        {menus.map((values)=>(
          <p key={values.id} className='hover:bg-gray-100 font-medium rounded-lg px-2 py-2' >{values.title}</p>
        ))}
     </div>
    </>
  )
}

export default Accounts