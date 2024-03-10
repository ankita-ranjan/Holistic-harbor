import React from 'react';
import { Carousel } from "@material-tailwind/react";
import image1 from '../../assets/gurudwara.jpeg';
import image2 from '../../assets/mosque.jpeg'
import image3 from '../../assets/temple.jpeg'


import Mission from './Mission';
import Vision from './Vision';
export default function Hero({ deviceType }) {
  return (
    <div className="">
      <Carousel loop={true} autoplay={true}>
        <div className="">
          <img
            src={image1}
            alt="image 1"
            className="w-full h-96 object-fit object-center"
          />
        </div>

        <div className="">
          <img
            src={image2}
            alt="image 2"
            className="w-full h-96 object-fit object-center"
          />
        </div>

        <div className="">
          <img
            src={image3}
            alt="image 3"
            className="w-full h-96 object-fit object-center"
          />
        </div>
      </Carousel>
      <Mission /> <Vision />
    
    </div>
  );
}