import React, { useState } from "react";
import temple from "./temple.jpeg";

export default function Article() {
  const data = [
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      img: temple,
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
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
      <div className="grid  lg:grid-cols-3  grid-cols-1 p-4 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2"
          >
            <img class="w-full" src={item.img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.title}</div>
              <p class="text-gray-700 text-base">
                {!readMore && item.description.slice(0, 10)}
                {readMore && item.description}
                <p onClick={handleClick} className="text-blue-400 underline">
                  {" "}
                  Read More...
                </p>{" "}
              </p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <ul className="flex">
          {data.map((_, index) => (
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