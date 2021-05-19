import React,{useEffect}  from "react" 
import '../../assets/css/articles.scss' 
import {  navigate, Link } from "gatsby"  
import {connect} from 'react-redux'  

function Articles({blogData,params}) { 
    const {id} = params;
    const hasdata = blogData.hasOwnProperty(id)    
    useEffect( ()=>{
        if(!hasdata){
            navigate('/')
        }else{
            document.getElementById(`articles-content-data`).innerHTML = blogData[id].content ; 
        }
    }, [hasdata,id,blogData] )
    const bData = blogData[id]  

    return ( 
        <div className="articles">
            <Link to="/"><div className="exit">return</div></Link>  
            {(hasdata)? 
            <div>
                <div className="articles-header"> 
                    <h2 className="title"> {bData.title}</h2>
                </div>
                <div className="articles-content" id="articles-content-data">  
                </div> 
                <div className="date">
                    Published on {bData.date}
                </div>  
            </div>
            : '' 
            } 
            <div className="articles-footer">front-end developer. S.Kom of Computer Science</div>
        </div>  
    )
}     

const mapState = state => ({
    blogData: state.reduxReducer.blogData,  
}); 

export default connect(mapState)(Articles) 
 