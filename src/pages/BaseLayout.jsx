import React from 'react'
import { Navbar } from './layout/Navbar'
import { Banner } from './layout/Banner'
import { Footer } from './layout/Footer'
import { Whatsapp } from './layout/Whatsapp'
export const BaseLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      <main className='min-h-[100vh]'>
        {children}
      </main>
      <Whatsapp />
      <Footer />


    </>
  )
}


