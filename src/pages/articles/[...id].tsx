import React,{useEffect}  from "react" 
import { navigate, Link , PageProps} from "gatsby"  
import {connect} from 'react-redux'  
import sanitizeHtml from 'sanitize-html';
import styled from "styled-components"  
import { BData } from '@/types' 
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

interface propType {
    blogData: any ,
    id: string
}
 
function Articles({blogData , id }: propType ) {  
    const hasdata:boolean = blogData.hasOwnProperty(id)    
    useEffect( ()=>{ 
        if(!hasdata && blogData > 0){
            navigate('/')
        } 
    }, [hasdata, blogData] ) 
    const bData: BData = blogData[id]  

    return ( 
        <Wrapper>
            <Link to="/" id="blog-exit"><Exit>return</Exit></Link>  
            {(hasdata)? 
            <div>
                <Header> 
                    <Title> {bData.title}</Title>
                </Header>
                <Content id="articles-content-data" dangerouslySetInnerHTML={{__html: sanitizeHtml(blogData[id].content ) }} ></Content> 
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

// fix state any later on
interface articlesState {
    reduxReducer: {blogData: BData[] };   
}

const mapState = (state: articlesState) => ({
    blogData: state.reduxReducer.blogData,  
}); 

export default connect(mapState)(Articles) 
 