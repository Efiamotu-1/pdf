import React from 'react'
import Logo from '../assets/logo.png'


function Header() {
  return (
    <header className='my-3 flex justify-between items-center'>
    <div>
        <img src={Logo}/>
    </div>
    <nav>
        <div className='flex flex-col gap-1 md:hidden'>
            <span className='w-[24px] h-[1px] bg-[#33323D]'></span>
            <span className='w-[24px] h-[1px] bg-[#33323D]'></span>
            <span className='w-[24px] h-[1px] bg-[#33323D]'></span>
        </div>
        <ul className='hidden md:flex gap-[2rem] tracking-[2px] font-public-sans text-[12px] font-normal'>
            <li><a href="">HOME</a></li>
            <li><a href="">PORTFOLIO</a></li>
            <li><a href="">CONTACT ME</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Header