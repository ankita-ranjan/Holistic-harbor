import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Gurudwara from '../components/exploreplaces/Gurudwara'

export default function GurudwaraPage() {
  return (
    <div>
        <Navbar/>
       <Gurudwara/>
       <Footer/>
    </div>
  )
}
