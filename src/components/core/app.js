import React,{}  from "react" 
import blogData  from "../../data/blog"
import { connect } from "react-redux"
import {setBlogData,setDataLoaded}  from '../../store/reduxSlice';  
import '../../assets/css/general.scss'   
import '../../assets/css/core.scss'  

// for different type of store
// import {setBlogData,setDataLoaded}  from '../../store2/actions/postActions';   

function setDefault (props){
    let myPromise = new Promise(function(myResolve, myReject) {
        props.setBlogData(blogData); 
        myResolve("OK"); 
    });
    myPromise.then(
        props.setDataLoaded()
    )
}

function App(props){ 
    if(!props.dataLoaded){
        setDefault(props)
    }
    return(
        <div>
            {   (props.dataLoaded) ?
                props.children:'...'
            }
        </div>
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

 
