import React from 'react'
import homePic from '/home.png'
import Button from '@mui/material/Button';
import Courses from './Courses';
import IstalganNuqta from '../components/IstalganNuqta';
import Mentors from '../components/Mentors';
import Comments from '../components/Comments';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='mx-auto'>
      <div className='container flex justify-center items-center max-lg:flex-col'>
        <div className='flex flex-col gap-8 max-lg:items-center max-lg:text-center'>
          <h1 className='text-3xl sm:text-[45px] lg:text-[60px] font-bold'><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#615DFF] to-[#F11]'>Kelajak kasblarni</span> biz bilan o'rganing!</h1>
          <p className=" text-[14px] md:text-[18px] !dark:text-[#F1F2F4]">Dasturlashni arzon va sifatli o'qib, o'z karyeragizni quring.</p>
          <Button variant='contained' sx={{ borderRadius: 20, paddingX: 4, paddingY: 1, maxWidth: 150 }}>Courses</Button>
        </div>
        <img src={homePic} alt="" />
      </div>
      <Courses page={'home'}/>

      {/* Bizga qo'shiling*/}
      <section className='container flex flex-col gap-6 mt-12'>
        <h1 className='text-5xl font-bold '>Bizga qo'shiling</h1>
        <p className='text-[18px]'>Bizning safimizga nafaqat o’rganuvchi balki yetarlicha tajribangiz bo’lsa mentor sifatida ham qo’shilishingiz mumkin.</p>
        <div className='container flex justify-between px-6'>
          <div className='flex flex-col justify-between gap-5 mt-5'>
            <h2 className='text-2xl font-bold'>O'quvchimisiz?</h2>
            <p className='text-[18px]'>Agarda o’quvchi bo’lsangiz bizning xalqaro darajadagi tajribali mentorlarimizga shogird bo’ling</p>
            <Button sx={{borderRadius:2, maxWidth:130, color:'white'}} variant='contained'>Boshlash</Button>
          </div>
          <div className='flex flex-col justify-between gap-5'>
            <h2 className='text-2xl font-bold'>Mentormisiz?</h2>
            <p className='text-[18px]'>Bizning mualliflar jamoamizga qo’shilib, o’z tajribangizni boshqalar bilan oson va qulay platforma orqali ulashing</p>
            <Button sx={{borderRadius:2, maxWidth:130, color:'white'}} variant='contained'>Boshlash</Button>
          </div>
        </div>
      </section>

      {/*Istalgan nuqta */}
      <IstalganNuqta />
      <Mentors />
      <Comments />
      <Footer />
    </div>
  )
}

export default Home