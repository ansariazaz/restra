import React from 'react'
import delivery from '../img/delivery.png'
import heroBg from '../img/heroBg.png'
import i1 from '../img/i1.png'
import { heroData } from '../utils/data'




const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start gap-6  justify-center'>
        <div className='flex px-2 py-1 items-center justify-center gap-2 rounded-full bg-orange-100'>
          <p className='text-base text-orange-500 font-semibold' >Bike delivery</p>
          <div className='w-8 h-8 rounded-full bg-white overflow-hidden' >
            <img src={delivery} alt="delivery" className='w-full h-full object-contain' />
          </div>
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam doloribus possimus minus modi doloremque, nulla odio exercitationem repellat magnam! Vero, nemo iusto. Vero quos quia totam dignissimos aliquid recusandae repellendus?
          consectetur fugit, nobis repellendus laboriosam. Corrupti modi perferendis mollitia qui, architecto sit vero dolores?
          Natus minima minus libero voluptatum.</p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={heroBg} alt="herobg" className='ml-auto w-full lg:w-auto h-400 lg:h-650' />
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center gap-4 flex-wrap py-4 lg:px-36'>
          {heroData.map((item) => (
            <div key={item.id} className='lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg '>
              <img src={item.imgSrc} alt="i1" className='w-20 lg:w-40 -mt-10 lg:-mt-20' />
              <p className='text-base lg:text-lg mt-2 font-semibold text-textColor'>{item.name}</p>
              <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-2 '>{item.decp}</p>
              <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer