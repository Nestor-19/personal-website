import React from 'react'
import './About.css'
import nestor from "../../assets/images/nestor.jpg";
import {FaGithub, FaLinkedin, FaFile} from "react-icons/fa";

const About = () => {
  return (
    <div name='About' className='w-full h-[780px] bg-[#16172a] text-gray-300 pt-[65%] sm:pt-0 sm:pb-[10%]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-[10%]'>
          <div className='pb-[12%] pl-4 flex flex-row text-3xl sm:text-4xl gap-3 font-bold fontSmall'>
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
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className='pt-2 grid grid-cols-2'>
                    <li>• JavaScript (ES6+)</li> <li>• React</li>
                    <li>• Node.js</li> <li>• HTML & CSS</li> 
                    <li>• Solidity</li> <li>• Express.js</li>
              </ul>

            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={nestor} className='object-cover h-60 w-85 duration-500 sm:hover:scale-[110%] hover:scale-[105%] rounded' alt=''></img>
              <div className='flex gap-3 text-xl pt-7 social-icons'>
                <a target='_blank' rel="noreferrer" href='https://github.com/Nestor-19'><span><FaGithub /></span></a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/nestor-d-souza-8943bb219/'><span><FaLinkedin /></span></a>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1lRg57_IBVV98JI2KbnECHXTkf4ptWV3U/view?usp=sharing'><span><FaFile /></span></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About