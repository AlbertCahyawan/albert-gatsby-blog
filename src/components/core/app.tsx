import React,{}  from "react" 
import '@/assets/css/general.scss'   
import '@/assets/css/core.scss'   
import { connect, ConnectedProps } from "react-redux"
import {setBlogData,setDataLoaded}  from '@/store/reduxSlice';  
import { RootState } from "@/store";
import { ThemeProvider } from "styled-components";
import Loading from "@/components/loading";
import { fetchBlogData } from "../../api"
import {BData} from "@/types"
// for different type of store
// import {setBlogData,setDataLoaded}  from '@/store2/actions/postActions';   
// import { RootState } from "@/store2";

const theme = {
    fontXxs: 8,
    fontXs: 10,
    fontSm: 12,
    fontMd: 14,
    fontLg: 16,
    fontXl: 18,
    fontXxl: 20,
};

const mapState = (state: RootState) => ({ 
    blogs: state.reduxReducer.blogData,
    dataLoaded: state.reduxReducer.dataLoaded,
}); 
const mapDispatchToProps =  { 
    setBlogData,
    setDataLoaded
};
const connector = connect(mapState, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>
interface proptypes extends PropsFromRedux{ 
    children:any, 
}

function setDefault (props:proptypes){ 
    fetchBlogData().then( res => { 
        if(res === "error"){
            console.log('error')
        }else{ 
            props.setBlogData(res)
        }    
    }).catch(error => {
        console.error(error);
        return "error"
    }); 
}

function App(props:proptypes){  
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
 


export default connector(App) 

 
