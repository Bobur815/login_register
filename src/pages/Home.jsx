import React from 'react'
import homePic from '/home.png'
import Button from '@mui/material/Button';
import Courses from './Courses';


function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center max-lg:flex-col'>
        <div className='flex flex-col gap-8 max-lg:items-center max-lg:text-center'>
          <h1 className='text-3xl sm:text-[45px] lg:text-[60px] font-bold'><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#615DFF] to-[#F11]'>Kelajak kasblarni</span> biz bilan o'rganing!</h1>
          <p className=" text-[14px] md:text-[18px] !dark:text-[#F1F2F4]">Dasturlashni arzon va sifatli o'qib, o'z karyeragizni quring.</p>
          <Button variant='contained' sx={{ borderRadius: 20, paddingX: 4, paddingY: 1, maxWidth: 150 }}>Courses</Button>
        </div>
        <img src={homePic} alt="" />
      </div>
      <Courses />
    </div>
  )
}

export default Home