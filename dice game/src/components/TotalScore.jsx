import React from 'react'

export default function ({score}) {
  return (
    <div className='score-container'>
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}
