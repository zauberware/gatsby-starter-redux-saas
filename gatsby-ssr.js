/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from "./wrap-with-provider"
import React from 'react'

export const wrapRootElement = wrapWithProvider

export const onRenderBody = ({ setPostBodyComponents }, options) => {
  return setPostBodyComponents([
    <script
      src="https://js.stripe.com/v3"
      async={true}
    />
  ])
}
