import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice';
import { Button,OutLineButton } from '../styled_btn/Button';
import Rules from './Rules';
export default function GameStarted() {
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score,setScore]=useState(0);
    const [error,setError]=useState();
    const [showRules,setShowRules]=useState(false);
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random() * (max-min)+min);
    }
    const roleDice=()=>{
        if(!selectedNumber){
            setError("***You have not selected any number");
            return;
        }
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }
        else{
            setScore((prev)=>prev-randomNumber);
        }
        setSelectedNumber(undefined);
    }
    const resetScore=()=>{
        setScore(0);
    } 

    const MainContainer = styled.main`
    padding-top: 30px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-top: 25px;
    }
    `;
    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}></TotalScore>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}></NumberSelector>
            </div>
            {/* <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice}></RoleDice> */}
            <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
            <div className="btns">
                <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
                <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
}
