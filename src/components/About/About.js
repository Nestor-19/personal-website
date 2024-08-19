import React from 'react'
import './About.css'
import nestor from "../../assets/images/nestor.jpg";
import {FaGithub, FaLinkedin, FaFile} from "react-icons/fa";

const About = () => {
  return (
    <div name='About' className='w-full h-[780px]  text-[#F0F0F0] pt-[65%] sm:pt-0 sm:pb-[0%]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-[1%]'>
          <div className='pb-[4%] pl-4 flex flex-row text-3xl sm:text-4xl gap-3 font-bold fontSmall'>
            <p className='inline hover:text-[#ffc857]'>
                👨🏽‍🎓 About Me
            </p>
          </div>
          <div></div>
        </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4 text-lg'>
            <div>
              <p className='pb-5'>Hi, I'm Nestor, a fourth year Computer Science student at the University
                of Toronto 🎓. For the past 16 months, I worked at <a href='https://bluecatnetworks.com/' target='_blank' rel='noreferrer' className='company-link'>BlueCat Networks</a>, where I designed and implemented key DNS-related features such as providing support for new resource records, as well as EDNS Client Subnet (ECS).
                
              </p>
              <p className='pb-5'>
                I am a passionate full-stack developer who consistently strives to deliver impactful software solutions ⚙️.
                My distinct background has enabled me to communicate effectively, solve complex problems, and quickly adapt to new technologies.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className='pt-2 grid grid-cols-2'>
                    <li>• Java</li> <li>• React.js</li>
                    <li>• Python</li> <li>• Spring Boot</li> 
                    <li>• Solidity</li> <li>• Django</li>
              </ul>

            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src={nestor} className='object-cover h-60 w-85 duration-500 sm:hover:scale-[110%] hover:scale-[105%] rounded' alt=''></img>
              <div className='flex gap-3 text-xl pt-7 social-icons'>
                <a target='_blank' rel="noreferrer" href='https://github.com/Nestor-19'><span><FaGithub /></span></a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/nestor-d-souza-8943bb219/'><span><FaLinkedin /></span></a>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1x7poAOom0JOOqjJWERhYVsY3btBly4Is/view?usp=sharing'><span><FaFile /></span></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About