import React from 'react'
import temple from "./temple.jpeg";


export default function Rammandir() {
  return (
    <div className='font-bold text-orange-500 text-xl flex flex-col'>
        <h1 className='text-center'>Ram Mandir: A Place of Belief and Harmony</h1>
 <div className=' flex justify-center'>
        <img src={temple} className='h-50 w-50 ' alt="" />
        </div>
    </div>
  )
}
