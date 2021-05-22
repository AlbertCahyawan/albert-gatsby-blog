import React from "react"  
import { connect } from "react-redux" 
import profile from '../../assets/img/profile.jpg';
import Nav from "./nav";
import SocialMedia from "../socialmedia"; 
import styled from "styled-components"; 

function Sidebar({blogData}){
    return ( 
        <Wrapper>
            <Profile> 
                <img src={profile} alt="profile"></img>
            </Profile> 
            <h1>Albert Cahyawan</h1>
            <Description>front-end developer. S.Kom of Computer Science</Description>
            <Nav bdata={blogData} /> 
            <SocialMedia/>

            <Footer> 
                <p>&copy; 2020 Albert Cahyawan - All Rights Reserved</p>  
            </Footer>
        </Wrapper>  
 
    )
}
const Wrapper = styled.div`
    position: relative;
    float: left;
    max-width: 375px;
    margin-right: 16px;
    padding: 16px;
    
    &::after{
        background: linear-gradient(180deg,#e6e6e6 0,#e6e6e6 48%,#fff);
        position: absolute;
        content: "";
        width: .0625rem;
        height: 33.75rem;
        top: 16px;
        right: -10px;
        bottom: 0;
    }
`;
const Profile = styled.div` 
    height: 75px;
    width: 75px; 
    img{
        border-radius: 50%;
        object-fit: cover;
        width: 100%;
        height: 100%; 
    }
`;
const Description = styled.p` 
    color: #888;
`; 

const Footer = styled.footer` 
    font-size: 14px;
    color: #b6b6b6;
`;  
 

const mapState = state => ({
    blogData: state.reduxReducer.blogData,  
}); 

export default connect(mapState)(Sidebar) 

