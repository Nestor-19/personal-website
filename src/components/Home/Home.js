import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Home = () => {

    return (
        <div className='w-full h-screen ' name='Home'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <p className='text-[#ccd6f6] text-2xl'>Hey, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffc857]'>Nestor Dsouza, </h1>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#ccd6f6]'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("a software developer.")
                            .start();
                        }}
                    />
                </h2>
                
                <div className='flex items-center'>
                    <Link to="About" smooth={true} duration={500} className="relative inline-block px-2 py-3 my-8 font-medium group text-sm sm:text-base cursor-pointer">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white flex items-center mx-3 gap-x-2.5 animate-pulse">Check out my page
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight />
                                </span>
                            </span>
                    </Link>
                </div>


            </div>

        </div>
            
    )
}

export default Home;