import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import image1 from "../../assets/home/ram3.png";
import image2 from "../../assets/home/gold.jpg";
import image3 from "../../assets/home/chruch.jpg";
import image4 from "../../assets/home/masjid.jpeg";
import image5 from "../../assets/home/buddha2.png";
import image6 from "../../assets/home/jain.avif";
import Mission from "./Mission";
import Vision from "./Vision";
import News from "./News";
import Festivals from "./Festivals";


const data = [
  {
    img: image1,
    title: " Exploring Hinduism: An Introduction to the World's Oldest Living Tradition",
    description:
      "Hinduism, often referred to as Sanatana Dharma, is one of the world's oldest religions, with a rich tapestry of beliefs, traditions, and practices that have evolved over thousands of years.",
  },
  {
    img: image2,
    title: "Sikhism: A Journey of Devotion and Equality",
    description:
      "In the vibrant city of Amritsar, Punjab, stands a majestic and sacred place called the Golden Temple.Sikhism, founded by Guru Nanak in the 15th century, is a monotheistic religion that emphasizes the principles of equality, selfless service, and devotion to God.",
  },
  {
    img: image3,
    title: "Exploring Christianity: A Journey of Faith",
    description:
      "Christianity, one of the world's largest religions, traces its origins to the teachings of Jesus Christ in the first century AD.",
  },
  {
    img: image4,
    title: "Embracing Islam: A Journey of Submission and Surrender",
    description:
      "Islam, one of the world's major religions, is based on the teachings of the Prophet Muhammad, who lived in Arabia in the 7th century. ",
  },
  {
    img: image5,
    title: " Exploring the Essence of Buddhism: A Journey to Enlightenment",
    description:
      "Embark on a profound exploration of Buddhism, an ancient philosophy and spiritual tradition that offers timeless wisdom for modern life.",
  },
  {
    img: image6,
    title: "Jainism: The Path of Nonviolence and Spiritual Liberation",
    description:
      "ainism, one of the oldest religions in the world, traces its roots back to ancient India. Founded by Lord Mahavira in the 6th century BCE",
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
  <Carousel loop={true} autoplay={true} className="relative bg-gradient-to-b from-gray-300 to-black">
  {data.map(({ img, title, description }, index) => {
    return (
      <div key={index} className="relative">
        <img
          src={img}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl mb-4 animate-slideIn">{description}</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-4">
            Get help now
          </button>
        </div>
      </div>
    );
  })}
</Carousel>


      <div className=""></div>
      <div className="bg-black py-8">
        <div className="text-orange-500 text-center">
          <h2 className="text-3xl font-semibold italic">Upcoming Events</h2>
          <div className="text-2xl my-4 flex justify-center space-x-8">
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {timeLeft.days} days
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border--500 flex justify-center items-center">
                <div className="w-20 h-20 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {timeLeft.days} 
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div
                  className="w-24 h-24 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {timeLeft.hours} hours
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div className="w-20 h-20 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {timeLeft.hours}
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {addLeadingZero(timeLeft.minutes)} min.
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div className="w-20 h-20 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {addLeadingZero(timeLeft.minutes)}
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-24 h-24 bg-brown-900 rounded-full flex justify-center items-center text-orange-500 italic">
                  {addLeadingZero(timeLeft.seconds)} sec.
                </div>
              </div>
              <div className="w-28 h-28 bg-transparent rounded-full border-4 border-light-500 flex justify-center items-center">
                <div
                  className="w-20 h-20 bg-gray-70 rounded-full flex justify-center items-center text-orange-500 italic">
                  {addLeadingZero(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 ">
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
