import React from 'react';
import GridItems from '../GridItems/GridItems';

const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen  text-gray-300'>
        <div className='max-w-[1000px] flex flex-col justify-center mx-auto p-4 w-full'>
            <div className='pt-[5%] pb-[4%] text-3xl sm:text-4xl font-bold'>
                 <p className='hover:text-[#ffc857]'>👨🏽‍💻 Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 '>
                <GridItems />
            </div>

        </div>
    </div>
  )
}

export default Projects