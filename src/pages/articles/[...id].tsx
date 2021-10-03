import React,{useEffect}  from "react" 
import { navigate, Link , PageProps} from "gatsby"  
import {connect, ConnectedProps} from 'react-redux'  
import sanitizeHtml from 'sanitize-html';
import styled from "styled-components"  
import { BData } from '@/types' 
import { RootState } from "@/store";
// import { RootState } from "@/store2";

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


const mapState = (state: RootState) => ({ 
    blogData: state.reduxReducer.blogData, 
});  

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector> 
interface propType extends PropsFromRedux{ 
    id: string
}
 
function Articles({blogData , id }: propType ) {  
    const  num = +id
    const hasdata:boolean = blogData.hasOwnProperty(num)  
    console.log(blogData)  
    useEffect( ()=>{ 
        if(!hasdata && blogData.length > 0){
            navigate('/')
        } 
    }, [hasdata, blogData] ) 
    const bData = blogData[num]  

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

export default connector(Articles) 
 