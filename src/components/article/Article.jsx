import React, { useState } from "react";
import temple from "./temple.jpeg";
import jagannath from "./jagannath.jpeg";
import Rameshwaram from "./Rameshwaram.jpeg";
import dwarka from "./dwarka.jpeg";
import badrinath from "./badrinath.jpeg";
import kedarnath from "./kedarnath.jpeg";
import Vaishno from "./Vaishno.jpeg";
import somnath from "./somnath.jpeg";
import golden from "./golden.jpeg";
import hampi from "./hampi.jpeg";
import premmandir from "./premmandir.jpeg";
import rishikesh from "./rishikesh.jpeg";
import varanasi from "./varanasi.jpeg";
import shirdi from "./shirdi.jpeg";
import karni from "./karni.jpeg";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Article() {
  const data = [
    {
      img: temple,
      title: "Ram Mandir: A Place of Belief and Harmony",
      description:
        "The Ram Mandir, dedicated to Lord Ram, holds a special place in the hearts of millions of Hindus worldwide.",
        route:"/article/rammindar"
    },
    
    {
    
      img: jagannath,
      title: "Jagannath Puri: A Sacred Haven",
      description:
        "This temple is dedicated to Lord Jagannath, a form of Lord Vishnu, along with his brother Balabhadra and sister Subhadra.",
        route:"/article/jagannath"
       },
    
    {
      img: Rameshwaram,
      title: "Rameshwaram: A Journey of Faith",
      description:
        "Rameshwaram Temple has one of the longest corridors in the world, known as the Ramanathaswamy Temple corridor.",
        route:"/article/remeshwaram"
    },
    {
      img: dwarka,
      title: "Dwarka: A Place of Divine Serenity",
      description:
        "Dwarka Temple, located in western India, is a place of deep spiritual significance dedicated to Lord Krishna.",
        route:"/article/dwarka"
    },
    {
      img: badrinath,
      title: "Badrinath Temple: A Place of Spiritual Wonder",
      description:
        "Badrinath Temple is believed to be one of the holiest sites in Hinduism, revered for its ancient history and spiritual significance.",
        route:"/article/badrinath"
    },
    {
      img: kedarnath,
      title: "Kedarnath: A Sacred Haven in the Himalayas",
      description:
        "In the mighty Himalayas, nestled among towering peaks and pristine valleys, lies the revered Kedarnath Temple. ",
        route:"/article/kedarnath"
    },
    {
      img: Vaishno,
      title: "Vaishno Devi Temple: A Holy Adventure",
      description:
        "In the beautiful hills of Jammu and Kashmir, there's a special place called Vaishno Devi Temple.",
        route:"/article/vaishno"
    },
    {
      img: somnath,
      title: " Somnath Temple: A Place of Divine Beauty",
      description:
        "One of the most captivating aspects of Somnath Temple is its location near the Arabian Sea. ",
        route:"/article/somnath"
    },
    {
      img: golden,
      title: "The Golden Temple: A Place of Peace and Unity",
      description:
        "In the vibrant city of Amritsar, Punjab, stands a majestic and sacred place called the Golden Temple.",
        route:"/article/golden"
    },
    {
      img: hampi,
      title: "Hampi: A Journey Through Time",
      description:
        "In the heart of Karnataka, India, lies a treasure trove of ancient wonders known as Hampi.",
        route:"/article/hampi"
    },
    {
      img: premmandir,
      title: "Prem Mandir: A Divine Abode of Love and Devotion",
      description:
        "At the heart of Prem Mandir lies the sacred bond between Lord Krishna and Radha, celebrated as the epitome of divine love in Hindu mythology. ",
        route:"/article/premmandir"
    },
    {
      img: rishikesh,
      title: "Rishikesh: A Serene Escape in Nature's Embrace",
      description:
        "Rishikesh is blessed with the pristine waters of the sacred Ganges River, which flows gracefully through the town, offering a serene backdrop for meditation and reflection.",
        route:"/article/rishikesh" 
    },
    {
      img: varanasi,
      title: "Varanasi: A Timeless Journey Along the Banks of the Ganges",
      description:
        "Varanasi, also known as Kashi or Banaras, is one of the oldest cities in the world and holds a special place in the heart of every Indian.",
        route:"/article/varanasi"
    },
    {
      img: shirdi,
      title: "Shirdi: A Spiritual Haven in Maharashtra",
      description:
        "Shirdi, a small town in the state of Maharashtra, holds a special place in the hearts of millions of devotees around the world.",
        route:"/article/shirdi"
    },
    {
      img: karni,
      title: "Karni: A Serene Haven in Nature's Embrace",
      description:
        " Located in the heart of the countryside, Karni is a hidden gem waiting to be discovered by nature lovers and adventure enthusiasts alike.",
        route:"/article/karni"
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        route:"/discription/rammindar"
    },

  ];

  const itemsPerPage = 15; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const [readMore, setReadMore] = useState(false);

  const handleClick = () => {
    setReadMore(!readMore);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg- via-white ">
        <h1 className="text-center font-bold text-3xl mt-6 text-orange-500">Articles</h1>
        
      <div className="grid  lg:grid-cols-3  grid-cols-1 p-4 ">
        {currentItems.map((item, index, route) => (
          <div
            key={index}
            class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2"
          >
            <img class="sm:h-60 w-full hover:scale-110 transform transition-transform rounded-lg" src={item.img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-orange-500">{item.title}</div>
              <p class="text-black text-base flex">
                {!readMore && item.description.slice(0, 200)}
                {readMore && item.description}
                <p onClick={handleClick} className="items-end flex flex-col justify-end text-2xl text-orange-500 hover:text-orange-700 ">
                  {" "}
                  <Link to = {item.route}>
                 <FaRegArrowAltCircleRight />
                 </Link>
             
                 
                </p>{" "}
              </p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <ul className="flex">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`cursor-pointer mx-1 px-3 py-1 border border-gray-400 ${
                currentPage === index + 1 ? "bg-gray-300" : ""
              }`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}