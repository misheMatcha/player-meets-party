import React from 'react';

const Splash = props => {
  return(
    <div className="splash">
      <div className="splash-content">
        <div className="splash-hero">
          <div className="splash-hero-image hero-image-hands"/>
          <div className="splash-hero-image hero-image-facepaint"/>
          <div className="splash-hero-image hero-image-rose"/>
          <div className="splash-hero-image hero-image-couch"/>
          <div className="splash-hero-image hero-image-eyemasks"/>
        </div>
        <div className="splash-details">
          <div className="splash-header">Dating deserves better</div>
          <div className="splash-top">On Player Meets Party, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.</div>
          <div className="splash-join">Join Player Meets Party</div>
        </div>
      </div>
      <div className="splash-footer">
        footer
      </div>
    </div>
  );
};

export default Splash;