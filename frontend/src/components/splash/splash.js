import React from 'react';

const Splash = props => {
  return(
    <div className='splash'>

      <div className='splash-footer'>
        <div className='splash-footer-join'>
          <button className='splash-footer-join-btn'>JOIN PMP</button>
          <p className='splash-footer-join-copyright'>© PMP 2020</p>
        </div>
        <div className='splash-footer-section'>
          <div className='splash-footer-section-title'>COMPANY</div>
          <div className="splash-footer-section-links">
            <div className='splash-footer-section-link'>About</div>
            <div className='splash-footer-section-link'>Careers</div>
            <div className='splash-footer-section-link'>Press</div>
            <div className='splash-footer-section-link'>Ad Choices</div>
          </div>
        </div>
        <div className='splash-footer-section'>
          <div className='splash-footer-section-title'>CONDITIONS</div>
          <div className="splash-footer-section-links">
            <div className='splash-footer-section-link'>Privacy</div>
            <div className='splash-footer-section-link'>Cookies</div>
            <div className='splash-footer-section-link'>Terms</div>
            <div className='splash-footer-section-link'>Community Guidelines</div>
          </div>
        </div>
        <div className='splash-footer-section'>
          <div className='splash-footer-section-title'>CONTACT</div>
          <div className="splash-footer-section-links">
            <div className='splash-footer-section-link'>Support</div>
            <div className='splash-footer-section-link'>Security</div>
            <div className='splash-footer-section-link'>Safety Tips</div>
          </div>
        </div>
        <div className='splash-footer-section'>
          <div className='splash-footer-section-title'>FOLLOW</div>
          <div className="splash-footer-section-links">
            <div className='splash-footer-section-link'>Blog</div>
            <div className='splash-footer-section-link'>Tech Blog</div>
            <div className='splash-footer-section-link'>Facebook</div>
            <div className='splash-footer-section-link'>Instagram</div>
            <div className='splash-footer-section-link'>Twitter</div>
          </div>
        </div>
        <div className='splash-footer-section'>
          <div className='splash-footer-section-title'>SPECIAL</div>
          <div className="splash-footer-section-links">
            <div className='splash-footer-section-link'>Vegetarian Dating</div>
            <div className='splash-footer-section-link'>Redeem Promotion</div>
            <div className='splash-footer-section-link'>Download App</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;