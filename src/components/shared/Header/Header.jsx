import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
const Header = () => {
    const [openNav,setOpenNav]=useState(false)
    const handleNav=()=>{
      setOpenNav(!openNav)
    }
    return (
        <div>
            
            <nav className="navbar   bg-gray-400 bg-transparent absolute top-0   px-12  flex md:px-24 justify-between ">
  <Link to="/" className=" w-2/6  cursor-pointer">
    <div className="text-lg tracking-wider md:text-xl text-yellow-300 font-bold">Bengal CheF</div>
  </Link>

  <div className=" w-4/6 justify-end md:flex  ">
    <ul className={`flex-col ${openNav ? 'top-16 left-0':'top-16 -left-[800px] '} absolute  py-3 md:py-0  w-full leading-3 md:static   bg-gray-400 bg-transparent bg-opacity-70 z-10  menu flex md:flex-row menu-horizontal text-xs sm:text-base  md:text-lg text-end justify-end  text-white duration-1000`}>
    <li className=''><ActiveLink to='/'>Home</ActiveLink></li>

      <li className=''><ActiveLink to='/blog'>My Blog</ActiveLink></li>
      <li className=''><ActiveLink to='/login'>Login</ActiveLink></li>
      
    </ul>
    
  </div>
  <div  onClick={handleNav} className='md:hidden cursor-pointer' >
    {
      openNav ? <XMarkIcon className='w-12 h-12  text-white'></XMarkIcon>  : <Bars3BottomRightIcon className='w-12 h-12 text-white'/>
    }
    
  </div>
</nav>
        </div>
    );
};

export default Header;