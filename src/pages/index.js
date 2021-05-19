import React ,{useEffect}  from "react"
import Layout from '../components/core/layout'
import '../assets/css/homepage.scss' 
import {Link} from 'gatsby'
import { connect } from 'react-redux' 
import {useSelector } from 'react-redux'
import {data} from '../store/reduxSlice'
 

function IndexApp() {   
  const blogData = useSelector(data);
  
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
      <div className="blog">    

        {blogData.map((data,id)=>(
          <div key={id} className="blog-container"> 
            <div className="blog-header"> 
              <Link to={`/articles/${id}`}><h2 className="title"> {data.title}</h2></Link>  <span className="date">{data.date}</span> 
            </div> 
            <div className="blog-content" id={`blog-content-${id}`}>  
            </div>
            <Link to={`/articles/${id}`}>Read more</Link>
          </div> 
        ))}  

        {/* <div className="blog-direction">
          <div className="prev">Prev</div>
          <div className="next">Next</div>
        </div> */}
      </div>
        
    </Layout>
    
  )
} 


export default connect( null)(IndexApp) 

