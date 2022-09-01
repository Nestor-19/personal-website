import React, { useState } from 'react';
import GridItems from '../GridItems/GridItems';
import MoreProjects from '../MoreProjects/MoreProjects';

const Projects = () => {

  const [isViewMore, setViewMore] = useState(false);

  const toggleButton = () => {
    setViewMore(prevState => !prevState);
  }

  return (
    <div name='Projects' className='w-full md:h-screen  text-gray-300 pt-[10%] sm:pt-[4%]'>
        <div className='max-w-[1000px] flex flex-col justify-center mx-auto p-4 w-full'>
            <div className='pt-[5%] pb-[4%] text-3xl sm:text-4xl font-bold'>
                 <p className='hover:text-[#ffc857]'>👨🏽‍💻 Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <GridItems />
            </div>

            <div className='pt-10 pb-5 flex justify-center font-normal'>
              <button 
                  className='rounded-lg bg-gray-300 w-[20%] md:w-[15%] sm:w-[15%] text-[#16172a] view-more 
                  transform transition duration-300 hover:scale-[1.1]'
                  onClick={toggleButton}>
                    {isViewMore ? <p>View Less</p>: <p>View More</p>}
              </button>
            </div>

        </div>

        <div className='max-w-[1000px] flex flex-col justify-center mx-auto p-4  '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5'>
                {isViewMore ? <MoreProjects />: <></>}
            </div>
        </div>
    </div>
  )
}

export default Projects