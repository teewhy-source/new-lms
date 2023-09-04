import React, { useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { Outlet } from 'react-router'

const Display = () => {

  const [pageTitle] = useState("Instructor")
  

  return (
    <div className='h-[100svh] grid grid-cols-[13%_1fr] bg-[#f5f5f5]gap-[1rem]'>
        <SideBar></SideBar>

        <div className='grid grid-rows-[10%_1fr]'>
          <Header pageTitle={pageTitle}></Header>
          <Outlet/>

        </div>

    
    </div>
  
  )
}

export default Display