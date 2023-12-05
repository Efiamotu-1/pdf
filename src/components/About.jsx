import React from 'react'
import User from '../assets/user.png'
import UserFull from '../assets/user-full.png'

function About() {
  return (
    <>
    <div className='mt-[5rem] md:grid md:grid-cols-[1.7fr_2fr] md:grid-rows-[0.1fr_2fr] text-[#33323D] font-ibarra gap-[2rem]'> 
        <img src={User} className='md:hidden bg-green-500'/>
        <img src={UserFull} className='hidden md:flex bg-red-500 row-span-full'/>
    <p className='mb-5 mt-[3rem] md:m-0 md:col-start-2 border self-start border-[#33323D] opacity-25 col-end-3 row-start-1 row-end-2'></p>
        <div className='flex flex-col gap-5 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3'>
        <p className='font-bold text-[40px]'>About Me</p>
        <p className='text-[16px] font-public-sans leading-[30px]'>I’m a junior front-end developer looking for a new role in an exciting company. 
            I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
            When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
            I’m based in London, UK, but I’m happy working remotely and have experience in remote teams.
             When I’m not coding, you’ll find me outdoors. 
            I love being out in nature whether that’s going for a walk, run or cycling. 
            I’d love you to check out my work.</p>
            <button className='uppercase border border-[#33323D] self-start px-5 py-3 font-public-sans'>go to portfolio</button>
        </div>
    </div>

    
    </>
  )
}

export default About