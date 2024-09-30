import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import temple1 from "../../assets/hindutemple/temple1.jpg"; 
import temple2 from "../../assets/hindutemple/temple2.jpg";
import temple3 from "../../assets/hindutemple/temple3.jpg";
import temple4 from "../../assets/hindutemple/temple4.jpg";

const HinduTemple = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const hinduTemplesData = [
    {
      name: "Temple 1",
      image: temple1,
      imageDescription: "Description of Temple 1",
      videoId: "VIDEO_ID_1",
      videoDescription: "Description of Video 1",
      history: "History of Temple 1...",
      location: {
        distanceFromAirport: "20 km",
        distanceFromRailwayStation: "5 km",
      },
    },
    {
      name: "Temple 2",
      image: temple2,
      imageDescription: "Description of Temple 2",
      videoId: "VIDEO_ID_2",
      videoDescription: "Description of Video 2",
      history: "History of Temple 2...",
      location: {
        distanceFromAirport: "15 km",
        distanceFromRailwayStation: "8 km",
      },
    },
    {
      name: "Temple 3",
      image: temple3,
      imageDescription: "Description of Temple 3",
      videoId: "VIDEO_ID_3",
      videoDescription: "Description of Video 3",
      history: "History of Temple 3...",
      location: {
        distanceFromAirport: "25 km",
        distanceFromRailwayStation: "10 km",
      },
    },
    {
      name: "Temple 4",
      image: temple4,
      imageDescription: "Description of Temple 4",
      videoId: "VIDEO_ID_4",
      videoDescription: "Description of Video 4",
      history: "History of Temple 4...",
      location: {
        distanceFromAirport: "18 km",
        distanceFromRailwayStation: "6 km",
      },
    },
  ];

  const handleVisitClick = (templeName) => {
    console.log(`Visiting ${templeName}`);
  };

  const handleDonateClick = () => {
    console.log("Donating now");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (oldIndex, newIndex) => {
      setTimeout(() => setCurrentSlideIndex(newIndex), 300); // Delay animation by 0.3s
    },
  };

  return (
    <div>
     
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-orange-500 text-center -mb-0.5 mt-8">
          Hindu Temples
        </h1>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
             
            </svg>
            + Add Your Temple
          </button>
        </div>

        <div className="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {hinduTemplesData.map((temple, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={temple.image}
                className="my-8 w-2/3 rounded-lg "
                alt={temple.name}
              />
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold mb-1">{temple.name}</h2>
                <p className="text-sm">{temple.imageDescription}</p>
                <p className="text-sm">
                  <strong>History:</strong> {temple.history}
                </p>
                <p className="text-sm">
                  <strong>Location:</strong> Distance from Airport:{" "}
                  {temple.location.distanceFromAirport}, Distance from Railway
                  Station: {temple.location.distanceFromRailwayStation}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleVisitClick(temple.name)}
                  >
                    Visit
                  </button>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleDonateClick}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <Slider {...settings} initialSlide={currentSlideIndex}>
          {hinduTemplesData.map((temple, index) => (
            <div key={index} className="relative">
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${temple.videoId}`}
                title={`YouTube video player ${index + 1}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="w-full h-full"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity opacity-0 hover:opacity-100">
                <p className="text-white text-center p-4">
                  {temple.videoDescription}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default HinduTemple;

