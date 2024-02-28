import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavbarDemo} from '../src/pages/navbar'
import { ImagesSliderDemo } from './pages/hero-page-slider';
import { CardHoverEffectDemo } from './pages/home-card';
function App() {
  return (
    <div className="App">
      <NavbarDemo/>
      <ImagesSliderDemo/>
        <CardHoverEffectDemo />

    </div>

  );
}

export default App;
