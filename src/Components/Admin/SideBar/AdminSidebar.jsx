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
  const location = useLocation()
  console.log(location.pathname);
  return (
    <div className="flex flex-col bg-[#5bbcb3] bg-opacity-30 shadow-lg shadow-green-700">
      <div className="font-bold mb-[2rem] md:flex w-[12rem]">
        <img src={Logo} alt="" className="h-[6rem] rounded-[5rem]" />
        <h1 className="text-[#08538c] mt-[1.5rem] ml-[0.5rem] text-xl">LMS</h1>
      </div>

      <div className="flex gap-2 bg-opacity-40 mb-[2.5rem] items-center pl-3 ">
        <RiAdminLine className="h-[2.5rem] w-[2.5rem] text-[#14408b]" />
        <span className="font-bold text-[#14408b] text-[2rem] tracking-wider">
          ADMIN
        </span>
      </div>

      <div className="flex mb-[1rem] items-center pl-3 w-[5rem] h-[2rem] flex-row">
        <Link to="/AdminDashBoard">
          <h1 className= {`${location.pathname === "/AdminDashBoard" && "bg-teal-300"}`}>
            <RxDashboard /> Dashboard
          </h1>
        </Link>
      </div>

      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover:bg-[#f2b907]">
        <Link to="/Instructor">
          <h1 className= {`${location.pathname === "/Instructor" && "bg-teal-300 p-10"}`}>
            <RxAvatar className="h-[2rem] w-[1.5rem]" /> Instructor
          </h1>
        </Link>
      </div>

      <div className="flex gap-2 items-center mb-[1rem] pl-3 hover:bg-[#f2b907]">
        <Link to="/Coursepage">
          <h1 className= {`${location.pathname === "/Coursepage" && "bg-teal-300 p-10"}`}>
            <GiBlackBook className="h-[2rem] w-[1.5rem]" /> Courses
          </h1>
        </Link>
      
      </div>

      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover.bg-[#f2b907]">
        <Link to="/Approved">
          <h1 className= {`${location.pathname === "/Approved" && "bg-teal-300 p-10"}`}>
            <MdApproval className="h-[2rem] w-[1.5rem]" /> Approved
          </h1>
        </Link>
      </div>
      <div className="flex gap-2 mb-[1rem] items-center pl-3 hover:bg-[#f2b907]">
        <Link to="/Layout">
          <h1 className= {`${location.pathname === "/Layout" && "bg-teal-300 p-10"}`}>
            <BiLogOut className="h-[2rem] w-[1.5rem]" />
            Log Out
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
