import React from "react";
import styled from "styled-components";
import fb from '../assets/icon/fb.svg';
import fbActive from '../assets/icon/fb-active.svg';
import twitter from '../assets/icon/twitter.svg';
import twitterActive from '../assets/icon/twitter-active.svg';
import git from '../assets/icon/git.svg';
import gitActive from '../assets/icon/git-active.svg';
import linkedin from '../assets/icon/linkedin.svg';
import linkedinActive from '../assets/icon/linkedin-active.svg';

function SocialMedia(){     
    return (  
        <Wrapper className="social-media">
            <a href="https://www.facebook.com/albert.Cahyawan"> <FB/> </a>
            <a href="https://twitter.com/albertzx12"> <Twitter/> </a>
            <a href="https://github.com/AlbertCahyawan"> <Git/> </a>
            <a href="https://www.linkedin.com/in/albert-cahyawan-b36756b9/"> <LinkedIn/> </a> 
        </Wrapper>  
    )
}  
const Wrapper = styled.ul` 
    display: flex;
    flex-direction: row;
    li{
        display: flex;
        margin-right:16px; 
        border: 1px solid #ebebeb;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-size: 12px; 
        
        background-size: 12px ;
        background-position: center;
        background-repeat: no-repeat;
    }   
`;

const FB = styled.li`  
    background: url(${fb});  
    .fb:hover{
        background: url(${fbActive});    
     } 
`;

const Twitter = styled.li`  
    background: url(${twitter});  
    .fb:hover{
        background: url(${twitterActive});    
     } 
`;

const Git = styled.li`  
    background: url(${git});  
    .fb:hover{
        background: url(${gitActive});    
     } 
`;

const LinkedIn = styled.li`  
    background: url(${linkedin});  
    .fb:hover{
        background: url(${linkedinActive});    
     } 
`;
 
 

export default SocialMedia

