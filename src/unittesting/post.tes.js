import * as React from "react" 
import Post from '../components/post'
import { render } from "@testing-library/react" 

const blogData =[
  { 
    title: 'Hello, World!',
    date: '2 Feb 2021',
    content: `<div>hello Content</div>` 
  }
]

describe(`Post`, () => { 
  it(`check Title`, () => {   
    const { getByText } = render(  
      <Post data={blogData[0]} id={0} /> 
    );
    const content = getByText(/Hello, World!/i)
    expect(content).toBeInTheDocument()
  })
  it(`check Date`, () => {   
    const { getByText } = render(  
      <Post data={blogData[0]} id={0} /> 
    );
    const content = getByText(/2 Feb 2021/i)
    expect(content).toBeInTheDocument()
  })
  it(`check content`, () => {   
    const { getByText } = render(  
      <Post data={blogData[0]} id={0} /> 
    );
    const content = getByText(/hello Content/i)
    expect(content).toBeInTheDocument()
  })
 
}) 


 
