import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Rammandir from "../components/description/Rammandir";
import temple from "../components/description/temple.jpeg";
import ramidol from "../components/description/ramidol.jpeg";
import Ramldol from "../components/description/RamIdol.jpg";
import rammandir1 from "../components/description/rammandir1.jpg";
import rammandir from "../components/description/rammandir.jpg";
import rammandir2 from "../components/description/rammandir2.jpg";
import rammandir3 from "../components/description/rammandir3.jpg";
import rammandir4 from "../components/description/rammandir4.jpg";
import rammandir5 from "../components/description/rammandir5.jpg";
import rammandir6 from "../components/description/rammandir6.jpg";
import rammandir7 from "../components/description/rammandir7.jpg";
import rammandir8 from "../components/description/rammandir8.jpg";
import rammandir9 from "../components/description/rammandir9.jpg";
import rammandir10 from "../components/description/rammandir10.jpg";

const ramImage = [
  {
    id: 1,
    imgSrc: rammandir4,
    imgTitle: "Ram-Idol",
  },
  {
    id: 2,
    imgSrc: rammandir5,
    imgTitle: "Ram-Idol",
  },
  {
    id: 3,
    imgSrc: rammandir6,
    imgTitle: "Ram-Idol",
  },
  {
    id: 4,
    imgSrc: rammandir7,
    imgTitle: "Ram-Idol",
  },
  {
    id: 5,
    imgSrc: rammandir8,
    imgTitle: "Ram-Idol",
  },
  {
    id: 6,
    imgSrc: rammandir,
    imgTitle: "Ram-Idol",
  },
  {
    id: 7,
    imgSrc: rammandir2,
    imgTitle: "Ram-Idol",
  },
  {
    id: 8,
    imgSrc: rammandir2,
    imgTitle: "Ram-Idol",
  },
  {
    id: 9,
    imgSrc: rammandir3,
    imgTitle: "Ram-Idol",
  },
  {
    id: 10,
    imgSrc: rammandir9,
    imgTitle: "Ram-Idol",
  },
  {
    id: 11,
    imgSrc: rammandir10,
    imgTitle: "Ram-Idol",
  },
];

export default function VaranasiPage() {
    let obj = {
        "title":"Varanasi: A Timeless Journey Along the Banks of the Ganges",
        "intro":" The Ram Mandir, dedicated to Lord Ram, holds a special place in the hearts of millions of Hindus worldwide. Its journey from ancient times to the present day is marked by reverence, controversy, and ultimately, triumph.",
        "history":"The history of the Ram Mandir dates back thousands of years to the ancient city of Ayodhya, believed to be the birthplace of Lord Ram. According to Hindu mythology, Ayodhya was the capital of the ancient Kosala Kingdom, ruled by Lord Ram's father, King Dasharatha. The Ramayana, an ancient Sanskrit epic, chronicles the life and adventures of Lord Ram, including his birth in Ayodhya.",
        "construction":" The original Ram Mandir is said to have been built by King Dasharatha's descendants to honor Lord Ram's birthplace. Over the centuries, the temple became a revered pilgrimage site and a symbol devotion for millions of Hindus.",
        "controversy":"In the 16th century, during the Mughal era, a mosque known as the Babri Masjid was constructed on the site where the Ram Mandir once stood. This led to centuries of religious and political disputes over the ownership of the land. In 1992, the Babri Masjid was demolished by Hindu activists, sparking nationwide riots and reigniting tensions between religious communities.",
        "battleTitle":"Legal Battles and Ayodhya Verdict",
        "battle":"Following the demolition of the Babri Masjid, legal battles ensued over the ownership of the land. The case eventually reached the Supreme Court of India, which delivered a historic verdict in November 2019. The court ruled in favor of the construction of a Ram Mandir at the disputed site while also granting alternative land to the Muslim community for the construction of a mosque.",
        "ceremonyTitle":"Groundbreaking Ceremony and Construction",
        "ceremony":"On August 5, 2020, Prime Minister Narendra Modi laid the foundation stone for the construction of the Ram Mandir in Ayodhya. The ceremony was attended by religious leaders, politicians, and dignitaries from across the country. Since then, construction has been underway, with devotees eagerly awaiting the completion of the temple.",
        "present1":"As of current date, the construction of the Ram Mandir in Ayodhya continues to progress. The temple is expected to be a magnificent architectural marvel, symbolizing the culmination of centuries-old aspirations and the revival of Hindu heritage.",
        "present2":"The journey of the Ram Mandir from ancient times to the present day is a testament to the enduring faith and resilience of millions of Hindus. While it has been marked by challenges and controversies, the vision of a grand Ram Mandir in Ayodhya stands as a beacon of hope and unity for people of all faiths.",
        "image1":temple,
        "image2":ramidol,
        "image3":Ramldol,
        "image4":rammandir1,
        "images":ramImage,
    }
      return (
        <div>
          <Navbar />
          <Rammandir {...obj}/>
          <Footer />
        </div>
      );
    }
