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
      <div className="">
        <div>
          content
          <div className="">
            title
          </div>
          <div className="">
            desc
          </div>
          <div className="">
            join
          </div>
          <div className="">
            app
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;