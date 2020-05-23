import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const placeholder = {
    username: 'Michelle',
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
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/doubletake'><p className='far fa-images'/> DoubleTake</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/discover'><p className='far fa-compass'/> Discover</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/search'><p className='fas fa-search'/> Search</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/likes'><p className='far fa-heart'/> Likes</NavLink>
            <NavLink className='navbar-content-link' activeClassName='navbar-content-link-active' to='/messages'><p className='far fa-comment-alt'/> Messages</NavLink>
          </div>
        </div>
        <div className='navbar-misc'>
          <div className='navbar-profile'>
            <img className='navbar-profile-img' src={placeholder.profile}/>
            <p className='navbar-profile-user'>{placeholder.username}</p>
            <p className='fas fa-angle-down'/>
          </div>
          <button className='navbar-join'>JOIN A-LIST</button>
          <button className='navbar-boost'><div className='fas fa-bolt'/> BOOST</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;