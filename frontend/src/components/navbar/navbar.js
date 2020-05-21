import React, { useState, useEffect } from 'react';

const Navbar = props => {
  useEffect(() => {
    return(() => {
    })
  }, []);

  return(
    <div className="authbar">
      <div className="authbar-nav">
        <div className="authbar-nav-logo"><p className="authbar-nav-logo-p">PMP</p></div>
        <div className="authbar-nav-login">Have an account? <button className="authbar-nav-login-btn">Sign in</button></div>
      </div>
      <div className="authbar-content-wrap">
        <div className="authbar-content">
          <div className="authbar-content-title">DATING DESERVES BETTER</div>
          <div className="authbar-content-desc">
            On Player Meets Party, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: <b>better</b>.
          </div>
          <div className="authbar-content-tos">
            By clicking Join, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
          </div>
          <div className="authbar-content-signup-btn-wrap">
            <button className="authbar-content-signup-btn">JOIN PMP</button>
          </div>
          <div className="authbar-content-mobile">
            Coming soon to android and iOS.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;