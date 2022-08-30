import React from "react";
import {FaGithub} from "react-icons/fa";
import UTM from '../../assets/images/UTimeManager.png';
import NBA from '../../assets/images/NBA.png';
import DNote from '../../assets/images/DNote.png';
import Crypt from '../../assets/images/CryptStore.png';
import MuskGame from '../../assets/images/ThreeMuskGame.png';
import BookIt from '../../assets/images/BookIt.png';


const GridItems = () => {
  return (
    <>
            <div style={{backgroundImage: `url(${UTM})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content' id="UTM">
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        UTimeManager
                    </span>
                    <div className='pt-4 pl-2  text-gray-300'>
                        <p className='pb-[4%]'>A full stack app to better manage your weekly schedule.</p>
                        <p className='pb-[4%]'>MongoDB, Express.js, React.js, Node.js, Docker</p>
                        <a className='text-center hover:text-[#16172a] text-[20px]' 
                            href="https://github.com/GDSCUTM-CommunityProjects/UTimeManager" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${NBA})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        NBA Ticket Explorer
                    </span>
                    <div className='pt-2 pl-2  text-gray-300'>
                        <p className='pb-[2%]'>A web-scraping application that displays the best available tickets for a NBA game.</p>
                        <p className='pb-[1%]'>CSS, HTML, Java Script, Python, Selenium, Django</p>
                        <a className='text-center hover:text-[#16172a] text-[20px]' 
                            href="https://github.com/Nestor-19/NBA-Ticket-Explorer" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${DNote})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content' id="DNOTE">
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        DNote
                    </span>
                    <div className='pt-2 pl-2  text-gray-300'>
                        <p className='pb-[4%]'>A decentralized note-taking application that makes use of the Blockchain to store data.</p>
                        <p className='pb-[4%]'>Next.js, Solidity, Java Script, CSS, Truffle</p>
                        <a className='text-center hover:text-[#16172a] text-[20px]' 
                            href="https://github.com/Nestor-19/DNote" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Crypt})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        CryptStore
                    </span>
                    <div className='pt-3 pl-2  text-gray-300'>
                        <p className='pb-[4%]'>A Web3 inspired online book store that uses cryptocurrency as a form of payment.</p>
                        <p className='pb-[2%]'>React.js, Moralis, JavaScript, HTML, CSS</p>
                        <a className='text-center hover:text-[#16172a] text-[20px]' 
                            href="https://github.com/WinstonPais/CryptStore" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${BookIt})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content BookIt'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        BookIt 
                    </span>
                    <div className='pt-4 pl-2  text-gray-300'>
                        <p className='pb-[4%]'>A full stack travel booking app that makes it easier to experience the world.</p>
                        <p className='pb-[4%]'>MongoDB, Express.js, React, Node.js</p>
                        <a className='text-center hover:text-[#16172a] text-[20px]' 
                            href="https://github.com/Nestor-19/BookIt" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${MuskGame})`}} className='flex justify-center items-center group container rounded-lg mx-auto div-content musk'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider pl-2 flex flex-row gap-3'>
                        Three Musketeers
                    </span>
                    <div className='pt-4 pl-2  text-gray-300'>
                        <p className='pb-[4%]'>An abstract strategy board game that offers conflict between unequal forces!</p>
                        <p className='pb-[4%]'>Java, JavaFX</p>
                    </div>
                </div>
            </div>

        


    </>
  )
}

export default GridItems;