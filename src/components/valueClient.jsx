import { ClientData } from '../constant/data';
import Slider from "react-slick";
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import Star from '../assets/img/star.png'



export const ValueClient = () => {
  const [value, setValue] = useState(0);
  const [slideToShow, setSlideToShow] = useState();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setSlideToShow(3);
    } else if (width >= 760) {
      setSlideToShow(2);
    } else {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current) => {
      if (ClientData.length > slideToShow) {
        setValue(slideToShow + current);
      }

    },
  };

  return (
    <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
            <img src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Navigating the Estatein Experience</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">At Estatein, we have designed a straightforward process to help you find and purchase your dream property with ease. Heres a step-by-step guide to how it all works.</p>
        </div>

        <div className="relative">
      <Slider {...settings}>
        {ClientData.map((testimonail, i) => (
          <div key={i} className="w-full overflow-hidden font-Font">
            <div className="p-5 w-full border-t-8 border-gray60 rounded-md bg-gray10 grid grid-cols-1 md:grid-cols-2 gap-6 font-Font">
              <div className=' p-5 bg-gray15'>
                <div className=' flex items-center justify-between '>
                    <div >
                        <p  className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg"> Since 2019</p>
                        <h2 className=' text-AbsoluteWhite text-xl'>ABC Corporation</h2>
                    </div>
                    <div>Visit Website</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className=' absolute right-12 md:left-0 -bottom-14'>
        <p>{value} 0f {ClientData.length}</p>
      </div>
    </div>
    </div>
    
  );
};
