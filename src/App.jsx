import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import dares from './data/dares';

const App = () => {
  const [currentDareIndex, setCurrentDareIndex] = useState(0);
  const [shuffledDares, setShuffledDares] = useState([]);

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle dares on component mount
  useEffect(() => {
    setShuffledDares(shuffleArray([...dares]));
  }, []);

  const getRandomDare = () => {
    // If we have displayed all dares, reshuffle
    if (currentDareIndex === shuffledDares.length) {
      setShuffledDares(shuffleArray([...dares]));
      setCurrentDareIndex(0);
    }

    // Get current dare from shuffled list
    setCurrentDareIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-5xl font-bold mb-8 text-green-700">PegBana</h1>
      <div className="relative w-56 h-80 mb-8">
        <Card 
          text={shuffledDares[currentDareIndex] || "Tap for a Dare"} 
          styleClass="z-20 transform scale-100"
          onClick={getRandomDare}
        />
      </div>
    </div>
  );
};

export default App;
