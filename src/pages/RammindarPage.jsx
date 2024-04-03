import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Rammindar from '../components/description/Rammandir';
import { Helmet } from 'react-helmet-async';

export default function RammindarPage() {
  return (
    <div>
      <Helmet>
        <title>Turbo Todo</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Titulo para el home de la tienda" />
        <meta property="og:description" content="Esta es la descripción del home de la tienda" />
        <meta property="og:image" content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612" />
        <meta property="og:url" content="https://www.alltemples.org.in/discription/Rammandir" />
        
        
      </Helmet>
      <Navbar />
      <Rammindar />
      <Footer />
    </div>
  );
}
