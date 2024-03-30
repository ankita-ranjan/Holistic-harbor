import React, { useState } from "react";
import image from "../images/holistic.png";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";




export default function Navbar() {
  const [exploreSubMenu , setExploreSubMenu] = useState(false);
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
  <div className="md:hidden">
    <IoLogIn className="h-8 w-8"/>
  </div>
  <button className="hidden md:flex text-black border-black border-2 rounded-md py-1 px-2 hover:bg-black hover:text-green-500 sm:items-center">
    <div className="  items-center text-sm">
      LogIn/SignUp
    </div>
  </button>
</Link>

            <div className="drawer z-20 block md:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
               
                <label htmlFor="my-drawer" className="drawer-button">
                  <RxHamburgerMenu className="w-8 h-8" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <div >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li >
         <button onClick={()=>setExploreSubMenu(!exploreSubMenu)}>
          EXPLORE 
          </button> 
        {exploreSubMenu && <div className="justify-center">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white">
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">

              <Link to="/exploreplaces/hindu"   className="flex-1 text-center ">
                HINDU TEMPLES
                </Link>
                </button>
                <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/mosque" class="grid text -centre hover:bg-orange-500">
                MOSQUE
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/gurudwara" class="grid text -centre hover:bg-orange-500">
                SIKH TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/church" class="grid text -centre hover:bg-orange-500">
                CHURCHES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/budha" class="grid text -centre hover:bg-orange-500">
                BOUDH TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/jaintemple" class="grid text -centre hover:bg-orange-500">
                JAIN TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/zoroastrian" class="grid text -centre hover:bg-orange-500">
                ZOROASTRIAN
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">
              <Link to="/exploreplaces/judaismtemple" class="grid text -centre hover:bg-orange-500">
                JUDAISM TEMPLES
              </Link>
              </button>
              

            </ul>
          </div>
}
        </li>
        
          <li>
          FORUMS
          </li>
          <li>
          <div className="justify-center">
            <ul
              tabIndex={0}                                                                  
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white">
               <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500">  
              <li>
                <a>VISITORS EXPERIENCE</a>
              </li>
              </button>
            </ul>
          </div>
        </li>
        <li >
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
                <a>JEWISH EVENTS</a>
              </li>
              <li>
                <a>PARSI EVENTS</a>
              </li>
              <li>
                <a>RELIGIOUS TRAVELLING</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
        <Link
          to="/article"
          class="flex-1 text-center font-bold hover:text-orange-500"
        >
          ARTICLES
        </Link>
        </li>
        <li>
        <Link
          to="/form"
          class="flex-1 text-center font-bold hover:text-orange-500"
        >
          PROMOTION
        </Link>
        </li>
        {"  "}
        <li>
        <Link
          to="/AboutUs"
          className="flex-1 text-center font-bold hover:text-orange-500"
        >
          ABOUT
        </Link>
        </li>
      </div>
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
          EXPLORE 
          <div className="justify-center">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-black bg-white">
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500  hover:text-white">

              <Link to="/exploreplaces/hindu"   className="flex-1 text-center ">
              HINDU TEMPLES
                </Link>
                </button>
                <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500  hover:text-white">
              <Link to="/exploreplaces/mosque" class="grid text -centre hover:bg-orange-500 ">
                MOSQUE
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500  hover:text-white">
              <Link to="/exploreplaces/gurudwara" class="grid text -centre hover:bg-orange-500 ">
              SIKH TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 hover:text-white">
              <Link to="/exploreplaces/church" class="grid text -centre hover:bg-orange-500  ">
              CHURCHES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 hover:text-white">
              <Link to="/exploreplaces/budha" class="grid text -centre hover:bg-orange-500  ">
              BOUDH TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500  hover:text-white">
              <Link to="/exploreplaces/jaintemple" class="grid text -centre hover:bg-orange-500 ">
                JAIN TEMPLES
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500  hover:text-white">
              <Link to="/exploreplaces/zoroastrian" class="grid text -centre hover:bg-orange-500 ">
                ZOROASTRIAN
              </Link>
              </button>
              <button type="button" class="inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 hover:text-white">
              <Link to="/exploreplaces/judaismtemple" class="grid text -centre hover:bg-orange-500 ">
                JUDAISM 
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
              className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-35 text-black bg-white">
                <li className="hover:bg-orange-500 hover:text-white">
                VISITORS EXPERIENCE
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
              <li className="hover:bg-orange-500 hover:text-white">
                <a>HINDU EVENTS</a>
              </li>
              <li className="hover:bg-orange-500 hover:text-white">
                <a>JEWISH EVENTS</a>
              </li>
              <li className="hover:bg-orange-500 hover:text-white">
                <a>PARSI EVENTS</a>
              </li>
              <li className="hover:bg-orange-500 hover:text-white">
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
