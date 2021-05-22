import React ,{useEffect}  from "react"
import Layout from '../components/core/layout'
import {Link} from 'gatsby'
import { connect } from 'react-redux' 
import {useSelector } from 'react-redux'
import {data} from '../store/reduxSlice'
import styled from "styled-components" 


interface BData{
  id: number,
  title: string,
  date: string,
  Content: string, 
  map:any
}
function IndexApp() {   
  const blogData:BData = useSelector(data);
  
  // function sanitize(strings, ...values) {
  //     return strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`);
  // } 

  useEffect( ()=>{
    const FillContent = () => {
      for(let key in  blogData){  
        const content = blogData[key].content ;
        document.getElementById(`blog-content-${key}`).innerHTML = content  
      }
    }
    FillContent(); 
  },[blogData] )  
  return (

    <Layout>  
      <Wrapper className="blog">    

        {blogData.map((data,id)=>(
          <Container key={id}> 
            <Header> 
              <Link to={`/articles/${id}`}><Title> {data.title}</Title></Link>  <Date>{data.date}</Date> 
            </Header> 
            <Content id={`blog-content-${id}`} />   
            <Link to={`/articles/${id}`}>Read more</Link>
          </Container> 
        ))}  

        {/* <div className="blog-direction">
          <div className="prev">Prev</div>
          <div className="next">Next</div>
        </div> */}
      </Wrapper>
        
    </Layout>
    
  )
} 

const Wrapper = styled.div``;
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
    height: 35px;
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

export default connect( null)(IndexApp) 

