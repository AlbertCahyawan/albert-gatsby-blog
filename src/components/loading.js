import React,{}  from "react"   
import styled, { keyframes } from "styled-components"; 
import spinner from '../assets/img/spinner.png'

function Loading(){  
    return(
        <Wrapper>
            <Spinner/>
        </Wrapper>

    )
} 
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100px;
    height: 100px; 
`;
const Spinner = styled.div` 
    width: 100%;
    height: 100%;
    background: url(${spinner});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat; 
    animation: ${rotate} 0.8s linear infinite;
`;
 

export default Loading

 
