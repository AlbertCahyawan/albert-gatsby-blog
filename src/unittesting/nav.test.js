import * as React from "react"
import { fireEvent, render } from "@testing-library/react" 
import renderer from "react-test-renderer"
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

   const Title = () => <Nav />
   test("Displays the correct title", () => {
     const { getByTestId } = render(<Title />)
     // Assertion 
     expect(getByTestId("blog-title")).toHaveTextContent("Blog")
     // --> Test will pass
   }) 

   it("renders correctly", () => { 
    const tree = renderer.create(<Nav bdata={blogData} />).toJSON()
    expect(tree).toMatchSnapshot() 

  })
})


 
