import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {
  return(
    <div className='splash'>
      <div className='splash-main'>
        <div className='splash-bg'>
          <div className='splash-bg-colors'/>
          <div className='splash-bg-images'/>
        </div>
        <div className='splash-content-container'>
          <div className='splash-nav'>
            <div className='splash-nav-logo'>PMP</div>
            <div className='splash-nav-login'>Have an account? <button className='splash-nav-login-btn'>Sign in</button></div>
          </div>
          <div className='splash-content'>
            <div className='splash-content-wrap'>
              <h3 className='splash-content-title'>DATING DESERVES BETTER</h3>
              <div className='splash-content-desc'>
                On Player Meets Party, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: <b>better</b>.
              </div>
              <div className='splash-content-tos'>
                By clicking Join, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
              </div>
              <div className='splash-content-join'>
                <Link to='/signup' className='splash-content-join-btn'>JOIN PLAYER MEETS PARTY</Link>
              </div>
              <div className='splash-content-mobile'>
                Coming soon to android and iOS.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='splash-footer'>
        <div className='splash-footer-container'>
          <div className='splash-footer-join'>
            <Link to='/signup' className='splash-footer-join-btn'>JOIN PLAYER MEETS PARTY</Link>
            <p className='splash-footer-join-copyright'>© PMP 2020</p>
          </div>
          <div className='splash-footer-section'>
            <div className='splash-footer-section-title'>COMPANY</div>
            <div className='splash-footer-section-links'>
              <div className='splash-footer-section-link'>About</div>
              <div className='splash-footer-section-link'>Careers</div>
              <div className='splash-footer-section-link'>Press</div>
              <div className='splash-footer-section-link'>Ad Choices</div>
            </div>
          </div>
          <div className='splash-footer-section'>
            <div className='splash-footer-section-title'>CONDITIONS</div>
            <div className='splash-footer-section-links'>
              <div className='splash-footer-section-link'>Privacy</div>
              <div className='splash-footer-section-link'>Cookies</div>
              <div className='splash-footer-section-link'>Terms</div>
              <div className='splash-footer-section-link'>Community Guidelines</div>
            </div>
          </div>
          <div className='splash-footer-section'>
            <div className='splash-footer-section-title'>CONTACT</div>
            <div className='splash-footer-section-links'>
              <div className='splash-footer-section-link'>Support</div>
              <div className='splash-footer-section-link'>Security</div>
              <div className='splash-footer-section-link'>Safety Tips</div>
            </div>
          </div>
          <div className='splash-footer-section'>
            <div className='splash-footer-section-title'>FOLLOW</div>
            <div className='splash-footer-section-links'>
              <div className='splash-footer-section-link'>Blog</div>
              <div className='splash-footer-section-link'>Tech Blog</div>
              <div className='splash-footer-section-link'>Facebook</div>
              <div className='splash-footer-section-link'>Instagram</div>
              <div className='splash-footer-section-link'>Twitter</div>
            </div>
          </div>
          <div className='splash-footer-section'>
            <div className='splash-footer-section-title'>SPECIAL</div>
            <div className='splash-footer-section-links'>
              <div className='splash-footer-section-link'>Vegetarian Dating</div>
              <div className='splash-footer-section-link'>Redeem Promotion</div>
              <div className='splash-footer-section-link'>Download App</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;