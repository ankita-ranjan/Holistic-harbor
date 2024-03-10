import React from "react";

const Mission = () => {
  return (
    <div className="bg-gradient-to-r  via-white  py-8 px-4 md:px-10 font-sans">
      <div className="max-w-3xl mx-auto relative">
     
        <div className="absolute top-0 left-0 w-full h-full bg-flower bg-cover bg-no-repeat bg-opacity-25 rounded-md"></div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            Our Mission
          </h2>{" "}
          <div className="text-lg leading-relaxed font-serif">
            <p className="mb-2">
              Holistic Harbour is on a mission to create an inclusive platform
              that brings together people of diverse cultures and faiths. Our
              mission is to provide a space where individuals can share their
              religious experiences, learn from one another, and promote harmony
              and tolerance.
            </p>
            <p className="mb-2">
              We are committed to building a community-driven platform that goes
              beyond geographical boundaries. Through the documentation of
              cultural practices, pilgrimages, and events, we aim to foster a
              sense of belonging and mutual respect among our global audience.
            </p>
            <p className="mb-2">
              Join us in our mission to celebrate the beauty of cultural
              diversity, break down barriers, and create a world where
              everyone's traditions are valued and respected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;