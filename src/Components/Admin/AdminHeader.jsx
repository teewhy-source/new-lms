import React from 'react'
import Avatar from "./AdminImages/avatar.jpg";

const AdminHeader = () => {
  return (
    <div>
       <div className=" justify-between flex h-[5rem]  pt-5 items-center px-[2rem] bg-[white] shadow-md shadow-[grey]">
        <div className="  text-xl  font-bold text-[1.5rem]">Welcome, AdminName</div>
        <div className="w-60 h-11 bg-[#14408b] bg-opacity-25  rounded-xl flex justify-between items-center">
          <img src={Avatar} alt="" className=" h-[2rem]" />
          <span>AdminName</span>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader