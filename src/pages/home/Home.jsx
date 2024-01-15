import React from 'react'
import { Banner } from '../layout/Banner'
import Timeline from '../layout/TimeLine'


export const Home = () => {
  return (
    <>
      <Banner />
      <div className='text-3xl font-black text-black'><Timeline/></div>
      <div></div>
    </>
  )
}
