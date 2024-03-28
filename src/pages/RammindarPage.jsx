import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Rammindar from '../components/discription/Rammandir'
import {Helmet} from "react-helmet";

export default function RammindarPage() {
  return (
    <div>
       <Helmet>
       <title>Turbo Todo</title>
       <meta name="theme-color" content="#000000" />
       <meta name="description" content="Helmet application" />

            </Helmet>
      <Navbar/>
       <Rammindar/>
       <Footer/>
    </div>
  )
}
