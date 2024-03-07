import React from 'react';
import { ImagesSliderDemo } from '../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../pages/home-card';
import { InfiniteMovingCardsDemo } from '../../pages/infinite-moving-cards';
import aboutCard from '../../assets/json/about-card.json';
function Home() {
  return (
    <div >
        <ImagesSliderDemo />
        <CardHoverEffectDemo project={aboutCard}/>
        <InfiniteMovingCardsDemo/>
    </div>
  );
}

export default Home;
