import React from 'react'
import { useState } from 'react'

export const Navbar = () => {

  const [desktopMenuActivated, setDesktopMenuActivated] = useState(false)
  const [mobileMenuActivated, setMobileMenuActivated] = useState(false)

  function handleMenu() {
    setDesktopMenuActivated(prev => !prev)
  }



  return (
    <nav className="fixed z-50 top-0 w-full bg-[#D2D1D3] h-[67px] ">
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
        <MobileMenu closeFn={() => setMobileMenuActivated(false)} state={mobileMenuActivated} />





        <button onClick={() => setMobileMenuActivated(true)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden  " >
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
    <section className="hidden md:flex justify-center  absolute top-[67px]  right-0 bg-[#D2D1D3] h-[85px] w-[100vw]" >
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
    </section>
  )
}

function MobileMenu({ closeFn, state }) {

  const [subMenu, setSubMenu] = useState(false)

  return (
    <section className={`sidebar ${state && 'open'} md:hidden top-0 z-50   fixed  right-[-500px] h-full w-[50%] `} >

      <div className='flex justify-end p-4'>
        <button onClick={closeFn} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center " >
          <span className="sr-only">Cerrar menu</span>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.72403 21.6524C2.5588 20.527 1.62938 19.1808 0.989991 17.6923C0.350601 16.2039 0.0140489 14.603 -2.76488e-05 12.9831C-0.0141042 11.3632 0.294577 9.75671 0.908003 8.25737C1.52143 6.75804 2.42732 5.39588 3.57281 4.25039C4.7183 3.1049 6.08045 2.19901 7.57979 1.58559C9.07912 0.972158 10.6856 0.663478 12.3055 0.677554C13.9254 0.691631 15.5263 1.02818 17.0148 1.66757C18.5032 2.30696 19.8494 3.23639 20.9748 4.40161C23.1972 6.70256 24.4268 9.7843 24.3991 12.9831C24.3713 16.1819 23.0882 19.2418 20.8262 21.5038C18.5642 23.7658 15.5043 25.0488 12.3055 25.0766C9.10672 25.1044 6.02497 23.8747 3.72403 21.6524ZM14.0574 13.027L17.51 9.57441L15.7898 7.85421L12.3494 11.3068L8.89683 7.85421L7.17663 9.57441L10.6292 13.027L7.17663 16.4796L8.89683 18.1998L12.3494 14.7472L15.802 18.1998L17.5222 16.4796L14.0696 13.027H14.0574Z" fill="white" />
          </svg>
        </button>
      </div>


      <ul className="flex flex-col h-[60%] justify-center gap-[30px] items-center  text-white text-sm   f-montserrat font-bold ">
        <li>
          <a onClick={() => setSubMenu(prev => !prev)} href='#' className=" hover:underline  text-center" >
            Productos
          </a>
        </li>
        <ul className={`${subMenu ? 'submenu' : 'hidden'} submenuclosed flex flex-col gap-[20px] font-medium text-center `}>
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

      <img className='absolute bottom-9 right-9' src="./layout/small-logo.png" alt="small-logo" />


    </section>
  )
}
