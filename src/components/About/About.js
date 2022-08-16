import React from 'react'
import './About.css'
import nestor from "../../assets/images/nestor.jpg";

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#16172a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-[10%] pl-4 flex flex-row text-4xl gap-3 font-bold'>
            <p className='inline hover:text-[#ffc857]'>
                👨🏽‍🎓 About Me
            </p>
          </div>
          <div></div>
        </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4 text-lg'>
            <div>
              <p className='pb-5'>Hi, I'm Nestor, a third year Computer Science Major at the University
                of Toronto 🎓. I recently completed a full stack project as part of the Google Developers Club (GDSC) 👨🏽‍💻.
              </p>
              <p className='pb-5'>
                I am passionate about building impactful software and learning new technologies ⚙️. 
                My interests consist of Web 🌐 and Blockchain ₿ development, as well as Artificial Intelligence 🤖.
              </p>
              <p className='pb-5'>
                Here are a few technologies I’ve been working with recently:
                <ul className='pt-2 grid grid-cols-2'>
                    <li>• JavaScript (ES6+)</li> <li>• React</li>
                    <li>• Node.js</li> <li>• HTML & CSS</li> 
                    <li>• Motoko</li> <li>• Express.js</li>
                </ul>
              </p>

            </div>
            <div>
              <img src={nestor} className='object-cover h-60 w-85 duration-500 sm:hover:scale-[110%] hover:scale-[105%] rounded'></img>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About