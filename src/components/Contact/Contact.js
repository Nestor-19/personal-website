import React from 'react';
import './Contact.css'

const Contact = () => {

  return (
    <div name='Contact' className="w-full h-screen flex items-center justify-center p-4">
        <form action="https://formspree.io/f/xzbwzlrd" method="POST" className="flex flex-col max-w-[1000px] w-full">
            <div className="pb-10 text-gray-300">
                <span className="text-4xl pr-2 waving-hand">👋</span>
                <p className="text-4xl font-bold inline hover:text-[#ffc857]">Contact</p>
            </div>

            <input
              id="name"
              type="text" 
              name="name"
              className='bg-[#ccd6f6] p-2 mb-5 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
              placeholder="Name"
              required
            />

            <input
              id="email"
              type="email" 
              name="email"
              className='bg-[#ccd6f6] p-2 mb-4 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
              placeholder="Email"
              required
            />

            <textarea
              id="message"
              name="message"
              className='my-4 bg-[#ccd6f6] p-2 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
              rows='9'
              placeholder="Message"
              required
            />

            <button type="submit" className='text-black border-2 bg-[#ccd6f6]  hover:bg-[#ffc857] hover:text-black px-8 py-1 mt-6 mx-auto rounded-md font-medium'>
              Say Hi!
            </button>

          </form>
    </div>
    
  )
}

export default Contact