import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Experience = () => {
  return (
    <div name='Experience' className='w-full h-[820px] sm:h-[780px] text-gray-300 bg-[#16172a] pt-[40%] sm:pt-[0]'>
        <div className='flex flex-col justify-center items-center w-full sm:pt-[10%] pt-[30%]'>
            <div className='max-w-[1000px] w-full gap-8'>
                <div className='pb-[6%] pl-4 flex flex-row text-3xl sm:text-4xl gap-4 sm:gap-3 font-bold fontSmall'>
                    <p className='hover:text-[#ffc857]'>
                        🏢 Experience
                    </p>
                </div>

                <div className='pl-4 pr-4 text-gray-200 gap-[1%]'>
                    <div className='rounded-lg border flex flex-col gap-4 bg-[#1f2041] pt-2 pl-2 pb-2'>
                        <p className='font-bold text-white'>CRM Analyst @ <span className='inline text-[#ffc857]'>Metadata Technologies</span></p>
                        <p>July 2019 – Sept. 2019</p>
                        <div className='text-md sm:text-lg'>
                            <ul className='list-outside flex flex-col gap-4 list-disc ml-5'>
                                <li>Used Microsoft Dynamics CRM to maintain company database with essential account and sales information.</li>
                                <li>Provided recommendations to improve CRM management systems.</li>
                                <li>Researched potential clients and markets to better understand the economic environment.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-[10%] sm:pt-[11%] animate-bounce text-[150%] pr-[3%] text-white'>
                <Link to="Projects" smooth={true} duration={500}>
                    <p><button><AiFillCaretDown /></button></p>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Experience