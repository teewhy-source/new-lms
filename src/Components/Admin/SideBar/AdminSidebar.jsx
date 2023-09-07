import React from "react";
import Logo from "../AdminImages/sail1.png";
import { RiAdminLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { GiBlackBook } from "react-icons/gi";
import { MdApproval } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const location  = useLocation()
  return (
    <div className="flex flex-col bg-[#5bbcb3] bg-opacity-30 shadow-lg shadow-green-700">
      <div className="font-bold mb-[2rem] md:flex w-[12rem]">
        <img src={Logo} alt="" className="h-[6rem] rounded-[5rem]" />
        <h1 className="text-[#08538c] mt-[1.5rem] ml-[0.5rem] text-xl">LMS</h1>
      </div>

      <div className="flex gap-2 bg-opacity-40 mb-[2.5rem] items-center pl-3">
        <RiAdminLine className="h-[2.5rem] w-[2.5rem] text-[#14408b]" />
        <span className="font-bold text-[#14408b] text-[2rem] tracking-wider">
          ADMIN
        </span>
      </div>

      <div className="flex mb-[1rem] items-center pl-3 w-[3rem] h-[2rem]">
        <Link to="/AdminDashBoard">
          <h1 className={`${location.pathname === "/AdminDashBoard" && "bg-[#0769b2] p-10"} font-bold flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 p-[0.4rem] text-[white]`} >
            <RxDashboard /> Dashboard
          </h1>
        </Link>
      </div>

      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover:translate-x-5 hover:rounded-2xl hover:transition-all">
        <Link to="/Instructor">
          <h1 className={`${location.pathname === "/Instructor" && "bg-[#0769b2] p-10"} font-bold flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 p-[0.4rem] text-[white]`} >
            <RxAvatar className="h-[2rem] w-[1.5rem]" /> Instructor
          </h1>
        </Link>
      </div>

      <div className="flex gap-2 items-center mb-[1rem] pl-3 hover:translate-x-5 hover:rounded-2xl hover:transition-all">
        <Link to="/Coursepage">
          <h1 className={`${location.pathname === "/Coursepage" && "bg-[#0769b2] p-10"} font-bold flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 p-[0.4rem] text-[white]`} >
            <GiBlackBook className="h-[2rem] w-[1.5rem]" /> Courses
          </h1>
        </Link>
        
      </div>

      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover:translate-x-5 hover:rounded-2xl hover:transition-all">
        <Link to="/Approved">
          <h1 className={`${location.pathname === "/Approved" && "bg-[#0769b2] p-10"}"font-bold flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 p-[0.4rem] text-[white]`} >
            <MdApproval className="h-[2rem] w-[1.5rem]" /> Approved
          </h1>
        </Link>
      </div>
      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover:translate-x-5 hover:rounded-2xl hover:transition-all">
        <Link to="/Layout">
          <h1 className={`${location.pathname === "/Layout" && "bg-[#0769b2] p-10"}"font-bold flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 p-[0.4rem] text-[white]`} >
            <BiLogOut className="h-[2rem] w-[1.5rem]" />
            Log Out
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
