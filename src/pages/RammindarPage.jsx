import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Rammindar from '../components/description/Rammandir'
import {Helmet} from "react-helmet";

export default function RammindarPage() {
  return (
    <div>
       <Helmet>
       <title>Turbo Todo</title>
       <meta property="og:type"               content="article" />
          <meta property="og:title"              content="titulo para el home de la tienda" />
          <meta property="og:description"        content="esta es la decripcion del home de la tienda" />
          <meta property="og:image"              content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612" />

            </Helmet>
      <Navbar/>
       <Rammindar/>
       <Footer/>
    </div>
  )
}
