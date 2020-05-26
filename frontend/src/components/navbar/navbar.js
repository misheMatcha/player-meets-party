import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({user, boost, logout}) => {
  const [hideOpts, setHideOpts] = useState(true);
  const [hideMsgs, setHideMsgs] = useState(true);
  const placeholder = {
    username: 'Mishe',
    profile: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg',
    msgArr: {
      name: 'Alice',
      age: 36,
      sent: '3 months ago',
      msg: 'Hi, this is some blurb to fill up space to test if my dropdown is working.'
    }
  };

  useEffect(() => {
    console.log(user)
    return(() => {
    })
  }, []);

  const toggleDropdown = field => {
    switch(field){
      case 'opts':
        hideOpts ? setHideOpts(false) : setHideOpts(true);
        break;
      case 'msgs':
        hideMsgs ? setHideMsgs(false) : setHideMsgs(true);
        break;
      default:
    }
  };

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
            <div className={`navbar-content-msgs dropdown ${hideMsgs ? '' : 'navbar-hover-bg'}`} onClick={() => toggleDropdown('msgs')}>
              <div className='navbar-content-link-btn'>Messages</div>
              <div className={`navbar-msg-list-wrap dropdown-content ${hideMsgs ? '' : 'block'}`}>
                <div className='navbar-msg-list'>
                  {/* iterate over msgs in the future using this structure -- start */}
                  <div className='navbar-msg-section'>
                    <img className='navbar-msg-section-profile' src={placeholder.profile} alt='profile'/>
                    <div className='navbar-msg-section-details'>
                      <p className='navbar-msg-section-user'>{placeholder.msgArr.name}, {placeholder.msgArr.age}</p>
                      <p className='navbar-msg-section-msg'>{placeholder.msgArr.msg}</p>
                    </div>
                    <p className='navbar-msg-section-date'>{placeholder.msgArr.sent}</p>
                  </div>
                  {/* end */}
                </div>
                <button className='navbar-msg-all'>SEE ALL <p className='fas fa-angle-right'/></button>
              </div>
            </div>
          </div>
        </div>
        <div className='navbar-misc'>
          <div className={`navbar-profile dropdown ${hideOpts ? '' : 'navbar-hover-bg'}`} onClick={() => toggleDropdown('opts')}>
            <button className='navbar-profile-btn'>
              <img className='navbar-profile-img' src={placeholder.profile} alt='profile'/>
              <p className='navbar-profile-user'>{placeholder.username}</p>
              <div className='fas fa-angle-down'/>
            </button>
            <div className={`navbar-profile-list dropdown-content ${hideOpts ? '' : 'block'}`}>
              <p className='navbar-profile-item'><Link to='/profile'>Profile</Link></p>
              <p className='navbar-profile-item'>Settings</p>
              <p className='navbar-profile-item'>Help</p>
              <p className='navbar-profile-item' onClick={() => logout()}>Sign Out</p>
            </div>
          </div>
          <button className='navbar-btn nbjoin'>JOIN A-LIST</button>
          {boost}
        </div>
      </div>
    </div>
  );
};

export default Navbar;