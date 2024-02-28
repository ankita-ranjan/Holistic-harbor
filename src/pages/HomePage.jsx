import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/home/Hero';
import Footer from '../components/footer/Footer';


export default function HomePage() {
 
  const deviceType = 'desktop'; 

  return (
    <div>
   
      <Navbar/>

      <Hero/>
      <Footer/>

    </div>
  );
}
