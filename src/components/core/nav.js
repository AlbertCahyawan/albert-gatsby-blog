import React, {useState} from "react" 
import styled, { css} from "styled-components";   
import { Link  } from "gatsby"  
import PropTypes from 'prop-types';


function Nav({bdata} ){    
    const [showPostTitle,setShowPostTitle] = useState(true);   
    return (  
        <Wrapper> 
            <PageLink selected={false} > <a href="https://albertcahyawan.com/">Home</a> </PageLink> 
            <PageLink 
                selected={true}
                toogle={true}
                show={showPostTitle}>
                <Link 
                    to="/" 
                    onClick={()=>setShowPostTitle(!showPostTitle)}
                    aria-hidden="true" >
                    Blog
                </Link> 
            </PageLink>
            <SubContainer  > 
                <SubNav show={showPostTitle}>
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


const Wrapper = styled.ul`
`; 

const PageLink = styled.li` 
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

const SubNav = styled.ul`   
    padding-top: 16px; 
    overflow: hidden;
    margin-left: 16px;
    transition: .5s ease-in-out 0s;
    li{
        margin-bottom: 4px;
    }     
    transform: translateY(0px); 
    ${ props => !props.show && css` 
        transform: translateY(-10rem);
    `}; 
`;
 
Nav.propTypes = {
    bdata: PropTypes.array
};

Nav.defaultProps = {
    bdata: []
};

export default Nav

