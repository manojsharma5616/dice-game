import styled from 'styled-components'
import StartGame from './components/StartGame';
import { useState } from 'react';
import GameStarted from './components/GameStarted';
function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted(prev=>!prev);
  }
  return (
    <>
    {isGameStarted?<GameStarted/>:<StartGame toggle={toggleGamePlay}/>}
    {/* <StartGame></StartGame> */}
    {/* <GameStarted></GameStarted> */}
    </>
  );
}

export default App;
