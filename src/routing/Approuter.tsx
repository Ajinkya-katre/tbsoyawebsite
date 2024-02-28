import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../components/ui/home';
import About from '../components/ui/about';
import MainLayout from '../layout/mainlayout';
import Gallery from '../components/ui/gallery';
import Contact from '../components/ui/contact';

function Approuter() {
  return (
    <>
    <Router>
        <Routes>
            <Route element={<MainLayout/>}>

                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/contact' element={<Contact/>} />

            </Route>
        </Routes>
    </Router>
    </>
  );
}

export default Approuter;
