import React from 'react'

export const Banner = ({ title, subtitle, img }) => {
  return (
    <div className='banner flex items-center  mt-[66px]  h-[268px] md:h-[440px]'>

      <div className='flex flex-col px-12 md:gap-4'>
        <h1 className='text-white f-oswald text-xl md:text-6xl'>{title || "AXION CONECT SA"}</h1>
        <p className='text-white f-oswald text-xs md:text-3xl' > {subtitle || "Calidad y constancia en el mercado electrico"}</p>
      </div>


      <div className={` ${img || 'base-image'} w-[150px] h-[150px]  ml-auto mt-5 md:mt-10 xl:mt-0 md:w-[350px] md:h-[350px] lg:pr-[35%] `} />




    </div>
  )
}
