import React, { Component } from 'react';
import { Outlet,Route } from 'react-router-dom';
import Footer from '../components/ui/footer';
import Navbarmenu from '../components/ui/navbar-menu';

function MainLayout() {
  return (
    <div className="page page-dashboard" >
        <Navbarmenu />
        <div className='main'>
            <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default MainLayout;
