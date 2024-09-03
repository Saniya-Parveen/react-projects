import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import PlayGame from './components/PlayGame'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true)
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
 

  return (
    <>
    {
      isGameStarted ? <PlayGame/> : <StartGame toggle={toggleGamePlay}/>
    }
      
    </>
  )
}

export default App
