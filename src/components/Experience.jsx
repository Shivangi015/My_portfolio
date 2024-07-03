import React from 'react'
import html from '../assets/html5.webp'
import css from '../assets/css2.webp'
import js from '../assets/js1.png'
import react from '../assets/react2.webp'
import github from '../assets/github.png'
import mysql from '../assets/mysql.webp'
import tlw from '../assets/tlw2.avif'
const Experience = () => {
    const tech = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: js,
            title: 'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src: react,
            title: 'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src: tlw,
            title: 'Tailwind',
            style:'shadow-white'
        },
        {
            id:6,
            src: mysql,
            title: 'MySql',
            style:'shadow-blue-500'
        },
        {
            id:7,
            src: github,
            title: 'GitHub',
            style:'shadow-gray-500'
        },
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black text-white w-full lg:h-full p-30'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='text-center'>
                <p className='text-4xl font-bold border-b-2 inline border-gray-500 p-2'>Experience</p>
                <p className='py-6'>These are the Technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {tech.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                    </div>
                ))}
               
            </div>
        </div>
    </div>
  )
}

export default Experience