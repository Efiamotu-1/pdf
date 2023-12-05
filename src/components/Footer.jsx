import React from 'react'
import Logo from '../assets/footer-logo.png'
import github from '../assets/github.png'
import x from '../assets/x.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <footer className='flex flex-col md:flex-row md:justify-between mt-[5rem] gap-5 items-center bg-[#33323D] p-[3rem] text-white'>
            <div className='flex flex-col items-center md:flex md:flex-row justify-between gap-5'>
            <img src={Logo}/>
            <p className='text-[12px] font-normal tracking-[2px] font-public-sans'>HOME</p>
            <p className='text-[12px] font-normal tracking-[2px] font-public-sans'>PORTFOLIO</p>
            <p className='text-[12px] font-normal tracking-[2px] font-public-sans'>CONTACT ME</p>
            </div>
            <div className='flex gap-3'>
            <img src={github}/>
            <img src={x}/>
            <img src={linkedin}/>
        </div>
    </footer>
  )
}

export default Footer