import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({boost}) => {
  const placeholder = {
    username: 'as',
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg'
  };

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
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/doubletake'><div className='far fa-images'/> DoubleTake</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/discover'><div className='far fa-compass'/> Discover</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/search'><div className='fas fa-search'/> Search</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/who-likes-you'><div className='far fa-heart'/> Likes</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/messages'><div className='far fa-comment-alt'/> Messages</NavLink>
          </div>
        </div>
        <div className='navbar-misc'>
          <div className='navbar-profile'>
            <img className='navbar-profile-img' src={placeholder.profile} alt='profile'/>
            <p className='navbar-profile-user'>{placeholder.username}</p>
            <div className='fas fa-angle-down'/>
          </div>
          <button className='navbar-btn nbjoin'>JOIN A-LIST</button>
          {boost}
        </div>
      </div>
    </div>
  );
};

export default Navbar;