import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

export default function PlayGame() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber){
            setError("You have not selected any number")
        return
        }
      

        const randomNumber = generateRandomNumber(1, 7)

        setCurrentDice((prev) => randomNumber);

        if(selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2 )
        }
        setSelectedNumber(undefined)
    }
    const resetScore = () => {
        setScore(0);
    }
  return (
    <main className='main-top-section'>
        <div className='top-section'>
            <TotalScore score={score}/>
            <NumberSelector 
            error={error} 
            setError={setError} 
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className="btns">
            <button className='reset-btn' onClick={resetScore}>Reset Score</button>
            <button 
            onClick={() => setShowRules(prev => !prev)}
            >{showRules ? "Hide" : "Show"} Rules</button>

        </div>
        {showRules && <Rules/>}

    </main>
  )
}
