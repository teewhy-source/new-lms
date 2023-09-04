import React from 'react'
import { Outlet } from 'react-router'
import AdminHeader from './AdminHeader'
import AdminSideBar from './SideBar/AdminSidebar'

const Administrator = () => {
  return (
    <div className=' h-[300svh] grid grid-cols-[15%_1fr] bg-[#f5f5f5] overflow-hidden gap-[1rem]'>
      <AdminSideBar/>
      <div className=' grid grid-rows-[10%_1fr]'>
       <AdminHeader/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Administrator
