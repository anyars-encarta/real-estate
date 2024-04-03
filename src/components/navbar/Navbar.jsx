import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCloser from '../MenuCloser';
import './navbar.scss';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  MenuCloser(ref, () => setOpen(false));

  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to='/' className='logo'>
          <img src='./logo.png' alt='logo' />
          <span>AnyarsEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>

      <div className="right">
        {user ? (
          <div className='user'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user" />
            <span className='userText'>Anyars Encarta</span>
            <Link to='/profile' className='profile'>
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/'>Sign in</Link>
            <Link to='/' className='signup'>Sign up</Link>
          </>
        )}

        <div className="menuIcon">
          {/* Can also use onClick={() => setOpen((prev) => !prev)} */}
          <img src={open ? '/close.png' : '/menu.png'} alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? 'menu active' : 'menu'} ref={ref}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          <Link to='/'>Sign in</Link>
          <Link to='/'>Sign up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar