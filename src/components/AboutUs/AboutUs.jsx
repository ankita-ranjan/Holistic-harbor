import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const AboutUs = () => {
  return (
    <div className="bg- via-white ">
    <Navbar />
      <div className="px-4 md:px-10 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-orange-700 text-center">About Us</h2>
          <p className=" flex text-lg mb-4 justify-between">
            Welcome to Holistic Harbour, a platform that celebrates the
            diversity of religious and cultural practices around the world. At
            Holistic Harbour, we believe in fostering understanding, respect,
            and appreciation for different traditions. <br />
            Our platform is a collaborative effort initiated by the Department
            of Holistic Education. It goes beyond being just a website; it's a
            vibrant space where individuals of all ages can contribute to the
            documentation and sharing of cultural heritage. <br />
            We invite you to explore the rich tapestry of temples, share your
            experiences, and be a part of this collective endeavor to preserve
            and celebrate our shared cultural heritage.
          </p>
          
          {/* <div className="flex justify-center">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
  </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;