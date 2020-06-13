import React, { useEffect, useState } from 'react';

const ComingSoon = props => {
  const calculateTimeLeft = date => {
    const difference = new Date(date) - new Date();
    let timeLeft = {};

    if(difference > 0){
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };
  
  const setDisplayOptions = component => {
    let options = {};
    switch(component){
      case '/discover':
        options = {
          titleClass: 'coming-soon-header-discover',
          imgClass: 'csc-discover',
          bottomBorder: 'csc-discover-border',
          date: '2020/08/02'
        };
        return options;
      case '/search':
        options = {
          titleClass: 'coming-soon-header-search',
          imgClass: 'csc-search',
          bottomBorder: 'csc-search-border',
          date: '2020/09/02'
        };
        return options;
      case '/who-likes-you':
        options = {
          titleClass: 'coming-soon-header-likes',
          imgClass: 'csc-likes',
          bottomBorder: 'csc-likes-border',
          date: '2020/07/02'
        };
        return options;
      default:
        return '';
    }
  };
  const displayOptions = setDisplayOptions(props.history.location.pathname);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(displayOptions.date));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(displayOptions.date));
    }, 1000);
  });
  
  return <div className={`coming-soon-container ${displayOptions.imgClass}`}>
    <div className='coming-soon'>
      <p className={displayOptions.titleClass}>coming soon</p>
      <div className='coming-soon-countdown'>
        <div className={`coming-soon-countdown-time ${displayOptions.bottomBorder}`}>
          <p>{timeLeft.days}</p>
          <p className='coming-soon-countdown-increment'>DAYS</p>
        </div>
        <div className={`coming-soon-countdown-time ${displayOptions.bottomBorder}`}>
          <p>{timeLeft.hours}</p>
          <p className='coming-soon-countdown-increment'>HOURS</p>
        </div>
        <div className={`coming-soon-countdown-time ${displayOptions.bottomBorder}`}>
          <p>{timeLeft.minutes}</p>
          <p className='coming-soon-countdown-increment'>MINUTES</p>
        </div>
        <div className={`coming-soon-countdown-time ${displayOptions.bottomBorder}`}>
          <p>{timeLeft.seconds}</p>
          <p className='coming-soon-countdown-increment'>SECONDS</p>
        </div>
      </div>
    </div>
  </div>
};

export default ComingSoon;