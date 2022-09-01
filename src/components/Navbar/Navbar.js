import './Navbar.css';
import React , {useState} from 'react'
import logo from '../../assets/images/logo.png'
import { FaBars ,FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navigationbar = () => {

  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16172a] text-[#ccd6f6] font-light'>
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>

      <ul className='hidden md:flex'>
        <li className='navbar-headings'>
          <Link to="Home" smooth={true} duration={500}>
            <p className='cursor-pointer'>Home</p>
          </Link>
        </li>
        <li className='navbar-headings'>
          <Link to="About" smooth={true} duration={500}>
            <p className='cursor-pointer'>About</p>
          </Link>
        </li>
        <li className='navbar-headings'>
          <Link to="Experience" smooth={true} duration={500}>
            <p className='cursor-pointer'>Experience</p>
          </Link>
        </li>
        <li className='navbar-headings'>
          <Link to="Projects" smooth={true} duration={500}>
            <p className='cursor-pointer'>Projects</p>
          </Link>
        </li>
        <li className='navbar-headings'>
          <Link to="Contact" smooth={true} duration={500}>
            <p className='cursor-pointer'>Contact</p>
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Layout */}
      <ul className={!toggle ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#16172a] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl navbar-headings'>
          <Link to="Home" smooth={true} duration={500} onClick={handleClick}><p className='cursor-pointer'>Home</p></Link>
        </li>
        <li className='py-6 text-4xl navbar-headings'>
          <Link to="About" smooth={true} duration={500} onClick={handleClick}><p className='cursor-pointer'>About</p></Link>
        </li>
        <li className='py-6 text-4xl navbar-headings'>
          <Link to="Experience" smooth={true} duration={500} onClick={handleClick}><p className='cursor-pointer'>Experience</p></Link>
        </li>
        <li className='py-6 text-4xl navbar-headings'>
          <Link to="Projects" smooth={true} duration={500} onClick={handleClick}><p className='cursor-pointer'>Projects</p></Link>
        </li>
        <li className='py-6 text-4xl navbar-headings'>
          <Link to="Contact" smooth={true} duration={500} onClick={handleClick}><p className='cursor-pointer'>Contact</p></Link>
        </li>
      </ul>
      
      
    </div>
  )
}

export default Navigationbar