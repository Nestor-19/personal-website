import React from 'react'
import {FaGithub} from "react-icons/fa";
import Shell from '../../assets/images/MyShell.png';
import RMS from '../../assets/images/RMS.png';

const MoreProjects = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${Shell})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content' id='shell'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                    MyShell
                </span>
                <div className='pt-4 pl-2  text-gray-300'>
                    <p className='pb-[4%]'>A fully functional shell that uses unix commands.</p>
                    <p className='pb-[4%]'>C, Unix-like operating system commands</p>
                </div>
            </div>
        </div>


        <div style={{backgroundImage: `url(${RMS})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content' id="UTM">
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-md sm:text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                  Retail Management System
                </span>
                <div className='pt-4 pl-2  text-gray-300 text-sm sm:text-lg'>
                    <p className='pb-[4%]'>A simple GUI, for a local supermarket to effectively manage their inventory.</p>
                    <p className='pb-[4%]'>Python, Tkinter, DB Browser for SQLite</p>
                    <a className='text-center hover:text-[#16172a] text-[20px]' 
                        href="https://github.com/Nestor-19/Retail-Management-System" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreProjects