import React, { useState, useEffect } from 'react'
import avatar from '../images/avatar.jpg' 
import axios from "axios";

const profileAPI = "https://lms-backend-2mm5.onrender.com/user/"


const Profile = () => {
    
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")
    const [profiles, setProfiler] = useState([
      {
        courses: [null],
        dateCreated: null,
        email: null,
        firstName: null,
        lastName: null,
        role: null,
        _id: null
      }
    ])

    const arrayAPI = [];
    
  
    const getProfiler = async() => {
      setLoading(true)
      try {
        const response = await axios.get(profileAPI + "getUserProfile", {
          headers: {
            "Authorization": `bearer ${token}`
          }
        });
        setProfiler(response.data.data)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getProfiler()
    }, [])

arrayAPI.push(profiles)
console.log(arrayAPI)

  return (

    <>
        {
        loading ? (
            <div className='flex items-center justify-center'>
                Fetching profile...
            </div>
    ) : 
     (
        <section className='h-[100%] flex flex-auto justify-between items-start m-[2rem]'>
        {arrayAPI?.map((profiler, index) => {
            console.log(profiles)
            return <div key={index} className="h-[100%] w-[100%] bg-white rounded-3xl flex items-start justify-evenly">
                <div className='mt-[3rem] border-[.125rem]'><img src={ avatar } alt="" className='' /></div>
                <div className='font-semibold text-[2rem] mt-[8rem] space-y-5'>
                    <h1 className='border-[.125rem] border-[#eec009] rounded-2xl'>{profiler.firstName} {profiler.lastName}</h1>
                    <h1 className='border-[.125rem] border-[#5bbab8] rounded-2xl'>{profiler.email}</h1>
                    <h1 className='border-[.125rem] border-[#1062ab] rounded-2xl'>{profiler.role}</h1>
                    <h1 className='border-[.125rem] border-[#353983] rounded-2xl'>{profiler.courses}</h1>
                </div>
            </div>
        })}
        
    </section>
     ) } 
    </>
    
  )
}

export default Profile