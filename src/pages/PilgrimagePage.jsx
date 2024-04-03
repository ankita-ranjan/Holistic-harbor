import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Mosque from "../components/exploreplaces/Mosque";
import Pilgrimage from '../components/forums/Pilgrimages';
export default function PilgrimagePage() {
  return (
    <div>
      <Navbar />
    <Pilgrimage/>
      <Footer />
    </div>
  );
}
