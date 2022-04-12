import React from 'react';
import { Link } from 'react-router-dom';
import sfcLogo from '../images/sfcLogo.png';
import hfLogo from '../images/hfLogo.png';


function Navbar() {
  return (
    <div className='navbar-wrapper'>
        {/* TODO import sutton logo */}
        <div className='sutton-logo-wrapper'>
          <img className='sutton-logo' src={sfcLogo} alt='Sutton logo' />
        </div>
        <div className='navbar-links'>
            <Link to='/' className='navbar-link'>Home</Link>
            <Link to='/contact' className='navbar-link'>Contact Us</Link>
            <Link to='/showcase' className='navbar-link'>Showcase</Link>
        </div>
        <a className='homefloor-link' href='https://www.homefloorandkitchens.com' alt="homefloor logo" rel="noreferrer" target="_blank">
          {/* <div className='homefloor-img-wrapper'> */}
            <img className='homefloor-img' src={hfLogo} alt='Homefloor logo' href='https://google.com'/>
            <div className='homefloor-text'>Installer</div>
          {/* </div> */}
        </a>


        {/* <div className='homefloor-logo-wrapper'>
            <div className='homefloor-img-wrapper'>
              <img className='homefloor-img' src={hfLogo} alt='Homefloor logo' href='https://google.com'/>
            </div>
          </a>
        </div> */}
    </div>
  )
}

export default Navbar