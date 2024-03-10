import React from 'react'
import image from '../images/holistic.png'
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className='navbar py-4 px-4 bg-gradient-to-r from-orange-500 via-white to-green-500'>
        <div className='navbar-start'><img src={image} alt="" className='w-20 h-20 rounded-full md:w-30 md:h-30 ' />
        </div>
       
      


          <div className='navbar-center text-center'>
          <p className='font-bold text-sm md:text-xl '>Holistic Harbor<br />
            <div className='text-orange-700 font-bold text-sm md:text-2xl '> KNOW YOUR RELIGIOUS PLACE HERE</div>
          </p>
          
        </div>
        <div className='navbar-end'>
          <Link to='/login'>
            <button className='flex text-black border-black border-2 rounded-md py-1 px-2 hover:bg-black hover:text-green-500 w-20 sm:flex sm:items-center hidden lg:block'>
              <div className='flex lg:hidden'>
                <MdAccountCircle className='w-5 h-5' />
              </div>
              <div className='hidden sm:flex items-center'>
                Login
              </div>
            </button>


            <div className='flex sm:hidden'>
              <MdAccountCircle className='w-10 h-10 lg:w-5 lg:h-5' />
            </div>
          </Link>
        </div>

      </div>

      <div class="flex bg-black text-sm text-white py-1">
        <div className="flex-1 text-center">
         <Link to="/">Home</Link>
        </div>
        <div className="flex-1 text-center dropdown dropdown-hover ml-50">
          Explore places
          <div className='justify-center'>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-white bg-black">
              <Link to ="/exploreplaces/hindu" class="flex-1 text-center">
             HinduTemple
              </Link>
              
              <Link to="/exploreplaces/mosque" class="grid text -centre">
                Mosque
              </Link>

              <Link to="/exploreplaces/gurudwara" class="grid text -centre">
                Gurudwara
              </Link>

              <Link to="/exploreplaces/church" class="grid text -centre">
                Churches
              </Link>

              <Link to="/exploreplaces/budha" class="grid text -centre">
              Buddha
              </Link>

              <Link to="/exploreplaces/jaintemple" class="grid text -centre">
              Jain Temple
              </Link>
              
              <li><a>Zorostrian Temple</a></li>
              <li><a>Judaism Temple</a></li>
            </ul>
          </div>
        </div>

        <div class="flex-1 text-center dropdown dropdown-hover ml-50">
          Forums
          <div className='justify-center'>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-white bg-black">
              <li><a>Religious News</a></li>
              <li><a>Pilgrimages Experience</a></li>
            </ul>
          </div>
        </div>
        <div class="flex-1 text-center dropdown dropdown-hover ml-50">
          Events
          <div className='justify-center'>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  flex flex-col items-center  w-25 text-white bg-black">
              <li><a>Hindus Events</a></li>
              <li><a>Jews Events</a></li>
              <li><a>Parsi Events</a></li>
              <li><a>Religious Travelling</a></li>
            </ul>
          </div>
        </div>
        <Link to ="/article" class="flex-1 text-center">
          Articles
        </Link>
        <Link to="/form" class="flex-1 text-center">
          Promotion
        </Link>
      {"  "}
      <Link to="/AboutUs" className="flex-1 text-center">
          About us
        </Link>
      </div>
      {/* daisyui: {
    themes: ["light", "dark", "cupcake"],
     } */}

    </div>
  )
}
