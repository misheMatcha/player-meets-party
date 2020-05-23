import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  useEffect(() => {
    return(() => {
    })
  }, []);

  return(
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-content'>
          <p className='navbar-content-logo'>PMP</p>
          <div className='navbar-content-links-wrap'>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/doubletake'>DoubleTake</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/discover'>Discover</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/search'>Search</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/likes'>Likes</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/messages'>Messages</NavLink>
          </div>
        </div>
        <div className='navbar-misc'>
          <div className='navbar-profile'></div>
          <button className='navbar-join'>JOIN A-LIST</button>
          <button className='navbar-boost'>BOOST</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;