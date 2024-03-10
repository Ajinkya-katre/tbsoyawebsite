import React from 'react';
import { ImagesSliderDemo } from '../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../pages/home-card';
import aboutCard from '../../assets/json/about-card.json';
import Testimonials from './testimonials/testimonials';
function Home() {
  return (
    <div >
        <ImagesSliderDemo />
        {/* <CardHoverEffectDemo project={aboutCard}/> */}
        <Testimonials/>
    </div>
  );
}

export default Home;
