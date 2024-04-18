import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled_btn/Button';
export default function StartGame({toggle}) {
    const Container = styled.div`
    display: flex;
    margin: 0 auto;
    min-width: 1100px;
    align-items: center;
    justify-content: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }     
    }`;
    // const Button = styled.button`
    // background-color:black;
    // color: white;
    // padding: 10px 18px;
    // font-size: 16px;
    // border: 1px solid transparent;
    // border-radius:5px;
    // min-width: 220px;
    // cursor: pointer;
    // transition: 0.4s background ease-in;
    // &:hover{
    //     background-color: white;
    //     border: 1px solid black;
    //     color: black;
    //     transition: 0.3s background ease-in;
    // }
    // `
    return (
        <Container>
            <div>
                <img src="./images/dices.png" alt="dice image" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                {/* <Button onClick={toggle}>Play Now</Button> */}
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}
