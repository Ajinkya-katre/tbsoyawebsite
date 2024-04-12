import React from 'react';
import { ImagesSliderDemo } from '../../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../../pages/home-card';
import aboutCard from '../../../assets/json/about-card.json';
import Testimonials from '../testimonials/testimonials';
import Homecontent from './Home-content';
import { Faq } from '../Faq/Faq';
import BackgroundVideoComp from './BackgroundVideoComp';

// import BackgroundVideo from '/Users/aditya/tbsoyawebsite/src/assets/about_videos/Video-27.MP4';
// link = 'https://youtu.be/IRKl8o1W1mg?si=qSjJQB6EdwnC9Avc'
function Home() {
  return (
        
    <div >
        <BackgroundVideoComp />
        {/* <ImagesSliderDemo /> */}
        {/* <CardHoverEffectDemo project={aboutCard}/> */}
        
        <Homecontent />
        <Faq />
        <Testimonials/>

    </div>
  );
}

export default Home;
