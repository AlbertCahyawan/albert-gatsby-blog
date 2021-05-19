import React from "react" 
import { Helmet } from 'react-helmet' 
import Navbar from "./navbar"
 
function Layout({ children }){   
    return (
        <main className="layout-page">
             <Helmet>
                {/* <html lang={site.lang} /> */}
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                {/* <body className={bodyClass} /> */}
                <title>Albert Cahyawan Blog</title> 
            </Helmet> 
            <Navbar/>
            <div className="view-port"> 
                {children}
            </div>

            
        </main> 
    )
}

 

export default Layout

