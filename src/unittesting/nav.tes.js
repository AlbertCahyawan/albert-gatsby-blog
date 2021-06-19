import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react" 
import Nav from '../components/core/nav' 

const blogData =[
  { 
    title: 'Hello, World!',
    date: '2 Feb 2021',
    content: `<div>hello Content</div>` 
  }
]
describe(`Navigation`, () => {
  it(`renders siteTitle link`, () => { 
    const { getByText } = render( <Nav bdata={blogData} /> )
    const title = getByText(blogData[0].title)
    expect(title).toBeInTheDocument()
  })

  const Title = () => <Nav bdata={blogData} />
  test("Displays the correct title", () => {
     const { getByTestId,getByText } = render(<Title />)
     // Assertion  
     let test = getByText('Hello, World!');
     expect(test).toBeInTheDocument()
     fireEvent.click(getByText("Blog"))
     expect(getByTestId("blog-title")).toHaveTextContent("Hello")   
  })  

  test('testing integration', async () => {

    // finishLoading is a utility offered by the test utils for my own app
  
    const {finishLoading} = render(<Nav bdata={blogData} />)
  
    // wait for the app to finish loading the mocked requests
  
    await finishLoading
  
    fireEvent.click(screen.getByText(/blog/i)) 
    
    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
  
  })
})