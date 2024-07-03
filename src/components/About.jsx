import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-gradient-to-b from-gray-800 to-black text-white h-full '>
        <div className='max-w-screen-lg m-auto text-justify flex flex-col items-center p-4 justify-center w-full h-full'>
       <div className='text-4xl pb-8 font-bold inline '>
        <p className='border-b-2 border-gray-500 mb-10'>About</p>
       </div>
       <div className='text-xl text-gray-300'>
        <p>
        I am a final year B.Tech student specializing in Computer Science and Engineering at Kamla Nehru Institute of Technology (KNIT), Sultanpur, Uttar Pradesh. With a strong foundation in MERN stack development, I am passionate about creating responsive and user-friendly web applications. My technical journey includes being a finalist in the American Express Makeathon 2024 and getting shortlisted for the Smart India Hackathon..</p>
        <br/>
        <p>Beyond academics, I actively contribute to my college community. As the Media Coordinator for the Institute of Engineers India (IEI) and a dedicated member of the Sports Council, I engage in activities such as chess and table tennis. My involvement in these councils reflects my commitment to both my personal and professional growth.</p>
        </div>
       </div>
    </div>
  )
}

export default About