import React from "react";

export default function Pilgrimages() {
  return (
    <div className="pilgrimage-experience py-8 md:py-12 lg:py-16 px-8 md:px-6 lg:px-8 w-full max-w-screen-4xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center font-serif">
        Pilgrimage Experience
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
        Welcome to our Pilgrimage Experience platform. Here, you can find a
        wealth of information, stories, and resources to enrich your pilgrimage
        journey.
      </p>
      <div className=" bg-gradient-to-r from-orange-500 via-white to-green-500 text-white py-8 text-center ">
        <p className="text-orange-700 font-bold text-sm md:text-2xl italic">
          "People come to kneel where prayer
          <br className="text-right" />
          has been valid."
        </p>
      </div>

      <div className="pilgrimage-stories mb-12">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 mt-4 text-center font-serif">
          Share Your Story
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
          Have you embarked on a pilgrimage journey? Share your personal
          experiences and stories with our community.
        </p>
        <div className="max-w-5xl max-h-2xl mx-auto bg-gradient-to-r from-orange-500 to-green-500 rounded-lg shadow-md p-6 border-blue-600">
          <form className="mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md px-3 py-2 text-base focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 text-base focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="story" className="block mb-2 text-white">
                Your Pilgrimage Experience:
              </label>
              <textarea
                id="story"
                name="story"
                rows="4"
                cols="50"
                className="w-full border rounded-md px-3 py-2 text-base focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-4">
          <div className="pilgrimage-resources mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold  mb-4 font-serif">
              Resources
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-4 font-serif">
              Explore further resources to enrich your pilgrimage journey:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2 font-serif">Guidebooks and maps</li>
              <li className="mb-2 font-serif ">Online forums and communities</li>
              <li className="mb-2 font-serif">Recommended reading materials</li>
              <li className="-mb-2 font-serif">
                Travel agencies specializing in pilgrimages
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <div className="pilgrimage-tips mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 font-serif">
              Tips & Advice
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-4 font-serif">
              Prepare yourself for a meaningful pilgrimage experience with these
              practical tips and advice:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2 font-serif">Pack light and practical.</li>
              <li className="mb-2 font-serif">
                Plan ahead and research your destination.
              </li>
              <li className="mb-2 font-serif">
                Stay open-minded and respectful of local customs.
              </li>
              <li className="-mb-20 font-serif">
                Stay hydrated and take breaks during long journeys.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
