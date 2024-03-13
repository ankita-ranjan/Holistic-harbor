import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import img1 from "./logo.png";
import img2 from "./DHE.png";
import img3 from "./tredul.png";
import img4 from "./job360.png";
import img5 from "./shiksha.png";
import img6 from "./viksit.png";
import img7 from "./tudu.png";
import img8 from "./sarvtar.png";
import img9 from "./pujawala.png";
import img10 from "./sbazaar.png";
import img11 from "./itr.png";
import img12 from "./holistic.png";

const logos = [
  { id: 1, imgSrc: img1, links: "https://vidyabharti.net/" },
  { id: 2, imgSrc: img2, links: "https://www.dhe.org.in/" },
  { id: 3, imgSrc: img3, links: "https://tredul.in/" },
  { id: 4, imgSrc: img4, links: "https://jobs360degree.com/" },
  { id: 5, imgSrc: img5, links: "https://www.rase.co.in/" },
  { id: 6, imgSrc: img6, links: "https://vi.rase.co.in/" },
  { id: 7, imgSrc: img7, links: "https://tudu.co.in/" },
  { id: 8, imgSrc: img8, links: "https://sarvatr.co.in/" },
  { id: 9, imgSrc: img9, links: "https://sarvatr.co.in/" },
  { id: 10, imgSrc: img10, links: "https://swadeshibazaar.co.in/" },
  { id: 11, imgSrc: img11, links: "https://www.itrchandigarh.org/" },
  { id: 12, imgSrc: img12, links: "https://www.alltemples.org.in/" },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 fonts">
      <div className="container mx-auto py-6  flex flex-col md:flex-row sm:justify-between items-center justify-center ">
        <div className="w-full md:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6604613704817!2d76.70609037551208!3d30.699827987222243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1706939393027!5m2!1sen!2sin"
            width={250}
            height={150}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          />
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <form className="text-orange-700 ">
            <h4 className="text-lg font-bold mb-4 flex justify-center">
              CONTACT US
            </h4>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                className="p-2 bg-gray-200 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                className="p-2 bg-gray-200 rounded"
                placeholder="Enter Your Email"
              />
              <input
                type="tel"
                className="p-2 bg-gray-200 rounded"
                placeholder="Mobile No."
              />
              <input
                type="text"
                className="p-2 bg-gray-200 rounded"
                placeholder="Query"
              />
              <button
                type="submit"
                className="p-2 bg-orange-700 text-white rounded w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h4 className="text-lg font-bold text-orange-700 flex justify-center mb-4">
            USEFUL LINKS
          </h4>
          <div className="flex flex-wrap justify-center px-6">
            {logos.map(({ id, imgSrc, links }) => (
              <a key={id} href={links} target="_blank" className="m-1">
                <img src={imgSrc} alt="" className="h-10 px-4 z-10" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8">
            <h4 className="text-lg font-bold mb-4 text-orange-700">
              FOLLOW US
            </h4>
            <div className="flex">
              <a
                href="https://www.facebook.com/profile.php?id=61556039249506&mibextid=ZbWKwL"
                target="_blank"
                className="text-black mr-4"
              >
                <ImFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/vb_itrchd"
                target="_blank"
                className="text-black mr-4"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/itrchandigarh?igsh=ZTdsazc1a3ZxYmNu"
                target="_blank"
                className="text-black mr-4"
              >
                <AiFillInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd-_B2IbovCDgVI1_I5ORGg"
                target="_blank"
                className="text-black mr-4"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vb-institute-of-training-and-research-chandigarh-2121562b1/"
                target="_blank"
                className="text-black"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-1 text-center text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} Department of Holistic Education.
        </p>
      </div>
    </div>
  );
};

export default Footer;