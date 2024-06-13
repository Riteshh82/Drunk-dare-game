import React, { useState } from 'react';

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

const Card = ({ text, styleClass, onClick }) => {
  const [animate, setAnimate] = useState(false);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    // Define the keyframes and their respective times for matching vibration
    const keyframes = [
      { time: 0, transform: 'rotate(0deg) scale(1)' },
      { time: 0.25, transform: 'rotate(10deg) scale(1.1)' },
      { time: 0.5, transform: 'rotate(-10deg) scale(1.1)' },
      { time: 0.75, transform: 'rotate(10deg) scale(1.1)' },
    ];

    // Calculate the total animation duration
    const animationDuration = 500; // in milliseconds

    // Calculate vibration times based on keyframe times
    const vibrationTimes = keyframes.map(({ time }) => time * animationDuration);

    // Trigger vibration at each specified time
    if (navigator.vibrate) {
      vibrationTimes.forEach(time => {
        setTimeout(() => {
          navigator.vibrate(50); // Vibrate for 50ms at each keyframe time
        }, time);
      });
    }

    // Apply animation class and trigger onClick after animation duration
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      onClick();
    }, animationDuration);
  };

  return (
    <div 
      className={`absolute w-64 h-96 flex items-center justify-center transition-transform transform-gpu ${styleClass} cursor-pointer ${animate ? 'animate-shuffle' : ''}`}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 ${randomColor} text-white p-8 m-4 rounded-xl shadow-2xl flex items-center justify-center transform rotate-3`}>
        <p className="text-center text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
