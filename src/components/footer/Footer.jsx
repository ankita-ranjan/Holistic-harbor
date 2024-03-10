import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img1 from "./logo.jpg";
import img2 from "./DHE.jpg";
import img3 from "./tredul.jpg";
import img4 from "./job360.jpg";
import img5 from "./shiksha.jpg";
import img6 from "./viksit.jpg";
import img7 from "./tudu.jpg";
import img8 from "./sarvtar.jpg";
import img9 from "./pujawala.jpg";
import img10 from "./sbazaar.jpg";
import img11 from "./itr.jpg";

const logos = [
  { id: 1, imgSrc: img1 },
  { id: 2, imgSrc: img2 },
  { id: 3, imgSrc: img3 },
  { id: 4, imgSrc: img4 },
  { id: 5, imgSrc: img5 },
  { id: 6, imgSrc: img6 },
  { id: 7, imgSrc: img7 },
  { id: 8, imgSrc: img8 },
  { id: 9, imgSrc: img9 },
  { id: 10, imgSrc: img10 },
  { id: 11, imgSrc: img11 },
];
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 py-8 px-4 md:px-10 fonts">
      <div className="container mx-auto py-12 px-4 flex justify-between items-start">
        <div className="w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6604613704817!2d76.70609037551208!3d30.699827987222243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1706939393027!5m2!1sen!2sin"
            width={350}
            height={250}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-1/3">
          <form className="text-orange-500">
            <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
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
             <button type="submit" className="p-2 bg-orange-500 text-white rounded">
               Submit
            </button>

            </div>
          </form>
        </div>
        <div className="w-1/3">
          <h4 className="text-lg font-bold mb-4 text-orange-500">
            USEFUL LINKS
          </h4>
          <div className="flex flex-wrap justify-center">
            {logos.map(({ id, imgSrc }) => (
              <a
                key={id}
                href="https://www.dhe.org.in/"
                target="_blank"
                className="m-1"
              >
                <img src={imgSrc} alt="" className="h-12" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8">
            <h4 className="text-lg font-bold mb-4 text-oran">FOLLOW US</h4>
            <div className="flex">
              <a
                href="https://www.facebook.com/profile.php?id=61556039249506&mibextid=ZbWKwL"
                target="_blank"
                className="text-white mr-4"
              >
                <ImFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/vb_itrchd"
                target="_blank"
                className="text-white mr-4"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/itrchandigarh?igsh=ZTdsazc1a3ZxYmNu"
                target="_blank"
                className="text-white mr-4"
              >
                <AiFillInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd-_B2IbovCDgVI1_I5ORGg"
                target="_blank"
                className="text-white mr-4"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vb-institute-of-training-and-research-chandigarh-2121562b1/"
                target="_blank"
                className="text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Department of Holistic Education.
        </p>
      </div>
    </div>
  );
};

export default Footer;
