import React from 'react';
import { CardHoverEffectDemo } from '../../pages/home-card';
import projects from '../../assets/json/home-card.json'

function About() {
  return (
    <div >
      <CardHoverEffectDemo project={projects} />

    </div>
  );
}

export default About;
