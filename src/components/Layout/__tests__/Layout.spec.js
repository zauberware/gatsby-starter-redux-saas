import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import Layout from "../Layout"

jest.mock('../../Header', () => ()=> <header id="mockHeader">
   mockHeader
</header>)

jest.mock('../../Footer', () => ()=> <footer id="mockFooter">
   mockFooter
</footer>)

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'Website Title',
        },
      },
    })
  )

})

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout>Some child</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})