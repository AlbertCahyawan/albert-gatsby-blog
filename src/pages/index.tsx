import React from "react"
import Layout from '@/components/core/layout' 
import { connect } from 'react-redux' 
import {useSelector } from 'react-redux'
import {data} from '@/store/reduxSlice'
import styled from "styled-components" 
import Loading from '@/components/loading' 
import Post from '@/components/post'
interface BData{
  id: number,
  title: string,
  date: string,
  Content: string, 
  map:any,
  length: any,
  forEach: any,
}

function IndexApp() {   
  const blogData:BData = useSelector(data);  
  return (

    <Layout>  
      <Wrapper className="blog">    
        { 
        (blogData.length > 0 ) ? 
          blogData.map((data,id)=>(
            <Post data={data} id={id} key={id} />
          )) :
          <Loading/> 
        }
        

        {/* <div className="blog-direction">
          <div className="prev">Prev</div>
          <div className="next">Next</div>
        </div> */}
      </Wrapper>
        
    </Layout>
    
  )
} 

const Wrapper = styled.div``; 

export default connect( null)(IndexApp) 

