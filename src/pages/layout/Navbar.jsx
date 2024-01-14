import React from 'react'
import { useState } from 'react'

export const Navbar = () => {

  const [desktopMenuActivated, setDesktopMenuActivated] = useState(false)

  function handleMenu() {
    setDesktopMenuActivated(prev => !prev)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#D2D1D3] h-[67px] ">
      <div className="h-full flex  items-center justify-between  mx-auto p-4 lg:px-12">

        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./layout/logo.png" className="mix-blend-difference " alt="logo" />
        </a>

        <div className='hidden md:flex md:flex-col gap-1 f-montserrat text-xs' >
          <p className='flex items-center'>
            <span className='icon-phone p-3 mr-2'></span>
            Telefono: (+54 11) 4551-3550
          </p>
          <p className='flex items-center'>
            <span className='icon-mail p-3 mr-2'></span>
            Mail: ventas@stuhll.com.ar
          </p>
        </div>



        <div className="hidden w-full md:block md:w-auto" >
          <ul className="flex flex-col lg:gap-[40px] lg:text-lg p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  f-montserrat font-medium">
            <li>
              <a href='#' className=" hover:underline focus:font-semibold" onClick={handleMenu}>Productos</a>
            </li>
            <li>
              <a href="/nosotros" className=" hover:underline focus:font-semibold whitespace-nowrap">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/trabajos" className=" hover:underline focus:font-semibold whitespace-nowrap">Trabajos Especiales</a>
            </li>
            <li>
              <a href="/catalogo" className=" hover:underline focus:font-semibold whitespace-nowrap">Catalogo</a>
            </li>
          </ul>
        </div>

        {desktopMenuActivated && <DesktopMenu />}



        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden  " >
          <span className="sr-only">Open main menu</span>
          <svg className="w-7 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

      </div>
    </nav >
  )
}





function DesktopMenu() {
  return (
    <div className="hidden md:flex justify-center  absolute top-[67px]  right-0 bg-[#D2D1D3] h-[85px] w-[100vw]" >
      <ul className="flex   items-center lg:gap-[50px] lg:text-lg      f-montserrat font-semibold">
        <li>
          <a href="/schuko" className=" hover:underline " >Linea Schuko</a>
        </li>
        <li>
          <a href="/multipolares" className=" hover:underline whitespace-nowrap">Linea Multipolares</a>
        </li>
        <li>
          <a href="/cajas" className=" hover:underline whitespace-nowrap">Linea Cajas</a>
        </li>
        <li>
          <a href="/bases" className=" hover:underline  whitespace-nowrap">Bases Multiples</a>
        </li>

        <li>
          <a href="/steko" className=" hover:underline whitespace-nowrap">Linea Steko</a>
        </li>
        <li>
          <a href="/soldadura" className=" hover:underline whitespace-nowrap">Conector Soldadura</a>
        </li>
      </ul>
    </div>
  )
}
