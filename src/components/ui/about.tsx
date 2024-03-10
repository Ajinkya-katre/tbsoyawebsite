import React from 'react';
import { CardHoverEffectDemo } from '../../pages/home-card';
import projects from '../../assets/json/home-card.json'
import Timeline from './Timeline/Timeline';
import aboutbg from '../../assets/images/hero-section/about-hero.jpeg'
function About() {
  return (
    <div >
      <div className="hero min-h-96" style={{backgroundImage: `url(${aboutbg})`}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-normal">About Us</h1>
            <p className="mb-5">“Tulja Bhavani Soya Private Limited” is a company that was established in the year 2020. The company operates in the agro-industry, specifically focusing on the production and distribution of soya oil and soybean de-oiled cake (DOC).</p>
          </div>
        </div>
      </div>
      {/* <CardHoverEffectDemo project={projects} /> */}
      <Timeline/>

    </div>
  );
}

export default About;
