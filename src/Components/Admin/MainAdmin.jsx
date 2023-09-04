import React from 'react'
import Courses from '../pages/Courses'
import Approved from '../pages/Approved'
import AdminDashBoard from './AdminPages/AdminDashBoard'
import AdminInstructor from './AdminPages/AdminInstructor'

const MainAdmin= () => {
  return (
    <div>
        <AdminDashBoard/>
      <AdminInstructor/>
      <Courses/>
      <Approved/>
    </div>
  );
};

export default MainAdmin;

