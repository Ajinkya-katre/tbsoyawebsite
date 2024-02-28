import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavbarDemo} from '../src/pages/navbar'
import { ImagesSliderDemo } from './pages/hero-page-slider';
import { CardHoverEffectDemo } from './pages/home-card';
import Approuter from './routing/Approuter';
function App() {
  return (
    <div className="App">
           <Approuter/>
    </div>

  );
}

export default App;
