import React from "react";
import Marquee from "react-fast-marquee";

import temple from "./temple.jpeg";
import ramidol from "./ramidol.jpeg";
import RamIdol from "./RamIdol.jpg";
import rammandir from "./rammandir.jpg";
import rammandir2 from "./rammandir2.jpg";
import rammandir3 from "./rammandir3.jpg";
import rammandir4 from "./rammandir4.jpg";
import rammandir5 from "./rammandir5.jpg";
import rammandir6 from "./rammandir6.jpg";
import rammandir7 from "./rammandir7.jpg";
import rammandir8 from "./rammandir8.jpg";
import rammandir9 from "./rammandir9.jpg";
import rammandir10 from "./rammandir10.jpg";
import rammandir1 from "./rammandir1.jpg";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bentham&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
</style>;

function Rammandir({
  title,
  intro,
  introText,
  history,
  historyText,
  construction,
  constructionText,
  controversy,
  controversyText,
  battleTitle,
  battle,
  ceremonyTitle,
  ceremony,
  present1,
  present2,
}) {
  const images = [
    rammandir,
    rammandir2,
    rammandir3,
    rammandir4,
    rammandir5,
    rammandir6,
    rammandir7,
    rammandir8,
    rammandir9,
    rammandir10,
  ];
  return (
    <div className="flex flex-col md:flex-col md:ps-20 px-6 pb-5">
      <h1 className="pt-10 text-3xl font-bold text-orange-500">{title}</h1>
      <div className="flex md:flex-row flex-col">
        <div className="text-black">
          <img src={temple} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Introduction <br/>
          </p>
          <p className="text-justify font-lato">{intro}</p>
          <p className="text-justify font-lato">{introText}</p>
          <img src={ramidol} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Ancient History
            <br/>
          </p>
          <p className="text-justify font-lato">{history}</p>
          <p className="text-justify font-lato">{historyText}</p>

          <img src={RamIdol} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Construction
            <br />
          </p>
          <p className="text-justify font-lato">{construction}</p>
          <p className="text-justify font-lato">{constructionText}</p>

          <img src={rammandir} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Controversy
            <br />
          </p>
          <p className="text-justify font-lato">{controversy}</p>
          <p className="text-justify font-lato">{controversyText}</p>

          <img src={rammandir1} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Legal Battles
            <br />
          </p>
          <p className="text-justify font-lato">{battleTitle}</p>
          <p className="text-justify font-lato">{battle}</p>

          <img src={rammandir2} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Ceremony
            <br />
          </p>
          <p className="text-justify font-lato">{ceremonyTitle}</p>
          <p className="text-justify font-lato">{ceremony}</p>

          <img src={rammandir3} className="my-8 w-2/3 rounded-lg" alt="" />
          <p className="text-justify font-lato font-bold">
            Present Day
            <br />
          </p>
          <p className="text-justify font-lato">{present1}</p>
          <p className="text-justify font-lato">{present2}</p>
        </div>
        <div className="flex flex-col md:items-end pe-10">
          <h1 className="flex text-2xl text-orange-500">History Related</h1>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform"
              alt={`Related Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rammandir;