import React from 'react';
import './Home.css';
import {CgCode, CgCodeSlash} from "react-icons/cg"
import {BsArrowDown} from "react-icons/bs"

const Home = () => {
    return (
        <div className='w-full h-screen flex' name='Home'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <CgCode className='text-2xl sm:text-3xl  my-5 text-[#ffc857] font-bold'/>

                <p className='text-[#ccd6f6] text-2xl'>Hey, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffc857]'>Nestor Dsouza, </h1>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#ccd6f6]'> a full stack developer.</h2>

                
                <div className='flex items-center'>
                    <a href="#about" class="relative inline-block px-2 py-3 my-8 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span class="relative text-black group-hover:text-white flex items-center mx-3 gap-x-2.5 animate-pulse">Check out my page<BsArrowDown /></span>
                    </a>
                </div>

                <CgCodeSlash className='text-2xl sm:text-3xl my-5 text-[#ffc857] font-bold right-tag'/>

            </div>

        </div>
            
    )
}

export default Home;