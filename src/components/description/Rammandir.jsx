import React from "react";
import Marquee from "react-fast-marquee";

export default function Rammandir({
  title,
  intro,
  history,
  construction,
  controversy,
  battleTitle,
  battle,
  ceremonyTitle,
  ceremony,
  present1,
  present2,
  image1,
  image2,
  image3,
  image4,
  images
}) {
  return (
    <div className=" flex flex-col md:flex-col md:ps-20 px-6 pb-5">
      <h1 className="pt-10 text-3xl font-bold text-orange-500">{title}</h1>
      <div className="flex md:flex-row flex-col">
        <div className="text-black">
          <img src={image1} className="my-8  w-2/3 rounded-lg" alt="" />
          <p className=" text-justify font-lato font-bold">
            Introduction <br />{" "}
          </p>
          <p className=" text-justify font-lato">
            {intro}
            <br />
            <br />
            <p className="text-justify font-lato font-bold">
              Ancient History
              <br />
            </p>
            {history}
          </p>
          <img src={image2} className="my-8 w-2/3  rounded-lg" alt="" />
          <p className=" text-justify font-lato">
            <p className="text-justify font-lato font-bold">
              Construction of the Original Temple
              <br />
            </p>
            {construction}
            <br />
            <br />
            <p className="text-justify font-lato font-bold">
              Controversy
              <br />
            </p>
            {controversy}
          </p>
          <img
            src={image3}
            className="my-8 w-2/3  rounded-lg"
            alt="Ram-Idol"
          />
          <p className="text-justify font-lato">
            <p className="text-justify font-lato font-bold">
              {battleTitle} <br />
            </p>
            {battle}
            <br />
            <br />
            <p className="text-justify font-lato font-bold">
              {ceremonyTitle}
              <br />
            </p>
            {ceremony}
            <br />
            <br />
            <img
              src={image4}
              className="my- w-2/3  rounded-lg"
              alt="Ram-Idol"
            />
            <p className="text-justify font-lato font-bold">
              Present Day
              <br />
            </p>
            {present1}
            <br />
            <br />
            {present2}
          </p>
        </div>
        <div className="flex  flex-col md:items-end pe-10 ">
          <h1 className=" flex text-2xl text-orange-500">History Related</h1>
          {
            images.map(({id,imgSrc,imgTitle}) => {
              return(
                <img
                src={imgSrc}
                className="my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform"
                alt={imgTitle}
              />
              )
            })
          }
          
          
        </div>
      </div>
    </div>
  );
}
