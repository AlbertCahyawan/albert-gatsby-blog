import * as React from "react" 
import NotFoundPage from '../pages/404'
import { render } from './test-utils.js.js' 

const blogData =[
  { 
    title: '',
    date: '2 Feb 202Hello, World!1',
    content: `<div>hello Content</div>` 
  }
]

describe(`404`, () => {
  it(`test 404`, () => {  
    const { getByText } = render(  
      <NotFoundPage/>, { initialState: { blogData , dataLoaded:false } }
    );

    const content = getByText(/404/i)
    expect(content).toBeInTheDocument()
  })
 
})


 
