import React from 'react';
import { ImagesSliderDemo } from '../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../pages/home-card';
import aboutCard from '../../assets/json/about-card.json';
function Home() {
  return (
    <div >
        <ImagesSliderDemo />
        <CardHoverEffectDemo project={aboutCard}/>
       
    </div>
  );
}

export default Home;
