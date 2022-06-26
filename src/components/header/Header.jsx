import React from 'react'
import logo from '../../img/logo.png'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import avatar from '../../img/avatar.png';
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../firebase.config'

const Header = () => {
   const firebaseAuth = getAuth(app)
   const provider = new GoogleAuthProvider()
  const login = async()=>{
    const response = await signInWithPopup(firebaseAuth,provider)
    console.log(response)
  }
  return (
    <header className="w-screen fixed z-50  p-6 px-16">
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full justify-between '>
        <Link to={"/"} className='flex items-center  gap-2'>
          <img src={logo} alt="logo" className='w-8 object-cover' />
          <p className="text-headingColor text-xl font-bold ">City</p>
        </Link>
        <div className='flex items-center justify-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Services</li>
          </ul>
          <div className='relative cursor-pointer'>
            <MdShoppingCart className=' text-textColor text-2xl cursor-pointer' />
            <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center'>
              <p className='text-xs text-white font-semibold'>5</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }} src={avatar} alt="avatar" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer' onClick={login} />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=' flex md:hidden w-full h-full '>

      </div>
    </header>
  )
}

export default Header