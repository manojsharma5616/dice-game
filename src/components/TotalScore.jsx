import React from 'react'
import styled from 'styled-components'
export default function TotalScore({score}) {
    const ScoreContainer = styled.div`
    max-width: 150px;
    text-align: center;
   h1{
    font-size: 100px;
    line-height: 100px;
    font-weight: 500px;
   }
   p{
    font-size: 24px;
    line-height: 36px;
    font-weight: 500px;
    white-space: nowrap;
   }
    `
    return (
        <ScoreContainer>
            {/* <h1>0</h1> */}
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}
