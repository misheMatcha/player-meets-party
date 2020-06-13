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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft('12-02-2020'));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft('12-02-2020'));
    }, 1000);
  });
  
  return <div className='coming-soon-container'>
    <div className='coming-soon'>
      <p className='coming-soon-header'>Coming soon</p>
      <div className='coming-soon-countdown'>
        <div className='coming-soon-countdown-time'>
          <p>{timeLeft.days}</p>
          <p className='coming-soon-countdown-increment'>DAYS</p>
        </div>
        <div className='coming-soon-countdown-time'>
          <p>{timeLeft.hours}</p>
          <p className='coming-soon-countdown-increment'>HOURS</p>
        </div>
        <div className='coming-soon-countdown-time'>
          <p>{timeLeft.minutes}</p>
          <p className='coming-soon-countdown-increment'>MINUTES</p>
        </div>
        <div className='coming-soon-countdown-time'>
          <p>{timeLeft.seconds}</p>
          <p className='coming-soon-countdown-increment'>SECONDS</p>
        </div>
      </div>
    </div>
  </div>
};

export default ComingSoon;