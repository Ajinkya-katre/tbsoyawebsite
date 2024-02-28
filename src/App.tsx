import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavbarDemo} from '../src/pages/navbar'
import { ImagesSliderDemo } from './pages/hero-page-slider';
function App() {
  return (
    <div className="App">
      <NavbarDemo/>
      <ImagesSliderDemo/>
    </div>
  );
}

export default App;
