import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

  return (
    <div className='bg-blue-gray-200 -mt-5'>
    <div className='flex justify-between flex-wrap m-5 '>

        <div className="mt-5">
        <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Contact Us
          </h5>
            <form class="flex flex-col justify-center">
                       <div class="flex flex-col ">
                            <label for="Name" class="hidden">Name</label>
                            <input type="Name" name="Nmae" id="name" placeholder="Name" class="lg:w-36 w-100 rounded text-sm mt-1 py-1 px-2 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div class="flex flex-col ">
                            <label for="email" class="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="lg:w-36 w-100 rounded text-sm mt-1 py-1 px-2 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div class="flex flex-col ">
                            <label for="phone" class="hidden">Phone number</label>
                            <input type="phone" name="phone" id="phone" placeholder="phone number" class="lg:w-36 w-100 rounded text-sm mt-1 py-1 px-2 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col ">
                            <label for="tel" class="hidden">Message</label>
                            <textarea type="tel" name="tel" id="tel" placeholder="Query" class="lg:w-36 w-100 text-sm rounded mt-1 py-2 px-1 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <button type="submit" class="lg:w-24  rounded bg-orange-500 hover:bg-orange-700 text-white font-bold text-sm py-1 px-6 mt-2 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
            </form>
        </div>


        <div className="mt-5">
        <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Get in Touch
          </h5>
        

          <ul className="mb-0 list-none">
            <li>
               <Link to = "https://jobs360degree.com/">
              <a className="text-sm dark:text-neutral-200"
              >Job 360  Degree</a>
              </Link> 
            </li>
            <li>
              <Link to = "https://sarvatr.co.in/">
              <a className="text-sm dark:text-neutral-200"
              >Sarvatr</a>
              </Link>
            </li>
            <li>
                <Link to = "https://swadeshibazar.co.in/">
              <a className="text-sm dark:text-neutral-200"
              >Swadeshi Bazar</a>
              </Link>
            </li>
            <li>
                <Link to = "https://vi.rase.co.in/">
              <a className="text-sm dark:text-neutral-200"
              >  Shiksha Mahakumbh</a>
              </Link>
            </li>
            <li>
                <Link to = "https://www.dhe.org.in/">
              <a className="text-sm dark:text-neutral-200"
              > Department of Holistic Education </a>
              </Link>
              </li>
             
          </ul>
        </div>

        <div className="mt-5">
        <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
           Follow
          </h5>

          <ul className="mb-0 list-none">
          <li>
                  <Link to="https://www.linkedin.com/company/">
                    <a className="text-sm dark:text-neutral-200"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">
                    <a className="text-sm dark:text-neutral-200"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/">
                    <a className="text-sm dark:text-neutral-200"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/">
                    <a className="text-sm dark:text-neutral-200"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                  </Link>
                </li>
          </ul>
        </div>
        <div className="flex flex-col mt-5">
        <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Location
          </h5>
          <div className="map-container  ">
            
              <iframe 
                title="Department of Holistic Education"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.664555194807!2d76.70609041513317!3d30.699823379678664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1665005047090!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                className='w-28 h-28 inline-block align-middle'
              ></iframe>
           
          </div>
        </div>
    </div>
    <div
      className="bg-black p-4 flex justify-center text-center text-white dark:bg-neutral-700 dark:text-neutral-200">
      © 2024 Copyright:
      <a
        href="https://tw-elements.com/"
      >Department of holistic education</a>
    </div>
</div>
  );
};



