import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../components/ui/home';
import About from '../components/ui/about';
import MainLayout from '../layout/mainlayout';
import Gallery from '../components/ui/gallery';
import Contact from '../components/ui/Contact/contact';
import Team from '../components/ui/Team/team';
import Product from '../components/ui/Product/product';

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
                <Route path='/team' element={<Team/>} />
                <Route path='/product' element={<Product/>} />

            </Route>
        </Routes>
    </Router>
    </>
  );
}

export default Approuter;
