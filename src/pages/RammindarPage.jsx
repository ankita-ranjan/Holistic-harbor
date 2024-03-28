import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Rammindar from '../components/discription/Rammandir'
import {Helmet} from "react-helmet";

export default function RammindarPage() {
  return (
    <div>
       <Helmet>
       <meta name="theme-color" content="#000000" />
  <meta name="description" content="Ram Mandir" />

  <link rel="icon" href="%PUBLIC_URL%/holistic.png" />
  <link rel="icon" href="%PUBLIC_URL%/holistic.png" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/holistic.png" />

            </Helmet>
      <Navbar/>
       <Rammindar/>
       <Footer/>
    </div>
  )
}
