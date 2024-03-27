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
        <p className=' text-justify font-lato'>Ram Mandir, located in the ancient city of Ayodhya, is a place of immense significance for millions of people across India and around the world. It stands as a symbol of faith, devotion, and cultural heritage, encapsulating the rich history and beliefs of the Hindu community.<br/><br/>
        <p className='text-justify font-lato font-bold'>Historical Significance<br/></p>
The history of Ram Mandir dates back to ancient times, tracing its roots to the legendary king Lord Ram, also known as Maryada Purushottam, and his epic tale, the Ramayana. According to Hindu mythology, Ayodhya is believed to be the birthplace of Lord Ram, making it a sacred land revered by devotees for centuries.</p>
            <img src={ramidol} className='my-8 w-2/3  rounded-lg' alt="" />
            <p className=' text-justify font-lato'>
              <p className='text-justify font-lato font-bold'>Construction of the Temple<br/></p>
            The journey to construct Ram Mandir has been a long and tumultuous one, marked by legal battles, political controversies, and social unrest. After years of deliberation and legal proceedings, the Supreme Court of India finally ruled in favor of the construction of the temple at the disputed site in Ayodhya in November 2019. The historic verdict paved the way for the fulfillment of the long-cherished dream of millions of devotees to rebuild the temple dedicated to Lord Ram.
            <br/><br/>
            <p className='text-justify font-lato font-bold'>Architectural Marvel<br/></p>
            The architectural design of Ram Mandir is inspired by traditional Hindu temple architecture, characterized by intricate carvings, majestic spires, and ornate sculptures depicting scenes from the Ramayana. The main sanctum sanctorum houses the idol of Lord Ram along with Goddess Sita, his devoted wife, and his loyal companion Lord Hanuman. The temple complex also includes various other shrines, pavilions, and prayer halls dedicated to other deities associated with Lord Ram.</p>
            <img src={RamIdol} className='my-8 w-2/3  rounded-lg' alt="Ram-Idol" />
            <p className='text-justify font-lato'>
            <p className='text-justify font-lato font-bold'>Cultural and Religious Significance:<br/></p>
Ram Mandir holds immense cultural and religious significance for Hindus worldwide. It serves as a sacred pilgrimage site where devotees from different corners of the globe come to seek blessings, offer prayers, and immerse themselves in the divine aura of Lord Ram. The temple also symbolizes the unity and resilience of the Hindu community, transcending geographical boundaries and linguistic differences.
<br/><br/>
<p className='text-justify font-lato font-bold'>Impact on Society<br/></p>
The construction of Ram Mandir has had a profound impact on Indian society, fostering a sense of unity, harmony, and national pride among people of diverse backgrounds. It has brought together people from various walks of life, irrespective of caste, creed, or religion, to participate in the monumental task of rebuilding a shrine that holds deep spiritual significance for millions.
<br/><br/>
<img src={rammandir1} className='my- w-2/3  rounded-lg' alt="Ram-Idol" />
<p className='text-justify font-lato font-bold'>Tourist Attraction<br/></p>
Apart from its religious significance, Ram Mandir also attracts tourists and history enthusiasts from around the world who are fascinated by its rich architectural heritage and cultural legacy. The temple complex, with its serene ambiance and spiritual atmosphere, offers visitors a glimpse into India's glorious past and vibrant cultural tapestry.
<br/><br/>Ram Mandir stands as a testament to the enduring faith, devotion, and resilience of the Hindu community. It serves as a beacon of hope, inspiration, and spiritual enlightenment for generations to come, reminding us of the timeless values of righteousness, truth, and compassion embodied by Lord Ram. As the temple takes its place in the hearts and minds of millions, it reaffirms the eternal bond between humanity and divinity, guiding us on the path of righteousness and harmony.
            </p>
        </div>
        <div className='flex  flex-col md:items-end pe-10 '> 
        <h1 className=' flex text-2xl text-orange-500'>Related Image</h1>
      

            
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
