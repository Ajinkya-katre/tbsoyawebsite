import React from 'react';
import { ImagesSliderDemo } from '../../pages/hero-page-slider';
import { CardHoverEffectDemo } from '../../pages/home-card';
import { InfiniteMovingCardsDemo } from '../../pages/infinite-moving-cards';

function Home() {
  return (
    <div >
        <ImagesSliderDemo />
        <CardHoverEffectDemo/>
        <InfiniteMovingCardsDemo/>
    </div>
  );
}

export default Home;
