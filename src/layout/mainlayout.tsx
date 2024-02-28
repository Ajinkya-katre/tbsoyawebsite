import React, { Component } from 'react';
import { Outlet,Route } from 'react-router-dom';
// import Footer from '../Component/footer';
import { NavbarDemo } from '../pages/navbar';

function MainLayout() {
  return (
    <div className="page page-dashboard" >
        <NavbarDemo />
        <div className='main'>
            <Outlet />
        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
