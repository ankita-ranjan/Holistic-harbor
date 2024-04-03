import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "New Research on Religious Diversity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Interfaith Dialogue Event Coming Soon",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Celebrating Cultural Festivals Around the World",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "Celebrating Cultural Festivals Around the World",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      title: "Celebrating Cultural Festivals Around the World",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      title: "Celebrating Cultural Festivals Around the World",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-full rounded-lg shadow-lg p-6 md:p-8 relative z-10 ">
      <h2 className="text-3xl font-bold text-center text-orange-700 mb-2 font-serif">
        Latest News
      </h2>
      <div className="h-full overflow-scroll ">
        <Slider {...settings} className="news-carousel">
          {newsData.map((news) => (
            <div key={news.id} className="news-item">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-sm">{news.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
