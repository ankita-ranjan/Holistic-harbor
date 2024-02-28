import React from 'react'

export default function Try() {
  return (
    <div>
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* logo */}
    <a className="btn btn-ghost text-xl">daisyUI</a>
    {/* heading */}
    <div className='navbar-center text-center flex justify-center'>
        <p className='font-bold text-sm md:text-xl '>Holistic Harbor<br/>
        <div className='text-orange-700 text-sm md:text-xl hidden sm:block '> KNOW YOUR RELIGIOUS PLACE HERE</div>
        </p>
    </div>

  </div>
  <div className="navbar-end">
    {/* sign in  */}
    <a className="btn">Button</a>
  </div>
        </div>
        </div>
{/* second nav bg black */}
        <div>
        <div className="navbar bg-black  text-white">
            {/* dropdown for small screen */}
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
  {/* actual options of nav */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>

</div>
        </div>
    </div>
  )
}
