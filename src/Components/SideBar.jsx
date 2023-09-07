import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsBook } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { BiBookAdd } from 'react-icons/bi';
import sail1 from '../images/sail1.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col w-[100%] md:w-[15rem] items-center bg-[#5bbcb3] bg-opacity-30 shadow-lg shadow-green-700'>
      <div className="text-white text-xl font-bold mb-4 md:mb-0 flex w-[10rem]">
        <img src={sail1} alt="" className="h-[6rem] rounded-[5rem]" />
        <h1 className="text-[#08538c] mt-[1.5rem] ml-[0.5rem]">LMS</h1>
      </div>
      <h1 className='font-bold mt-[2rem] mr-[2rem] flex items-center justify-around gap-[0.3rem] cursor-pointer border-1 bg-[#14408b] p-[0.4rem] text-[white]'> <RxDashboard /> Dashboard</h1>

      <div className='mt-[2rem] flex flex-col gap-[2rem] font-semibold cursor-pointer mr-[3rem] text-[#14408b]'>
        <Link to="/Display/profile" className={`${location.pathname === "/Display/profile" && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all`}> <CgProfile /> Profile</Link>
        <Link to="/Display/CourseUpload" className={`${location.pathname === '/Display/CourseUpload' && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all`} > <BiBookAdd /> Add Course</Link>
        <Link to="/Display/Courses" className={`${location.pathname === "/Display/Courses" && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all` } > <BsBook /> Courses</Link>
        <Link to="/Display/PageNotFound" className={`${location.pathname === "/Display/PageNotFound" && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all` } > <FaAward /> Awards</Link>
        <Link to="/Display/PageNotFound" className={`${location.pathname === "/Display/PageNotFound" && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all` } > <MdQuiz /> Quizzes</Link>
        <Link to="/PageNotFound" className={`${location.pathname === "/Display/PageNotFound"&& "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all` } > <FiSettings /> Settings</Link>
        <Link to="/" className={`${location.pathname === "/Display/PageNotFound" && "bg-[#0769b2] p-10"} flex flex-row items-center justify-around gap-[0.2rem] hover:bg-gradient-to-r from-[white] via-[grey] to-[yellow] p-[0.4rem] hover:translate-x-5 hover:rounded-2xl hover:transition-all'` } > <BiLogOut /> Log Out</Link>
      </div>
    </div>
  );
}

export default SideBar;
