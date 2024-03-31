import React, { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href='/' className='logo'>
          <img src='./logo.png' alt='logo' />
          <span>AnyarsEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>

      <div className="right">
        <a href='/'>Sign in</a>
        <a href='/' className='signup'>
          Sign up
        </a>
        <div className="menuIcon">
          {/* Can also use onClick={() => setOpen((prev) => !prev)} */}
          <img src={open ? '/close.png' : '/menu.png'} alt="" onClick={() => setOpen(!open)}/>
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign in</a>
          <a href='/'>Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar