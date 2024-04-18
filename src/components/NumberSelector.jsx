import React, { useState } from 'react'
import styled from 'styled-components'
export default function NumberSelector({ selectedNumber, setSelectedNumber, error,setError }) {
    const Box = styled.div`
    height:60px;
    width:60px;
    border: 1px solid black;
    font-size: 34px;
    font-weight: 700;
    display: grid;
    place-items: center;
    cursor: pointer;
    background-color:${(props) => (props.isSelected ? "black" : "white")};
    color:${(props) => (props.isSelected ? "white" : "black")};
    `;
    const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flexContainer{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .show_error{
        color: red;
        font-weight: 400;
        font-size: 20px;
    }
    `
    const arrayNumber = [1, 2, 3, 4, 5, 6];
    // const [selectedNumber, setSelectedNumber] = useState();
    /* console.log(selectedNumber); */

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className='show_error'>{error}</p>
            <div className='flexContainer'>
                {arrayNumber.map((value, i) => {
                    return (
                        <>
                        <Box key={i} isSelected={selectedNumber === value} onClick={()=>{numberSelectorHandler(value)}}>{value}</Box>
                        {/* <Box key={i} isSelected={selectedNumber === value} onClick={() => { setSelectedNumber(value) }}>{value}</Box> */}
                        </>
                    )
                })}
                {/* <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box> 
            <Box>6</Box> */}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}
