import React, { Component } from "react";
import Slider from "react-slick";
import ramji from "./ramji.jpg";
import durgapuja from "./durgapuja.jpg"
class HinduEvents extends Component {
  state = {
    featuredEvents: [
      {
        id: 1,
        date: "April 14, 2024",
        event: "Ram Navami",
        description: "Celebration of the birth of Lord Rama.",
      },
      {
        id: 2,
        date: "April 21, 2024",
        event: "Hanuman Jayanti",
        description: "Birthday of Lord Hanuman, the monkey god.",
      },
      {
        id: 3,
        date: "May 15, 2024",
        event: "Akshaya Tritiya",
        description: "Day of unending prosperity and success.",
      },
      {
        id: 4,
        date: "June 30, 2024",
        event: "Guru Purnima",
        description: "Celebration of spiritual and academic teachers.",
      },
      {
        id: 5,
        date: "July 21, 2024",
        event: "Krishna Janmashtami",
        description: "Birth anniversary of Lord Krishna.",
      },
      {
        id: 6,
        date: "August 5, 2024",
        event: "Raksha Bandhan",
        description:
          "A festival celebrating the bond between brothers and sisters.",
      },
    ],
    upcomingEvents: [
      {
        id: 7,
        date: "September 10, 2024",
        event: "Ganesh Chaturthi",
        description: "Celebration of the birth of Lord Ganesha.",
      },
    ],
    eventCategories: ["Festivals", "Rituals", "Puja", "Yagna", "Vratas"],
    hinduImages: [
      { src: "ramji.jpg", date: "09 Nov" },
      { src: "durgapuja.jpg", date: "10 Nov" },
      { src: "durgapuja.jpg", date: "11 Nov" },
      { src: "durgapuja.jpg", date: "12 Nov" },
      { src: "durgapuja.jpg", date: "13 Nov" },
      { src: "durgapuja.jpg", date: "14 Nov" },
    ],
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-opacity-50 text-black text-center py-4 font-serif italic relative">
          <h1 className="text-3xl font-semibold relative z-10">
            Recent Hindu Events
          </h1>
          <hr className="border-2 border-orange-500 w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-4" />
          <p className="text-xl black font-serif italic">
            Enthusiastically underwhelm quality benefits rather than
            professional outside the box thinking.
            <div className="mx-auto text-center">
              Distinctively network highly efficient leadership skills.
            </div>
          </p>
        </header>

        <main className="container mx-auto py-8">
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {this.state.featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <div className="mr-4">
                    <img
                      src={ramji}
                      alt={`Hindu Image ${event.id}`}
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {event.event}
                    </h3>
                    <p className="text-gray-600 mb-1">Date: {event.date}</p>
                    <p className="text-gray-600 mb-1">Location: India</p>
                    <p className="text-gray-600">Timing: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="mt-2">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded-md">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Hindu Images Gallery
            </h2>
            <Slider {...settings}>
              {this.state.hinduImages.map((image, index) => (
                <div key={index}>
                  <div className="relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                    <img
                      src={ramji}
                      alt={`Hindu Image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded-md text-gray-800 font-semibold">
                      {image.date}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </main>
      </div>
    );
  }
}

export default HinduEvents;
