import React, { useState, useEffect } from 'react';
import avatar from '../images/avatar.jpg';
import axios from 'axios';

const profileAPI = 'https://lms-backend-2mm5.onrender.com/user/';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [profiles, setProfiles] = useState([
    {
      courses: [null],
      dateCreated: null,
      email: null,
      firstName: null,
      lastName: null,
      role: null,
      _id: null,
    },
  ]);

  const arrayAPI = [];

  const getProfiles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(profileAPI + 'getUserProfile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfiles(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  arrayAPI.push(profiles);

  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center'>
          Fetching profile...
        </div>
      ) : (
        <section className='flex flex-col md:flex-row justify-center items-center m-2'>
          {arrayAPI?.map((profiler, index) => (
            <div
              key={index}
              className='w-full md:w-[30%] bg-white rounded-3xl flex flex-col items-center justify-center md:mr-4 mb-4'
            >
              <div className='mt-3 border-[.125rem]'>
                <img src={avatar} alt='' className='' />
              </div>
              <div className='font-semibold text-[2rem] mt-8 space-y-5 text-center md:text-left'>
                <h1 className='border-[.125rem] border-[#eec009] rounded-2xl p-2'>
                  {profiler.firstName} {profiler.lastName}
                </h1>
                <h1 className='border-[.125rem] border-[#5bbab8] rounded-2xl p-2'>
                  {profiler.email}
                </h1>
                <h1 className='border-[.125rem] border-[#1062ab] rounded-2xl p-2'>
                  {profiler.role}
                </h1>
                <h1 className='border-[.125rem] border-[#353983] rounded-2xl p-2'>
                  {profiler.courses}
                </h1>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Profile;
