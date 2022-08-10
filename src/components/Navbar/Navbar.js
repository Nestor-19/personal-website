import './Navbar.scss';
import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faEnvelope , faBuilding} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <nav className='navBarHeadings'>
            <NavLink activeclassname="active" exact="true" to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
              <a>About</a>
            </NavLink>
            <NavLink activeclassname="active" exact="true" to="/experience">
              <FontAwesomeIcon icon={faBuilding} color="#4d4d4e" />
              <a>Experience</a>
            </NavLink>
            <NavLink activeclassname="active" exact="true" to="/projects">
              <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
              <a>Projects</a>
            </NavLink>
            <NavLink activeclassname="active" exact="true" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              <a>Contact</a>
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar