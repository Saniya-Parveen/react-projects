

export default function RollDice({currentDice, rollDice}) {
    

    
    return (
    <div className='dice-container'>
        <div className='dices' onClick={rollDice}>
            <img src={`/images/dice/dice${currentDice}.png`} alt='dice 1'/>
        </div>
        <p>
            Click on Dice to roll
        </p>
    </div>
  )
}
