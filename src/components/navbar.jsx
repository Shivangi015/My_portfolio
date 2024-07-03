import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio' // Ensure this matches the name in the portfolio component
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div className='flex justify-between bg-black text-white w-full h-20 items-center px-4'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Shivangi</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ link, id }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden text-gray-500'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-bl from-black to-gray-800 text-gray-500 absolute'>
          {links.map(({ id, link }) => (
            <li key={id} className='text-gray-500 cursor-pointer capitalize py-6 px-4 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
