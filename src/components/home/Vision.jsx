import React from "react";

const Vision = () => {
  return (
    <div className="bg- via-white  py-4 px-4 md:px-10">
      <div className="max-w-5xl mx-auto relative">
      
        <div className="absolute top-0 left-0 w-full h-full bg-flower bg-cover bg-no-repeat bg-opacity-25 rounded-md"></div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-2 font-serif">
            Our Vision
          </h2>
          <div className="text-lg mb-4 leading-relaxed font-serif text-justify">
            <p className="mb-2">
              At Holistic Harbor, we envision a world where cultural diversity
              is celebrated, and people of all backgrounds come together to
              share their religious experiences, traditions, and wisdom.
              Our vision is to create a vibrant online community that serves as
              a beacon of unity and understanding. <br />
              Through our platform, we aim to break down barriers, challenge
              stereotypes, and build bridges of understanding. 
              Join us on this journey towards a future where diversity is not
              only accepted but celebrated.
            </p>
           
             </div>
          {/* <div className="flex justify-center mt-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
              Join Us
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Vision;