import React from 'react';
import { Link } from 'react-router-dom';
import sfcLogo from '../images/sfcLogo.png';

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
    </div>
  )
}

export default Navbar