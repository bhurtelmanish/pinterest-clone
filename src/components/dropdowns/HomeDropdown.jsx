import React from 'react'
import '../../App.css'

const HomeDropdown = (props) => {
  return (
    <>
     <ul className={`${props.isVisible ? 'active' : 'inactive'} dropdown-shadow bg-white absolute top-16 right-[-3.3rem]  rounded-2xl w-48 px-2 py-2`}>
        <li className='h-9 rounded-lg flex items-center px-2 hover:bg-[var(--hoverColor)]'>Home</li>
        <li className='h-9 rounded-lg flex items-center px-2  hover:bg-[var(--hoverColor)]'>Create</li>
     </ul>
    </>
  )
}

export default HomeDropdown