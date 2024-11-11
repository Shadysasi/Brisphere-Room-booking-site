import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [showMenu,setShowMenu]=useState("true")
  return (
    <header className='p-4'>
      <div className='container flex justify-between items-center'>
        <a href='/#' className='font-sans font-bold text-lg'>Brisphere</a>
        <nav className='hidden md:block font-semibold'>
          <a href='#discover' className='mr-4'>Discover</a>
          <a href='#services' className='mr-4'>Services</a>
          <a href='#about'>About Us</a>
        </nav>
        <nav className='md:hidden'>
          <button onClick={()=>setShowMenu(!showMenu)}>
            <GiHamburgerMenu size={18}/>
          </button>
        </nav>
      </div>
      {!showMenu && (
        <div className='flex justify-end'>
          <div className='flex flex-col'>
            <a href='#discover' className='mr-4'>Discover</a>
            <a href='#services' className='mr-4'>Services</a>
            <a href='#about'>About Us</a>
          </div>
        </div>
        )}  
    </header>
  )
}

export default Header