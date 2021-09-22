const blogApi = "https://albert-cahyawan.herokuapp.com/blog"
// something wrong with build ssr it work but seem problematic needed to fix later on 
async function fetchBlogData (){ 
    const data = await fetch(blogApi)
    .then(response => response.json())
    .then(data =>  { 
        return data
    }).catch(error => {
        console.error(error);
        return "error"
    }); 
    return await data
}


export {fetchBlogData}