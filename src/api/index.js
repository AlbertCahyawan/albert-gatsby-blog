const blogApi = "https://albert-cahyawan.herokuapp.com/blog"

async function fetchBlogData (){ 
    const data = await fetch(blogApi)
    .then(response => response.json())
    .then(data =>  {
        return data.blogData
    }).catch(error => {
        console.error(error);
        return "error"
    }); 
    return await data
}


export {fetchBlogData}