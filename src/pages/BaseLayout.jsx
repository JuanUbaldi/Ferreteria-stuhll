import React from 'react'
import { Navbar } from './layout/Navbar'
import { Banner } from './layout/Banner'
import { Footer } from './layout/Footer'
import { Whatsapp } from './layout/Whatsapp'
export const BaseLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      <Banner />
      <Whatsapp />
      <main>

        {children}
      </main>
      <Footer />


    </>
  )
}


