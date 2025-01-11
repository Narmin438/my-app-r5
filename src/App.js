import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import dice1 from './imgs/dice (1).png';
import dice2 from './imgs/dice (2).png';
import dice3 from './imgs/dice (3).png';
import dice4 from './imgs/dice (4).png';
import dice5 from './imgs/dice (5).png';
import dice6 from './imgs/dice.png';

function App() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDice, setCurrentDice] = useState(diceImages[0]);

  const funcClick = () => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    setCurrentDice(diceImages[randomIndex]);
  };
  return (
    <div>
        <img src={currentDice} alt="dice" className="dice" onClick={funcClick} />
    </div>
  );
}

export default App;