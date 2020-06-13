import React, { useEffect, useState } from 'react';

const ComingSoon = props => {
  useEffect(() => {
  });

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

  return <div className='coming-soon'>
    <p>We can't wait for you to see this feature!</p>
    <div className='coming-soon-countdown'>
      <div className='coming-soon-countdown-times'>
        <p>{timeLeft.days}</p>
        <p>days</p>
      </div>
      <div className='coming-soon-countdown-times'>
        <p>{timeLeft.hours}</p>
        <p>hrs</p>
      </div>
      <div className='coming-soon-countdown-times'>
        <p>{timeLeft.minutes}</p>
        <p>min</p>
      </div>
      <div className='coming-soon-countdown-times'>
        <p>{timeLeft.seconds}</p>
        <p>sec</p>
      </div>
    </div>
  </div>
};

export default ComingSoon;