import React,{}  from "react" 
import '@/assets/css/general.scss'   
import '@/assets/css/core.scss'   
import { connect } from "react-redux"
import {setBlogData,setDataLoaded}  from '@/store/reduxSlice';  
import { ThemeProvider } from "styled-components";
import Loading from "@/components/loading";
import { fetchBlogData } from "../../api"
// for different type of store
// import {setBlogData,setDataLoaded}  from '@/store2/actions/postActions';   

const theme = {
    fontXxs: 8,
    fontXs: 10,
    fontSm: 12,
    fontMd: 14,
    fontLg: 16,
    fontXl: 18,
    fontXxl: 20,
};

function setDefault (props){ 
    fetchBlogData().then( res => { 
        if(res === "error"){
            console.log('error')
        }else{ 
            props.setBlogData(res)
        }    
    }) 
}

function App(props){  
    if(!props.dataLoaded){ 
        setDefault(props) 
        // need to set timeout due to having script rendered before styled component
        setTimeout(()=>{
            props.setDataLoaded()
        },100)

    }
    return(
        <ThemeProvider theme={theme}>
            {   (props.dataLoaded) ?
                props.children:<Loading/>
            }
        </ThemeProvider>
    )
} 


const mapState = state => ({ 
    blogs: state.reduxReducer.blogData,
    dataLoaded: state.reduxReducer.dataLoaded,
}); 

const mapDispatchToProps =  { 
    setBlogData,
    setDataLoaded
};

export default connect(mapState,mapDispatchToProps)(App) 

 
