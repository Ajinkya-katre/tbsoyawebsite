import React from 'react';
import { ImagesSliderDemo } from '../../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../../pages/home-card';
import aboutCard from '../../../assets/json/about-card.json';
import Testimonials from '../testimonials/testimonials';
import Homecontent from './Home-content';
import { Faq } from '../Faq/Faq';
function Home() {
  return (
    <div >
        <ImagesSliderDemo />
        {/* <CardHoverEffectDemo project={aboutCard}/> */}
        <Homecontent />
        <Testimonials/>
        <Faq />
    </div>
  );
}

export default Home;
