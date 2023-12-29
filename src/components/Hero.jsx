import React from 'react'
import HeroImg from '../assets/Bitmap.jpg'
import arrowDown from '../assets/arrow-down.png'
function Hero() {
  return (
    <div className='md:grid md:grid-cols-[2.5fr_1fr] md:grid-rows-2 lg:grid-cols-[1.5fr_2fr]'>
            <img className='row-span-full col-span-full' src={HeroImg}/>

            <div className='mt-5 space-y-5 md:px-2  md:grid md:grid-cols-1 md:grid-rows-[1.5fr_1fr] md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 lg:mt-[3rem] bg-white'>
                <p className='text-[40px] leading-[42px] tracking-[-0.357px] font-ibarra md:self-end font-bold text-[#33323D]'>Hey, I’m Habib Efiamotu and I love building beautiful websites</p>
                <div className='md:self-end flex items-center w-[8rem] bg-[#203A4C] px-3 py-1 '>
                 <div>
                    <span className='space-y-[-1.5px]'>
                       <img src={arrowDown}/>     
                       <img src={arrowDown}/>     
                       <img src={arrowDown}/>     
                    </span>    
                </div>   
                <div className='flex w-full justify-center'>
                    <p className='uppercase text-white text-center text-[8px] tracking-[2px] py-2'>about me</p>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Hero