import React from "react";
import image from "../images/holistic.png";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div>
      <div className=" py-4 px-4 bg-gradient-to-r from-orange-500 via-white to-green-500">
        <div className="flex items-center justify-between px-0 md:px-20 ">
          <div className="">
            <img src={image} alt="" className="w-12 rounded-full md:w-24 " />
          </div>

          <div className=" text-center">
            <p className="font-bold text-sm md:text-xl ">
              Holistic Harbor
              <br />
              <div className="text-orange-700 font-bold text-sm md:text-2xl ">
                {" "}
                KNOW YOUR RELIGIOUS PLACE HERE
              </div>
            </p>
          </div>
          <div className="">
            <Link to="/login">
              <button className=" text-black border-black border-2 rounded-md py-1 px-2 hover:bg-black hover:text-green-500  sm:flex sm:items-center hidden lg:block">
                <div className="flex lg:hidden">
                  <IoLogIn />
                </div>
                <div className="hidden sm:flex items-center text-sm">
                  LogIn/SignUp
                </div>
              </button>

              <div className="flex sm:hidden">
                <IoLogIn className="w-10 h-10 hidden sm:flex" />
              </div>
            </Link>

            <div className="drawer z-20 block lg:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                  <RxHamburgerMenu className="w-8 h-" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>HOME</a>
                  </li>
                  <li>
                    <a>EXPLORE PLACES</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex bg-black text-sm text-white py-1 md:px-28">
        <div className="flex-1 text-center text-orange-500 font-bold">
          <Link to="/">HOME</Link>
        </div>
        <div className="flex-1 text-center dropdown dropdown-hover  font-bold hover:text-orange-500 ">
          EXPLORE PLACES
          <div className="justify-center">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white">
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">

              <Link to="/exploreplaces/hindu"   className="flex-1 text-center ">
                HINDU TEMPLE
                </Link>
                </button>
                <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/mosque" class="grid text -centre hover:bg-orange-500">
                MOSQUE
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/gurudwara" class="grid text -centre hover:bg-orange-500">
                GURUDWARA
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/church" class="grid text -centre hover:bg-orange-500">
                CHURCHES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/budha" class="grid text -centre hover:bg-orange-500">
                BUDDHA
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/jaintemple" class="grid text -centre hover:bg-orange-500">
                JAIN TEMPLE
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/zoroastrian" class="grid text -centre hover:bg-orange-500">
                ZOROASTRIAN
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/judaismtemple" class="grid text -centre hover:bg-orange-500">
                JUDAISM TEMPLE
              </Link>
              </button>
              

            </ul>
          </div>
        </div>

        <div class="flex-1 text-center dropdown dropdown-hover font-bold hover:text-orange-500">
          FORUMS
          <div className="justify-center">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white">
                
              <li>
                <a>RELIGIOUS NEWS</a>
              </li>
             
              
              <li>
                <a>PILGRIMAGES EXPERIENCE</a>
              </li>
             
            </ul>
          </div>
        </div>
        <div class="flex-1 text-center dropdown dropdown-hover ml-50 font-bold hover:text-orange-500">
          EVENTS
          <div className="justify-center">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white"
            >
              <li>
                <a>HINDU EVENTS</a>
              </li>
              <li>
                <a>JEWS EVENTS</a>
              </li>
              <li>
                <a>PARSI EVENTS</a>
              </li>
              <li>
                <a>RELIGIOUS TRAVELLING</a>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to="/article"
          class="flex-1 text-center font-bold hover:text-orange-500"
        >
          ARTICLES
        </Link>
        <Link
          to="/form"
          class="flex-1 text-center font-bold hover:text-orange-500"
        >
          PROMOTION
        </Link>
        {"  "}
        <Link
          to="/AboutUs"
          className="flex-1 text-center font-bold hover:text-orange-500"
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
}
