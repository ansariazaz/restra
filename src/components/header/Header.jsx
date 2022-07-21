import React, { useState } from 'react'
import logo from '../../img/logo.png'
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'
import avatar from '../../img/avatar.png';
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
const Header = () => {
  const firebaseAuth = getAuth(app)
  const [isMenu, setIsMenu] = useState(false);
  const provider = new GoogleAuthProvider()
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()
  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  }
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }
  return (
    <header className="w-screen fixed z-50  p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full justify-between '>
        <Link to={"/"} className='flex items-center  gap-2'>
          <img src={logo} alt="logo" className='w-8 object-cover' />
          <p className="text-headingColor text-xl font-bold ">City</p>
        </Link>
        <div className='flex items-center justify-center gap-8'>
          <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Services</li>
          </motion.ul>
          <div className='relative cursor-pointer' onClick={showCart}>
            <MdShoppingCart className=' text-textColor text-2xl cursor-pointer' />
            {cartItems && cartItems?.length > 0 && (
              <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
            )}
          </div>
          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : avatar} alt="avatar" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' onClick={login} />
            {
              isMenu && (
                <motion.div initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-8888 right-0'>
                  {user && user.email === "ansariazaz1997@gmail.com" && (
                    <Link to={"/createItem"}><p className='px-4 py-2 flex items-center cursor-pointer hover:bg-slate-100 gap-3 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(!isMenu)}>New Item<MdAdd /></p></Link>
                  )}
                  <p className='px-4 py-2 flex items-center cursor-pointer hover:bg-slate-100 gap-3 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout<MdLogout /></p>
                </motion.div>
              )
            }
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=' flex md:hidden w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center  gap-2'>
          <img src={logo} alt="logo" className='w-8 object-cover' />
          <p className="text-headingColor text-xl font-bold ">City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <div className='relative cursor-pointer' onClick={showCart}>
            <MdShoppingCart className=' text-textColor text-2xl cursor-pointer' />
            {cartItems && cartItems?.length > 0 && (
              <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
            )}
          </div>
          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : avatar} alt="avatar" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' onClick={login} />
            {
              isMenu && (
                <motion.div initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0'>
                  {user && user.email === "ansariazaz1997@gmail.com" && (
                    <Link to={"/createItem"}><p className='px-4 py-2 flex items-center cursor-pointer hover:bg-slate-100 gap-3 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(!isMenu)}>New Item<MdAdd /></p></Link>
                  )}
                  <ul className='flex  flex-col '>
                    <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out' onClick={() => setIsMenu(!isMenu)}>Home</li>
                    <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out' onClick={() => setIsMenu(!isMenu)}>Menu</li>
                    <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out' onClick={() => setIsMenu(!isMenu)}>About Us</li>
                    <li className='text-base text-textColor px-4 py-2 hover:bg-slate-100 hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out' onClick={() => setIsMenu(!isMenu)}>Services</li>
                  </ul>
                  <p className='m-2 p-2 rou rounded-md shadow-lg bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-slate-300 gap-3 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout<MdLogout /></p>
                </motion.div>
              )
            }
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header