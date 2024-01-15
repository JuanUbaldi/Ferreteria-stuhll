import React from 'react'

export const Footer = () => {
  return (
    <footer className='relative mt-auto h-[25vh] w-full bg-[#E8E8E9]'>
      <h2 className='absolute left-8 top-[-15px] md:top-[-35px] text-2xl md:text-6xl f-oswald  font-semibold'>CONTACTANOS</h2>
      <section className='flex p-7 md:px-12 md:pt-9'>

        <div className='flex flex-col gap-3 f-montserrat text-xs md:text-lg md:pt-6' >
          <p className='flex items-center'>
            <span className='icon-phone p-3 mr-2'></span>
            Telefono: (+54 11) 4551-3550
          </p>
          <p className='flex items-center'>
            <span className='icon-mail p-3 mr-2'></span>
            Mail: ventas@stuhll.com.ar
          </p>
        </div>

        <ul className='hidden md:flex md:flex-col md:ml-auto gap-4 text-lg f-montserrat font-bold '>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="/nosotros">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/trabajos">Trabajos Especiales</a>
          </li>
          <li>
            <a href="/novedades">Novedades</a>
          </li>
        </ul>

        <div className='flex flex-col items-center px-4 ml-auto md:gap-2 md:pr-36 justify-center'>
          <a href="/" >
            <img src="./layout/logo.png" className="mix-blend-difference scale-150" alt="logo" />
          </a>

          <ul className='flex flex-col md:flex-row items-center  md:items-center gap-1 md:gap-2 mt-4'>
            <li className='mb-2'>
              <a href="facebook">
                <img src="./layout/facebook-icon.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="youtube">
                <img src="./layout/youtube-icon.svg" alt="youtube" />
              </a>
            </li>
            <li className='md:mb-2'>
              <a href="instagram">
                <img src="./layout/instagram-icon.svg" alt="instagram" />
              </a>
            </li>

          </ul>



        </div>

      </section>


    </footer>
  )
}
