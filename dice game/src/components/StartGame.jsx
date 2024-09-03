import React from 'react'

export default function StartGame({toggle}) {
  return (
    <div className='container'>
        <div className='dices-img'>
            <img src='/images/dices.png' alt='dices image'/>

        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>

    </div>
  )
}
