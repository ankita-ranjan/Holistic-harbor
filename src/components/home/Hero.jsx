import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import image1 from "../../assets/god1.jpg";
import image2 from "../../assets/god2.jpg";
import image3 from "../../assets/god3.jpg";
import Mission from "./Mission";
import Vision from "./Vision";
import News from "./News";
import Festivals from "./Festivals";
export default function Hero({ deviceType }) {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-22") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="h-200">
      <Carousel loop={true} autoplay={true} className="h-full">
        <div className="w-full h-96 relative">
          <img
            src={image1}
            alt="image 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
              Religion can't divide you and others
            </h1>
            <p className="text-xl mb-4 animate-slideIn">
              This enthusiastic worldview benefits rather than professional
              outside the box thinking. Distinctively Network Highly Efficient
              Leadership after this text.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
              Get help now
            </button>
          </div>
        </div>

        <div className="w-full h-96 relative">
          <img
            src={image2}
            alt="image 2"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center p-4">
            <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
              Love to human is the biggest Peace
            </h1>
            <p className="text-xl mb-4 animate-slideIn">
              This enthusiastic worldview benefits rather than professional
              outside the box thinking. Distinctively Network Highly Efficient
              Leadership after this text.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
              Get help now
            </button>
          </div>
        </div>

        <div className="w-full h-96 relative">
          <img
            src={image3}
            alt="image 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
              Powerful religion theme
            </h1>
            <p className="text-xl mb-4 animate-slideIn">
              This enthusiastic worldview benefits rather than professional
              outside the box thinking. Distinctively Network Highly Efficient
              Leadership after this text.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
              Get help now
            </button>
          </div>
        </div>
      </Carousel>
      <div className=" py-0.5"></div>
      <div className="bg-black py-8">
        <div className="text-white text-center">
          <h2 className="text-3xl font-semibold italic">Upcoming Events</h2>
          <div className="text-2xl my-4 flex justify-center space-x-8">
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex justify-center items-center text-yellow-500 italic">
                  {timeLeft.days} days
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border--500 flex justify-center items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex justify-center items-center text-red-500 italic">
                  {timeLeft.days}
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div
                  className="w-24 h-24 bg-gray-800
 rounded-full flex justify-center items-center text-yellow-500 italic"
                >
                  {timeLeft.hours} hours
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex justify-center items-center text-yellow-500 italic">
                  {timeLeft.hours}
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex justify-center items-center text-yellow-500 italic">
                  {addLeadingZero(timeLeft.minutes)} min.
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex justify-center items-center text-yellow-500 italic">
                  {addLeadingZero(timeLeft.minutes)}
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex justify-center items-center text-yellow-500 italic">
                  {addLeadingZero(timeLeft.seconds)} sec.
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div
                  className="w-20 h-20 bg-gray-700
rounded-full flex justify-center items-center text-yellow-500 italic"
                >
                  {addLeadingZero(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
            View All Events
          </button>
        </div>
      </div>
      <div className="flex h-full">
        <div className="w-3/4 flex flex-col">
          <div className="flex-grow">
            <Mission />
          </div>
          <div className="flex-grow">
            <Vision />
          </div>
        </div>
        <div className="w-1/4 h-full flex-col  ">
          <News />
        </div>
      </div>
    </div>
  );
}
