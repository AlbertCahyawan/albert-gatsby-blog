import React, {useState} from "react" 
import { Helmet } from 'react-helmet'
import { Link  } from "gatsby" 

import '../../assets/css/core.scss' 
import '../../assets/css/general.scss'   
import blogData from "../../data/blog.js"

export default function Layout({data, children, bodyClass, isHome}){ 
    const [showPostTitle,setShowPostTitle] = useState(true);
    return (
        <main className="layout-page">
             <Helmet>
                {/* <html lang={site.lang} /> */}
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                {/* <body className={bodyClass} /> */}
                <title>Albert Cahyawan Blog</title> 
            </Helmet>
            <div className="navbar">
                <div className="profile"> 
                    <img src="https://albertcahyawan.com/assets/img/profile.jpg" alt="profile"></img>
                </div>
                <h1>Albert Cahyawan</h1>
                <p className="profile-description">front-end developer. S.Kom of Computer Science</p>
                <ul className="profile-link">
                    <li className={(false)? 'page-selected' : ''}> <a href="https://albertcahyawan.com/">Home</a> </li> 
                    <li className={(showPostTitle)? 'toggle-arrow nomargin page-selected toggle-arrow-active' : 'toggle-arrow nomargin page-selected'} onClick={()=>setShowPostTitle(!showPostTitle)}> <Link to="/">Blog</Link> </li>
                    <div className="sub-profile-link-container"> 
                        <ul className={(showPostTitle)?'sub-profile-link show':'sub-profile-link hide'} >
                            {blogData.map( (data,id) => (
                                <li key={id}>
                                    <Link to={`/articles/${id}`}> {data.title}</Link> 
                                </li> 
                            ))}  
                        </ul>  
                    </div>
                   
                    {/* <li> <Link to="current">current</Link> </li>  */} 
                </ul> 

                <ul className="social-media">
                   <a href="https://www.facebook.com/albert.Cahyawan"><li className="fb"></li> </a>
                   <a href="https://twitter.com/albertzx12"><li className="twitter"></li> </a>
                   <a href="https://github.com/AlbertCahyawan"><li className="git"></li> </a>
                   <a href="https://www.linkedin.com/in/albert-cahyawan-b36756b9/"><li className="linkedin"></li> </a> 
                </ul>


                <div className="footer"> 
                    <p className="copyright-text">&copy; 2020 Albert Cahyawan - All Rights Reserved</p>  
                </div>
            </div> 
            <div className="view-port"> 
                {children}
            </div>

            
        </main> 
    )
}