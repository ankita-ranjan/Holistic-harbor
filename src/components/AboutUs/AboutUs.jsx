import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AboutUs = () => {
  return (
    <div className="bg-via-white">
      <Navbar/>
      <div className="px-4 md:px-10 py-8">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-full bg-flower bg-cover bg-no-repeat bg-opacity-25 rounded-md"></div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-orange-700 mb-6 font-serif">
              About Us
            </h2>
            <div className="text-lg leading-relaxed font-serif text-justify">
              <p className="mb-2">
                Welcome to Holistic Harbour, a platform that celebrates the
                diversity of religious and cultural practices around the world.
                At Holistic Harbour, we believe in fostering understanding,
                respect, and appreciation for different traditions.
              </p>
              <p className="mb-2">
                Our platform is a collaborative effort initiated by the
                Department of Holistic Education. It goes beyond being just a
                website; it's a vibrant space where individuals of all ages can
                contribute to the documentation and sharing of cultural
                heritage.
              </p>
              <p className="mb-8">
                We invite you to explore the rich tapestry of temples, share
                your experiences, and be a part of this collective endeavor to
                preserve and celebrate our shared cultural heritage.
              </p>

              <p className="italic font-bold text-2xl ">
                "Our love for temples is a journey into the heart of devotion,
                where each pillar, dome, and deity echoes a timeless lesson of
                spirituality and heritage."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
