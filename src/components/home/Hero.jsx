import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import image1 from "../../assets/ram3.png";
import image2 from "../../assets/gold.jpg";
import image3 from "../../assets/chruch.jpg";
import image4 from "../../assets/masjid.jpeg";
import image5 from "../../assets/buddha2.png";
import image6 from "../../assets/jain.avif";
import Mission from "./Mission";
import Vision from "./Vision";
import News from "./News";
import Festivals from "./Festivals";


const data = [
  {
    img: image1,
    title: "Ram Mandir: A Place of Belief and Harmony",
    description:
      "In Ayodhya, there's a special place called Ram Mandir, dedicated to Lord Ram.",
  },
  {
    img: image2,
    title: "The Golden Temple: A Place of Peace and Unity",
    description:
      "In the vibrant city of Amritsar, Punjab, stands a majestic and sacred place called the Golden Temple.",
  },
  {
    img: image3,
    title: "Ram Mandir: A Place of Belief and Harmony",
    description:
      "In Ayodhya, there's a special place called Ram Mandir, dedicated to Lord Ram.",
  },
  {
    img: image4,
    title: "Ram Mandir: A Place of Belief and Harmony",
    description:
      "In Ayodhya, there's a special place called Ram Mandir, dedicated to Lord Ram.",
  },
  {
    img: image5,
    title: "Ram Mandir: A Place of Belief and Harmony",
    description:
      "In Ayodhya, there's a special place called Ram Mandir, dedicated to Lord Ram.",
  },
  {
    img: image6,
    title: "Ram Mandir: A Place of Belief and Harmony",
    description:
      "In Ayodhya, there's a special place called Ram Mandir, dedicated to Lord Ram.",
  },
];
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
    <div>
      <Carousel loop={true} autoplay={true} className="">
        {data.map(({ img, title, description }) => {
          return (
            <div>
              <img
                src={img}
                alt="image 1"
                className="h-96 w-full object-cover"/>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
                  {title}
                </h1>
                <p className="text-xl mb-4 animate-slideIn">{description}</p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4">
                  Get help now
                </button>
              </div>
            </div>
          );
        })}
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
                  className="w-24 h-24 bg-gray-800 rounded-full flex justify-center items-center text-yellow-500 italic">
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
                  className="w-20 h-20 bg-gray-70 rounded-full flex justify-center items-center text-yellow-500 italic">
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
