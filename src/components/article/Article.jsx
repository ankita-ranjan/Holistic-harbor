import React, { useState } from 'react'
import temple from './temple.jpeg'


export default function Article() {
  
  const data =[
    
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },

    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },   
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    },   
    {
      img:"temple",
      title:"The Coldest Sunset",
      descprition:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.      "
    }    
        
      

  ]

  const [readMore, setReadMore] = useState(false)
  const handelClick=()=>{
setReadMore(!readMore)
  }
  
return (
<div className='bg-gradient-to-b from-orange-300 via-white to-green-300 '>
  <div className='grid  lg:grid-cols-3  grid-cols-1 p-4 '>
  {data.map((students) => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
  <img class="w-full" src={temple} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{students.title}</div>
    <p class="text-gray-700 text-base">
      {!readMore && students.descprition.slice(0, 10)} 
      {
      readMore && students.descprition
      }
       <p onClick={handelClick} className='text-blue-400 underline'> Read More...</p>   </p>
       <div>
    
    </div>
     
  </div>
  
</div>

))}

</div>

</div>
)
}
