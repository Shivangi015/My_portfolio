import React from 'react'
import pic from '../assets/pic1.jpeg'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
    name="home"
    className='h-screen w-full bg-gradient-to-b via-black from-black to-gray-800'
    >
       <div className='justify-center items-center max-w-screen-lg flex flex-col mx-auto h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-white text-4xl sm:text-6xl font-bold'>I'm a MERN Stack Developer</h2>
            <p className='text-gray-500  py-4  max-w-md text-white'>Enthusiastic and skilled software developer with expertise in HTML, React, CSS,
            JavaScript, C++, and data structures
            and algorithms (DSA) problem-solving. Adept at building responsive and user friendly web applications and
            contributing to open-source projects on GitHub.</p>
            <div>
                <button className='group flex text-white px-6 py-3 my-2 bg-gradient-to-r  from-cyan-500 to-blue-500 items-center rounded-md w-fit cursor-pointer hover:bg-gradient-to-l from-blue-500 to-cyan-500'>
                <Link to='portfolio' smooth duration={500}>Portfolio</Link>
                    <span className='px-2 group-hover:rotate-90 duration-300'><BsFillArrowRightCircleFill size={25}/></span>
                </button>
            </div>
            </div>
        <div>
            <img src={pic} alt="My Photo" className='rounded-2xl size-80 w-2/3 mx-auto md:w-full'/>
        </div>
       </div>
    </div>
  )
}

export default Home;