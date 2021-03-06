import React, {useState} from "react" 
import styled, { css} from "styled-components";   
import { Link  } from "gatsby"  
import { BData } from '@/types';
import PropTypes from 'prop-types';


interface propTypes {
    bdata: BData[]
}
function Nav({bdata} :propTypes ){    
    const [showPostTitle,setShowPostTitle] = useState(true);   
    return (  
        <Wrapper> 
            <PageLink selected={false} id="home"> <a href="https://albertcahyawan.com/">Home</a> </PageLink> 
            <PageLink 
                selected={true}
                toogle={true}
                show={showPostTitle}>
                <Link 
                    id="blog"
                    data-testid="blog-title"
                    to="/" 
                    onClick={()=>setShowPostTitle(!showPostTitle)}
                    aria-hidden="true" >
                    Blog
                </Link> 
            </PageLink>
            <SubContainer  > 
                <SubNav show={showPostTitle} id="blog-nav">
                    {bdata.map( (data,id) => (
                        <li key={id}>
                            <Link to={`/articles/${id}`}> {data.title}</Link> 
                        </li> 
                    ))}   
                </SubNav>  
            </SubContainer>                 
        </Wrapper>   
 
    )
}  

interface PageInterface {
    selected?:boolean,
    toogle?:boolean,
    show?:boolean,
}
interface SubNavInterface {
    show:boolean,
}

const Wrapper = styled.ul`
`; 

const PageLink = styled.li <PageInterface>` 
    margin-top: 16px;   
    &:hover{
        color: #5d93ff;
        text-decoration: underline;
    } 
    &:first-child{
        margin: 0px;  
    }     
    ${ props => props.selected && css`
        font-weight: 700;
        text-decoration: underline;
    `}; 
    ${ props => props.toogle && css`
        position: relative;
        &::after{
            width: 5px;
            height: 5px;
            content: "";
            position: absolute;
            border-top: 2px solid black;
            border-right: 2px solid black;
            transition: 0.5s ease-out 0s;
            transform: rotate( 45deg);
            top: 5px;
            left: -15px; 
            ${ props.show && css`
                transform: rotate( 135deg );
                top: 4px;
            `}; 
        }
    `};  
`; 
 
const SubContainer = styled.div`  
    overflow: hidden;   
`;

const SubNav = styled.ul <SubNavInterface>`   
    padding-top: 16px; 
    overflow: hidden;
    margin-left: 16px;
    transition: opacity .1s, .5s ease-in-out 0s;
    li{
        margin-bottom: 4px;
    }     
    transform: translateY(0px); 
    opacity: 1;
    display: block;
    ${ props => !props.show && css` 
        transform: translateY(-10rem); 
        opacity: 0;   
    `}; 
`;
 
Nav.propTypes = {
    bdata: PropTypes.array
};

Nav.defaultProps = {
    bdata: []
};

export default Nav

