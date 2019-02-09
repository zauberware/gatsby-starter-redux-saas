import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import Hero from "../Hero"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      heroJson: {
        displayTitle: 'Display title',
        subTitle: 'Subtitle',
      },
    })
  )
})

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Hero />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})