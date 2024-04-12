import React, { useState } from 'react';
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import aboutbg from '../../assets/images/hero-section/about-hero.jpeg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import firstImg from '../../assets/images/1.jpeg'
import secondImg from '../../assets/images/2.jpeg'
import thirdImg from '../../assets/images/3.jpeg'
import fourthImg from '../../assets/images/4.jpeg'
import fifthImg from '../../assets/images/5.jpeg'
import sixthImg from '../../assets/images/6.jpeg'
import sevenththImg from '../../assets/images/7.jpeg'
import eightImg from '../../assets/images/8.jpeg'
import ninthImg from '../../assets/images/9.jpeg'
import tenthImg from '../../assets/images/10.jpeg'

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  

function Gallery() {
  const slides = [
    {
      url: `${firstImg}`,
    },
    {
      url: `${secondImg}`,
    },
    {
      url: `${thirdImg}`,
    },

    {
      url: `${fourthImg}`,
    },
    {
      url: `${fifthImg}`,
    },
    {
      url: `${sixthImg}`,
    },
    {
      url: `${sevenththImg}`,
    },
    {
      url: `${eightImg}`,
    },
    {
      url: `${ninthImg}`,
    },
    {
      url: `${tenthImg}`,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div >
      {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${aboutbg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Gallery</h1>
          </div>
        </div>
      </div> */}
        {/* <ImageGallery items={images} /> */}

 
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  


    </div>
  );
}

export default Gallery;
