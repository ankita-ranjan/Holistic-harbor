import React, { Component } from 'react'
import Navbar from './../components/navbar/Navbar';
import HinduEvents from './../components/events/HinduEvents';
import Footer from './../components/footer/Footer';

export class HinduEventsPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HinduEvents/>
        <Footer/>
      </div>
    )
  }
}

export default HinduEventsPage
