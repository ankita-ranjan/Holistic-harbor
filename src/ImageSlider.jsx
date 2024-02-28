import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'react-bootstrap';
import React from "react";
import gurudwara from "./components/images/gurudwara.jpeg";
import mosque from "./components/images/mosque.jpeg";
import temple from "./components/images/temple.jpeg";
import "./imageslider.css";

const ImageSlider = () => {
  return (
    <Carousel style={{marginTop:"30px"}}>
      <Carousel.Item interval={1000}  style={{width:"100%",height:"80vh"}}>
        <Image src={temple} style={{width:"100%",height:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{width:"100%",height:"80vh"}}>
        <Image src={mosque} style={{width:"100%",height:"100%"}} />
      </Carousel.Item>
      <Carousel.Item style={{width:"100%",height:"80vh"}}>
        <Image src={gurudwara} style={{width:"100%",height:"100%"}} />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
