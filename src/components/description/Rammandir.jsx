import React from 'react'
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


export default function Rammandir() {
  return (
    <div className=' flex flex-col md:flex-col md:ps-20 px-6 pb-5'>
        <h1 className='pt-10 text-3xl font-bold text-orange-500'>Ram Mandir: A Place of Belief and Harmony</h1>
        <div className='flex md:flex-row flex-col'>
 <div className='text-black'>
        <img src={temple} className='my-8  w-2/3 rounded-lg' alt="" />
        <p className=' text-justify font-lato font-bold'>Introduction <br /> </p>
        <p className=' text-justify font-lato'>The Ram Mandir, dedicated to Lord Ram, holds a special place in the hearts of millions of Hindus worldwide. Its journey from ancient times to the present day is marked by reverence, controversy, and ultimately, triumph.
<br/><br/>
        <p className='text-justify font-lato font-bold'>Ancient History<br/></p>
        The history of the Ram Mandir dates back thousands of years to the ancient city of Ayodhya, believed to be the birthplace of Lord Ram. According to Hindu mythology, Ayodhya was the capital of the ancient Kosala Kingdom, ruled by Lord Ram's father, King Dasharatha. The Ramayana, an ancient Sanskrit epic, chronicles the life and adventures of Lord Ram, including his birth in Ayodhya.</p>
            <img src={ramidol} className='my-8 w-2/3  rounded-lg' alt="" />
            <p className=' text-justify font-lato'>
              <p className='text-justify font-lato font-bold'>Construction of the Original Temple<br/></p>
              The original Ram Mandir is said to have been built by King Dasharatha's descendants to honor Lord Ram's birthplace. Over the centuries, the temple became a revered pilgrimage site and a symbol of devotion for millions of Hindus.
            <br/><br/>
            <p className='text-justify font-lato font-bold'>Babri Masjid and Controversy<br/></p>
            In the 16th century, during the Mughal era, a mosque known as the Babri Masjid was constructed on the site where the Ram Mandir once stood. This led to centuries of religious and political disputes over the ownership of the land. In 1992, the Babri Masjid was demolished by Hindu activists, sparking nationwide riots and reigniting tensions between religious communities.</p>
            <img src={RamIdol} className='my-8 w-2/3  rounded-lg' alt="Ram-Idol" />
            <p className='text-justify font-lato'>
            <p className='text-justify font-lato font-bold'>Legal Battles and Ayodhya Verdict<br/></p>
            Following the demolition of the Babri Masjid, legal battles ensued over the ownership of the land. The case eventually reached the Supreme Court of India, which delivered a historic verdict in November 2019. The court ruled in favor of the construction of a Ram Mandir at the disputed site while also granting alternative land to the Muslim community for the construction of a mosque.
<br/><br/>
<p className='text-justify font-lato font-bold'>Groundbreaking Ceremony and Construction<br/></p>
On August 5, 2020, Prime Minister Narendra Modi laid the foundation stone for the construction of the Ram Mandir in Ayodhya. The ceremony was attended by religious leaders, politicians, and dignitaries from across the country. Since then, construction has been underway, with devotees eagerly awaiting the completion of the temple.
<br/><br/>
<img src={rammandir1} className='my- w-2/3  rounded-lg' alt="Ram-Idol" />
<p className='text-justify font-lato font-bold'>Present Day<br/></p>
As of current date, the construction of the Ram Mandir in Ayodhya continues to progress. The temple is expected to be a magnificent architectural marvel, symbolizing the culmination of centuries-old aspirations and the revival of Hindu heritage.
<br/><br/>The journey of the Ram Mandir from ancient times to the present day is a testament to the enduring faith and resilience of millions of Hindus. While it has been marked by challenges and controversies, the vision of a grand Ram Mandir in Ayodhya stands as a beacon of hope and unity for people of all faiths.
            </p>
        </div>
        <div className='flex  flex-col md:items-end pe-10 '> 
        <h1 className=' flex text-2xl text-orange-500'>History Related</h1>

            <img src={rammandir4} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir5} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir6} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir7} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir8} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir} className='my-4 w-full md:w-2/3 rounded-lg  hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir2} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir3} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir9} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            <img src={rammandir10} className='my-4 w-full md:w-2/3 rounded-lg hover:scale-110 transform transition-transform' alt="Ram-Idol" />
            

            </div>
    </div>
    </div>
  )
}
