import React from 'react'

function ContactMe() {
  return (
    <div>
        <p className='mb-5 mt-[3rem] md:hidden md:col-start-2 border self-start border-[#33323D] opacity-25 col-end-3 row-start-1 row-end-2'></p>
        <div className='flex flex-col md:flex-row md:mt-5 lg:mt-[5rem] lg:mb-[-10re] items-center text-[#33323D] gap-[2rem]'>
            <p className='text-[40px] font-ibarra-real font-ibarra font-bold'>Interested in doing a project together?</p>
            <p className='hidden md:block w-[50%] border border-[#33323D] opacity-25'></p>
            <button className='uppercase border w-[50%] border-[#33323D] px-5 py-3 grow-1 font-public-sans text-center'>contact me</button>
        </div>
    </div>
  )
}

export default ContactMe