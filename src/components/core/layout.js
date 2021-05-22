import React from "react"  
import { Helmet } from 'react-helmet' 
import Sidebar from "./sidebar"
import styled from "styled-components"

function Layout({ children }){   
    return (
        <Wrapper>
             <Helmet>
                {/* <html lang={site.lang} /> */}
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                {/* <body className={bodyClass} /> */}
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
`;
 
export default Layout;

