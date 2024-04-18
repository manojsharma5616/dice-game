import React, { useState } from 'react'
import styled from 'styled-components'

export default function RoleDice({currentDice,roleDice}) {
    const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .dice img{
        height: 200px;
        width: 200px;
        cursor: pointer;
    }
    p{
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
    }
    `;
    // const [currentDice,setCurrentDice]=useState(1);
    // const generateRandomNumber=(min,max)=>{
    //     // console.log(Math.floor(Math.random() * (max-min)+min));
    //     return Math.floor(Math.random() * (max-min)+min);
    // }
    // const roleDice=()=>{
    //     const randomNumber=generateRandomNumber(1,7);
    //     setCurrentDice(randomNumber);
    // }

    return (
        <DiceContainer>
            {/* <div className='dice' onClick={()=>generateRandomNumber(1,7)}> */}
            <div className='dice' onClick={roleDice}>
                {/* <img src="./images/dice_1.png" alt="dice_1" /> */}
                <img src={`./images/dice_${currentDice}.png`} alt="dice_1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}
