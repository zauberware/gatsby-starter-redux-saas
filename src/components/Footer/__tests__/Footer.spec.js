import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Footer from '../Footer'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      generalJson: {
        footer: {
          elements: [
            {
              headline: 'Home',
              text: 'A text in the footer',
            },
            {
              headline: 'Contact',
              text: 'A text in the footer',
            }
          ]
        }
      },
    })
  )
})

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})