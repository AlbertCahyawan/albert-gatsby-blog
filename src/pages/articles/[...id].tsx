import React,{useEffect}  from "react" 
import {  navigate, Link } from "gatsby"  
import {connect} from 'react-redux'  
import styled from "styled-components" 

interface BDataType {
    title: string;
    date: string; 
}

function Articles({blogData,params}) { 
    const id:string = params.id; 
    const hasdata:boolean = blogData.hasOwnProperty(id)    
    useEffect( ()=>{
        if(!hasdata){
            navigate('/')
        }else{
            document.getElementById(`articles-content-data`).innerHTML = blogData[id].content ; 
        }
    }, [hasdata,id,blogData] )
    const bData:BDataType = blogData[id]  

    return ( 
        <Wrapper>
            <Link to="/"><Exit>return</Exit></Link>  
            {(hasdata)? 
            <div>
                <Header> 
                    <Title> {bData.title}</Title>
                </Header>
                <Content id="articles-content-data"></Content> 
                <Date>
                    Published on {bData.date}
                </Date>  
            </div>
            : '' 
            } 
            <Footer>front-end developer. S.Kom of Computer Science</Footer> 
        </Wrapper>  
    )
} 

const Wrapper = styled.div`  
    max-width: 900px;
    margin: 0 auto;  
`;
const Exit = styled.div` 
    position: absolute;
    display: flex;
    top: 20px;
    left: 20px;
    height: 30px;
    width: 60px;
    border: 1px solid black;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;
const Header = styled.div` 
    text-align: center;
`;
const Title = styled.h2` 
    display: inline-block;
    font-size: var(--font-xxl);
`;
const Content = styled.div` 
    white-space: pre-line;
`;
const Date = styled.div` 
    margin: 24px 0;
    font-size: var(--font-md);
    display: inline-block;
    color: #b6b6b6;
`;
const Footer = styled.div` 
    padding-top: 24px;
    border-top: 1px solid #b6b6b6;
`;

const mapState = state => ({
    blogData: state.reduxReducer.blogData,  
}); 

export default connect(mapState)(Articles) 
 