import React from 'react'
import image1 from '/galery/img1.png'
import image2 from '/galery/img2.png'
import image3 from '/galery/img3.png'
import image4 from '/galery/img4.png'
import image5 from '/galery/img5.png'
import sert1 from '/galery/guvohnoma-itpark (1).jpg'
import sert2 from '/galery/guvohnoma-itpark.jpg'
import sert3 from '/galery/guvohnoma.jpg'
import Mentors from '../components/Mentors'
import Footer from '../components/Footer'


function About() {
  return (
    <div className='container w-full mt-6 space-y-6'>
      <h1 className='text-5xl font-bold '>Biz haqimizda</h1>
      <p className='leading-8'>
        IT LIVE ACADEMY - 08.09.2022 yil tashkil etilgan va hozirgacha faoliyat olib kelmoqda. IT LIVE ACADEMY kompaniyasining asosiy faoliyat turi ikkiga bo'linadi, -Kelajak kasblariga o'qitish -IT sohasida xizmatlarini yetkazib berish dan iborat. Bizning akademiyamiz axborot texnologiyalarining barcha tendensiyalari bilan yaqindan tanishtiradi. Shinam o‘quv binosi va zamonaviy texnologiyalarga asoslangan kurslar dasturi bilan yurtimizning eng yirik, xalqaro kompaniyalarida IT karyerangizni boshlaysiz.
      </p>
      <h2 className='text-3xl font-bold'>Media galeriya</h2>
      <div className='grid gap-4 sm:gap-5 lg:gap-6
                      grid-cols-1 sm:grid-cols-2
                      lg:grid-cols-12'>
        <GalleryItem src={image1} alt="" className='galleryItem' />
        <GalleryItem src={image2} alt="" className='galleryItem' />
        <GalleryItem src={image3} alt="" className='galleryItem' />
        <GalleryItem src={image4} alt="" className='galleryItem2' />
        <GalleryItem src={image5} alt="" className='galleryItem2' />
      </div>

      <Mentors />
      <Footer />
    </div>
  )
}



function GalleryItem({ src, className = "" }) {
  return (
    <figure className={`relative rounded-2xl overflow-hidden ${className}`}>
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
    </figure>
  );
}

export default About