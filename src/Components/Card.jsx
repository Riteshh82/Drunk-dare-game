import React, { useState } from 'react';

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

const Card = ({ text, styleClass, onClick }) => {
  const [animate, setAnimate] = useState(false);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    const keyframes = [
      { time: 0, transform: 'rotate(0deg) scale(1)' },
      { time: 0.25, transform: 'rotate(10deg) scale(1.1)' },
      { time: 0.5, transform: 'rotate(-10deg) scale(1.1)' },
      { time: 0.75, transform: 'rotate(10deg) scale(1.1)' },
    ];

    const animationDuration = 500;

    const vibrationTimes = keyframes.map(({ time }) => time * animationDuration);

    if (navigator.vibrate) {
      vibrationTimes.forEach(time => {
        setTimeout(() => {
          navigator.vibrate(50);
        }, time);
      });
    }

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      onClick();
    }, animationDuration);
  };

  return (
    <div className={`absolute inset-0 flex items-center justify-center transition-transform transform-gpu ${styleClass} cursor-pointer ${animate ? 'animate-shuffle' : ''}`} onClick={handleClick} style={{ width: "100%", height: "100%", position: "relative" }}>
      <div className={`w-72 h-[27rem] ${randomColor} mt-24 text-white p-8 rounded-xl shadow-2xl flex items-center justify-center transform rotate-3 mx-auto`}>
        <p className="text-center text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
