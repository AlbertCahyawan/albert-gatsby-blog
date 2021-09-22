import React from "react"  
import styled from "styled-components" 
import { Helmet } from 'react-helmet' 
import Sidebar from "./sidebar"
import { connect } from "react-redux" 
// import {PageProps} from 'gatsby'

function Layout({ children } ){   

    return (
        <Wrapper>
             <Helmet> 
                <title>Albert Cahyawan Blog</title> 
            </Helmet> 
            <Sidebar/>
            <Content> 
                {children}
            </Content> 
            
        </Wrapper> 
    )
}

const Wrapper = styled.main`
    position: relative;
    color: "#232129";
    margin: 0 24px; 
`;
const Content = styled.div`
    display: flex;
    position: relative;
    padding: 16px;
    min-height: 50vh;
`;
 

 
export default connect(null)(Layout) 

