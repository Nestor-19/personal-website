import './Navbar.css';
import React , {useState} from 'react'
import logo from '../../assets/images/logo.png'
import { FaBars ,FaTimes} from 'react-icons/fa';

const Navigationbar = () => {

  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16172a] text-gray-300'>
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={!toggle ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#16172a] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6  text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      
      
    </div>
  )
}

export default Navigationbar