import React from 'react'
import Stock from '../assets/p1.jpeg'
import Form from '../assets/p2.jpeg'
import aqi from '../assets/p4.jpeg'
import arthmarga from '../assets/p3.jpeg'

const portfolio = () => {
    const project = [
        {
            id:1,
            src:arthmarga,
            code:'https://github.com/Shivangi015/Financial_Literacy.git',
            demo:'https://financialliteracy-33625.web.app/'
        },
        {
            id:2,
            src:Stock,
            code:'https://github.com/Shivangi015/Stock-Tracker.git',
            demo:'https://668405fe202d0d6c941d267a--harmonious-capybara-826dd1.netlify.app/'
        },
        {
            id:3,
            src:Form,
            code:'https://github.com/Shivangi015/CodeAlpha_Survey_Form.git',
            demo:'https://surveyform166.netlify.app/'
        },
        {
            id:4,
            src:aqi,
            code:'https://github.com/Shivangi015/airwater.git',
            demo:'https://6512753ccbf14317dcbef823--jolly-florentine-1042e0.netlify.app/'
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-full sm:h-screen'>
        <div className='max-w-screen-lg justify-center w-full h-full p-4 mx-auto flex flex-col'>
            <div className='pb-8 mt-28  text-center'>
                <p className='text-4xl font-bold border-b-2 inline border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {project.map(({id,src,demo,code})=>(
                
                 <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                 <img
                 src={src} 
                 alt="" 
                 className='rounded-md duration-200 hover:scale-105'
                 />
                 <div className='flex items-center justify-center'>
                 <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'
                  target='_blank'
                  rel='noreferrer'
                 >Demo</a>
                 <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'
                  target='_blank'
                  rel='noreferrer'
                 >Code</a>
                 </div>
            
             </div>
            ))}
             </div>
        </div>

    </div>
  )
}

export default portfolio