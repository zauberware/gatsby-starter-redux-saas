import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import Header from "../Header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header siteTitle="Seitentitel" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})