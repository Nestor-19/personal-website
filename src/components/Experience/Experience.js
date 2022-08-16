import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const Experience = () => {
  return (
    <div name='Experience' className='w-full h-[670px] text-gray-300 bg-[#16172a]'>
        <div className='flex flex-col justify-center items-center w-full pt-[6%]'>
            <div className='max-w-[1000px] gap-8'>
                <div className='pb-[5%] pl-4 flex flex-row text-4xl gap-3 font-bold'>
                    <p className='hover:text-[#ffc857]'>
                        🏢 Experience
                    </p>
                </div>

                <div className='grid grid-cols-2 pl-4 pr-4 text-gray-200 gap-[1%]'>
                    <div className='pt-[50%] sm:pt-20'>
                        <ul className=" w-[50%] sm:w-[40%] h-[18%] sm:h-[25%] text-sm font-bold rounded-lg border bg-[#1f2041]">
                            <li className="py-2 px-4 rounded-t-lg text-white">Metadata Technologies</li>
                        </ul>
                    </div>
    
                    <div className='rounded-lg border flex flex-col gap-4 bg-[#1f2041] pt-2 pl-2 pb-2'>
                        <p className='font-bold text-white'>CRM Analyst @ <p className='inline text-[#ffc857]'>Metadata</p></p>
                        <p>July 2019 – Sept. 2019</p>
                        <div className=' flex flex-col gap-2'>
                            <li>Used Microsoft Dynamics CRM to maintain company database with essential account and sales information.</li>
                            <li>Provided recommendations to improve CRM management systems.</li>
                            <li>Researched potential clients and markets to better understand the economic environment.</li>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-[11%] animate-bounce text-[150%] pr-[5%] text-white'>
                <button><AiFillCaretDown /></button>
            </div>
        </div>
    </div>
  )
}

export default Experience