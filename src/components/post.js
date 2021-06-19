import React from "react" 
import {Link} from 'gatsby' 
import styled from "styled-components"  
import sanitizeHtml from 'sanitize-html';
 
function Post({data,id}) {    
  return ( 
    <Container > 
        <Header> 
        <Link to={`/articles/${id}`} id={`post-${id}`}><Title> {data.title}</Title></Link>  <Date>{data.date}</Date> 
        </Header> 
        <Content id={`blog-content-${id}`} dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.content) }} />   
        <Link to={`/articles/${id}`}>Read more</Link>
    </Container> 
  )
} 

const Container = styled.div`
  position: relative;
`;
const Header = styled.div`
  &::after{
    position: absolute;
    content: "";
    bottom: 20px;
    left: 0px;
    background: linear-gradient(rgba(255, 255, 255, 0), white);
    width: 100vw;
    height: 50px;
    z-index: 1; 
  }
`;
const Content = styled.div`
  position: relative;
  max-height: 80px;
  overflow: hidden;
  margin-bottom: 16px;
  div{
    margin-bottom: 16px;
  }
`;
const Title = styled.h2`
  display: inline-block;
  font-size: ${props => props.theme.fontXxs};
`;
const Date = styled.span`
  font-size: ${props => props.theme.fontXxs} ;
  display: inline-block;
  color: #b6b6b6;
`; 

export default Post 

