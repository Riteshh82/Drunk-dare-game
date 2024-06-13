import React, { useState } from 'react';

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

const Card = ({ text, styleClass, onClick }) => {
  const [animate, setAnimate] = useState(false);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200ms
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      onClick();
    }, 500);
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
