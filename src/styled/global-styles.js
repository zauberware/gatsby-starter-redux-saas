import React, { Fragment } from 'react'
import { css, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { themeGet } from 'styled-system'

const GlobalStyle = createGlobalStyle(props => css`
  ${styledNormalize}
  
  body {
    font-size: 16px;
    font-family: ${props.theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
    overflow-x: hidden;
    width: 100%;
  }

  a{
    color: ${themeGet('colors.primary')};
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }

`)
export default () => (
  <Fragment>
    <GlobalStyle />
  </Fragment>
)
