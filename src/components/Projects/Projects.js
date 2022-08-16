import React from 'react'
import Carousel from '../Carousel/Carousel'

const Projects = () => {
  return (
    <div name='Projects' className='w-full h-[700px] md:h-screen  text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full pt-[4%]'>
            <div className='max-w-[1000px] w-full gap-8'>
                <div className='pb-[6%] pl-4 flex flex-row text-3xl sm:text-4xl gap-3 font-bold'>
                    <p className='hover:text-[#ffc857]'>👨🏽‍💻 Projects</p>
                </div>
                <div className='pl-4 pr-4 text-gray-200 h-[50%]'>
                    <Carousel />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects