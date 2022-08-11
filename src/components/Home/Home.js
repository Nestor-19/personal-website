import React from 'react';
import './Home.css';
import {AiFillCaretDown} from "react-icons/ai";
import {HiArrowNarrowDown} from "react-icons/hi";

const Home = () => {
    return (
        <div className='w-full h-screen' name='Home'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ccd6f6] text-2xl'>Hey, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffc857]'>Nestor Dsouza, </h1>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#ccd6f6]'> a full stack developer</h2>

                
                <div>
                    <button className='text-[white] border-2 px-7 py-3 my-10 flex items-center'>Check out my page!<HiArrowNarrowDown /></button>
                </div>
            </div>

        </div>
            
    )
}

export default Home;