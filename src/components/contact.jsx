import React from 'react'

const contact = () => {
  return (
    <div name='contact'
    className='bg-gradient-to-b from-black to-gray-800 w-full h-full p-4'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 text-white text-center'>
                <p className='text-4xl font-bold border-b-2 border-gray-500 inline'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/lajkkpjb'  method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='Name' 
                    placeholder='Enter Your Name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                    type="text" 
                    name='Email' 
                    placeholder='Enter Your Email' 
                    className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea name="message" 
                    rows='10'
                    placeholder='Enter Your Message' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact